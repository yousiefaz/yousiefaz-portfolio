import { buttonVariants } from "@/components/ui/button";
import { Effect } from "@/components/ui/effects";
import { socialLinks } from "@/constants/social-links";
import { cn } from "@/lib/utils";
import { ArrowRightCircle, Download } from "lucide-react";
import Image from "next/image";
import React from "react";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="grid container md:grid-cols-12 items-center gap-6"
    >
      {/* Social links */}
      <ul className="flex md:flex-col gap-6 items-center size-fit mx-auto py-2 md:py-8 px-8 md:px-2 border  rounded-3xl">
        {socialLinks.map((link, index) => {
          const { href, icon: Icon } = link;
          return (
            <li key={index} className="hover:text-primary">
              <a href={href} target="_blank" rel="noreferrer noopener">
                <Icon className="size-5" />
              </a>
            </li>
          );
        })}
      </ul>
      {/* Social links */}

      {/* Presentation */}
      <div className="md:col-span-6 flex flex-col items-center md:items-start gap-y-4">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground capitalize">
          hello, i&apos;m{" "}
          <span className="text-primary cursor-default" title="Yaz">
            yousief
          </span>
        </h2>

        <h5 className="text-xl md:text-2xl font-semibold capitalize">
          frontend developer
        </h5>

        <p className="leading-7 md:leading-8 md:text-lg md:max-w-[85%] text-center md:text-start">
          I build experiences that don&apos;t just work — they speak. Every
          pixel, every line of code, every detail reflects a story I&apos;m
          still writing — mine.
        </p>

        <p
          className="text-sm md:text-base italic text-center md:text-start text-primary cursor-default"
          title="it's art do not touch it"
        >
          &ldquo; Made with love &lt;3 &rdquo;
        </p>

        <div className="flex items-center gap-2 py-4">
          <a
            href="#projects"
            className={cn(
              buttonVariants({ size: "lg" }),
              "px-4 md:px-8 h-9 md:h-11"
            )}
          >
            <span>my work</span>
            <ArrowRightCircle className="size-4" />
          </a>
          <a
            href="/yousiefaz-cv.pdf"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "px-4 md:px-8 h-9 md:h-11"
            )}
            target="_blank"
            download={true}
          >
            <span>download CV</span>
            <Download className="size-4" />
          </a>
        </div>
      </div>
      {/* Presentation */}

      {/* Image */}
      <div className="md:col-span-5 grid place-content-center ">
        <div className="relative flex items-center justify-center size-80 md:size-96">
          <Effect className="size-full" opacity={1} />
          <Effect
            variant="square"
            size="sm"
            className="top-[7%] left-[24%] -rotate-4 animate-float-1"
          />
          <Effect
            variant="square"
            size="sm"
            className="top-[50%] left-[2%] -rotate-42 animate-float-2"
          />
          <Effect
            variant="square"
            size="sm"
            className="bottom-[4%] left-[25%] rotate-30 animate-float-3"
          />
          <Image
            src="/images/profile-pic.jpg"
            alt="profile picture"
            width={500}
            height={500}
            className="object-fill rounded-full border-2 size-[80%] ring-4 ring-primary ring-offset-4 ring-offset-background"
          />
        </div>
      </div>
      {/* Image */}
    </section>
  );
};

export default HomeSection;
