import { db } from "@/lib/db";
import { createTask, listTasks, RuleViolation } from "@/lib/tasks";

export const runtime = "nodejs";

export function GET() {
  return Response.json(listTasks(db()));
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body.title !== "string") return Response.json({ error: "title is required" }, { status: 400 });
  try {
    return Response.json(createTask(db(), body), { status: 201 });
  } catch (e) {
    if (e instanceof RuleViolation) return Response.json({ error: e.message }, { status: 422 });
    throw e;
  }
}
