import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export interface ProjectTypes {
  title: string;
  type: string;
  number: number;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}
