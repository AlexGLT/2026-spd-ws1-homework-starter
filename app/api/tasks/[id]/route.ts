import { db } from "@/lib/db";
import { moveTask, RuleViolation, type Status } from "@/lib/tasks";

export const runtime = "nodejs";

export async function PATCH(request: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const body = await request.json().catch(() => null);
  if (!body || !["todo", "doing", "done"].includes(body.status)) {
    return Response.json({ error: "status must be todo, doing or done" }, { status: 400 });
  }
  try {
    return Response.json(moveTask(db(), Number(id), body.status as Status));
  } catch (e) {
    if (e instanceof RuleViolation) return Response.json({ error: e.message }, { status: 422 });
    throw e;
  }
}
