import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { GoOrganization } from "react-icons/go";
import sinarImg from "@/public/SINAR.png"
import planifyImg from "@/public/Planify.png"
import understand169Img from "@/public/Understand-16-9.png"

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

export const experiencesData = [
  {
    title: "GDSC UIN Sunan Gunung Djati Bandung",
    location: "Bandung, Indonesia",
    description:
      "Google Developer Student Clubs (GDSC) chapter UIN Sunan Gunung Djati Bandung is a community of students who are passionate about learning and developing software. The club offers a variety of events and workshops on topics such as Android development, web development, machine learning, and more.",
    icon: React.createElement(GoOrganization),
    date: "2023 - Present",
  },
  {
    title: "Universitas Islam Negeri Sunan Gunung Djati Bandung",
    location: "Bandung, Indonesia",
    description:
      "As the Class Representative, I successfully orchestrated class activities for five consecutive semesters. This role involved fostering an engaging and dynamic learning environment and serving as a liaison between faculty and students to enhance communication and relations. This formal approach ensured a productive and harmonious educational setting.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Present",
  }
] as const;

export const projectsData = [
  {
    title: "Planify",
    description:
      "is a web-based application organizational management. It offers an intuitive Kanban board for efficient planning and execution.",
    tags: ["Prisma", "Next.js", "MySQL", "TailwindCSS", "Stripe"],
    imageUrl: planifyImg,
  },
  {
    title: "Understand",
    description:
      "is a course app designed to help users learn the latest programming tech. It provides up-to-date courses in various languages, and frameworks.",
    tags: ["React Native", "GraphQL", "Expo", "HyGraph"],
    imageUrl: understand169Img,
  },
  {
    title: "SINAR",
    description:
      "is a website platform that facilitating public reporting on issues concerning public services, security, and the environment",
    tags: ["Laravel", "Bootstrap", "MySQL", "PHP", "PHPMyAdmin"],
    imageUrl: sinarImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Java",
  "Kotlin",
  "PHP",
  "JavaScript",
  "TypeScript",
  "React",
  "Laravel",
  "Next.js",
  "React Native",
  "Node.js",
  "Git",
  "Docker",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "MySQL",
] as const;
