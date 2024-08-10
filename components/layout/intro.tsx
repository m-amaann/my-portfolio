

"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/hooks/useSection";
import { useSection } from "@/hooks/useSection";
import { slideUpDesc, slideUpHeading } from "@/lib/anim";
import Image from "next/image";
import { FlipWords } from "../ui/flip-words";



const words1 = ["Hi", "There,", "I'm"];
const words2 = ["Mohamed", "Amaan"];
const description: string = `A self-driven individual, aspiring to explore new horizons in the field of IT with an appetite for Full Stack Engineering.`;
const flipwords = ["& UX Designer", "From Sri Lanka"];


export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useSection();

  const renderText = (words: string[], startDelay: number = 0) =>
    words.map((word, i) => (
      <React.Fragment key={i}>
        {word.split("").map((char, j) => (
          <motion.span
            key={j}
            custom={startDelay + i + j * 0.05}
            variants={slideUpHeading}
            className="-tracking-normal"
          >
            {char}
          </motion.span>
        ))}
        {i < words.length - 1 && <span>&nbsp;</span>}
      </React.Fragment>
    ));

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col md:flex-row items-center justify-center px-4 py-8 sm:py-12 md:py-24 min-h-screen"
    >
      <div className="flex flex-col mt-24 w-full md:w-1/2 text-left md:pr-16">
        {/* Content Section */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <motion.div
            className="flex flex-col text-left"
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl  font-medium mb-2 leading-normal"
              initial="hidden"
              animate="visible"
            >
              {renderText(words1)} 👋
            </motion.div>
            <motion.div
              className="flex text-2xl sm:text-2xl md:text-[38px] font-bold text-[#0458AC] leading-normal tracking-wide uppercase"
              initial="hidden"
              animate="visible"
            >
              {renderText(words2)}
            </motion.div>
            <div className="flex flex-col uppercase">
              <div className="flex flex-row flex-wrap text-xl sm:text-2xl md:text-3xl lg:text-3xl pt-2 md:pt-3 lg:pt-4 xl:pt-4 font-bold leading-normal tracking-normal text-black dark:text-white">
                <span className="flex-shrink-0 tracking-wider">Software Engineer</span>
                <span className="flex-shrink-0 tracking-wider">
                  <FlipWords words={flipwords} />
                </span>
              </div>
            </div>


            <motion.p
              className="text-[12px] sm:text-base md:text-base lg:text-lg leading-normal text-gray-500 py-4"
              initial="hidden"
              animate="visible"
              variants={slideUpDesc}
              custom={0}
            >
              {description}
            </motion.p>
            <motion.div
              className="flex flex-wrap items-center gap-4 text-sm sm:text-base md:text-lg lg:text-xl font-medium"
              initial="hidden"
              animate="visible"
              variants={slideUpDesc}
              custom={1}
            >
              <Link
                href="#contact"
                className="flex items-center gap-2 py-3 px-6 text-xs sm:text-sm md:text-base transition rounded-full bg-cmaccent dark:bg-cmaccent/80 text-cmsecondary hover:bg-cmaccent/80"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                Contact Me{" "}
                <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
              </Link>
              <a
                className="flex items-center gap-2 py-3 px-6 text-xs sm:text-sm md:text-base transition bg-white rounded-full borderBlack dark:bg-white/10"
                href="#contact"
              // download
              >
                Download CV <HiDownload className="transition opacity-60" />
              </a>
              <div className="flex gap-4 items-center">
                <a
                  className="bg-white p-3 text-xs sm:text-sm md:text-base text-gray-700 hover:text-cmaccent rounded-full borderBlack dark:bg-white/10 dark:text-white/60"
                  href="https://www.linkedin.com/in/mohamed-amaan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin className="hover:text-cmaccent transition-colors duration-100" />
                </a>
                <a
                  className="bg-white p-3 text-xs sm:text-sm md:text-base text-gray-700 rounded-full borderBlack dark:bg-white/10 dark:text-white/60"
                  href="https://github.com/m-amaann"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-6 sm:mt-8 md:mt-0">
        <div className="w-full h-full flex justify-center items-center overflow-hidden">

          <Image
            src="/profile/image-5.png"
            className=" w-full h-auto"
            width={300}
            height={300}
            alt="Profile Image"
          />

        </div>
      </div>
    </section>
  );
}

