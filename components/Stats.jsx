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

const StatValue = ({ item, className }) =>
  item.value ? (
    <span className={className}>{item.value}</span>
  ) : (
    <CountUp
      end={item.num}
      duration={5}
      delay={2}
      suffix={item.suffix || ""}
      separator=","
      className={className}
    />
  );

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 w-full">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Mobile: label column | value column */}
        <div className="md:hidden w-full max-w-md mx-auto">
          <div className="flex flex-col divide-y divide-white/10">
            {stats.map((item, index) => (
              <div
                key={`m-${index}`}
                className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 items-center py-4 first:pt-0"
              >
                <p className="text-white/80 text-sm leading-snug min-w-0 pr-2">
                  {item.text}
                </p>
                <div className="shrink-0 text-right">
                  <StatValue
                    item={item}
                    className="text-xl font-extrabold leading-none tabular-nums text-white"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet & desktop: value + label side by side in a grid */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[90vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={`d-${index}`}
              className="flex gap-4 items-center justify-center xl:justify-start min-w-0"
            >
              <StatValue
                item={item}
                className="text-4xl xl:text-6xl font-extrabold shrink-0 tabular-nums"
              />
              <p
                className={`leading-snug text-white/80 ${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                }`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
