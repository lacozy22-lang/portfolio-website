const groups = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Javascript", "Bootstrap", "Zustand"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Laravel", "tRPC", "GraphQL", "REST", "Python", "SQL", "PHP", "Prisma ORM", "JWT"],
  },
  {
    title: "Data & Infra",
    items: ["PostgreSQL", "Redis", "MySQL", "Prisma", "Docker", "Vercel", "MongoDB"],
  },
  {
    title: "Tooling",
    items: ["Git & GitHub", "Vitest", "Midtrans Snap", "Xendit Invoice", "Figma", "Power BI", "Tableau", "Excel", "Jupyter"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <p className="font-mono text-sm text-primary">/ 02 — skills</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
          The stack I reach for
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <h3 className="font-mono text-sm text-muted-foreground">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
