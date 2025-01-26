"use client";
import React from "react";
import SectionHeading from "../section-heading";
import { useSectionInView } from "@/hooks/useSection";
import { useInView } from "react-intersection-observer";
import { useTheme } from "next-themes";
import { experiences, educations } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../reveal";

export default function Experience() {
  const { ref } = useSectionInView("Qualification");

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>My Experiences & Educations</SectionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3>Work Experiences</h3>
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
    institute?: string;
    url?: string;
    describe?: string
  };
  type: string;
}

function TimelineElement({ item, type }: TimelineElementProps) {
  const { ref, inView } = useInView({ threshold: 0 });
  const { theme } = useTheme();

  return (
    <div className="border border-neutral-300 dark:border-neutral-700 rounded-lg p-4">
      <div ref={ref} className="flex items-center">
        <div className="w-16 h-16 mr-4 flex-shrink-0 !m-0 flex items-center">
          <Image
            src={item.iconUrl}
            alt={item.title}
            width={40}
            height={40}
            className="rounded-full "
            style={{ objectFit: 'cover' }}
          />

        </div>
        <div className="flex-1">
          <div className="flex flex-row justify-between items-center">
            <h3 className="font-semibold capitalize">{item.title}</h3>
            {item.type && (
              <p className="text-xs text-neutral-500 flex-col md:flex-row lg:flex-row dark:text-neutral-400 hidden sm:block" style={{ fontSize: "13px" }}>{item.type}</p>
            )}
          </div>
          {/* {item.company && (
            <p className="text-xs font-medium text-blue-500 dark:text-blue-300 !mt-0 pt-1" style={{ fontSize: "13px" }}>
              {item.company}
            </p>
          )} */}
          {item.company && item.url && (
            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium  text-blue-500 dark:text-blue-300 cursor-pointer !mt-0 pt-1"
              style={{ fontSize: "13px" }}
            >
              {item.company}
            </Link>
          )}
          {item.institute && item.url && (
            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium  text-blue-500 dark:text-blue-300 cursor-pointer !mt-0 pt-1"
              style={{ fontSize: "13px" }}
            >
              {item.institute}
            </Link>
          )}
          {item.date && (
            <p className="text-xs text-neutral-500 dark:text-neutral-400 !mt-0 pt-1" style={{ fontSize: "13px" }}>
              {item.date}
            </p>
          )}
          <p className="text-xs text-neutral-500 dark:text-neutral-400 !mt-0 pt-1" style={{ fontSize: "13px" }}>{item.location}</p>
          {item.type && (
            <p className="text-xs text-neutral-500 flex-col md:flex-row lg:flex-row dark:text-neutral-400 block sm:hidden" style={{ fontSize: "13px" }}>{item.type}</p>
          )}
          {item.describe && (
            <ul className="list-disc list-inside text-xs text-neutral-500 dark:text-neutral-400 mt-2">
              {item.describe.split('\n').map((line, index) => (
                <li key={index} style={{ fontSize: "13px" }}>
                  {line}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex-1 md:pl-16 lg:pl-16 xl:pl-16">
        {type === "experience" && item.roles && (
          <>
            <ul className="list-disc list-inside mt-3" style={{ textAlign: "justify" }}>
              {item.roles.map((role, index) => (
                <li
                  key={index}
                  className="text-xs md:text-sm leading-relaxed text-neutral-500 dark:text-neutral-400"
                >
                  {role}
                </li>
              ))}
            </ul>
          </>
        )}
        {type === "experience" && item.technology && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}