create table tasks (
  id         integer primary key autoincrement,
  title      text    not null check (length(title) between 1 and 120),
  status     text    not null default 'todo' check (status in ('todo', 'doing', 'done')),
  assignee   text,
  created_at text    not null default (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);
