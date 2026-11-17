import { db } from "@/lib/db";
import { listTasks } from "@/lib/tasks";

export const dynamic = "force-dynamic";

const HINT = `curl -X POST localhost:3000/api/tasks -H "content-type: application/json" -d '{"title":"First"}'`;

export default function Home() {
  const tasks = listTasks(db());
  return (
    <main>
      <h1>Team Tasks</h1>
      <p>Tiny app for the Workshop 1 homework. The app is not the point — the harness around it is.</p>
      {tasks.length === 0 ? (
        <p>
          No tasks yet. Try: <code>{HINT}</code>
        </p>
      ) : (
        <ul>
          {tasks.map((t) => (
            <li key={t.id}>
              <b>{t.title}</b> · {t.status}
              {t.assignee ? ` · ${t.assignee}` : ""}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
