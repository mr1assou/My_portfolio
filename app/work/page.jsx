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
    num: "05",
    category: "Social media platform - Showcase Salon Feecra in Morocco",
    title: "project 5",
    description:
      "With this project, I won first place at Feecra Expo, a creative showcase salon in Morocco. It is a social media platform that connects fresh artists and talents with restaurants and organizations. Users can showcase their skills by posting photos, videos, and performing live streams where audiences can watch and engage. The platform helps emerging performers find opportunities while enabling businesses to discover new talent for their events and services.",
    stack: [{ name: "React Js" }, { name: "Express Js" }, { name: "SQL" }, { name: "TypeScript" }, { name: "Tailwind Css" }, { name: "Web Rtc" }, { name: "Ci/CD" }, { name: "Deployment in Digital Ocean" }],
    image: "/assets/work/thumb5.png",
    live: "",
    github: "https://github.com/mr1assou/aurax",
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
    num: "06",
    category: "AI Product Marketing",
    title: "Fitly AI - Weight Loss Planner",
    description:
      "FitlyAI is an AI-powered web application that helps users lose weight by generating personalized plans based on their profile, goals, and habits. The platform provides smart guidance, practical recommendations, and a clear user flow to make healthy progress easier to follow. Built with Next.js full-stack development and API integration.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "OpenAI API" },
      { name: "Full-Stack Development" },
      { name: "API Integration" },
    ],
    image: "/assets/work/thumb7.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Full Stack Project",
    title: "Lapidaris",
    description:
      "Lapidaris is a memorial platform built with Next.js and Node.js that allows families and visitors to honor their loved ones online. The platform includes a virtual tribute shop where users can purchase symbolic items such as candles, flowers, and memorial gifts dedicated to the deceased. As a Full Stack Developer, I developed the Next.js frontend, the Node.js backend, and integrated Stripe for secure payments. The system enables users to browse memorial pages, select tribute items, and complete purchases easily, creating a respectful digital space for remembrance.",
    stack: [
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "Stripe API" },
      { name: "API Development" },
      { name: "Next.js" },
    ],
    image: "/assets/work/thumb4.png",
    live: "",
    github: "",
  },
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
    num: "05",
    category: "Microservice Project",
    title: "project 6",
    description:
      "This Inventory Management System was built with TypeScript, React.js, and Node.js to help businesses manage stock in real time. As a Full Stack Developer, I developed a React.js + TypeScript frontend and a scalable Node.js API for product management, stock updates, and reporting. The system includes a centralized dashboard and integrates the OpenAI ChatGPT model to assist users with smart inventory queries. The application was deployed on AWS for reliable and scalable production infrastructure.",
    stack: [
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "API Integration" },
      { name: "AWS Lambda" },
      { name: "React" },
    ],
    image: "/assets/work/thumb6.png",
    live: "",
    github: "",
  },
];

// robust: strip query/hash before testing the extension
const isVideo = (path) => {
  const clean = path.split('?')[0].split('#')[0];
  return /\.(mp4|webm|ogg|mkv)$/i.test(clean);
};


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


            {project.github ? (
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
            ) : null}
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
                          controls
                          playsInline
                          muted
                          loop
                          preload="metadata"
                          poster={p.poster /* if you have one */}
                        >
                          <source src={p.image} type="video/mp4" />
                        </video>
                      ) : (
                        <div className="relative h-full w-full">
                          <Image
                            src={p.image}
                            alt={p.title || ""}
                            fill
                            priority={index === 0}
                            sizes="100vw"
                            quality={100}
                            className="object-contain"
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
