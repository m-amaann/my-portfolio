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
      {SKILLS_DATA.map((category, index) => (
        <div key={index} className="mb-8 flex flex-col ">
          <h2 className="text-base font-medium mb-4">{category.category}</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-2 justify-items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 max-w-screen-xl mx-auto">
            {category.skills.map((skill, idx) => (
              <motion.li
                key={idx}
                className="flex items-center py-4 pl-3 w md:w-[210px] lg:w-[210px] bg-[#1E1E1E] border rounded-lg"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                <div 
                  className="flex items-center justify-center w-9 h-9 rounded-lg"
                  style={{ backgroundColor: skill.color }} 
                >
                  <Image 
                    src={skill.logo} 
                    alt={skill.name} 
                    className='object-contain'
                    width={26}
                    height={26} 
                  />
                </div>
                <span className="text-sm md:text-base ml-3">{skill.name}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;
