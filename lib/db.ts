import { DatabaseSync } from "node:sqlite";
import { mkdirSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";

const MIGRATIONS_DIR = join(process.cwd(), "db", "migrations");

/** Opens the database and applies pending migrations in file-name order. */
export function openDb(file = process.env.DB_FILE ?? "data/tasks.db"): DatabaseSync {
  if (file !== ":memory:") mkdirSync(dirname(file), { recursive: true });
  const db = new DatabaseSync(file);
  db.exec("create table if not exists schema_migrations (name text primary key, applied_at text not null)");
  const applied = new Set(
    (db.prepare("select name from schema_migrations").all() as { name: string }[]).map((r) => r.name),
  );
  for (const name of readdirSync(MIGRATIONS_DIR).filter((f) => f.endsWith(".sql")).sort()) {
    if (applied.has(name)) continue;
    db.exec(readFileSync(join(MIGRATIONS_DIR, name), "utf8"));
    db.prepare("insert into schema_migrations (name, applied_at) values (?, ?)").run(name, new Date().toISOString());
  }
  return db;
}

let shared: DatabaseSync | undefined;
export function db(): DatabaseSync {
  shared ??= openDb();
  return shared;
}
