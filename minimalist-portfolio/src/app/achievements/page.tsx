import { Award, Trophy, Star, Target } from 'lucide-react';

const achievements = [
  {
    title: "Huawei ICT Competition 2024-2025 Malaysia",
    category: "Third Prize National Competition",
    year: "3 Dec 2024",
    description: "Competing with other university students in Malaysia, achieving a top 20% ranking among 1,200 students from 40 universities and colleges across Malaysia",
    icon: Trophy,
    featured: true
  },
  {
    title: "GODAMLah! Hackathon 2024",
    category: "Finalist",
    year: "Aug - Dec 2024",
    description: "Developed a prototype to secure user personal data with Blockchain Certificate Technology, engineered with Next.js and TypeScript.",
    icon: Star,
    featured: true
  },
  {
    title: "BRIDG3 Hackathon 2024",
    category: "National Level",
    year: "27 - 28 July 2024",
    description: "Redesigned the z-Fund Distribution and Management System using Blockchain technology via Maschain API, enhancing security and transparency in fund allocation, handling 1,000+ concurrent transactions.",
    icon: Target,
    featured: true
  },
  {
    title: "Huawei HCIA-Artificial Intelligence",
    category: "Certification",
    year: "11 July 2024",
    description: "Certified Huawei Artificial Intelligence Engineer and completed the AI training course",
    icon: Award,
    featured: true
  },
  {
    title: "RunCloud x AWS Cloud Practitioners Challenge",
    category: "Semi-finalist",
    year: "Oct 2022",
    description: "Leveraged AWS services to design and deploy Grocerline, a prototype e-commerce platform.",
    icon: Star,
    featured: true
  },
  {
    title: "Dean’s List / First Class Honours (UMPSA)",
    category: "Academic Achievement",
    year: "2021, 2022, 2024",
    description: "Consistent top performer; Dean’s List multiple semesters and First Class Honours.",
    icon: Award,
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
