"use client";
import React from "react";
import SectionHeading from "../section-heading";
import { useSectionInView } from "@/hooks/useSection";
import { useInView } from "react-intersection-observer";
import { useTheme } from "next-themes";
import { experiences, educations } from "@/lib/data";
import Image from "next/image";

export default function Experience() {
  const { ref } = useSectionInView("Qualification");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Experiences & Educations</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3>Experiences</h3>
          {experiences.map((item, index) => (
            <TimelineElement key={index} item={item} type="experience" />
          ))}
        </div>
        <div className="space-y-4">
          <h3>Educations</h3>
          {educations.map((item, index) => (
            <TimelineElement key={index} item={item} type="education" />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TimelineElementProps {
  item: {
    title: string;
    company?: string;
    type?: string;
    location: string;
    roles?: string[];
    technology?: string[];
    date: string;
    iconUrl: string;
  };
  type: string;
}

function TimelineElement({ item, type }: TimelineElementProps) {
  const { ref, inView } = useInView({ threshold: 0 });
  const { theme } = useTheme();

  return (
    <div
      ref={ref}
      className="border border-neutral-300 dark:border-neutral-700 rounded-lg p-4"
    >

      <div className="flex flex-col sm:flex-row items-start">  
        <div className="flex-shrink-0 w-16 h-16 mb-4 sm:mb-0 sm:mr-4">
          <Image
          src={item.iconUrl}
          alt={item.title}
          width={40}
          height={40}
          className="rounded-full"
          objectFit="cover"
        />
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-2">
          <h3 className="font-semibold capitalize">{item.title}</h3>
          {item.type && (
            <p className="text-xs text-neutral-500 dark:text-neutral-400" style={{ fontSize: "13px" }}>
              {item.type}
            </p>
          )}
           {item.company && (
          <p className="text-xs text-neutral-500 dark:text-neutral-400 !mt-0 pt-1" style={{ fontSize: "13px" }}>
            {item.company}
          </p>
          )}
          <p className="text-xs text-neutral-500 dark:text-neutral-400 !mt-0 pt-1" style={{ fontSize: "13px" }}>
            {item.location}
          </p>
        </div>
      </div>

        <div className="flex-1">  
        {type === "experience" && item.roles && (
          <ul className="list-disc list-inside mt-3">
            {item.roles.map((role, index) => (
              <li key={index} className="text-sm text-neutral-500 dark:text-neutral-400">
                {role}
              </li>
            ))}
          </ul>
        )}
        {type === "experience" && item.technology && (
          <div className="flex flex-wrap gap-2 mt-4">
            {item.technology.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 dark:bg-gray-700 text-xs text-neutral-700 dark:text-neutral-300 py-1 px-3 rounded-full"
                style={{ fontSize: "0.75rem" }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
