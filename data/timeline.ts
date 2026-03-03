import type { LucideIcon } from "lucide-react";
import { MapPin, GraduationCap } from "lucide-react";

export type TimelineItem = {
  year: string;
  title: string;
  company: string;
  icon: LucideIcon;
  color: string;
  side: "left" | "right";
  achievements?: string[];
  description?: string[];
  badges: string[];
};

export const timelineItems: TimelineItem[] = [
  {
    year: "2025",
    title: "Finished Internship & Freelance Work",
    company: "PRIME IT SOLUTION & Freelance",
    icon: MapPin,
    color: "bg-primary",
    side: "right",
    achievements: [
      "Successfully completed internship at Prime IT Solution, contributing to real-world projects and gaining valuable industry experience.",
      "Transitioned to freelance work, taking on independent projects and building client relationships.",
      "Applied learned skills in professional settings, delivering quality solutions for various clients.",
    ],
    badges: [
      "Professional Experience",
      "Client Projects",
      "Industry Skills",
      "Freelancing",
    ],
  },
  {
    year: "2024 - 2023",
    title: "Advanced School Projects",
    company: "PHINMA - University of Pangasinan",
    icon: GraduationCap,
    color: "bg-primary",
    side: "left",
    description: [
      "Developed complex web applications and systems as part of advanced coursework.",
      "Focused on full-stack development and modern frameworks.",
      "Worked in teams for real-world project simulation.",
    ],
    badges: [
      "Full-Stack Development",
      "Database Design",
      "API Integration",
      "Team Collaboration",
      "System Architecture",
    ],
  },
  {
    year: "2022",
    title: "First School Projects",
    company: "PHINMA - University of Pangasinan",
    icon: GraduationCap,
    color: "bg-primary",
    side: "right",
    description: [
      "Started programming journey with foundational projects.",
      "Learned core concepts of web development.",
      "Built first simple web applications with HTML, CSS, PHP, and JavaScript.",
    ],
    badges: [
      "HTML & CSS",
      "JavaScript Basics",
      "Programming Logic",
      "Web Fundamentals",
      "Problem Solving",
      "PHP Basics",
    ],
  },
];
