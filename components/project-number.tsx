import { useProjectStore } from "@/hooks/useStore";
import { projectNumberScroll } from "@/lib/anim";
import { ProjectTypes } from "@/lib/types";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const ProjectNumber = ({ project }: { project: ProjectTypes }) => {
  const inViewProject = useProjectStore((state) => state.inViewProject);

  return (
    <div
      className={cn(
        `absolute inset-0 p-12 h-full overflow-hidden sm:text-7xl md:text-8xl text-9xl flex items-center w-full transition-all`
      )}
    >
      <p>0</p>
      <AnimatePresence initial={false}>
        {inViewProject === project.number && (
          <motion.div
            key={project.number}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={projectNumberScroll}
            transition={{ duration: 0.5 }}
          >
            <p>{project.number}.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectNumber;
