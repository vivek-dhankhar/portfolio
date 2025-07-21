import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LeetcodeIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Vivek Dhankhar",
  initials: "VD",
  location: "Jhajjar,Haryana,India",
  locationLink: "https://maps.app.goo.gl/4ezs1VSg4ctqEdT77",
  about:
    "MERN stack fresher skilled in building dynamic web applications ",
  summary:
    "Passionate Fullstack developer with hands-on experience in building responsive web applications using MongoDB, Express.js, React, and Node.js. Eager to contribute and grow in a dynamic development environment.  ",
  avatarUrl: "https://avatars.githubusercontent.com/u/142178219?v=4",
  resumeURL: "https://drive.google.com/file/d/1qMKlSwgm8_w0p6zNkqEtIVooyYvcPyHy/view?usp=sharing",
  contact: {
    email: "singhvivek23112000@gmail.com",
    tel: "+91 6265511872",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/vivek-dhankhar",
        icon: GitHubIcon,
      },
      {
        name: "LeetCode",
        url: "https://leetcode.com/u/vivekdhankhar/",
        icon: LeetcodeIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vivekdhankhar/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/vivek__dhankhar",
        icon: XIcon,
      },

    ],
  },
  education: [
    {
      school: "Rajasthan Institute of Engineering and Technology",
      degree: "Bachelor's of Technology in Computer Science",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "National Technical Research Organisation",
      link: "https://drive.google.com/file/d/1Gm1c6Ot_Kwv34B4twh8eUlHP30Ge6qBx/view?usp=sharing",
      badges: [],
      title: "Intern",
      logo: ConsultlyLogo,
      start: "Aug 2024 ",
      end: " Nov 2024",
      description:
        "Developed a Node.js-based task scheduler that automates and manages scheduled tasks using node-cron, with support for recurring jobs, custom intervals, and error handling, ensuring efficient background task execution.",
    },
  ],
  skills: [
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.io",
    "Git",
  ],
  projects: [
    {
      title: "Chatify",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDb",
      ],
      description:
        "Developed Chatify, a real-time chat application with a Seamless UI with dark and lightmode using React.js",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/vivek-dhankhar/chat-app-ui",
      },
    },
    {
      title: "Codeflow",
      techStack: [
        "React.js",
        "CSS",
        "Node.js",
        "Express.js",
        "Socket.io",
      ],
      description:
        "Developed a Real-time collaborative Code editor and Compiler, leveraging WebSocket for instant synchronization across multiple clients.",
      logo: EvercastLogo, 
      link: {
        label: "github.com",
        href: "https://github.com/vivek-dhankhar/codeflow",
      },
    },
  ],
} as const;

