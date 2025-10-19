import { Award, Trophy, Star, Target } from 'lucide-react';

const achievements = [
  {
    title: "AWS Solutions Architect",
    category: "Certification",
    year: "2023",
    description: "Certified AWS Solutions Architect with expertise in cloud architecture and deployment strategies.",
    icon: Award,
    featured: true
  },
  {
    title: "Tech Innovation Award",
    category: "Recognition",
    year: "2022",
    description: "Recognized for developing a scalable microservices architecture that improved system performance by 40%.",
    icon: Trophy,
    featured: true
  },
  {
    title: "Open Source Contributor",
    category: "Community",
    year: "2021-2023",
    description: "Active contributor to multiple open source projects with 500+ commits and 50+ stars across repositories.",
    icon: Star,
    featured: true
  },
  {
    title: "Team Leadership Excellence",
    category: "Leadership",
    year: "2022",
    description: "Led a team of 8 developers to deliver a critical project 2 weeks ahead of schedule.",
    icon: Target,
    featured: false
  },
  {
    title: "Performance Optimization Expert",
    category: "Technical",
    year: "2021",
    description: "Reduced application load time by 60% through advanced optimization techniques and caching strategies.",
    icon: Award,
    featured: false
  },
  {
    title: "Mentorship Program Lead",
    category: "Community",
    year: "2020-2023",
    description: "Mentored 15+ junior developers, helping them advance their careers and technical skills.",
    icon: Star,
    featured: false
  }
];

export default function Achievements() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold mb-4">Achievements</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Professional milestones, certifications, and recognitions
          </p>
        </div>

        <div className="space-y-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-b-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-1" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{achievement.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{achievement.category}</p>
                      <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                    {achievement.year}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
