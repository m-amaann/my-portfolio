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
    Company: "Harriet",
    type: "Full Time",
    location: "Colombo 07, Sri Lanka",
    description: 'Worked on a variety of projects including...',
    technology: "React, Node.js, Express.js, MongoDB, Next.js, Git, Gitlab, Gitpod, Gitpod.io",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - Present",
  },
  {
    title: "BEng in Software Engineering ",
    location: "Colombo, Sri Lanka",
    institute: "London Metropolitan University (UK)",
    icon: React.createElement(LuGraduationCap),
    date: "Feb 2020 - Jan 2024",
  },
  {
    title: "UI/UX Designer at Freelancer",
    Company: "Freelancer.com",
    location: "Remote",
    type: "Part Time",
    description: 'Designed and developed user interfaces...',
    technology: "Figma, Adobe XD",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2021 - Present",
  },
  {
    title: "Higher Naional Diploma in Software Engineering",
    location: "Colombo, Sri Lanka",
    institute: "BTEC Pearson (UK)",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2021 - Sep 2022",
  },
  {
    title: "Data Entry Operator",
    Company: "Aegis Lanka (Pvt) Ltd",
    location: "Colombo 02, Sri Lanka",
    type: "Full-Time",
    description: 'Daily task enter personal data...',
    technology: "Figma, Adobe XD",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2021 - Present",
  },
  {
    title: "Ordinary Level and Advanced Level",
    location: "Colombo 07, Sri Lanka",
    institute: 'Royal College',
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2007 - Nov 2019",
  },
  {
    title: "Diploma in Information Technology",
    location: "Colombo, Sri Lanka",
    institute: "ESOFT Metro Campus",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2019 - Sep 2019",
  },
] as const;




export const projects = [
  {
    title: "React Native Mobile App - Final Degree Project",
    type: "E-commerce Mobile App",
    number: 1,
    description: "Stock Mart Lanka is a Sri Lankan Export and Import Cake Essential Item Store.",
    tags: ["Design", "Development", "2023 - Nov"],
    imageUrl: "/images/projects/Final project Mobile.png",
    link: "https://github.com/m-amaann/Final-Mobile-App",
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
  {
    title: "Dunes Cart - Website",
    type: "E-commerce Website",
    number: 4,
    description: "Dunes Cart Ecommerce Website",
    tags: ["Design", "Development", "2024"],
    imageUrl: "/images/projects/dunescart.webp",
    link: "https://dunescart-store.vercel.app/",
  },
  {
    title: "Dunes Cart - Admin Dashboard",
    type: "E-commerce Website",
    number: 5,
    description: "Dunes Cart Admin Dashboard",
    tags: ["Design", "Development", "2024"],
    imageUrl: "/images/projects/dunescart-admin.webp",
    link: "https://dunescart-admin.vercel.app/",
  },
  {
    title: "Dunes Cart - Admin Dashboard",
    type: "E-commerce Website",
    number: 5,
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
