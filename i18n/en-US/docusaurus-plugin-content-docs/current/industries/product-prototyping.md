---
title: Product Prototyping
description: Use vibe coding to move from idea, user story, and screen sketch to clickable prototype.
category: industries
tags: [product, prototype, design]
audience: Product managers, designers, founders, and indie developers
difficulty: intermediate
source_urls:
  - https://www.figma.com/best-practices/
  - https://docs.github.com/en/copilot
  - https://playwright.dev/docs/intro
updated_at: 2026-04-21
---

# Product Prototyping

## Audience

Teams that need to turn product ideas into reviewable, testable, and iterable prototypes quickly.

## Problems Solved

- Convert vague ideas into user stories, information architecture, and key flows.
- Generate low-fidelity screens, clickable pages, and interaction notes.
- Use automated checks to verify basic prototype paths.

## Vibe Coding Workflow

1. Define target users, core task, success metric, and non-goals.
2. Ask AI for user stories, page inventory, and important states.
3. Generate the first prototype with Figma or a frontend scaffold.
4. Use Playwright to check navigation, forms, and responsive layouts.
5. Update requirements from user feedback instead of adding features blindly.

## Recommended Tools

- Figma for designs and interactive prototypes.
- GitHub Copilot or Codex for frontend prototypes and tests.
- Playwright for verifying key paths.

## Example Prompt

```text
Turn this product idea into an MVP prototype spec:
1. User: freelancers.
2. Problem: client communication, quotes, milestones, and payments are scattered.
3. Output user stories, pages, key states, empty states, and error states.
4. Keep scope feasible for 3 days and avoid complex integrations beyond payments.
5. Include Playwright acceptance scenarios.
```

## Reference Project

Start with a static interactive prototype in Docusaurus, Next.js, or Vite, then decide whether real backend integration is justified.

## Limitations and Risks

AI often expands prototypes into full products. Each iteration should state the hypothesis being tested.

## Sources

- Figma Best Practices: https://www.figma.com/best-practices/
- GitHub Copilot Documentation: https://docs.github.com/en/copilot
- Playwright Documentation: https://playwright.dev/docs/intro
