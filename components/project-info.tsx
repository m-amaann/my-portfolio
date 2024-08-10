import { useProjectStore } from "@/hooks/useStore";
import { ProjectTypes } from "@/lib/types";
import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ProjectInfo = ({ project }: { project: ProjectTypes }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const imageRef = useRef(null);

  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      
      <div
        ref={ref}
        className={`${!isInView && "opacity-30"} transition-all overflow-hidden   p-4 rounded-lg`}
      >
        
        <div className="relative aspect-video  w-full ">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              ref={imageRef}
              src={project.imageUrl}
              fill
              alt="Reveal"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
        <div className="mt-4">
          <p
            className={`text-base sm:text-base md:text-lg lg:text-xl font-semibold transition-all`}
          >
            {project.title}
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {project.type}
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag, index) => (
              <div
                key={index}
                className={`${project.tags.length - 1 === index
                  ? "bg-cmaccent text-cmsecondary"
                  : ""
                  } px-4 py-1 border-2 text-xs sm:text-sm lg:text-xs rounded-full`}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectInfo;
