import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "The Asia Press SEO Revamp",
    description: "Designed and executed SEO strategy using long‑tail keywords, optimized metadata and internal linking, boosting traffic by 400% in 3 months.",
    technologies: ["WordPress", "SEO", "Content Strategy", "Analytics"],
    image: "/minimalist-portfolio/public/The Asia Press Jetpack.png",
    github: "",
    live: "https://theasiapress.com",
    featured: true
  },
  {
    title: "DOSM Pahang PWA",
    description: "State statistics Progressive Web App using MVC backend; cut public data lookup time by 40% with interactive charts for non‑technical users.",
    technologies: ["PWA", "MVC", "Charts", "Web"],
    image: "",
    github: "",
    live: "",
    featured: true
  },
  {
    title: "Speech‑to‑Text Academic Report Assistant (Final Year Project)",
    description: "Fine‑tuned Whisper AI for Malaysian academic terms, enabled real‑time transcription, and embedded the model into a Flutter app with backend + DB.",
    technologies: ["Whisper AI", "Flutter", "Realtime", "Backend", "Supabase"],
    image: "",
    github: "",
    live: "",
    featured: false
  },
  {
    title: "Grocerline (AWS Challenge)",
    description: "Prototype e‑commerce deployed on AWS services during RunCloud x AWS challenge.",
    technologies: ["AWS", "E‑commerce"],
    image: "",
    github: "",
    live: "",
    featured: false
  },
  {
    title: "The Allen Chan Enterprise Website",
    description: "Design and developed business showcase website followed client's instructions.",
    technologies: ["WordPress", "Business Showcase"],
    image: "",
    //github: "",
    live: "https://acenter.com.my/",
    featured: false
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold mb-4">Projects</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A collection of projects showcasing technical skills and problem-solving abilities
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-800 pb-12 last:border-b-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  )}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
