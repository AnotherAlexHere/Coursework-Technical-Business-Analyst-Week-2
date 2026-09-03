# Backlog Quality Guide

Use this guide while writing your Jira-style backlog.

## Recommended epic structure

- Access and Verification
- Account Visibility
- Payment Journey
- Routing and Exceptions
- Reporting and Audit
- Non-functional and Messaging

## Recommended story fields

- Story ID
- Epic
- Title
- User story statement
- Business value
- Acceptance criteria
- Dependencies
- Priority
- Notes or assumptions

## Story quality test

A strong story should answer:
- who needs something?
- what do they need?
- why does it matter?
- can a delivery team discuss and test it?

## Acceptance criteria quality test

Good acceptance criteria:
- describe what must be true when the story works
- include validation and rules where relevant
- cover exception conditions when needed
- avoid implementation task language

## Common weak patterns

### Weak story
Build payment-plan page.

### Better story
As an eligible customer, I want to review available payment-plan options, so that I can choose a manageable repayment path without waiting for an representative.

### Weak criteria
- build page
- add API
- add button

### Better criteria
- plan options are shown only for eligible accounts
- each option shows amount, frequency, and start date
- unsupported cases are routed to a support path

## Prioritisation reminder

Do not prioritise only in screen order. Foundational access, routing, audit, and visibility stories may need to come earlier than richer journey screens.
