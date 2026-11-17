# Testing a hook without a live session

Use this when your company's managed settings block project hooks on your machine, or to debug a hook.
A `PreToolUse` hook gets a JSON payload on stdin; exit code 2 blocks the call and stderr is the reason.

1. Save a payload, e.g. `docs/ai/sample-payload.json`:

```json
{ "tool_name": "Edit", "tool_input": { "file_path": "db/migrations/001_create_tasks.sql" } }
```

2. Run your hook with it. These commands work in PowerShell, cmd and Bash:

```bash
node .claude/hooks/your-hook.mjs < docs/ai/sample-payload.json
```

PowerShell has no `<` redirection; there use:

```bash
Get-Content docs/ai/sample-payload.json | node .claude/hooks/your-hook.mjs
```

3. Check the exit code: Bash `echo $?`, PowerShell `$LASTEXITCODE`. Attach the command, the stderr text and the exit code to your PR.
