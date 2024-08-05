import { format } from "date-fns";

import linkedIcon from "@/assets/icons/linkedin.svg";
import twitterIcon from "@/assets/icons/twitter.svg";
import githubIcon from "@/assets/icons/github.svg";

import {
  SocialLink,
  Experience,
  TechStack,
  Project,
  SectionHeadingProps,
  NavItem,
} from "./types";

import HtmlImage from "@/assets/images/vscode-icons_file-type-html.svg";
import CssImage from "@/assets/images/vscode-icons_file-type-css.svg";
import JSImage from "@/assets/images/vscode-icons_file-type-js-official.svg";
import ReactImage from "@/assets/images/logos_react.svg";
import BootstrapImage from "@/assets/images/logos_bootstrap.svg";
import TailwindImage from "@/assets/images/vscode-icons_file-type-tailwind.svg";
import VSCodeImage from "@/assets/images/vscode-icons_file-type-vscode.svg";
import GitIconImage from "@/assets/images/logos_git-icon.svg";
import SassImage from "@/assets/images/logos_sass.svg";
import NodeImage from "@/assets/images/node.webp";
import MongoDbImage from "@/assets/images/mongoDb.webp";
import GitHubImage from "@/assets/images/akar-icons_github-fill.svg";
import AliflailaAdmin from "@/assets/images/aliflaila.png";
import Aliflaila from "@/assets/images/aliflaila1.png";
import GuideConnect from "@/assets/images/guideConnect.png";

export const experiences: Experience[] = [
  {
    company: "Coding Pixel",
    designation: "React JS Developer",
    jobType: "Full Time",
    startDate: format(new Date("2023-12-10"), "MMM yyyy"),
    endDate: format(new Date("2024-6-15"), "MMM yyyy"),
  },
  {
    company: "RLTSquare",
    designation: "Frontend Developer",
    jobType: "Full Time",
    startDate: format(new Date("2022-3-8"), "MMM yyyy"),
    endDate: format(new Date("2023-11-30"), "MMM yyyy"),
  },
];
export const projects: Project[] = [
  {
    title: "Guide Connect",
    shortDescription:
      "In the Guide Connect project, an admin panel allows admins to manage locations and users, add new pins, and update settings. Working on this project, I utilized Tailwind CSS, TypeScript, and RESTful APIs to retrieve data from a Node.js backend, significantly enhancing my coding skills.",
    techStack: ["Tailwind", "React JS", "Sass", "Bootstrap", "Redux"],
    siteUrl: "https://guide-connect-admin.netlify.app/",
    githubLink: "https://gitlab.com/khizarkamal/guide_connect",
    image: GuideConnect.src,
  },
  {
    title: "Aliflaila, Admin Panel",
    shortDescription:
      "While working on this project, I gained hands-on experience with Material UI. This project also sharpened my TypeScript skills, and I learned a lot about RESTful APIs. I created multiple UI elements from scratch and transformed wireframes into a fully functional website",
    techStack: ["React JS", "Sass", "Material UI", "Redux Toolkit"],
    siteUrl: "https://admin-staging.aliflaila.app/",
    githubLink:
      "https://gitlab.com/ahsan.nawaz197/aliflaila-admin/-/tree/khizar-stg?ref_type=heads",
    image: AliflailaAdmin.src,
  },
  {
    title: "Aliflaila, A Digital Library",
    shortDescription:
      "The digital book library project allowed publishers to publish books, users to buy and read them online or order physical copies, and schools to register and assign books to students, supporting various user roles like schools, teachers, parents, and students.",
    techStack: ["NextJs", "React JS", "Sass", "Bootstrap"],
    siteUrl: "https://aliflaila.netlify.app/",
    githubLink:
      "https://gitlab.com/haseebshams/aliflailaweb/-/tree/khi-stg?ref_type=heads",
    image: Aliflaila.src,
  },
];

export const techStackImages = [
  HtmlImage,
  CssImage,
  BootstrapImage,
  VSCodeImage,
  ReactImage,
  JSImage,
  TailwindImage,
  GitIconImage,
  SassImage,
  NodeImage,
  MongoDbImage,
  GitHubImage,
];

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/khizar-kamal-269b67170/",
    icon: linkedIcon,
  },
  {
    id: "twitter",
    link: "/",
    icon: twitterIcon,
  },
  {
    id: "github",
    link: "https://github.com/khizarkamal",
    icon: githubIcon,
  },
];

export const navItems: NavItem[] = [
  {
    id: "home",
    text: "Home",
    link: "/",
  },
  {
    id: "about",
    text: "About",
    link: "#about-me",
  },
  {
    id: "tech_stack",
    text: "Tech Stack",
    link: "#tech-stack",
  },
  {
    id: "projects",
    text: "Projects",
    link: "#projects",
  },
];
