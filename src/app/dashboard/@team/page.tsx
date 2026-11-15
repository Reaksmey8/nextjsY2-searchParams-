export default function Team() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-blue-600">Team Section</h2>
      <p className="text-sm text-muted-foreground mt-1">
        Team module active on dashboard. You can also view this individually at{" "}
        <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">/dashboard/team</span>.
      </p>
    </div>
  );
}
