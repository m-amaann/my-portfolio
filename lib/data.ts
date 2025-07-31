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



export const services = [
  {
    emoji: "/other/mobile-app-development-isometric-background-with-composition-smartphone-screens-with-3d-app-icons-connections-vector-illustration_1284-77301.avif",
    heading: "Mobile Development",
    detail: "Developing high-performance mobile apps for both cross-platform.",
  },
  {
    emoji: "/other/4799410-scaled.avif",
    heading: "Web Developement",
    detail: "Building responsive and dynamic websites tailored to your business needs.",
  },
  {
    emoji: "/other/cover.webp",
    heading: "UI/UX Design",
    detail: "Designing intuitive and engaging user interfaces that enhance user experience.",
  },
  {
    emoji: "/other/enterprise.avif",
    heading: "CMS Applications",
    detail: "Developing robust and scalable solutions to streamline complex business processes.",
  },
];




export const experiences = [
  {
    title: "Associate Quality Engineer",
    company: "Insighture",
    type: "Contract - Full Time",
    location: "Colombo 04, Sri Lanka",
    roles: [
      "Currently working as a QA Engineer, focusing on software testing and quality assurance.",
    ],
    technology: ["Selenium", "Playwright", "Java", "Automation Script", "Manual Testing", "GitHub", "CI/CD Workflows", "AWS", "K6", "JIRA", "TestRail", "Test Plan", "Test Case Design", "Test Case Execution"],
    iconUrl: "/images/logo/INSIGHTURE.png",
    date: "Jan 2025 - Present",
    url: "https://www.insighture.com",
  },
  {
    title: "QA Engineer Intern",
    company: "Insighture",
    type: "Full-Time",
    location: "Colombo 04, Sri Lanka",
    roles: [

    ],
    technology: ["Playwright", "Git", "Typescript", "Automation Script", "GitHub", "CI/CD Workflows", "AWS EC2", "AWS ECR", "AWS EKS", "Kubernetes", "Test Case Management", "Test Design", "Test Plan", "JIRA", "Minikube"],
    iconUrl: "/images/logo/INSIGHTURE.png",
    date: "Oct 2024 - Jan 2025",
    url: "https://www.insighture.com",
  },
  {
    title: "Software Developer - NodeJs",
    company: "DevFortress",
    type: "Full Time",
    location: "Candada - Remote",
    roles: [
      "Primarily worked on the Node.js stack in a Full-Stack role, handling both backend and frontend development using React, Next.js",
      "Built and maintained RESTful APIs for microservice-based backend architecture to support scalable and projects.",
      "Managed AWS cloud, including deployment and configuration using EC2, ECR, RDS, and related services.",
      "Implemented CI/CD pipelines and containerized applications using Docker for development and deployment workflows.",
      "Designed and developed responsive UI components, ensuring optimal UI across devices and browsers.",
      "Performed debugging and troubleshooting for performance issues, failures, and stability.",
      "Coordinated tasks and milestones with QA teams, and wrote detailed test cases using QMetry.",
      "Worked night shifts to align with the Sri Lankan time zone while operating remotely from Canada.",
      "Participated in sprint planning, code reviews, and daily stand-ups to maintain team alignment and code quality."
    ],
    technology: ["React", "Next.js", "Typescript", "Javascript", "Kafka", "AWS EC2", "AWS ECR", "Docker", "RDS", "Git", "Github", "JIRA", "QMetry"],
    iconUrl: "/images/logo/devfortress_logo.jpeg",
    date: "May 2024 - Sep 2024",
    url: "https://www.linkedin.com/company/devfortress",
  },
  {
    title: "Software Engineer Intern",
    company: "Harriet (Pvt) Ltd",
    type: "Full Time",
    location: "Colombo 07, Sri Lanka",
    roles: [
      "Developed customized front-end application using Nexts.js Implemented.",
      "Implemented RESTful APIs using Woocommerce Rest API's to fetching data from Woocommerce.",
      "Collaborated with a team of developers using Git and Gitlab with JIRA to manage tasks.",
      "Developing a frontend mobile application using Flutter & integrated payment gatways with .Net Core.",
    ],
    technology: ["React", "Next.js", "Typescript", "Javascript", "Woocommerce API", "AWS Amplify & EC2", "Flutter", ".Net Core", "Git", "GitLab", "JIRA"],
    iconUrl: "/images/logo/Harriet.png",
    date: "Feb 2024 - Aug 2024",
    url: "https://www.linkedin.com/company/harriet-shopping",
  },
  {
    title: "Freelancer",
    company: "CodexLab Software Consultant",
    type: "Part Time",
    location: "",
    roles: [
      "Developed custom software solutions tailored to specific clients requirements.",
      "This is only for freelancing project purpose.",
    ],
    technology: ["MERN Stack", "Next.js", "WordPress", "Spring boot", "SaaS Application", "Mobile Application"],
    iconUrl: "/images/logo/codexlab.png",
    date: "Oct 2023 - Jul 2024",
    url: "https://www.codexlab.tech/",
  },
  // {
  //   title: "UI/UX Designer",
  //   company: "Freelancer.com",
  //   location: "",
  //   type: "Part Time",
  //   technology: ["Figma", "Adobe XD"],
  //   roles: [
  //     "Created wireframes and prototypes using Figma",
  //     "Collaborated with clients to understand their requirements",
  //   ],
  //   iconUrl: "/images/logo/upwork.jpeg",
  //   date: "Jan 2021 - Oct 2021",
  //   url: "https://www.freelancer.com/",
  // },
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
    title: "MSc in Information Technology",
    location: "Colombo, Sri Lanka",
    institute: "SLIIT",
    iconUrl: "/images/logo/sliit.png",
    date: "Jun 2025 - Present",
    url: "https://www.londonmet.ac.uk/",
    describe: ""
  },
  {
    title: "Bachelors of Engineering in (Software Engineer)",
    location: "Colombo 04, Sri Lanka",
    institute: "London Metropolitan University - (UK)",
    iconUrl: "/images/logo/LMU.webp",
    date: "Feb 2020 - Jan 2024",
    url: "https://www.londonmet.ac.uk/",
    describe: "Successfully completed the degree and was awarded First Class Honours."

  },
  {
    title: "Higher National Diploma in Software Engineering",
    location: "Colombo 04, Sri Lanka",
    institute: "BTEC Pearson UK",
    iconUrl: "/images/logo/Peason.png",
    date: "Jan 2021 - Sep 2022",
    url: "https://qualifications.pearson.com/en/home.html",
    describe: "Completed the BTEC Higher National Diploma in Software Engineering with Distinction. Recognized and assured by Pearson UK."
  },
  {
    title: "Foundation in Information Technology",
    location: "Colombo, Sri Lanka",
    institute: "Informatics Institute of Technology",
    iconUrl: "/images/logo/IIT.png",
    date: "Mar 2018 - Feb 2019",
    url: "https://www.iit.ac.lk/",
    describe: ""
  },
  {
    title: "GCE Ordinary Level and Advanced Level",
    location: "Colombo 07, Sri Lanka",
    institute: "Royal College",
    iconUrl: "/images/logo/royal-college-colomob.jpeg",
    date: "Jan 2007 - Nov 2019",
    url: "https://royalcollege.lk/",
    describe: ""
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
  // {
  //   category: "Frontend",
  //   skills: [
  //     { name: "React", logo: "/images/SKILLS/react.png", color: "#B8F0FF" },
  //     { name: "Next.js", logo: "/images/SKILLS/next-js.png", color: "#000000" },
  //     { name: "JavaScript", logo: "/images/SKILLS/JAVASCRIPT.png", color: "#fff082" },
  //     { name: "Flutter", logo: "/images/SKILLS/flutter.png", color: "#B9DCF9", learning: true },
  //     { name: "React Native", logo: "/images/SKILLS/react-native.png", color: "#0067FB" }, 
  //     { name: "HTML", logo: "/images/SKILLS/html.png", color: "#F9A58E" },
  //     { name: "CSS", logo: "/images/SKILLS/CSS.png", color: "#63B0E9" },
  //     { name: "Tailwind CSS", logo: "/images/SKILLS/tailwind.png", color: "#97EFFF" },
  //     { name: "Bootstrap", logo: "/images/SKILLS/bootstrap.png", color: "#B496DF" },
  //   ],
  // },
  {
    category: "Languages",
    skills: [
      { name: "Java", logo: "/images/SKILLS/JAVA.png", color: "#CBDDFF" },
      { name: "C#", logo: "/images/SKILLS/picture.png", color: "#A1B9E1" },
      { name: "TypeScript", logo: "/images/SKILLS/typescript.png", color: "#91C2F8" },
    ],
  },
  {
    category: "QA & Testing",
    skills: [
      { name: "Manual Testing", logo: "/images/SKILLS/picture.png", color: "#f1f1f1" },
      { name: "Test Case Design", logo: "/images/SKILLS/picture.png", color: "#f1f1f1" },
      { name: "Test Planning", logo: "/images/SKILLS/picture.png", color: "#f1f1f1" },
      { name: "Test Case Execution", logo: "/images/SKILLS/picture.png", color: "#f1f1f1" },
      { name: "JIRA", logo: "/images/SKILLS/jira.png", color: "#69A3F9" },
      { name: "TestRail", logo: "/images/SKILLS/picture.png", color: "#5EB1F0" },
      { name: "QMetry", logo: "/images/SKILLS/picture.png", color: "#F0F0F0" },
    ]
  },
  {
    category: "Automation & CI/CD",
    skills: [
      { name: "Selenium", logo: "/images/SKILLS/selenium.png", color: "#afedd3" },
      { name: "Playwright", logo: "/images/SKILLS/playwright.png", color: "#D0D0D0" },
      { name: "Appium", logo: "/images/SKILLS/picture.png", color: "#9DE0F6" },
      { name: "Postman", logo: "/images/SKILLS/postman.png", color: "#F7931E" },
      { name: "BDD Cucumber", logo: "/images/SKILLS/bdd.png", color: "#D0D0D0" },
      { name: "Jenkins", logo: "/images/SKILLS/jenkins.png", color: "#0070C0" },
      { name: "CI/CD Pipelines", logo: "/images/SKILLS/CI_CD.png", color: "#B4D2E4" },
      { name: "GitHub Actions", logo: "/images/SKILLS/github.png", color: "#B6BAC1" }
    ]
  },
  {
    category: "Performance Testing",
    skills: [
      { name: "JMeter", logo: "/images/SKILLS/picture.png", color: "#F1936B" },
      { name: "K6", logo: "/images/SKILLS/picture.png", color: "#C8D3F5" },
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", logo: "/images/SKILLS/AWS_2.png", color: "#fcb96c" },
      { name: "Docker", logo: "/images/SKILLS/docker.png", color: "#99BFD7" },
      { name: "Kubernetes", logo: "/images/SKILLS/kubernetes.svg", color: "#799CE4" },
      { name: "Git", logo: "/images/SKILLS/social.png", color: "#ED9A8F" },
      { name: "GitHub", logo: "/images/SKILLS/github.png", color: "#D0D0D0" },
    ]
  }
];



