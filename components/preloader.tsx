/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { preloaderSlide, preloaderSlideUp } from "@/lib/anim";

export default function Preloader() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height
    } Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height
    }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height
    } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={preloaderSlideUp}
      initial="initial"
      exit="exit"
      className="fixed z-50 flex items-center justify-center w-screen h-screen bg-cmprimary"
    >
      {dimension.width > 0 && (
        <>
          <div className="flex flex-row absolute z-10 text-2xl sm:text-4xl font-bold text-white">
            <motion.img
              variants={preloaderSlide}
              initial="hidden"
              animate="open"
              className="w-10 h-10 sm:w-14 sm:h-14"
              src="/images/logo/logo.png"
              alt="logo"
            />
            .
          </div>

          <svg className="absolute top-0 w-full h-[calc(100%+75rem)]">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              className="fill-gray-950"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
