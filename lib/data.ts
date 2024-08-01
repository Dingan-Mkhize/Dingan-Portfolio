import React from "react";
import { FaGitAlt, FaLightbulb, FaPython, FaGraduationCap } from "react-icons/fa";
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
    name: "Journey",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from OpenClassrooms",
    location: "Online",
    description:
      "Graduated as a Full Stack Developer with a strong focus on React and Ruby on Rails. I completed intensive hands-on projects and real-world simulations to enhance my coding and software development skills.",
    icon: React.createElement(FaGraduationCap),
    date: "May 2024",
  },
  {
    title: "Python Programming Course",
    location: "Udemy - Online",
    description:
      "Currently enhancing my programming skills through a comprehensive Python course on Udemy, focusing on practical applications and real-world problem-solving techniques.",
    icon: React.createElement(FaPython), 
    date: "May 2024",
  },
  {
    title: "Advanced Git and GitHub",
    location: "Udemy - Online",
    description:
      "Expanding my version control expertise by mastering advanced Git and GitHub techniques, essential for efficient collaboration and code management in software development.",
    icon: React.createElement(FaGitAlt), 
    date: "May 2024",
  },
  {
    title: "AI-Powered Screenwriting App Development",
    location: "Personal Project",
    description:
      "Developing a screenwriting structure application leveraging AI with Python and Next.js, aimed at automating and enhancing creative writing processes.",
    icon: React.createElement(FaLightbulb), 
    date: "May 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Vanilla JS Calculator",
    description: "A functional calculator with basic arithmetic operations and a sleek interface, built with Vanilla JavaScript and CSS.",
    tags: ["JavaScript", "CSS", "HTML"],
    imageUrl: jscalculatorImg,
    projectUrl: "https://courageous-praline-0206b8.netlify.app",
  },
  {
    title: "Book Logger",
    description: "An app for book enthusiasts to log and track their reading progress. Built with React for easy book management.",
    tags: ["React", "JavaScript", "CSS", "HTML"],
    imageUrl: bookappImg,
    projectUrl: "https://cheery-maamoul-917f12.netlify.app",
  },
  {
    title: "Fitness Progress Tracker",
    description: "Track and log fitness activities with a dynamic interface. Built with React and Ruby on Rails, styled with Tailwind CSS.",
    tags: ["React", "Ruby on Rails", "Devise API", "Tailwind CSS", "JavaScript"],
    imageUrl: fitnessappImg,
    projectUrl: "https://move-groove-app.onrender.com/"
  },
  {
    title: "Colorado Mountain Bike Race Portal",
    description: "A full-stack website for a mountain bike race. Integrates Flickr API for photos and uses Ruby on Rails for backend.",
    tags: ["React", "Ruby on Rails", "Flickr API", "Tailwind CSS", "JavaScript"],
    imageUrl: bikeraceappImg,
    projectUrl: "https://project7-bike-race-site-production.up.railway.app"  
  },
  {
    title: "Community Volunteer Hub",
    description: "A platform for community volunteers. Features live messaging and interactive maps. Built with React and Rails.",
    tags: ["React", "React Query", "Ruby on Rails", "Devise", "Tailwind CSS", "JavaScript"],
    imageUrl: volunteerappImg,
    projectUrl: "https://p7volunteerapp-production.up.railway.app/"
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
  "PostgreSQL",
  "Ruby on Rails",
  "Python",
  "Framer Motion",
  "Relume",
  "figma",
] as const;