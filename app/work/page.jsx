"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full Stack Project",
    title: "MWM TECH - Tech Company in US",
    description:
      "I developed a custom website for MWM Tech, a company based in the USA , designed to connect the business directly with potential clients. The site features an integrated contact form that automatically sends client details via email to the MWM Tech team upon submission. In addition, the system maintains communication with clients through automated email responses, ensuring prospects feel acknowledged instantly while the team prepares a tailored follow-up.",
    stack: [{ name: "Next js" }, { name: "Tailwind CSS" }, { name: "Email System" }],
    image: "/assets/work/thumb1.png",
    live: "https://www.mwmofficiel.com/",
    github: "https://github.com/mr1assou/MWM",
  },
  {
    num: "02",
    category: "Full Stack Project",
    title: "project 2",
    description:
      "I developed a modern website for a consulting agency in France that specializes in bootcamp consulting. The platform was designed to highlight their expertise, showcase their training programs, and make it easier for potential clients to learn about their services. To support client acquisition, the site includes clear service presentations, an integrated contact system. Combined with a streamlined user experience, these features build trust, encourage engagement, and grow its presence in the competitive consulting market.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Git" }],
    image: "/assets/work/thumb2.png",
    live: "https://consulting-efficience.vercel.app/",
    github: "https://github.com/mr1assou/ConsultingEfficience",
  },
  {
    num: "03",
    category: "frontend Project",
    title: "project 3",
    description:
      "I developed a custom website for a marketing agency to highlight their services, boost online visibility, and streamline client acquisition. Built with Next.js for fast rendering, Tailwind CSS for a responsive and customizable UI, and deployed on Vercel for seamless hosting, the platform delivers a modern, user-friendly experience. It features professional branding, clear service showcases, and optimized navigation, helping the agency build trust, enhance engagement, generate leads, and strengthen its digital presence.",
    stack: [{ name: "Next.js" }, { name: "Bootstrap" }, { name: "Git" }, { name: "Vercel" }],
    image: "/assets/work/thumb3.png",
    live: "https://marketing-agency-rho.vercel.app/",
    github: "https://github.com/mr1assou/marketing-agency",
  },
  {
    num: "04",
    category: "AI-powered gym management system integrated with computer vision",
    title: "project 4",
    description:
      "In the context of gym membership management, it is becoming increasingly crucial to automate processes in order to optimize member tracking. This project proposes an innovative web application integrating computer vision to automatically detect the faces of members whose subscriptions have expired. By using advanced facial recognition technologies, the application enables gym managers to identify invalid members in real time. This solution aims to reduce human errors, secure access, and ensure more efficient subscription management. In addition, it improves the overall experience by providing fast and automated control. This project is part of a technological innovation approach tailored to the modern needs of gyms.",
    stack: [{ name: "Php" }, { name: "SQL" }, { name: "JS" }, { name: "Tailwind Css" }, { name: "Ai integration" }, { name: "Computer vision" }, { name: "python" }],
    image: "/assets/work/thumb4.mkv",
    live: "",
    github: "https://github.com/mr1assou/gym_management",
  },
  {
    num: "05",
    category: "Social media platform - Showcase Salon Feecra in Morocco",
    title: "project 5",
    description:
      "With this project, I won first place at Feecra Expo, a creative showcase salon in Morocco. It is a social media platform that connects fresh artists and talents with restaurants and organizations. Users can showcase their skills by posting photos, videos, and performing live streams where audiences can watch and engage. The platform helps emerging performers find opportunities while enabling businesses to discover new talent for their events and services.",
    stack: [{ name: "React Js" }, { name: "Express Js" }, { name: "SQL" }, { name: "TypeScript" }, { name: "Tailwind Css" }, { name: "Web Rtc" }, { name: "Ci/CD" }, { name: "Deployment in Digital Ocean" }],
    image: "/assets/work/thumb5.mp4",
    live: "",
    github: "https://github.com/mr1assou/aurax",
  },
  {
    num: "05",
    category: "Microservice project - Spring Boot",
    title: "project 6",
    description:
      "At Norsys Africa, I designed and developed a dedicated microservice to manage employees’ remote work days. The system allows staff members to book and request remote days, while also ensuring that each team has a predefined default remote day to maintain consistency across departments. The service was built with scalability and flexibility in mind, enabling HR and managers to easily track and validate requests. It also provides rules to handle overlapping bookings, team-specific policies, and reporting for better workforce planning.",
    stack: [{ name: "React Js" }, { name: "Express Js" }, { name: "SQL" }, { name: "TypeScript" }, { name: "Tailwind Css" }, { name: "Web Rtc" }, { name: "Ci/CD" }, { name: "Deployment in Digital Ocean" }],
    image: "/assets/work/thumb6.png",
    live: "",
    github: "https://github.com/mr1assou/Microservices-Project",
  },
];

const isVideo = (path) => /\.(mp4|webm|ogg|mkv)$/i.test(path);

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-6 md:py-10"
    >
      <div className="container mx-auto">
        {/* COLUMN LAYOUT: Demo on top, details under */}
        <div className="flex flex-col gap-8">
          {/* Demo / Media slider (TOP) */}

          <div className="flex items-center gap-3 md:gap-4">
            {/* Live project button — only show if a live URL exists */}
            {project.live ? (
              <Link href={project.live} target="_blank" rel="noopener noreferrer">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-12 h-12 md:w-[70px] md:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-xl md:text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            ) : null}


            <Link href={project.github} target="_blank" rel="noopener noreferrer">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-12 h-12 md:w-[70px] md:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsGithub className="text-white text-xl md:text-3xl group-hover:text-accent" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github repository</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </div>
          <div className="w-full">
            <Swiper
              spaceBetween={24}
              slidesPerView={1}
              // Taller heights and full width. Object-contain ensures full media is visible.
              className="h-[60vh] md:h-[72vh] lg:h-[80vh] w-full mb-2"
              onSlideChange={handleSlideChange}
            >
              {projects.map((p, index) => (
                <SwiperSlide key={index} className="w-full">
                  {/* Use flex center + object-contain to avoid cropping */}
                  <div className="relative h-full w-full bg-black/90 rounded-xl overflow-hidden flex items-center justify-center">
                    {/* Optional subtle overlay */}

                    <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />

                    <div className="relative z-0 h-full w-full flex items-center justify-center">
                      {isVideo(p.image) ? (
                        <video
                          className="max-h-full max-w-full w-auto h-auto object-contain"
                          src={p.image}
                          controls
                          playsInline
                          // remove muted/loop if you want audio by default
                          muted
                          loop
                          preload="metadata"
                        />
                      ) : (
                        <div className="relative h-full w-full">
                          <Image
                            src={p.image}
                            alt=""
                            fill
                            priority={index === 0}
                            sizes="100vw"
                            className="object-contain"  // <- show full image
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-4 bottom-4 z-20"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-lg md:text-[22px] w-10 h-10 md:w-[44px] md:h-[44px] flex justify-center items-center transition-all rounded-full"
              />
            </Swiper>
          </div>

          {/* Details (BOTTOM) */}
          <div className="w-full">
            <div className="flex flex-col gap-5 md:gap-7">
              <h2 className="text-2xl md:text-3xl lg:text-[44px] font-bold leading-tight text-white">
                {project.category}
              </h2>

              <p className="text-base md:text-lg text-white/70">{project.description}</p>

              <ul className="flex flex-wrap gap-3 md:gap-4">
                {project.stack.map((item, i) => (
                  <li key={i} className="text-base md:text-xl text-accent">
                    {item.name}
                    {i !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="border border-white/15" />

            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
