"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPhp,
  FaJava,
  FaGithub
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "I'm Creative and passionate Software Engineer,specialized in the design and development of digital innovations. Seeking to broaden my skills, I focus on creating robust, scalable, and high performance solutions for businesses",
  info: [
    {
      fieldName: "Full Name",
      fieldValue: "Marwane Assou",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+212) 635 13 092",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Moroccan",
    },
    {
      fieldName: "Email",
      fieldValue: "marwane.assoupf@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, French",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I build reliable products with modern frontend and backend stacks, focusing on performance, maintainability, and business impact.",
  items: [
    {
      company: "Photon",
      position: "Software Engineer",
      duration: "April 2026 - Remote",
      highlights: [
        "Developed and maintained React/Next.js applications serving [X00k+] monthly users.",
        "Optimized Core Web Vitals (LCP, CLS, FID) to achieve 90+ Lighthouse scores across products.",
        "Implemented SSR and SSG with Next.js for SEO-driven landing pages, increasing organic traffic by 35%.",
        "Created reusable component libraries with TypeScript and Storybook for consistency across multiple projects.",
        "Integrated REST/GraphQL APIs and built client-side caching strategies with SWR/React Query.",
        "Improved accessibility (WCAG 2.1 AA) across UI, reducing accessibility-related bug reports by 60%.",
        "Worked closely with designers (Figma) to ensure pixel-perfect UI/UX implementations.",
        "Mentored junior frontend developers in React best practices, performance optimization, and testing.",
      ],
    },
    {
      company: "Zetta",
      position: "Software Engineer",
      duration: "Jun 2026 - Mar 2026",
      highlights: [
        "Built interactive dashboards with React.js and D3.js for real-time analytics.",
        "Migrated legacy frontend codebase to Next.js, improving build speed and maintainability.",
        "Implemented dark mode, theme customization, and localization (i18n) for global users.",
        "Enhanced UI performance by implementing lazy loading, code splitting, and image optimization.",
        "Developed backend endpoints in Node.js/Express to support new frontend features.",
        "Set up CI/CD pipelines on VDigital Ocean and AWS, automating deployments and previews.",
      ],
    },
    {
      company: "NuralMind AI",
      position: "Junior Software Engineer",
      duration: "Dec 2025 - Jul 2026",
      highlights: [
        "Designed and developed responsive, cross-browser interfaces using HTML5, CSS3, and JavaScript.",
        "Collaborated with designers to implement UI prototypes into production-ready code.",
        "Built custom reusable UI components and ensured codebase followed scalable CSS methodologies (BEM/SMACSS).",
        "Implemented unit and integration tests, improving frontend reliability.",
        "Gained backend exposure by integrating third-party APIs and writing lightweight Node.js services.",
      ],
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
     "I studied Software Engineering at Universiapolis University, where I first learned the fundamentals of programming logic using the C language, which gave me a solid understanding of algorithms, data structures, and problem-solving. As I progressed, I expanded my knowledge to higher-level programming, frameworks, and software architectures, which allowed me to understand how to design, structure, and build scalable applications. This journey helped me grow from understanding the basics of coding to being able to work with complete systems and modern development practices",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codecademy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2020 - 2021",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2019",
    },
    {
      institution: "Design School",
      degree: "Diploma in Graphic Design",
      duration: "2016 - 2018",
    },
    {
      institution: "Community College",
      degree: "Associate Degree in Computer Science",
      duration: "2014 - 2016",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaJava />,
      name: "JAVA",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-12"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[520px] pr-4">
                  <ul className="grid grid-cols-1 gap-[24px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-6 md:px-8 rounded-xl flex flex-col items-start gap-3"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl text-left font-semibold">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                          <ul className="list-disc pl-5 text-white/80 space-y-1">
                            {item.highlights.map((highlight, idx) => (
                              <li key={idx}>{highlight}</li>
                            ))}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
             
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
