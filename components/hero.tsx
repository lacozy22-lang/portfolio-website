import Image from "next/image"
import { ArrowUpRight, Terminal } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

const stats = [
  { value: "1+", label: "Years building" },
  { value: "2", label: "Projects shipped" },
  { value: "2", label: "Open-source repos" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      {/* subtle grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-[1.4fr_1fr] md:gap-16 md:px-8">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Available for freelance &amp; full-time
          </div>

          <h1 className="mt-6 text-balance text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-8xl">
            Ridho Illahi
          </h1>

          <div className="mt-5 flex items-center gap-3 font-mono text-primary">
            <Terminal className="size-5 shrink-0" />
            <p className="text-lg md:text-xl">{"data_analyst & web_developer"}</p>
          </div>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            I build data-driven and web-based solutions, from transforming data into actionable
            insights to developing fast, responsive, and user-friendly web applications. I prioritize
            informative visualizations and products that truly deliver value to users.

          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View my work
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm font-medium transition-colors hover:bg-secondary"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-1">
              <a
                href="https://github.com/lacozy22-lang"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex size-11 items-center justify-center rounded-md border border-border transition-colors hover:bg-secondary"
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href="https://linkedin.com/in/ridho-illahi-873526139/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex size-11 items-center justify-center rounded-md border border-border transition-colors hover:bg-secondary"
              >
                <LinkedinIcon className="size-5" />
              </a>
            </div>
          </div>

          <dl className="mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-mono text-3xl font-bold text-primary md:text-4xl">{s.value}</dd>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>

        {/* Profile photo */}
        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-square w-56 sm:w-72 md:w-full md:max-w-sm">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-2xl border border-primary/30"
            />
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/pasfotoAI.png"
                alt="Portrait of Ridho Illahi, fullstack developer"
                fill
                priority
                sizes="(max-width: 768px) 288px, 384px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -left-3 rounded-md border border-border bg-card px-3 py-1.5 font-mono text-xs text-primary">
              {"{ hello: 'world' }"}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
