"use client";
import { SKILLS_DATA } from '@/lib/data';
import React from 'react';
import { motion } from "framer-motion";
import SectionHeading from '../section-heading';
import { fadeInAnimationVariants } from "@/lib/anim";
import { useSectionInView } from "@/hooks/useSection";
import Image from 'next/image';

const SkillsSection = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <p className="text-sm md:text-base lg:text-lg -mt-7 !font-normal text-black dark:text-gray-500 pb-7">
        Over the past 2 years, I've been working consistently with some of these
        <span className="relative inline-block pb-1 mx-1 after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1px] after:bg-yellow-300">
          programming languages
        </span>,
        <span className="relative inline-block pb-1 mx-1 after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1px] after:bg-yellow-300">
          technologies
        </span>, and
        <span className="relative inline-block pb-1 mx-1 after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1px] after:bg-yellow-300">
          other tools
        </span>.
        Refining my expertise and delivering effective projects.
      </p>



      {SKILLS_DATA.map((category, index) => (
        <div key={index} className="mb-8 flex flex-col ">
          <h2 className="text-base font-medium mb-4 text-gray-600">{category.category}</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 justify-items-center justify-between md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5  mx-auto">
            {category.skills.map((skill, idx) => (
              <motion.li
                key={idx}
                className="flex items-center md:py-4 md:px-2 lg:py-4 lg:px-2 py-2 px-2 w-[160px] md:w-[210px] lg:w-[210px] bg-[#e5e6e8] dark:bg-[#1E1E1E] rounded-lg"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                <div
                  className="flex justify-center w-7 h-7 bg-opacity-50 rounded-lg"
                  style={{ backgroundColor: skill.color }}
                >
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    className='object-contain'
                    width={20}
                    height={20}
                  />
                </div>
                <div className="text-xs md:text-base pl-2">
                  <span>{skill.name}</span>
                  {skill.learning && (
                    <p className="md:text-xs text-[10px] text-gray-500 ">Learning</p>
                  )}
                </div>


              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;
