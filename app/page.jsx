import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full pb-12 xl:pb-12">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <p className="text-xl text-white/90 flex flex-wrap items-center justify-center xl:justify-start gap-x-2 gap-y-1">
              <span>Software Engineer</span>
              <span className="text-white/40" aria-hidden>
                ·
              </span>
              <span>Full Stack Developer</span>
              <span className="text-white/40" aria-hidden>
                ·
              </span>
              <span>Web Design</span>
            </p>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br /> <span className="text-accent">Marwane Assou</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I help businesses automate operations, streamline workflows, and ship scalable software with real impact using the latest technologies in the market, modern features, and powered by AI.
            </p>

            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                href="https://www.upwork.com/freelancers/~010e0132f5f8191689"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Check my portfolio</span>
                  <FiArrowUpRight className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
