import { slideLeft, slideUpContact } from "@/lib/anim";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import { IoMail, IoLogoWhatsapp } from "react-icons/io5";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";

const ContactInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const phrase = "Get In Touch 👋";
  return (
    <div ref={ref}>
      <h1 className="gap-2 m-0 leading-10 text-3xl lg:text-5xl sm:text-5xl max-w-sm">
        {phrase.split(" ").map((word, index) => (
          <motion.div
            variants={slideUpContact}
            custom={index}
            animate={isInView ? "open" : "closed"}
            key={index}
            className="relative inline-block overflow-hidden mr-2 sm:mb-2 font-light "
          >
            {word}
          </motion.div>
        ))}
      </h1>
      <motion.p
        variants={slideLeft}
        animate={isInView ? "open" : "closed"}
        className="flex flex-row mt-6 mb-2"
        custom={0}
        transition={{ delay: 0.5 }}
      >
        or feel free to contact me at
      </motion.p>
      <motion.button
        variants={slideLeft}
        custom={1}
        animate={isInView ? "open" : "closed"}
        className="flex items-center gap-2 pb-2 hover:text-cmaccent transition-colors"
      >
        <IoMail className="w-6 h-6" />
        <a href="mailto:amaan.rcm@gmail.com">amaan.rcm@gmail.com</a>

      </motion.button>

      <motion.a
        variants={slideLeft}
        custom={1}
        href="https://wa.me/94771668444"
        animate={isInView ? "open" : "closed"}
        className="flex items-center gap-2 hover:text-cmaccent transition-colors"
      >
        <IoLogoWhatsapp className="w-6 h-6" />
        +94 77 166 8444
      </motion.a>


      <div className="flex flex-col gap-4 mt-10">
        <h4>Socials</h4>
        <div className="flex gap-4 items-center ">
          <a
            className="bg-white p-4 text-gray-700 hover:text-cmaccent flex items-center gap-2 rounded-full focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/mohamed-amaan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="hover:text-cmaccent transition-colors duration-100 " />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-105 hover:scale-105 hover:text-cmaccent active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/m-amaann"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-105 hover:scale-105 hover:text-purple active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.instagram.com/_.amaann_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare />
          </a>
        </div>
      </div>


    </div>
  );
};

export default ContactInfo;
