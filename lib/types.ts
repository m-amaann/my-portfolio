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


export interface RepoTypes {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  full_name: string;
  languages_used?: string[];
  commit_count?: number;
};