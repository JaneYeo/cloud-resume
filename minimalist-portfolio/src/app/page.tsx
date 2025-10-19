import { ProfileSection } from "@/components/ProfileSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <main className="min-h-screen md:h-screen flex flex-col bg-white dark:bg-gray-900 pb-16 sm:pb-0">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-5">
          {/* Profile Section - Left Column */}
          <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 md:flex md:items-center">
            <ProfileSection />
          </div>
          
          {/* Content Section - Right Column */}
          <div className="md:col-span-3 flex flex-col md:justify-center">
            <SkillsSection />
            <ExperienceSection />
          </div>
        </div>
      </main>
    </div>
  );
}
