import { MapPin, Coffee, Code2 } from "lucide-react"

const facts = [
  { icon: MapPin, label: "Based in", value: "Pekanbaru, Riau" },
  { icon: Code2, label: "Focus", value: "Data Analyst & Web Developer" },
  { icon: Coffee, label: "Fuel", value: "Coffee" },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <p className="font-mono text-sm text-primary">/ 01 — about</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Passionate about data and web development
            </h2>
            <ul className="mt-8 space-y-4">
              {facts.map((f) => (
                <li key={f.label} className="flex items-center gap-4">
                  <span className="flex size-10 items-center justify-center rounded-md border border-border bg-card">
                    <f.icon className="size-5 text-primary" />
                  </span>
                  <span>
                    <span className="block font-mono text-xs text-muted-foreground">{f.label}</span>
                    <span className="block font-medium">{f.value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            <p>
              I'am a Data Analyst and Web Developer who focuses on transforming data into insights that support decision-making, while also building functional, responsive, and user-friendly web applications. I enjoy the process of connecting data analysis with digital solutions that make a real impact.
            </p>
            <p>
              In my work, I am accustomed to processing, cleaning, and visualizing data to identify patterns and present them in an easy-to-understand format. On the web development side, I build applications with a focus on strong performance, and a seamless user experience.
            </p>
            <p>
              I continuously develop my skills through personal projects and self-directed learning, particularly in data analysis, modern web development, and related technologies. For me, every project is an opportunity to explore new approaches and create better solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
