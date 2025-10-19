import { Code, Server, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["TypeScript", "Python", "Go"]
  },
  {
    title: "Backend", 
    icon: Server,
    skills: ["Node.js", "PostgreSQL", "Redis"]
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS", "Kubernetes", "Docker"]
  }
];

export function SkillsSection() {
  return (
    <div className="py-6 bg-white dark:bg-gray-900 px-6">
      <div className="space-y-4 max-w-2xl mx-auto">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">
            Core Skills
          </h3>
          <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.title}>
                <div className="flex items-center space-x-2 mb-2">
                  <IconComponent 
                    className="w-4 h-4" 
                    stroke="#9DA2AF" 
                    strokeWidth={2}
                  />
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2.5 py-1 text-sm bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full ring-1 ring-gray-200 dark:ring-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}