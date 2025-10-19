import Image from "next/image";
import { Mail, MapPin, Github, Linkedin, Download } from "lucide-react";

export function ProfileSection() {
  return (
    <div className="w-full py-8 md:py-0 bg-white dark:bg-gray-900 px-6 pt-16 sm:pt-0">
      <div className="space-y-8 text-center">
        {/* Profile Image */}
        <div className="relative w-28 md:w-40 h-28 md:h-40 mx-auto">
          <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-gray-700">
            <Image
              src="/portrait.jpg"
              alt="Profile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 112px, 160px"
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            John Doe
          </h1>
          <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
            Senior Software Engineer
          </h2>
          <div className="h-px w-16 bg-gray-200 dark:bg-gray-700 mx-auto my-4"></div>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-xs mx-auto leading-relaxed">
            15+ years building scalable systems and leading engineering teams
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Mail className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <a 
              href="mailto:john.doe@example.com" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              john.doe@example.com
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-2">
            <MapPin className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              San Francisco, CA
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-4 pt-2">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="/resume.pdf" 
              download="John_Doe_Resume.pdf"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Download size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}