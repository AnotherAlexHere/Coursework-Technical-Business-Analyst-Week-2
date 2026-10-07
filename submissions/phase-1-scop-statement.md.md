# Phase 1 Scope Template

Use this to define a disciplined Smart-Recovery first release.

## In scope

To deliver a viable self-service core while maintaining strict risk controls and clear human-in-the-loop hand-offs, Phase 1 should encompass the following functional capabilities:

### Must-have
- Secure Customer Authentication & Identity Verification
    - Multi-factor authentication (MFA) and lightweight identity verification integrated with core banking credentials to allow secure access to sensitive debt and balance data.
    - Value: prerequisite for every self-service journey; without it, none of the 2,507 self-service candidates can self-serve.

- Account Balance & Arrears Display
    - Balances, overdue amounts, due dates and fee breakdowns, refreshed from the ledger via API or read view.
    - Value: removes routine balance enquiries, targeting the 12.49% of viewed accounts that have overdue balances, amounting to about 144 representative hours in the sample.

- Standardized Promise-to-Pay (P2P) Capture
    - Self-service interface enabling eligible customers to set up binding, time-bound promises to pay for immediate overdue balances, automatically updating account statuses.
    - Value: reduces manual intervention for routine overdue payments, improving collection efficiency and customer experience.

- Rules-Based Exception Routing & Representative Escalation
    - Logic-driven triage system that flags complex cases, disputed balances, vulnerability indicators, or failed self-service attempts, seamlessly routing the customer and interaction audit trail to a representative.
    - Value: ensures that only cases requiring human judgment reach representatives, optimizing their workload and maintaining service quality.

- Automated Audit Logging & Core System Ledger Sync
    - Synchronization between the self-service portal and the collections database to eliminate spreadsheet tracking, duplicate outreach, and manual status reconciliations.
    - Value: enhances data integrity, reduces operational errors, and provides a clear audit trail for compliance purposes.

- Portal Activity & Operational Outcome Reporting
    - Executive and operational dashboards tracking customer conversion, drop-off rates, settled balances, and self-service resolution success vs. representative escalation volumes.
    - Value: provides actionable insights into portal performance and operational efficiency, enabling data-driven decision-making and continuous improvement.


### Nice-to-have
- Eligibility-Engine-Driven Payment Plan Selection
    - Parameterized decision engine offering pre-approved payment plan structures (e.g., short-term split payments) based on risk tier, loan product type, and delinquency stage.
    - Value: streamlines the payment plan selection process, reducing the need for manual review and accelerating customer onboarding for eligible plans.

## Out of scope
Excluding features is as important as defining what to build.

- Hardship Assessment & Vulnerability Handling
    - The portal detects and routes vulnerability indicators but never assesses them. Hardship evaluation needs human judgement, income/expenditure verification and FCA conduct compliance, so these cases go directly to specialized debt advisors.

- Bespoke Repayment Negotiations
    - Tailored debt restructuring beyond pre-approved, rules-based payment plans involves manual underwriting and risk assessment. Permitting unconstrained self-service negotiation introduces credit risk leakage.

- Major Core-Platform / Legacy Database Replacement
    - Replacing the 20-year-old collections database is an enterprise platform transformation, not an operational automation release. Phase 1 must integrate via secure APIs/middleware, keeping the core system of record intact while surfacing ledger balance sync through the portal.   

- Advanced Personalization & Predictive AI Engines
    - Machine-learning-driven behavioral personalization (e.g., dynamic settlement offer engines) requires clean operational baseline data that does not exist yet. Adding predictive AI in Phase 1 increases complexity without proven operational data.

- Legal Escalation Workflow Automation
    - Litigation, statutory demands, and legal enforcement require formal legal notice protocols and specialized oversight. This process must remain in the manual/specialist workflow until baseline operational self-service stabilizes.

- Third-Party Agency (DCA) Integration
    - Hand-offs to external Debt Collection Agencies (DCAs) should remain outside the primary portal boundary for Phase 1 to limit integration complexity and third-party security surface area.


## Assumptions

Establishing what must be true (preconditions, operational dependencies, and critical success factors) forces us to test the feasibility of our Phase 1 scope before writing a line of code or committing budget.

If any of these conditions fail, Phase 1 will stall, overrun its budget, or fail to deliver the expected ROI.

- Ledger & Database Accessibility
    - The 20-year-old core collections database must expose stable, low-latency API endpoints or read/write views to fetch active account balances, overdue amounts, and record promises-to-pay without risking core database lockouts.

- Eligibility rules can be agreed without full policy redesign.
    - It is assumed that the existing eligibility rules can be agreed upon and implemented within the current system constraints.

- Operations will support a limited pilot or phased rollout.
    - It is assumed that the operations team can accommodate a controlled pilot or phased rollout to validate Phase 1 functionality before full-scale deployment.


## Dependencies and constraints

| Dependency | What is needed | Owner |
|---|---|---|
| Legacy database access | Stable API or read/write view for balances, arrears and P2P write-back, with agreed load limits | [IT / database owner, name TBC] |
| Compliance sign-off | Approval of customer-facing messages, the audit trail format and the vulnerability detect-and-route rules before build freeze | Daniel |
| Agent workflow | Agreement on how routed cases appear in the representative queue, what information they receive and who picks them up | Gareth |
| Pilot readiness | Operations capacity for a controlled pilot on credit card and personal loan accounts | Gareth |

## Why this scope is credible

Opportunity AO-01 (Self-Serve Balance and Arrears View) ranks as a top priority because it directly addresses the highest-volume operational bottleneck identified in our discovery analysis: 2,507 out of 3,246 delinquent accounts (77.2%) are straightforward self-service candidates. Under the current manual operating model, handling these routine inquiries consumes 752.1 representative hours, costing £16,546.20 annually in direct labor based on the £22/hour blended rate. However, the core economic driver of the business case is the £366k recovery leakage uplift, achieved by removing manual follow-up delays that currently lead to a 14% missed follow-up rate and a 12% overdue leakage loss. Delivering £382.8k in total annual benefits against an implementation cost of £85,000 yields a 350% 12-month ROI and a rapid 3.4-month payback period, making AO-01 the foundational value driver of the Smart-Recovery initiative.   

From a feasibility and risk perspective, Phase 1 deliberately confines technical complexity to a Medium tier by building a lightweight customer portal facade with secure authentication and near-real-time ledger reads and one-way write-back, avoiding a risky core platform replacement. Operating risk is minimized through a rules-based routing engine that automatically escalates complex cases, disputed balances, and vulnerable customers directly to Gareth’s representatives, maintaining clear hand-off boundaries and avoiding operational overload. To safeguard change adoption, Phase 1 focuses on high-volume, low-risk credit card and personal loan accounts, allowing Gareth’s operational team to transition away from offline tracking spreadsheets during a controlled pilot before scaling across the portfolio. 