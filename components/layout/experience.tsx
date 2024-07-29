"use client";
import React from "react";
import SectionHeading from "../section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/hooks/useSection";
import { useInView } from "react-intersection-observer";
import { useTheme } from "next-themes";
import { experiences } from "@/lib/data";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experiences & Educations</SectionHeading>
      <VerticalTimeline lineColor="" className="overflow-hidden">
        {experiences.map((item, index) => {
          return <TimelineElement key={index} item={item} />;
        })}
      </VerticalTimeline>
    </section>
  );
}

function TimelineElement({ item }: { item: any }) {
  const { ref, inView } = useInView({ threshold: 0 });
  const { theme } = useTheme();

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background:
            theme === "light"
              ? "rgb(87 85 254 / 0.05)"
              : "rgba(255, 255, 255, 0.05)",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight:
            theme === "light"
              ? "0.4rem solid #9ca3af"
              : "0.4rem solid rgba(255, 255, 255, 0.5)",
        }}
        visible={inView}
        date={item.date}
        icon={item.icon}
        iconStyle={{
          background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
          fontSize: "1.5rem",
        }}
      >
        <h3 className="font-semibold capitalize">{item.title}</h3>
        <p className="font-normal !mt-0 text-sm">{item.location}</p>
        <p className="!mt-1 !font-normal text-sm text-neutral-500 dark:text-neutral-400">
          {item.description}
        </p>
      </VerticalTimelineElement>
    </div>
  );
}
