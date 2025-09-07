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
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" } , { name: "Git" }],
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
    stack: [{ name: "Next.js" }, { name: "Bootstrap" } , { name: "Git" } , { name: "Vercel" }],
    image: "/assets/work/thumb3.png",
    live: "https://marketing-agency-rho.vercel.app/",
    github: "https://github.com/mr1assou/marketing-agency",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-6 md:py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-4 md:gap-[30px] h-[50%]">
              {/* outline num */}
          
              {/* project category */}
              <h2 className="text-2xl md:text-3xl lg:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-sm md:text-base text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-2 md:gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-sm md:text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-3 md:gap-4">
                {/* live project button */}
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
                {/* github project button */}
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
            </div>
          </div>
          <div className="w-full lg:w-[55%]">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              className="lg:h-[520px] mb-8 md:mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[300px] md:h-[400px] lg:h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-lg md:text-[22px] w-10 h-10 md:w-[44px] md:h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
