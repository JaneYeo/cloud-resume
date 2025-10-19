export type Project = {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  repo?: string;
  image?: string;
};

export type Experience = {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  bullets?: string[];
};

export const siteConfig = {
  name: "Alex Doe",
  title: "Alex Doe — Minimalist Portfolio",
  description:
    "Designer-developer crafting clean, user-focused products with a minimalist approach.",
  email: "alex@example.com",
  location: "Remote / Anywhere",
  social: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://x.com/",
  },
  resumeUrl: "#",
  about:
    "I build thoughtful, accessible interfaces with clear hierarchy and fast performance. I enjoy stripping away the unnecessary to let the core idea shine.",
  projects: [
    {
      title: "Focus Timer",
      description:
        "A distraction-free Pomodoro timer with keyboard-first controls and subtle haptics.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      url: "https://example.com",
      repo: "https://github.com/",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1640&auto=format&fit=crop",
    },
    {
      title: "Minimal Notes",
      description:
        "Markdown notes with powerful search and a no-distraction reading mode.",
      tech: ["Next.js", "SQLite", "Vercel"],
      url: "https://example.com",
      repo: "https://github.com/",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1640&auto=format&fit=crop",
    },
    {
      title: "Palette",
      description:
        "Generate harmonious color palettes with contrast checking and export presets.",
      tech: ["React", "TypeScript"],
      url: "https://example.com",
      image:
        "https://images.unsplash.com/photo-1526401281623-7ae1916a79ae?q=80&w=1640&auto=format&fit=crop",
    },
  ] as Project[],
  experience: [
    {
      company: "Acme Inc.",
      role: "Senior Product Designer",
      location: "Remote",
      start: "2022",
      end: "Present",
      bullets: [
        "Led redesign of customer dashboard used by 50k+ monthly users.",
        "Shipped design system increasing UI velocity by ~30%.",
      ],
    },
    {
      company: "Bright Labs",
      role: "Frontend Engineer",
      location: "Berlin",
      start: "2019",
      end: "2022",
      bullets: [
        "Built marketing site platform powering 200+ localized microsites.",
        "Improved LCP to <1.5s on average across top pages.",
      ],
    },
  ] as Experience[],
} as const;
