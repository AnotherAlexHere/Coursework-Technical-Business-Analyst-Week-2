# Wireframe Annotation Guide

This guide helps you keep your prototype focused on logic rather than polish.

## Minimum screen set

- landing or access page
- identity verification
- account summary
- choose next action
- promise-to-pay or payment-plan journey
- confirmation page
- unsupported or routed-to-representative page

## What to annotate on every major screen

- related story ID or IDs
- key data shown
- validation or business rule
- next step in the flow
- branch outcome, if relevant

## Example annotation block

- **Stories:** US-03, US-04
- **Data:** overdue amount, total balance, delinquency status, available actions
- **Rule:** only shown after successful verification
- **Next step:** customer selects promise to pay, payment plan, update details, or support

## Exception paths to include

At minimum, show one or more of these:
- failed verification
- ineligible payment-plan result
- abandoned journey follow-up logic
- routed-to-representative support outcome

## Review prompt

Ask during stakeholder review:
- Is any key step missing?
- Does the exception path make operational sense?
- Would an representative have enough context if this case is routed?
