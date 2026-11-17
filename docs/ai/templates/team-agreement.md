# Team AI agreement — <team name>

<!-- owner: @<github-handle> · review-by: <YYYY-MM-DD> · change it by PR, CODEOWNERS approve -->

One page. How far agents may go in this repo, how we check their work, who owns the harness.

## 1. Autonomy matrix

Levels: **L0** no agent · **L1** agent suggests, human writes · **L2** agent writes, human reviews every line ·
**L3** agent writes and runs checks, human reviews the PR · **L4** agent merges when gates are green, human audits samples.

| Change type | Level | Evidence that earns this level | Who signs off |
|---|---|---|---|
| <e.g. tests only> | <L4> | <new tests fail without the change, pass with it; CI green> | <sampled weekly> |
| <e.g. API endpoint> | <L3> | <route test per status code; `npm test` green> | <any team member> |
| <e.g. DB migration> | <L2> | <runs on a fresh DB; rollback note> | <tech lead> |
| <e.g. editing an applied migration> | <L0> | <blocked by hook> | — |

Rule of thumb: a change type goes one level up only when its check is cheap, independent of the agent, and runs every time.

## 2. Who owns agent output

<e.g. The person who opens the PR owns it as if they wrote it.>

## 3. Harness owners

- `AGENTS.md`, `.claude/**`, `docs/ai/**`: <@handles> (see `.github/CODEOWNERS`)

## 4. How rules change

1. <who can propose, how>
2. <who reviews; what evidence is required — e.g. an A/B note for behaviour changes>
3. <what happens when a rule passes its review-by date>

## 5. Personal vs team

Personal preferences: `~/.claude/CLAUDE.md`, `.claude/settings.local.json` (git-ignored). No `CLAUDE.md` / `CLAUDE.local.md` in the repo.
