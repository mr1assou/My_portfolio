"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I design and ship fast, accessible web experiences that turn visitors into customers. You get a full-stack partner for modern front ends, secure APIs, and integrations—so you launch with less risk, clearer ownership, and room to scale as your product grows.",
    href: "",
  },
  {
    num: "02",
    title: "Mobile Development",
    description:
      "I build cross-platform apps with React Native so you reach iOS and Android from one codebase—cutting cost and time compared to separate native teams. You receive polished UI, solid performance, and maintainable code, which means quicker releases and a consistent brand on every device.",
    href: "",
  },
  {
    num: "03",
    title: "Deployment",
    description:
      "I take your app from “it works locally” to production you can trust: cloud hosting, environments, and pipelines that support safe updates. You gain reliable uptime, repeatable deploys, and infrastructure aligned with how your team actually ships—so delivery stays predictable under real traffic.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
