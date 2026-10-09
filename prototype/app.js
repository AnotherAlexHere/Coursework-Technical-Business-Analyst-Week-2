// Mock data only: no real customers, credentials or core-system calls.
const CUSTOMERS = {
  CUST1001: { name: "Alex Morgan", product: "Credit card", acct: "4821", balance: 1240.0, overdue: 184.5, due: "2026-10-01", stage: 1,
    fees: [["Minimum payment shortfall", 150.0], ["Late payment fee", 12.0], ["Interest on overdue", 22.5]] },
  CUST1002: { name: "Sam Patel", product: "Personal loan", acct: "7730", balance: 5200.0, overdue: 640.0, due: "2026-09-15", stage: 2,
    fees: [["Missed instalment", 600.0], ["Late payment fee", 20.0], ["Interest on overdue", 20.0]] },
  CUST2001: { name: "Jo Bennett", product: "Credit card", acct: "1196", balance: 980.0, overdue: 210.0, due: "2026-09-28", stage: 1, disputed: true,
    fees: [["Overdue amount", 210.0]] },
  CUST3001: { name: "Chris Lee", product: "Personal loan", acct: "5502", balance: 3100.0, overdue: 400.0, due: "2026-09-20", stage: 2, vulnerabilityFlag: true,
    fees: [["Overdue amount", 400.0]] },
  CUST4001: { name: "Dana Reid", product: "Mortgage", acct: "9017", balance: 82000.0, overdue: 900.0, due: "2026-09-01", stage: 3,
    fees: [["Overdue amount", 900.0]] }
};
const SUPPORTED = ["Credit card", "Personal loan"];
const MOCK_OTP = "123456";
const PLANS = { 1: [{ id: "A", months: 2 }, { id: "B", months: 3 }], 2: [{ id: "C", months: 3 }], 3: [] };

const gbp = n => "£" + n.toFixed(2);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Returns a routing reason or null; never assesses hardship, only detects and routes.
function routeReason(c) {
  if (!SUPPORTED.includes(c.product)) return "Unsupported product";
  if (c.disputed) return "Disputed balance";
  if (c.vulnerabilityFlag) return "Vulnerability indicator";
  return null;
}
function planOptions(c) {
  return (PLANS[c.stage] || []).map(p => ({ ...p, monthly: c.overdue / p.months }));
}

const AUDIT_KEY = "sr_audit", CASE_KEY = "sr_cases";
const read = k => JSON.parse(localStorage.getItem(k) || "[]");
function audit(actor, event, custId, detail) {
  const log = read(AUDIT_KEY);
  log.push({ ts: new Date().toISOString(), actor, event, cust: custId || "-", detail: detail || "" });
  localStorage.setItem(AUDIT_KEY, JSON.stringify(log));
}
function openCase(custId, reason) {
  const cases = read(CASE_KEY);
  const ref = "CASE-" + String(cases.length + 1001);
  cases.push({ ref, cust: custId, reason, ts: new Date().toISOString() });
  localStorage.setItem(CASE_KEY, JSON.stringify(cases));
  audit("system", "routed_to_rep", custId, reason + " " + ref);
  return ref;
}
