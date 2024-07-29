import { slideLeft, slideUpContact } from "@/lib/anim";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { IoMail } from "react-icons/io5";

const ContactInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const phrase = "Let's have a conversation";
  return (
    <div ref={ref}>
      <h1 className="gap-2 m-0 leading-10 text-4xl lg:text-6xl sm:text-5xl max-w-sm">
        {phrase.split(" ").map((word, index) => {
          return (
            <span className="relative inline-flex overflow-hidden" key={index}>
              <motion.span
                variants={slideUpContact}
                custom={index}
                animate={isInView ? "open" : "closed"}
                key={index}
                className="mr-4 sm:mb-2 font-light tracking-wider"
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </h1>
      <motion.p
        variants={slideLeft}
        animate={isInView ? "open" : "closed"}
        className="mt-6 mb-1"
        custom={0}
      >
        or feel free to contact me at
      </motion.p>
      <motion.a
        variants={slideLeft}
        custom={1}
        href="mailto:amaan.rcm@gmail.com"
        animate={isInView ? "open" : "closed"}
        className="flex items-center gap-1 hover:text-cmaccent transition-colors"
      >
        <IoMail className="w-6 h-6" />
        <motion.p className="">amaan.rcm@gmail.com</motion.p>
      </motion.a>
    </div>
  );
};

export default ContactInfo;
