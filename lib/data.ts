import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { ProjectTypes } from "./types";

// import { HarritLogo } from "../components/harrit-logo";

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
    name: "Qualification",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const aboutMe = {
  longDesc:
    'As a Full Stack Engineer with 1.5 years of working experience, I am a self-driven individual with a passion for exploring new horizons in the IT field. My expertise lies in crafting dynamic and engaging interfaces through writing clean code and utilizing cutting-edge development tools and techniques. With a strong foundation in both web and mobile development, I excel at creating user-centric applications that deliver seamless experiences.',
  shortDesc:
    "I bring creativity and technical expertise to every project.",
  favFont: "Barlow",
  primaryColor: "#030712",
  secondaryColor: "#f3f4f6",
  accentColor: "#4f46e5",
} as const;

export const experiences = [
  {
    title: "Full Stack Developer Intern at Harriet (Pvt) Ltd",
    location: "Colombo 07, Sri Lanka",
    description: 'Worked on a variety of projects including...',
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - Present",
  },
  {
    title: "BEng in Software Engineering ",
    location: "Colombo, Sri Lanka",
    institute: "London Metropolitan University (UK)",
    icon: React.createElement(LuGraduationCap),
    date: "Feb 2021 - Jan 2024",
  },
  {
    title: "UI/UX & Frontend Developer at Freelancer",
    location: "Type: Remote",
    type: "Part Time",
    description: 'Designed and developed user interfaces...',
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2021 - Present",
  },
  {
    title: "Data Entry Analysis at Aegis Lanka (Pvt) Ltd",
    location: "Colombo 02, Sri Lanka",
    description: 'Conducted data entry and analysis tasks...',
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2020 - July 2020",
  },
] as const;

export const education = [
  {
    title: "Bsc (Hons) in Computer Science",
    location: "Colombo, Sri Lanka",
    institute: "University of Colombo",
    icon: React.createElement(LuGraduationCap),
    date: "2021 Feb - 2024 Jan",
  },
  {
    title: "Ordinary Level and Advanced Level",
    location: "Colombo, Sri Lanka",
    institute: "Colombo School",
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
