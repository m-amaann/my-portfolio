import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";


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





export const experiences = [
  {
    title: "Full Stack Developer Intern at Harriet (Pvt) Ltd",
    Company: "Harriet",
    type: "Full Time",
    location: "Colombo 07, Sri Lanka",
    description: '',
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
    description: '',
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
    description: '',
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
    title: "React Native Mobile App - Final Year Project",
    type: "Ecommerce Mobile App",
    number: 1,
    description: "",
    tags: ["Design", "Development", "Mar 2023 - Nov 2023"],
    imageUrl: "/images/projects/Final project Mobile.png",
    link: "https://github.com/m-amaann/Final-Mobile-App",
  },
  {
    title: "Sea-King Restaurant Application",
    type: "E-commerce Website",
    number: 2,
    description: "",
    tags: ["Design", "Development", "UI/UX", "Nov 2023 - Feb 2024"],
    imageUrl: "/images/projects/Sea-King.png",
    link: "https://restaurant-application-seven.vercel.app/",
  },
  {
    title: "Dunes Cart Website - UI/UX Design",
    type: "E-commerce Website",
    number: 3,
    description: "",
    tags: ["Design", "Development", "2024"],
    imageUrl: "/images/projects/Dunes Cart.jpg",
    link: "https://github.com/m-amaann",
  },
  {
    title: "Stock Mart Lanka Website - Wordpress",
    type: "E-commerce Website",
    number: 4,
    description: "CodexLab is our part of freelancing consultant",
    tags: ["Design", "WordPress", "July 2024"],
    imageUrl: "/images/projects/Stock Mart Lanka - Wordpress.png",
    link: "https://stockmartlanka.lk/",
  },
  {
    title: "Service Finder Mobile App UI/UX Design - Flutter",
    type: "SaaS Mobile App",
    number: 5,
    description: "Dunes Cart Admin Dashboard",
    tags: ["Design", "Development", "2024"],
    imageUrl: "/images/projects/UI:UX/Service Finder.png",
    link: "https://www.figma.com/proto/0HfnnhkL785b3hFqscrmfY/Flutter-UI?node-id=0-1&t=SOmLjDl6YwvDlrn4-1",
  },
  {
    title: "CodexLab Software Consoltant Website ",
    type: "Service Website",
    number: 6,
    description: "Thiis is small freelancing consultant for CodexLab",
    tags: ["Design", "Development", "2023"],
    imageUrl: "/images/projects/CodexLab.png",
    link: "https://www.codexlab.tech/",
  },
];



export const SKILLS_DATA = [
  {
    category: "Frontend",
    skills: [
      { name: "React", logo: "/images/SKILLS/react.png", color: "#B8F0FF" },
      { name: "Next.js", logo: "/images/SKILLS/next-js.png", color: "#000000" },
      { name: "JavaScript", logo: "/images/SKILLS/JAVASCRIPT.png", color: "#F7DF1E" },
      { name: "Flutter", logo: "/images/SKILLS/flutter.png", color: "#B9DCF9" },
      { name: "React Native", logo: "/images/SKILLS/react-native.png", color: "#0067FB" }, 
      { name: "HTML", logo: "/images/SKILLS/html.png", color: "#e2d4cd" },
      { name: "CSS", logo: "/images/SKILLS/CSS.png", color: "#63B0E9" },
      { name: "Tailwind CSS", logo: "/images/SKILLS/tailwind.png", color: "#97EFFF" },
      { name: "Bootstrap", logo: "/images/SKILLS/bootstrap.png", color: "#B496DF" },
     
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Java", logo: "/images/SKILLS/JAVA.png", color: "#CBDDFF" }, 
      { name: "Spring Boot", logo: "/images/SKILLS/spring-boot.png", color: "#AEE789" },
      { name: "JavaEE", logo: "/images/SKILLS/javaEE.png", color: "#FFDBAA" }, 
      { name: "TypeScript", logo: "/images/SKILLS/typescript.png", color: "#91C2F8" },
      { name: "Node.js", logo: "/images/SKILLS/NODEJS.png", color: "#BBF0BB" },
      { name: "Express", logo: "/images/SKILLS/EXPRESS.png", color: "#BBBBBB" }, 
      { name: "Prisma", logo: "/images/SKILLS/prism.png", color: "#98B6C7" },
      { name: "MongoDB", logo: "/images/SKILLS/MONGODB.png", color: "#AEEE9C" }, 
      { name: "MySQL", logo: "/images/SKILLS/mySQL.png", color: "#ABDCF2" },
      { name: "PostgreSQL", logo: "/images/SKILLS/postgre.png", color: "#A6CDED" }, 
      { name: "Hibernate", logo: "/images/SKILLS/hibernate.png", color: "#E9DFB4" }, 
      { name: "Java JPA", logo: "/images/SKILLS/JAVA.png", color: "#CBDDFF" }, 
      { name: "JDBC", logo: "/images/SKILLS/JDBC.png", color: "#D4D3CF" }, 
    ],
  },
  {
    category: "Other",
    skills: [
      { name: "VS Code", logo: "/images/SKILLS/VSCODE.png", color: "#61BFFF" },
      { name: "IntelliJ Idea", logo: "/images/SKILLS/Intellid-idea.png", color: "#84B1E4" }, 
      { name: "Git", logo: "/images/SKILLS/social.png", color: "#ED9A8F" },
      { name: "Github", logo: "/images/SKILLS/github.png", color: "#D0D0D0" },
      { name: "GitLab", logo: "/images/SKILLS/gitlab.png", color: "#F69F8F" },
      { name: "NPM", logo: "/images/SKILLS/programing.png", color: "#FFBDBD" },
      { name: "Postman", logo: "/images/SKILLS/postman.png", color: "#F7931E" }, 
      { name: "Jenkins", logo: "/images/SKILLS/jenkins.png", color: "#0070C0" }, 
      { name: "AWS Cloud", logo: "/images/SKILLS/AWS.png", color: "#F26522" }, 
      { name: "JIRA", logo: "/images/SKILLS/jira.png", color: "#69A3F9" },
      { name: "Wordpress", logo: "/images/SKILLS/wordpress.png", color: "#9AC3D0" }, 
      { name: "CI/CD Pipelines", logo: "/images/SKILLS/CI_CD.png", color: "#B4D2E4" }, 
      { name: "Docker", logo: "/images/SKILLS/docker.png", color: "#99BFD7" },
      { name: "Kubernetes", logo: "/images/SKILLS/kubernetes.svg", color: "#799CE4" },
    ],
  },
];



