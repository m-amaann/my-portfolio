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
    title: "Full Stack Developer Intern",
    company: "Harriet (Pvt) Ltd",
    type: "Full Time",
    location: "Colombo 07, Sri Lanka",
    roles: [
      "Developed front-end application using Nexts.js",
      "Implemented RESTful APIs using Woocommerce Rest API's to fetching data from Woocommerce",
      "Collaborated with a team of developers using Git and Gitlab with JIRA.",
      "Developing a frontend mobile application using Flutter and backend using .Net.",
    ],
    technology: ["React", "Next.js", "Typescript", "Javascript", "Woocommerce API", "AWS Amplify & EC2", "Flutter", ".Net", "Git", "GitLab", "JIRA"],
    iconUrl: "/images/logo/Harriet.png",
    date: "Feb 2024 - Present",
    url: "https://www.linkedin.com/company/harriet-shopping",
  },
  {
    title: "Freelancer",
    company: "CodexLab Software Consultant",
    type: "",
    location: "",
    roles: [
      "Clients needed a web application for their business. Developed and giving application using Nexts.js and wordpress themes",
    ],
    technology: ["MERN Stack", "Next.js", "WordPress", "Spring boot", "SaaS Application", "Mobile Application"],
    iconUrl: "/images/logo/codexlab.png",
    date: "Oct 2023 - Present",
    url: "https://www.codexlab.tech/",
  },
  {
    title: "UI/UX Designer",
    company: "Freelancer.com",
    location: "",
    type: "Part Time",
    technology: ["Figma", "Adobe XD"],
    roles: [
      "Created wireframes and prototypes using Figma",
      "Collaborated with clients to understand their requirements",
    ],
    iconUrl: "/images/logo/upwork.jpeg",
    date: "Jan 2021 - Oct 2021",
    url: "https://www.freelancer.com/",
  },
  {
    title: "Data Entry Operator",
    company: "Aegis Lanka (Pvt) Ltd",
    location: "Colombo 02, Sri Lanka",
    type: "Full-Time",
    roles: [
      "Processed data entries with high accuracy.",
      "Managed large datasets using MS Excel and Data Process.",
    ],
    technology: ["MS Excel", "Data Process", "Time Management"],
    iconUrl: "/images/logo/aegis.jpeg",
    date: "Jan 2020 - Jul 2020",
    url: "https://www.srilankabusiness.com/exporters-directory/company-profiles/aegis-services-lanka-pvt-ltd/",
  },
];



export const educations = [
  {
    title: "BEng (Hons) in Software Engineering (UK)",
    location: "Colombo 04, Sri Lanka",
    institute: "London Metropolitan University",
    iconUrl: "/images/logo/LMU.webp",
    date: "Feb 2020 - Jan 2024",
    url: "https://www.londonmet.ac.uk/",
  },
  {
    title: "Higher National Diploma in Software Engineering",
    location: "Colombo, Sri Lanka",
    institute: "BTEC Pearson UK",
    iconUrl: "/images/logo/Peason.png",
    date: "Jan 2021 - Sep 2022",
    url: "https://qualifications.pearson.com/en/home.html",
  },
  {
    title: "Founational in Information Technology",
    location: "Colombo, Sri Lanka",
    institute: "Informatics Institute of Technology",
    iconUrl: "/images/logo/IIT.png",
    date: "Mar 2018 - Feb 2019",
    url: "https://www.iit.ac.lk/",
  },
  {
    title: "GCE Ordinary Level and Advanced Level",
    location: "Colombo 07, Sri Lanka",
    institute: "Royal College",
    iconUrl: "/images/logo/royal-college-colomob.jpeg",
    date: "Jan 2007 - Nov 2019",
    url: "https://royalcollege.lk/",
  },
];




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
    link: "https://github.com/m-amaann/Restaurant-Application/",
  },
  {
    title: "Dunes Cart Website - UI/UX Design",
    type: "E-commerce Website",
    number: 3,
    description: "UI Design for Website",
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
      { name: "HTML", logo: "/images/SKILLS/html.png", color: "#F9A58E" },
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



