"use client";
import '../app/style.css';
import '../app/global.css';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiPython } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CTA_BUTTON_BASE } from "@/lib/constants";

const skills = [
  { icon: <FaHtml5 size={32} className="sm:size-[50px] md:size-[48px]" />, name: "HTML5" },
  { icon: <FaCss3 size={32} className="sm:size-[50px] md:size-[48px]" />, name: "CSS3" },
  { icon: <FaJs size={32} className="sm:size-[50px] md:size-[48px]" />, name: "JavaScript" },
  { icon: <FaReact size={32} className="sm:size-[50px] md:size-[48px]" />, name: "React" },
  { icon: <SiNextdotjs size={32} className="sm:size-[50px] md:size-[48px]" />, name: "Next.js" },
  { icon: <SiTailwindcss size={32} className="sm:size-[50px] md:size-[48px]" />, name: "Tailwind" },
  { icon: <SiPython size={32} className="sm:size-[50px] md:size-[48px]" />, name: "Python" },
  { icon: <FaFigma size={32} className="sm:size-[50px] md:size-[48px]" />, name: "Figma" },
];


const education = [
  {
    date: "2022-2026",
    title: "Software engineering",
    institution: "Üsküdar University",
  },
  {
    date: "2025",
    title: "Web Development",
    institution: "cs50 web programing from harvard",
  },
];

const experience = [
  {
 
    
    date: "2025-Present",
    title: "Freelancer",
    company: "Freelancing Agency",
  },
  {
    date: "2025 - Summer",
    title: "Software Developer Intern",
    company: "EARTECH",
  },
  {
    date: "2024 - Summer",
    title: "Software Developer Intern",
    company: "Eartech",
  },
];

