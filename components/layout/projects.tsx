"use client";
import React from "react";
import SectionHeading from "../section-heading";
import { useSectionInView } from "@/hooks/useSection";
import ProjectInfo from "../project-info";
import { projects } from "@/lib/data";
import ProjectNumber from "../project-number";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 w-full mb-28 sm:mb-40"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div className="flex w-full items-start">
        {/* <div className="hidden sm:flex sticky top-[10%] h-full w-full sm:max-w-[12rem] md:max-w-[15rem] lg:max-w-[25%] items-start">
          <div className="relative w-full">
            {projects.map((project, index) => (
              <div key={index}>
                <ProjectNumber project={project} />
              </div>
            ))}
          </div>
        </div> */}
        <div className="flex w-full items-start justify-center space-y-16 flex-wrap">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full sm:w-30 m-1 !mt-0 mb-6 bg-custom-rgba p-13px rounded-12px min-h-375px"
              >
              <ProjectInfo project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
