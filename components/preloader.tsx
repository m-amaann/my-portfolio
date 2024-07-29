"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { preloaderSlide, preloaderSlideUp } from "@/lib/anim";
import { Copyright } from "lucide-react";

export default function Preloader() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
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
          <div className="absolute z-10 text-2xl sm:text-4xl font-bold text-white">
            <motion.p
              variants={preloaderSlide}
              initial="hidden"
              animate="open"
              exit="closed"
              custom={0}
              className="mb-1 sm:mb-2"
            >
              Niamat Marjan
            </motion.p>
            <motion.div
              variants={preloaderSlide}
              initial="hidden"
              animate="open"
              exit="closed"
              custom={1}
              className="flex items-center gap-2 sm:gap-3 text-cmaccent"
            >
              <Copyright className="w-6 h-6 sm:w-9 sm:h-9" /> Folio 2024
            </motion.div>
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
