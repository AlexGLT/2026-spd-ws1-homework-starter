# Homework 1.1 — Your team harness, in one PR

**Effort:** 90–120 min · **Deadline:** Mon 23.11.2026, 23:59 (Kyiv) · **Works on any Claude plan**

Turn this repo (or your own public repo) from "everyone has their own setup" into a governed team harness, and
prove it changes the agent's behaviour.

## Deliverables — one PR

**Agree**
1. `docs/ai/team-agreement.md` from [the template](docs/ai/templates/team-agreement.md):
   - an autonomy matrix with **at least 4 change types**, each with its level and the evidence that earns it;
   - harness owners;
   - how rules change.

**Instruct**
2. A short root **`AGENTS.md`** (aim for under 40 lines). **No `CLAUDE.md`** — Claude Code reads `AGENTS.md` on its own.
3. One **path-specific rule** in `.claude/rules/*.md` with `paths:` (for example for `db/migrations/**` or `app/api/**`).
4. One **skill** in `.claude/skills/<name>/SKILL.md` — a procedure your team repeats.
5. A **handoff note template** (`docs/ai/handoff-template.md`, start from [the template](docs/ai/templates/handoff.md)).

**Enforce and own**
6. One **blocking hook** (`PreToolUse`, exit code 2) and the **log or output of it firing** on a violation.
7. **Permissions** in the committed `.claude/settings.json`: at least one `deny` and one `ask`.
8. **`.github/CODEOWNERS`** for the harness files.

**Prove**
9. An **A/B note** (`docs/ai/ab-note.md`, [template](docs/ai/templates/ab-note.md)): the same task before and after your
   harness, at least 2 runs each, and what changed in the diff and the behaviour.

Every rule, skill and hook carries a header with `owner`, `why` and `review-by` ([rule header template](docs/ai/templates/rule-header.md)).

## How to submit — no form

1. **Fork** this repo.
2. Create a branch **`hw1-1/<your-github-handle>`**.
3. Open a **PR back to `koldovsky/ws1-homework-starter`**. The open PR is your submission.
4. Fill in the PR template — **your first and last name are required**, a GitHub handle alone doesn't tell us who you are.

**Your own public repo instead?** Do the work there, open a PR in your repo, then open an issue here with the
«HW 1.1 submission» template: your name and the PR link.

Never use client code, secrets or anything under NDA. Public repos only.

## Rules of the road

- **Any Claude plan works.** Everything is repo-level: committed `.claude/settings.json`, project-scope plugins. No admin or managed settings needed.
- **Claude Code 2.1.281 or newer** (`claude --version`). Check that `/memory` lists your `AGENTS.md`. Stuck on an older version? A one-line `CLAUDE.md` containing `@AGENTS.md` is accepted — say so in the PR.
- **No `CLAUDE.md` or `CLAUDE.local.md` otherwise.** Either one makes Claude Code read it instead of `AGENTS.md`. Personal preferences go to `~/.claude/CLAUDE.md` and `.claude/settings.local.json` (git-ignored).
- **Company policy blocks project hooks?** If your work machine's managed settings allow only managed hooks, your hook won't fire there. Run the script yourself with a sample payload and attach the output and exit code — see [hook test](docs/ai/hook-test.md). That counts.
- **`npm run dev` writes into `AGENTS.md`.** Next.js 16 adds (or creates) a managed block between `<!-- BEGIN:nextjs-agent-rules -->` markers on every `next dev`. Keep it, or turn it off with `agentRules: false` in `next.config.ts` — but decide on purpose and say which in the PR.
- **Optional:** consume the shared harness from `koldovsky/shop-harness` as a plugin and add one repo-local rule on top.

## Acceptance criteria (self-check)

1. A **fresh** agent session can start a task from the repo alone — no extra explanation.
2. The hook **blocks a violation**, and the log or output shows it.
3. Every rule has a **reason, an owner and a review-by date**.
4. Each autonomy level is **tied to how that change type is verified**.

## Rubric

Each line is 0, 1 or 2 points. 14+ of 20 is a pass; we comment on every PR either way.

| # | Criterion | 0 | 1 | 2 |
|---|---|---|---|---|
| 1 | Autonomy matrix | missing or < 4 types | 4+ types, levels without evidence | 4+ types, each level tied to a concrete check |
| 2 | Owners and change process | missing | named, process vague | owners in CODEOWNERS, process in 3–5 steps |
| 3 | Root `AGENTS.md` | missing or a dump | present, mixes detail and essentials | short: commands, hard rules, pointers |
| 4 | Path rule | missing | present, `paths:` doesn't match real files | loads only where it is true, has a header |
| 5 | Skill | missing | generic advice | a real repeatable procedure with steps and a check |
| 6 | Hook | missing | present, no evidence | blocks a violation, exit 2, reason shown, log/output attached |
| 7 | Permissions | missing | allow-only | deny + ask that match real risks, committed |
| 8 | CODEOWNERS | missing | present | covers `AGENTS.md`, `.claude/**`, `docs/ai/**` |
| 9 | Handoff template | missing | present | lets a fresh session continue: state, next step, links, open questions |
| 10 | A/B note | missing | one run or no comparison | 2+ runs each side, concrete differences, honest about no-change |

## Feedback

Review comments on your PR, and anonymised common patterns at the start of Session 2 (Thu 26.11).
