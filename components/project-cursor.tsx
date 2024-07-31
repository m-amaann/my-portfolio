"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { projectViewOpacity } from "@/lib/anim";

function ProjectCursor() {
  const cursorSize = 80;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: { clientX: any; clientY: any }) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);
  return (
    <motion.div
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
      variants={projectViewOpacity}
      initial="initial"
      animate="enter"
      className="fixed flex text-sm cursor-pointer justify-center items-center w-20 h-20 z-[1000] bg-cmaccent/90 text-cmsecondary rounded-full pointer-events-none"
    >
      View
    </motion.div>
  );
}

export default ProjectCursor;
