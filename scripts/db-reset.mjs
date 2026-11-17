// Deletes the local SQLite file; migrations run again on the next start.
import { rmSync } from "node:fs";
const file = process.env.DB_FILE ?? "data/tasks.db";
for (const f of [file, `${file}-wal`, `${file}-shm`]) rmSync(f, { force: true });
console.log(`removed ${file}`);
