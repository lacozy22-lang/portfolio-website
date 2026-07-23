import Image from "next/image"
// import { ArrowUpRight } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"

const projects = [
  {
    name: "SIMRS (Hospital Information System)",
    year: "2026",
    description:
      "An end-to-end Hospital Management Information System (SIMRS) that centralizes patient records, doctor schedules, live queue monitoring, digital prescriptions, and role-based access control to improve operational efficiency across hospital departments.",
    image: "/projects/simrs.png",
    tags: ["Laravel", "PHP", "Bootstrap", "MySQL", "Vite"],
    //demo: "https://example.com",
    repo: "https://github.com/lacozy22-lang/simrs-app",
    featured: true,
  },
  {
    name: "RestoApp",
    year: "2026",
    description:
      "A full-stack restaurant management platform built for Indonesian businesses, combining online ordering, table reservations, integrated Midtrans and Xendit payments, WhatsApp ordering, and a powerful admin dashboard for menu management, analytics, and real-time order tracking.",
    image: "/projects/ecommerce.png",
    tags: ["Next.js", "Express", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
    //demo: "https://example.com",
    repo: "https://github.com/lacozy22-lang/Restoapp",
  },
  /*{
    name: "Forkbench",
    year: "2024",
    description:
      "An open-source collaborative code review tool with live cursors and inline threads.",
    image: "/projects/dev-tool.png",
    tags: ["TypeScript", "WebSockets", "Docker"],
    //demo: "https://example.com",
    repo: "https://github.com",
  },*/

]

function ProjectLinks({ /* demo, */ repo }: { /* demo?: string; */ repo: string }) {
  return (
    <div className="flex items-center gap-2">
      {/*<a
        href={demo}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 font-mono text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        Live demo
        <ArrowUpRight className="size-3.5" />
      </a>*/}
      <a
        href={repo}
        target="_blank"
        rel="noreferrer"
        aria-label="View source on GitHub"
        className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 font-mono text-xs transition-colors hover:bg-secondary"
      >
        <GithubIcon className="size-4" />
        Code
      </a>
    </div>
  )
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <li key={t} className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs">
          {t}
        </li>
      ))}
    </ul>
  )
}

export function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="work" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <p className="font-mono text-sm text-primary">/ 03 — work</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
          Selected projects
        </h2>

        {/* Featured */}
        <article className="mt-12 grid overflow-hidden rounded-xl border border-border bg-card lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden border-b border-border lg:border-b-0 lg:border-r">
            <Image
              src={featured.image || "/placeholder.svg"}
              alt={`${featured.name} interface`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="flex flex-col justify-center gap-5 p-8 md:p-10">
            <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
              <span className="rounded-full bg-primary px-2 py-0.5 font-medium text-primary-foreground">
                Featured
              </span>
              <span>{featured.year}</span>
            </div>
            <h3 className="text-2xl font-bold md:text-3xl">{featured.name}</h3>
            <p className="text-pretty leading-relaxed text-muted-foreground">{featured.description}</p>
            <Tags tags={featured.tags} />
            <ProjectLinks /* demo={featured.demo} */ repo={featured.repo} />
          </div>
        </article>

        {/* Rest */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                <Image
                  src={p.image || "/placeholder.svg"}
                  alt={`${p.name} interface`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                </div>
                <p className="flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <Tags tags={p.tags} />
                <ProjectLinks /* demo={p.demo} */ repo={p.repo} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
