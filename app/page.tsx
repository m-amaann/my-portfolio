"use client";
import Contact from "@/components/layout/contact";
import Experience from "@/components/layout/experience";
import Intro from "@/components/layout/intro";
import Projects from "@/components/layout/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/layout/skills";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import About from "@/components/layout/about";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Header from "@/components/header";
import Preloader from "@/components/preloader";
import Services from "@/components/layout/services";
import Blogs from "@/components/layout/blogs";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main
      data-scroll-section
      className="container flex flex-col items-center px-4"
    >
      <Header />
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Intro />
      <SectionDivider />
      <TracingBeam>
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Blogs />
        <Services />
        <Contact />
      </TracingBeam>
    </main>
  );
}
