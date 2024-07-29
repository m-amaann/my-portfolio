import React from "react";
import Reveal from "./reveal";

type SectionHeadingProps = {
  children: string;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <Reveal className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold capitalize mb-8 lg:mb-16 text-center">
      {children}
    </Reveal>
  );
}
