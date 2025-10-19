"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

const SECTION_IDS = ["home", "about", "projects", "experience", "contact"] as const;
type SectionId = (typeof SECTION_IDS)[number];

export default function Navbar() {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 dark:border-white/10 backdrop-blur bg-background/80">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="#home" className="text-sm font-mono tracking-tight text-foreground">
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6 text-sm">
          {SECTION_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={
                id === active
                  ? "text-foreground underline underline-offset-4 decoration-2"
                  : "text-foreground/60 hover:text-foreground"
              }
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