const Resume = () => {
  return (
    <motion.div className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 xl:py-0 w-full mt-8 sm:mt-12">
      <div className="w-full px-2 sm:px-4 md:px-8">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-y-8 xl:gap-y-16 gap-x-0 xl:gap-x-32 items-start w-full">
          {/* LEFT */}
          <div className="w-full xl:w-[320px]">
            <h2 className="text-2xl sm:text-3xl xl:text-5xl font-bold font-mono !mb-10 xl:mb-0 whitespace-nowrap">
              Why hire me?
            </h2>
            <TabsList className="flex flex-col gap-2 sm:gap-4 w-full">
              <TabsTrigger value="about" className="h-[44px] sm:h-[52px] md:h-[60px] text-base sm:text-lg md:text-xl py-2 sm:py-4 font-mono font-semibold data-[state=active]:bg-[var(--skin-color)] data-[state=active]:text-black bg-[#232323] text-white rounded-lg transition-colors">
                About me
              </TabsTrigger>
              <TabsTrigger value="skills" className="h-[44px] sm:h-[52px] md:h-[60px] text-base sm:text-lg md:text-xl py-2 sm:py-4 font-mono font-semibold data-[state=active]:bg-[var(--skin-color)] data-[state=active]:text-black bg-[#232323] text-white rounded-lg transition-colors">
                Skills
              </TabsTrigger>
              <TabsTrigger value="education" className="h-[44px] sm:h-[52px] md:h-[60px] text-base sm:text-lg md:text-xl py-2 sm:py-4 font-mono font-semibold data-[state=active]:bg-[var(--skin-color)] data-[state=active]:text-black bg-[#232323] text-white rounded-lg transition-colors">
                Education
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="h-[44px] sm:h-[52px] md:h-[60px] py-0 text-base sm:text-lg md:text-xl font-mono font-semibold data-[state=active]:bg-[var(--skin-color)] data-[state=active]:text-black bg-[#232323] text-white rounded-lg transition-colors"
              >
                Experience
              </TabsTrigger>
            </TabsList>
          </div>
          {/* RIGHT */}
          <div className="flex-1 xl:pl-0 w-full">
            <div className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] max-h-[600px]">
              <TabsContent value="about" className="w-full">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">About me</h2>
                <p className="text-gray-400 !mb-6 sm:mb-12 font-mono text-sm sm:text-base">
I&apos;m a passionate software engineer and freelancer at an agency that delivers full AI-powered websites and builds advanced automations and AI agents. We combine modern web technologies with intelligent systems to create seamless, smart digital solutions.

                </p>
                <div className="rounded-xl p-4 sm:p-8 mb-4 sm:mb-8">
                  <div className="grid grid-cols-1 mb-4 sm:mb-8 md:grid-cols-2 gap-y-2 sm:gap-y-4 gap-x-4 sm:gap-x-12 font-mono text-white text-sm sm:text-base">
                    <div><span className="text-gray-400">Name:</span> Mohcen djeid</div>
                    <div><span className="text-gray-400">Phone:</span> (+90) 535 523 5640</div>
                    <div><span className="text-gray-400">Experience:</span> 2+ Years</div>
                    
                    <div><span className="text-gray-400">Nationality:</span> algerian</div>
                    <div><span className="text-gray-400">Email:</span> mouhcendjeid@gmail.com</div>
                    <div><span className="text-gray-400">Freelance:</span> Available</div>
                    <div><span className="text-gray-400">Languages:</span> English, french,arabic,turkish</div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <a
                    href="/Mohcencv.pdf"
                    className={cn(CTA_BUTTON_BASE, "text-sm sm:text-base")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10 px-2">View CV</span>
                  </a>
                </div>
              </TabsContent>
              <TabsContent value="skills" className="w-full">
                <h2 className="text-2xl sm:text-3xl font-bold font-mono mb-2">My skills</h2>
                <p className="text-gray-400 font-mono !mb-6 sm:mb-12 text-sm sm:text-base">
                  
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
                  {skills.map((skill, idx) => (
                    <div key={idx} className="bg-[#232323] rounded-xl flex flex-col items-center justify-center !p-4 sm:p-8 shadow">
                      <span className="text-3xl sm:text-4xl md:text-5xl mb-1 sm:mb-2 text-white">{skill.icon}</span>
                      <span className="text-white text-sm sm:text-lg font-mono">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="experience" className="w-full">
                <h2 className="text-2xl sm:text-3xl font-bold font-mono mb-3 sm:mb-6 text-center">My experience</h2>
                <p className="text-gray-400 font-mono !mb-6 sm:mb-12 text-center text-sm sm:text-base">
                  {/* You can add a short description here if you want */}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-h-screen sm:max-h-[420px] overflow-y-auto scrollbar-hover">
                  {experience.map((exp, idx) => (
                    <div key={idx} className="bg-[#232323] rounded-2xl !p-4 sm:p-6 flex flex-col h-[120px] sm:h-[160px] shadow">
                      <span className="text-[var(--skin-color)] font-bold text-xs sm:text-base mb-1 sm:mb-2 font-mono block">{exp.date}</span>
                      <h3 className="text-base sm:text-xl font-bold text-white !mb-4 sm:mb-6 font-mono">{exp.title}</h3>
                      <div className="flex-grow" />
                      <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-base font-mono">
                        <span className="inline-block w-2 h-2 rounded-full bg-[var(--skin-color)]"></span>
                        {exp.company}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="education" className="w-full">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">My education</h2>
                <p className="text-gray-400 !mb-6 sm:mb-12 text-sm sm:text-base">
                  
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-h-screen sm:max-h-[420px] overflow-y-auto scrollbar-hover">
                  {education.map((edu, idx) => (
                    <div key={idx} className="bg-[#232323] rounded-2xl !p-4 sm:p-6 flex flex-col h-[120px] sm:h-[160px] shadow">
                      <span className="text-[var(--skin-color)] font-bold text-xs sm:text-base mb-1 sm:mb-2 font-mono block">{edu.date}</span>
                      <h3 className="text-base sm:text-xl font-bold text-white !mb-4 !sm:mb-6 font-mono">{edu.title}</h3>
                      <div className="flex-grow" />
                      <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-base font-mono">
                        <span className="inline-block w-2 h-2 rounded-full bg-[var(--skin-color)]"></span>
                        {edu.institution}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
