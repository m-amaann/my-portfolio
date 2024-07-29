import { SectionName } from "@/lib/types";
import { create } from "zustand";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface SectionStore {
  activeSection: SectionName;
  setActiveSection: (activeSection: SectionName) => void;
  timeOfLastClick: number;
  setTimeOfLastClick: (timeOfLastClick: number) => void;
}

export const useSection = create<SectionStore>((set) => ({
  activeSection: "Home",
  setActiveSection: (activeSection: SectionName) =>
    set({ activeSection: activeSection }),
  timeOfLastClick: 0,
  setTimeOfLastClick: (timeOfLastClick: number) =>
    set({ timeOfLastClick: timeOfLastClick }),
}));

export const useSectionInView = (sectionName: SectionName, threshold = 0.5) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useSection();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
};
