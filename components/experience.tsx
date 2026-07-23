const roles = [
  {
    period: "6 months (2025-2026)",
    role: "Operations Engineer Support Drilling Operations (Internship)",
    company: "PT. Pertamina Hulu Rokan",
    description:
      "Reviewed and validated rig crew and equipment documentation to ensure compliance with operational standards and contract requirements before field activities. Supported Drilling Operations Engineers with administrative and document verification tasks, helping prevent operational delays caused by regulatory or documentation issues.",
  },
  {
    period: "3 months (2023)",
    role: "Document Management (Internship)",
    company: "Riau Province BPN Regional Office",
    description:
      "Create a system to make it easier to search for documents and record the history of incoming and outgoing documents.",
  },
  {
    period: "3 months (2023)",
    role: "IT Support Staff (Internship)",
    company: "PT. Telkom Indonesia (Persero) Tbk",
    description:
      "Maintained computer hardware and software, and ensured network connectivity for all employees.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <p className="font-mono text-sm text-primary">/ 04 — experience</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
          Where I&apos;ve worked
        </h2>

        <ol className="mt-12 space-y-0">
          {roles.map((r, i) => (
            <li
              key={r.company}
              className="grid gap-2 border-t border-border py-8 md:grid-cols-[200px_1fr] md:gap-8 last:border-b"
            >
              <div className="font-mono text-sm text-muted-foreground">{r.period}</div>
              <div>
                <h3 className="text-lg font-semibold">
                  {r.role} <span className="text-primary">@ {r.company}</span>
                </h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  {r.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
