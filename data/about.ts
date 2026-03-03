import type { LucideIcon } from "lucide-react";
import {
  Database,
  Palette,
  Server,
  Layers,
  Monitor,
  LayoutGrid,
} from "lucide-react";

export const techCategories: {
  title: string;
  icon: LucideIcon;
  items: { name: string; image: string }[];
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
];

export const tools = [
  {
    category: "Development",
    items: ["VS Code", "Git", "GitHub"],
  },
  { category: "Project Management", items: ["ClickUp", "Quire"] },
];

export const certifications = [
  { name: "Wadhwani: Employability Skills", year: "2024" },
  { name: "Sololearn: Web Development", year: "2023" },
];

export const aboutBio =
  "Aspiring Front-End Web Developer with experience in building responsive, user-focused web applications. I work with React, Next.js, Node.js, and modern tooling, and CMS such as Wix. I enjoy QA, system integration, and continuous learning. Always open to new challenges and collaboration.";
