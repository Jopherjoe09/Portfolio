export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  periodVariant?: "secondary" | "outline";
  highlights: string[];
  technologies: string[];
  tools: string[];
};

export const experienceItems: ExperienceItem[] = [
  {
    title: "Software Developer Intern",
    company: "PRIME IT SOLUTION",
    period: "January 2025 - June 2025",
    periodVariant: "secondary",
    highlights: [
      "Designed and integrated ABAC (Attribute-Based Access Control) with a user management system connected to SAP APIs, enabling department-based filtering, administrator-approved permissions, and seamless retrieval of business unit, role, and location data..",
      "Implemented user activation/inactivation functionality to support dynamic permission control, streamlined onboarding, and efficient lifecycle management",
      "Developed modules for Exchange Order supplier invoices, Cash Advance temporary company payments on behalf of clients, and Payment Disbursement paying suppliers based on orders, with an automated workflow integrated into the Travel Order process to streamline approvals and financial handling.",
      "Participated in the designing and documentation of the Travel Mid Office System, with a focus on system scalability, long-term growth, and smooth knowledge transfer.",
      "Engaged with stakeholders and mentors to gather requirements, develop design solutions, and contribute to the project's successful delivery.",
      "Contributed to the development of a prototype checklist tool that helps farmers manage their agricultural operations based on selected areas from a farm map.",
      "Developed a system for recording and submitting daily farm/field activities via a mobile app and a backend API that handles auth, form submission, reporting, and data sync.",
      "Developed a multi-platform system for managing parking: a mobile app for drivers (reservations, bookings, payments, vehicles, violations, notifications) and a web dashboard for administrators (users, customers, vehicles, violations, parking sites, slots, rates, and hardware). Both clients connect to a shared backend for data.",
    ],
    technologies: [
      "TypeScript",
      "React.js",
      "C#",
      "ASP.NET V8",
      "Microsoft SQL",
      "React Native",
      "HTML5",
      "CSS3",
      "Redux",
    ],
    tools: ["Figma", "ClickUp", "Git", "GitHub", "Visual Studio Code"],
  },
  {
    title: "Freelance Web Developer",
    company: "Independent",
    period: "2025 - Present",
    periodVariant: "outline",
    highlights: [
      "Transitioned to freelance work, handling independent projects and client engagements while delivering responsive and scalable web solutions using Next.js, React, and Wix with custom functionality and integrations.",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Supabase",
      "Wix",
    ],
    tools: ["Figma", "ClickUp", "Git", "Github", "Visual Studio Code"],
  },
];
