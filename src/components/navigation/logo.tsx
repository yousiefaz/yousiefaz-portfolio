"use client";

import Link from "next/link";
// import YazLogo from "@/assets/logos/yaz-logo.svg";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* <YazLogo
        className="size-10 fill-black dark:fill-white 
                   transition-colors duration-700 ease-in-out 
                   group-hover:fill-primary dark:group-hover:fill-primary/80"
        title="I made this logo myself!"
      /> */}

      <h1
        className="font-bold text-2xl capitalize text-black dark:text-white 
                   transition-colors duration-700 ease-in-out 
                   group-hover:text-primary dark:group-hover:text-primary/80"
        title="Aka Yaz"
      >
        yousiefaz
      </h1>
    </Link>
  );
};

export default Logo;
