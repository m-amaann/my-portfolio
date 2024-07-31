import { useProjectStore } from "@/hooks/useStore";
import { ProjectTypes } from "@/lib/types";
import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import ProjectCursor from "./project-cursor";
import ImageReveal from "./image-reveal";

const ProjectInfo = ({ project }: { project: ProjectTypes }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const [isHovered, setIsHovered] = useState(false);

  const setInViewProject = useProjectStore((state) => state.setInViewProject);
  const inViewProject = useProjectStore((state) => state.inViewProject);
//ts-ignore
  useEffect(() => {
    if (isInView) setInViewProject(project.number);
  }, [isInView, project.title, setInViewProject, inViewProject]);

  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <div
        ref={ref}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${!isInView && "opacity-30"} transition-all overflow-hidden bg-gray-200 p-4 rounded-lg`}
        style={{ maxHeight: "400px" }} // Set fixed height for the project card
      >
        {isHovered && <ProjectCursor />}
        <div className="relative aspect-video w-full bg-gray-300 p-2 rounded-lg">
          <ImageReveal src={project.imageUrl} />
        </div>
        <div className="mt-4 overflow-y-auto" style={{ maxHeight: "200px" }}>
          <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold transition-all">
            {project.title}
          </p>
          <p className="text-xs sm:text-sm md:text-base text-neutral-500 dark:text-neutral-400">
            {project.type}
          </p>
          <p className="text-xs sm:text-sm md:text-base text-neutral-500 dark:text-neutral-400">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag, index) => (
              <div
                key={index}
                className={`${
                  project.tags.length - 1 === index
                    ? "bg-cmaccent text-cmsecondary"
                    : ""
                } px-3 py-1 border-2 text-xs sm:text-sm rounded-full`}
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
