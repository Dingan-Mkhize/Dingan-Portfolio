import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bookappImg from "@/public/book-app.png";
import bikeraceappImg from "@/public/bike-race-app.png";
import fitnessappImg from "@/public/fitness-app.png";
import jscalculatorImg from "@/public/js-calculator.png";
import volunteerappImg from "@/public/volunteer-app.png";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Vanilla JS Calculator",
    description: 
      "A functional calculator with basic arithmetic operations and a sleek interface, built with Vanilla JavaScript and CSS.",
    tags: ["JavaScript", "CSS", "HTML"],
    imageUrl: jscalculatorImg
  },
  {
    title: "Book Logger",
    description: 
      "An app for book enthusiasts to log and track their reading progress. Built with React for easy book management.",
    tags: ["React", "JavaScript", "CSS", "HTML"],
    imageUrl: bookappImg
  },
  {
    title: "Fitness Progress Tracker",
    description: 
      "Track and log fitness activities with a dynamic interface. Built with React and Ruby on Rails, styled with Tailwind CSS.",
    tags: ["React", "Ruby on Rails", "Devise API", "Tailwind CSS", "JavaScript", "Full-Stack"],
    imageUrl: fitnessappImg
  },
  {
    title: "Colorado Mountain Bike Race Portal",
    description: 
      "A full-stack website for a mountain bike race. Integrates Flickr API for photos and uses Ruby on Rails for backend.",
    tags: ["React", "Ruby on Rails", "Flickr API", "Tailwind CSS", "JavaScript", "Full-Stack"],
    imageUrl: bikeraceappImg
  },
  {
    title: "Community Volunteer Hub",
    description: 
      "A platform for community volunteers. Features live messaging and interactive maps. Built with React and Rails.",
    tags: ["React", "React Query", "Ruby on Rails", "Devise", "Tailwind CSS", "JavaScript"],
    imageUrl: volunteerappImg
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;