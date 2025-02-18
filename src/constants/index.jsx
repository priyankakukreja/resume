import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { FaHandshake } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { MdVideoCameraFront } from "react-icons/md";
import { BiVideoPlus } from "react-icons/bi";
import { MdCampaign } from 'react-icons/md';

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "PRIYANKA KUKREJA",
  greet: "Hello there! 👋🏻",
  description:
    "A Social Media Manager with 2+ years of account management experience. I specialize in client interactions, videography, video editing, and campaign planning, always staying updated with new skills to keep up with the fast-changing social media landscape.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "#",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "#",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "#",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "#",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "#",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "#",
  },
];

export const BIO = [
  "Bringing over 2 years of experience in account management, I specialize in building strong client relationships through direct interactions while maintaining a practical, hands-on approach to continuously learn and adapt in a fast-paced environment."
];

export const SKILLS = [
  {
    icon: <FaHandshake className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Client Handling",
    experience: "2+ years",
  },
  {
    icon: <GrAnnounce  className="text-4xl text-orange-400 lg:text-5xl" />,
    name: "Social Media Marketing",
    experience: "2+ years",
  },
  {
    icon: <MdVideoCameraFront className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Videography",
    experience: "2+ years",
  },
  {
    icon: <BiVideoPlus className="text-4xl text-yellow-300 lg:text-5xl" />,
    name: "Video Editing",
    experience: "2+ years",
  },
  {
    icon: <MdCampaign className="text-4xl text-purple-600 lg:text-5xl" />,
    name: "Campaign Planning",
    experience: "2+ years",
  },
];

export const EXPERIENCES = [
  {
    title: "Social Media Manager",
    company: "Creative Nest Media Solutions",
    duration: "March 2023 - Present",
    description:
      "I manage social media strategies, create content, and analyze performance to drive brand engagement and growth at Creative Nest Media Solutions.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Commerce",
    institution: "MATS University, Raipur",
    duration: "June 2020 - Feb 2023", // add college details
    description:
      "I have studied a Bachelor of Commerce (B.Com), gaining skills in business, economics, finance, and accounting, preparing me for various roles in the corporate sector.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/share/1DCF1BahEt/?mibextid=wwXIfr/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/prinkxx._?igsh=MWl2YmU5ZWR6OWhzcg==/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/priyanka-kukreja-81b596349/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
