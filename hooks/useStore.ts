import { create } from "zustand";

interface ProjectStore {
  inViewProject: number;
  setInViewProject: (project: number) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  inViewProject: 1,
  setInViewProject: (project: number) => set({ inViewProject: project }),
}));
