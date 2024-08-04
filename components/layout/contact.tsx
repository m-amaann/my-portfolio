"use client";
import React from "react";
import SectionHeading from "../section-heading";
import ContactForm from "../contact-form";
import ContactInfo from "../contact-info";
import { useSectionInView } from "@/hooks/useSection";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-full overflow-hidden"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <div className="mt-20 flex w-full justify-center flex-col md:flex-row gap-10 min-h-[40dvh]">
        <div className="w-full max-w-lg">
          <ContactInfo />
        </div>
        <div className="w-full max-w-lg">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
