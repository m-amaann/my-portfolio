"use client";
import React from "react";
import SectionHeading from "../section-heading";
import { useSectionInView } from "@/hooks/useSection";
import ProjectInfo from "../project-info";
import { projects } from "@/lib/data";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 w-full mb-28 sm:mb-40"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="w-full">
            <ProjectInfo project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}

