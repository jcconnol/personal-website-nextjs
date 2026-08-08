# Repository Instructions

## Think Before Coding

State assumptions explicitly. If requirements are ambiguous or have multiple valid interpretations, surface them rather than choosing silently. Prefer the simpler approach and ask for clarification when a decision would materially change scope.

## Simplicity First

Use the minimum code that solves the requested problem. Do not add speculative features, abstractions, configurability, or impossible-scenario handling. If a solution feels overbuilt, simplify it.

## Surgical Changes

Touch only code needed for the task and match local style. Do not refactor adjacent code, comments, or formatting unless it is required. Remove imports, variables, and helpers only when the current change made them unused; report unrelated dead code instead of deleting it.

## Goal-Driven Execution

For non-trivial work, state a short plan with success criteria and verify the result. For example:

1. Make the requested change — verify with a focused test or reproduction.
2. Run the relevant project check — verify lint, build, or browser behavior.
3. Report any remaining uncertainty.

## Project Checks

- Run `npm run lint` for code changes.
- Run `npm run build` when changes could affect production compilation.
- For UI changes, start the Next.js app with `npm run dev` and validate the affected page in a browser when possible.
