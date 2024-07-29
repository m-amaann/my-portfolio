import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { ProjectTypes } from "./types";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const aboutMe = {
  longDesc:
    "Innovate as Full Stack Engineer and self driven individual, aspiring to explore new horizons in the field of IT with an appetite for web & mobile My expertise lies in crafting dynamic, engaging interfaces through writing clean and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams  produce outstanding  applications.",
  shortDesc:
    "I bring creativity and technical expertise to every project.",
  favFont: "Barlow",
  primaryColor: "#030712",
  secondaryColor: "#f3f4f6",
  accentColor: "#4f46e5",
} as const;

export const experiences = [
  {
    title: "Full Stack Developer at Harriet (Pvt) ltd",
    location: "Colombo 07, Sri Lanka",
  
    description:'wejskjksdjvksdvcjskcvjds wvnsdjnkrj ervo ovonn ro 3rosdorojj jiv3rjvo io',
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - Present",
  },
  {
    title: "Web Developer at ZRI Adventures (Pvt) Ltd",
    location: "Colombo, Sri Lanka",
    // description:'',
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2023 - Present",
  },
  {
    title: "Software Engineer Intern at WSO2",
    location: "Colombo, Sri Lanka",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Bsc (Hons) in Computer Science",
    location: "Colombo, Sri Lanka",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
  {
    title: "Ordinary Level and Advanced Level",
    location: "Colombo, Sri Lanka",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2016-2020",
  },
] as const;

export const projects = [
  {
    title: "ZRI Adventures",
    type: "E-commerce Website",
    number: 1,
    description: "ZRI Adventures is a Sri Lankan adventure agency.",
    tags: ["Design", "Development", "2023"],
    imageUrl: "/images/projects/zriadventures.webp",
    link: "https://zriadventures.com",
  },
  {
    title: "Dunes Cart - Website",
    type: "E-commerce Website",
    number: 2,
    description: "Dunes Cart Ecommerce Website",
    tags: ["Design", "Development", "2024"],
    imageUrl: "/images/projects/dunescart.webp",
    link: "https://dunescart-store.vercel.app/",
  },
  {
    title: "Dunes Cart - Admin Dashboard",
    type: "E-commerce Website",
    number: 3,
    description: "Dunes Cart Admin Dashboard",
    tags: ["Design", "Development", "2024"],
    imageUrl: "/images/projects/dunescart-admin.webp",
    link: "https://dunescart-admin.vercel.app/",
  },
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Git",
  "AWS",
  "Docker",
  "Appscript",
  "Prisma",
  "Strapi",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Java",
  "Framer Motion",
  "GSAP",
  "Angular",
] as const;
