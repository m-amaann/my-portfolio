import { slideLeft, slideUpContact } from "@/lib/anim";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import { IoMail } from "react-icons/io5";

const ContactInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const phrase = "Get Touch With Me 👋";
  return (
    <div ref={ref}>
      <h1 className="gap-2 m-0 leading-10 text-4xl lg:text-5xl sm:text-5xl max-w-sm">
        {phrase.split(" ").map((word, index) => (
          <motion.div
            variants={slideUpContact}
            custom={index}
            animate={isInView ? "open" : "closed"}
            key={index}
            className="relative inline-block overflow-hidden mr-4 sm:mb-2 font-light tracking-wider"
          >
            {word}
          </motion.div>
        ))}
      </h1>
      <motion.p
  variants={slideLeft}
  animate={isInView ? "open" : "closed"}
  className="flex flex-row mt-6 mb-1"
  custom={0}
  transition={{ delay: 0.5 }}
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
  amaan.rcm@gmail.com
</motion.a>

    </div>
  );
};

export default ContactInfo;
