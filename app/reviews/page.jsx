"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Bloom Retail",
    text: "Marwane delivered our storefront and admin tools ahead of schedule. Communication was clear, the code quality was solid, and he proactively suggested improvements we had not considered. We would hire him again without hesitation.",
  },
  {
    name: "James Okonkwo",
    role: "Product Lead, Northline Labs",
    text: "We needed a full-stack engineer who could own features end to end. He integrated our APIs, polished the UI, and left documentation that made handoff easy. Professional, reliable, and detail-oriented throughout the engagement.",
  },
  {
    name: "Elena Vasquez",
    role: "Operations Director, FieldSync",
    text: "He automated several of our manual workflows and connected our stack in a way that actually reduced errors. The solution was maintainable and his explanations helped our team adopt the new process quickly.",
  },
  {
    name: "David Chen",
    role: "Agency Partner, Studio Meridian",
    text: "We brought him in for a client project with a tight timeline. He communicated daily, hit every milestone, and the client was thrilled with the result. A strong collaborator on both technical and design alignment.",
  },
];

const StarRow = () => (
  <div className="flex gap-1 text-accent" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <FaStar key={i} className="text-lg" aria-hidden />
    ))}
  </div>
);

const Reviews = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-12"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 text-center xl:text-left mb-12 xl:mb-14">
          <h1 className="text-4xl xl:text-5xl font-bold">Reviews</h1>
          <p className="max-w-2xl text-white/60 mx-auto xl:mx-0">
            Feedback from clients and collaborators on recent projects.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
          {reviews.map((review, index) => (
            <li
              key={index}
              className="bg-[#232329] rounded-xl p-8 xl:p-10 flex flex-col gap-5 text-left"
            >
              <StarRow />
              <p className="text-white/80 leading-relaxed">{review.text}</p>
              <div className="pt-2 border-t border-white/10">
                <p className="font-semibold text-white">{review.name}</p>
                <p className="text-sm text-white/50 mt-1">{review.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Reviews;
