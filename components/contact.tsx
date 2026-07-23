import { ArrowUpRight, Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/brand-icons"

const socials = [
  { label: "GitHub", handle: "@lacozy22-lang", href: "https://github.com/lacozy22-lang", icon: GithubIcon },
  { label: "LinkedIn", handle: "Ridho Illahi", href: "https://linkedin.com/in/ridho-illahi-873526139", icon: LinkedinIcon },
  { label: "Instagram", handle: "@idoillahi", href: "https://instagram.com/idoillahi", icon: InstagramIcon },
]

export function Contact() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <p className="font-mono text-sm text-primary">/ 05 — contact</p>
        <div className="mt-6 grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div>
            <h2 className="text-balance text-4xl font-bold tracking-tight md:text-6xl">
              Let&apos;s build something worth shipping.
            </h2>
            <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              Interested in full-time opportunities, freelance work, or meaningful collaborations. If you think we'd be a good fit, feel free to reach out.
            </p>
            <a
              href="mailto:Idoillahi47@gmail.com"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" />
              Idoillahi47@gmail.com
            </a>
          </div>

          <div className="flex flex-col justify-end">
            <ul className="divide-y divide-border border-y border-border">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between py-4 transition-colors hover:text-primary"
                  >
                    <span className="flex items-center gap-3">
                      <s.icon className="size-5" />
                      <span className="font-medium">{s.label}</span>
                    </span>
                    <span className="flex items-center gap-2 font-mono text-sm text-muted-foreground group-hover:text-primary">
                      {s.handle}
                      <ArrowUpRight className="size-4" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-2 border-t border-border pt-8 font-mono text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Ridho Illahi. All rights reserved.</span>
          <span>Built with Next.js &amp; Tailwind CSS</span>
        </div>
      </div>
    </footer>
  )
}
