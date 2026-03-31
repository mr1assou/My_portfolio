"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 20,
    text: "Projects Completed",
  },
  {
    num: 700,
    suffix: "+",
    text: "Freelancing Hours",
  },
  {
    num: 10,
    text: "Technologies Mastered",
  },
  {
    num: 1200,
    text: "Code Commits",
  },
  {
    value: "Top Rated",
    text: "Freelancer on Upwork",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[90vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex gap-4 items-center justify-center sm:justify-start"
                key={index}
              >
                {item.value ? (
                  <span className="text-2xl xl:text-4xl font-extrabold leading-none">
                    {item.value}
                  </span>
                ) : (
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    suffix={item.suffix || ""}
                    className="text-4xl xl:text-6xl font-extrabold"
                  />
                )}
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
