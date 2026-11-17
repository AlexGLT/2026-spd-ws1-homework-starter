alter table tasks add column estimate_hours integer check (estimate_hours between 1 and 40);
