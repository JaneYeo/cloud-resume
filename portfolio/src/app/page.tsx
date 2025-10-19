import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6">
      {/* Hero */}
      <section id="home" className="min-h-[70vh] flex items-center py-24 scroll-mt-28">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
            {siteConfig.name}
          </h1>
          <p className="text-base sm:text-lg text-foreground/70 max-w-[40ch]">
            {siteConfig.description}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center rounded-full border px-4 py-2 text-sm hover:bg-foreground hover:text-background transition-colors"
            >
              Contact
            </a>
            {siteConfig.resumeUrl && (
              <a
                href={siteConfig.resumeUrl}
                className="inline-flex items-center rounded-full border px-4 py-2 text-sm text-foreground/70 hover:text-foreground"
              >
                Resume
              </a>
            )}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 border-t border-black/10 dark:border-white/10 scroll-mt-28">
        <h2 className="text-xl font-medium mb-6">About</h2>
        <p className="text-foreground/80 leading-relaxed max-w-prose">
          {siteConfig.about}
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 border-t border-black/10 dark:border-white/10 scroll-mt-28">
        <h2 className="text-xl font-medium mb-6">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {siteConfig.projects.map((p) => (
            <article key={p.title} className="group border rounded-lg overflow-hidden hover:shadow-sm transition-shadow">
              {p.image && (
                <div className="aspect-[16/10] relative">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-medium tracking-tight">{p.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-foreground/60">
                    {p.repo && (
                      <Link className="hover:underline" href={p.repo} target="_blank">
                        Code
                      </Link>
                    )}
                    {p.url && (
                      <Link className="hover:underline" href={p.url} target="_blank">
                        Live
                      </Link>
                    )}
                  </div>
                </div>
                <p className="text-sm text-foreground/70">{p.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="text-xs rounded-full border px-2 py-1 text-foreground/70"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 border-t border-black/10 dark:border-white/10 scroll-mt-28">
        <h2 className="text-xl font-medium mb-6">Experience</h2>
        <ol className="space-y-8">
          {siteConfig.experience.map((e) => (
            <li key={`${e.company}-${e.role}`} className="relative pl-6">
              <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-foreground" />
              <div className="text-sm text-foreground/60">
                {e.start} — {e.end}
              </div>
              <div className="font-medium">
                {e.role} · {e.company}
              </div>
              {e.location && (
                <div className="text-sm text-foreground/60">{e.location}</div>
              )}
              {e.bullets && (
                <ul className="mt-2 list-disc list-inside space-y-1 text-foreground/80">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-black/10 dark:border-white/10 scroll-mt-28">
        <h2 className="text-xl font-medium mb-6">Contact</h2>
        <div className="space-y-4">
          <p className="text-foreground/80 max-w-prose">
            Interested in working together? I’m open to freelance and full-time opportunities.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center rounded-full border px-4 py-2 text-sm hover:bg-foreground hover:text-background transition-colors"
            >
              Email me
            </a>
            <div className="text-sm text-foreground/60 flex items-center gap-4">
              <Link href={siteConfig.social.github} target="_blank" className="hover:underline">
                GitHub
              </Link>
              <Link href={siteConfig.social.linkedin} target="_blank" className="hover:underline">
                LinkedIn
              </Link>
              <Link href={siteConfig.social.twitter} target="_blank" className="hover:underline">
                X
              </Link>
            </div>
          </div>
        </div>
        <footer className="mt-24 text-xs text-foreground/50">
          © {new Date().getFullYear()} {siteConfig.name}
        </footer>
      </section>
    </main>
  );
}
