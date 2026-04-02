import type { LucideIcon } from "lucide-react";
import {
  Palette,
  Server,
  Layers,
  Monitor,
  LayoutGrid,
  Code2,
  Kanban,
} from "lucide-react";

export const techCategories: {
  title: string;
  icon: LucideIcon;
  items: { name: string; image?: string }[];
}[] = [
  {
    title: "Front-end",
    icon: Layers,
    items: [
      { name: "HTML", image: "/html-5.png" },
      { name: "CSS", image: "/css-3.png" },
      { name: "JavaScript", image: "/js.png" },
      { name: "React JS", image: "/react.png" },
      { name: "Next JS", image: "/next.png" },
    ],
  },
  {
    title: "Styling",
    icon: Palette,
    items: [
      { name: "SHADCN", image: "/shadcn.png" },
      { name: "Tailwind", image: "/tailwind.png" },
    ],
  },
  {
    title: "Back-end",
    icon: Server,
    items: [
      { name: "Node JS", image: "/node.png" },
      { name: "Express JS", image: "/express.jpg" },
      { name: "Supabase", image: "/supabase.jpg" },
      { name: "MongoDB", image: "/mongodb.png" },
    ],
  },
  {
    title: "CMS",
    icon: LayoutGrid,
    items: [{ name: "Wix", image: "/wix.png" }],
  },
  {
    title: "Design",
    icon: Monitor,
    items: [{ name: "Figma", image: "/figma.png" }],
  },
  {
    title: "Development",
    icon: Code2,
    items: [
      { name: "VS Code", image: "/tools/vs_code.png" },
      { name: "Git Bash", image: "/tools/git_bash.png" },
      { name: "GitHub", image: "/tools/github.png" },
    ],
  },
  {
    title: "Project Management",
    icon: Kanban,
    items: [
      { name: "ClickUp", image: "/tools/click_up.png" },
      { name: "Quire", image: "/tools/quire.png" },
    ],
  },
];

export type CertificationColor = "indigo" | "emerald" | "violet" | "amber";

export type Certification = {
  id: number;
  issuer: string;
  issuerShort: string;
  title: string;
  /** ISO 8601 calendar date (YYYY-MM-DD) as printed on the certificate */
  date: string;
  type: string;
  field: string;
  skills: string[];
  credentialUrl: string;
  /** Path under `public/` (e.g. `/certificates/name.png`) */
  image: string;
  color: CertificationColor;
};

export const certifications: Certification[] = [
  {
    id: 1,
    issuer: "Wadhwani Foundation",
    issuerShort: "W",
    title: "Employability Skills — JobReady",
    date: "2024-09-16",
    type: "Online Course",
    field: "Professional Skills",
    skills: [
      "Communication",
      "Problem Solving",
      "Teamwork",
      "Adaptability",
      "Work Ethic",
    ],
    credentialUrl: "#",
    image: "/certificates/wadhwani-certificate.png",
    color: "indigo",
  },
  {
    id: 2,
    issuer: "Udemy",
    issuerShort: "U",
    title: "The Ultimate React Course 2025: React, Next.js, Redux & More",
    date: "2026-04-01",
    type: "Certificate of Completion",
    field: "Front-end Development",
    skills: ["React", "Next.js", "Redux", "JavaScript", "Components", "Hooks"],
    credentialUrl: "https://ude.my/UC-254a7ca2-8f82-40e3-9818-4f59a2a2cc0f",
    image: "/certificates/react-certifcate.png",
    color: "emerald",
  },
  {
    id: 3,
    issuer: "Prime IT Solutions",
    issuerShort: "P",
    title: "500-hour on-the-job training",
    date: "2025-05-13",
    type: "On-the-job Training",
    field: "Information Technology",
    skills: [
      "Professional Practice",
      "Collaboration",
      "Industry Standards",
      "Time Management",
    ],
    credentialUrl: "#",
    image: "/certificates/internship-certificate.png",
    color: "violet",
  },
  {
    id: 4,
    issuer: "Jobs180.com",
    issuerShort: "J",
    title: "Marketing ME Live (Career Session)",
    date: "2025-03-21",
    type: "Certificate of Attendance",
    field: "Career Development",
    skills: [
      "Marketing",
      "Personal Branding",
      "Career Planning",
      "Workplace Communication",
    ],
    credentialUrl: "#",
    image: "/certificates/job-180-certificate.png",
    color: "amber",
  },
];

export const aboutBio =
  "Front-End Web Developer and UI/UX Designer who turns ideas into clean, responsive, and user-centered web experiences. I build with React, Next.js, and Node.js — and extend into CMS platforms like Wix when the project calls for it. I design in Figma and care about the details: from smooth UI interactions to solid system integration and QA. I'm always growing, always building, and always open to the next challenge.";
