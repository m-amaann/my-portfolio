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

      <p className="text-sm text-center md:text-base lg:text-lg -mt-7 !font-normal max-w-screen-xl mx-auto text-gray-300 pb-7">
  I have worked on web & cross-platform mobile apps for both academic and clients. Here are some of them, showcasing my commitment to quality and innovation.
</p>



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

