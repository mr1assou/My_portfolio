"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "reviews",
    path: "/reviews",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col overflow-y-auto">
        <div className="flex flex-col items-center pt-16 pb-10 gap-8">
          <Link href="/" className="text-center shrink-0">
            <h1 className="text-4xl font-semibold">
              Marwane<span className="text-accent">.</span>
            </h1>
          </Link>
          <nav className="flex flex-col items-center gap-6 w-full">
            {links.map((link, index) => {
              return (
                <Link
                  href={link.path}
                  key={index}
                  className={`${
                    link.path === pathname &&
                    "text-accent border-b-2 border-accent"
                  } text-xl capitalize hover:text-accent transition-all`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <Link
            href="https://www.upwork.com/freelancers/~010e0132f5f8191689"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-full max-w-[240px]"
          >
            <Button className="w-full">Hire me</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
