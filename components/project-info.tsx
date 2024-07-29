import { useProjectStore } from "@/hooks/useStore";
import { ProjectTypes } from "@/lib/types";
import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ProjectCursor from "./project-cursor";
import ImageReveal from "./image-reveal";

const ProjectInfo = ({ project }: { project: ProjectTypes }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const [isHovered, setIsHovered] = useState(false);

  const setInViewProject = useProjectStore((state) => state.setInViewProject);
  const inViewProject = useProjectStore((state) => state.inViewProject);

  useEffect(() => {
    if (isInView) setInViewProject(project.number);
  }, [isInView, project.title, setInViewProject, inViewProject]);

  return (
    <a href={project.link} target="_blank">
      <div
        ref={ref}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${!isInView && "opacity-30"} transition-all`}
      >
        {isHovered && <ProjectCursor />}
        <div className="relative aspect-video w-full">
          <ImageReveal src={project.imageUrl} />
        </div>
        <div className="flex flex-col items-start gap-2 sm:items-start sm:justify-between">
          <div className="mt-4">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {project.type}
            </p>
            <p
              className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold transition-all`}
            >
              {project.title}
            </p>
          </div>
          <div className="flex items-center gap-1 flex-wrap">
            {project.tags.map((tag, index) => (
              <div
                key={index}
                className={`${
                  project.tags.length - 1 === index
                    ? "bg-cmaccent text-cmsecondary"
                    : ""
                } px-4 py-1 border-2 text-xs sm:text-sm lg:text-base rounded-full`}
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
