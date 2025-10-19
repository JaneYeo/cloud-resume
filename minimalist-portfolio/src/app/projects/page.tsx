import { Code, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
    image: "/api/placeholder/400/250",
    github: "https://github.com",
    live: "https://example.com",
    featured: true
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["Next.js", "TypeScript", "Socket.io", "MongoDB", "Tailwind CSS"],
    image: "/api/placeholder/400/250",
    github: "https://github.com",
    live: "https://example.com",
    featured: true
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with location-based forecasts, interactive maps, and historical data visualization.",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "PWA"],
    image: "/api/placeholder/400/250",
    github: "https://github.com",
    live: "https://example.com",
    featured: false
  },
  {
    title: "Blog CMS",
    description: "Content management system for blogs with markdown support, SEO optimization, and multi-author capabilities.",
    technologies: ["React", "Express", "MongoDB", "Markdown", "SEO"],
    image: "/api/placeholder/400/250",
    github: "https://github.com",
    live: "https://example.com",
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
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
