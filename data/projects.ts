export type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  role: string;
  duration: string;
  team: string;
  gallery?: string[];
  /** Optional: tablet view screenshot */
  tabletImage?: string;
  /** Optional: mobile view screenshot */
  mobileImage?: string;
  /** Optional: color theme / design system image */
  themeImage?: string;
};

export const projects: Project[] = [
  {
    title: "AIGNITION - AMERASIAN TESLA OLYMPIAD",
    description:
      "Developed a full-stack web platform for managing international academic competitions, featuring three core modules: a dynamic Landing Page for public engagement, a Participant Portal for registration and submissions, and an Admin Portal for competition management and oversight.",
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind",
      "Node.js",
      "Express.js",
      "Supabase",
    ],
    image: "/aignition.png",
    liveUrl: "https://www.aignitionglobaleducationalliance.net/",
    role: "Frontend Developer",
    duration: "6 months",
    team: "Freelance Project",
  },
  {
    title: "WEB-BASED STREAMLINE ENROLLMENT SYSTEM",
    description:
      "Developed to simplify and automate the registration process, allowing users to easily create accounts, submit applications, and track their enrollment status in real time.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/enrollment.png",
    liveUrl: "#",
    role: "Full Stack Developer",
    duration: "3 months",
    team: "School Project",
  },
  {
    title: "WEB-BASED ATTENDANCE SYSTEM",
    description:
      "Developed a web-based Attendance System with modules for Administrators, Instructors, and Students; implemented QR code generation for online attendance, a virtual classroom seating feature for offline sessions, and Excel file import for bulk student data management.",
    technologies: ["React.js", "Node.js", "Express.js", "Supabase"],
    image: "/attendance.png",
    liveUrl: "https://attendance-system-one-teal.vercel.app/",
    role: "Full Stack Developer",
    duration: "3 months",
    team: "School Project",
  },
  {
    title: "Travel & Tour",
    description:
      "A responsive web platform designed for travel agencies, featuring tour package listings, booking management, customer inquiries, and secure payment options. Built to deliver a smooth user experience, it helps clients explore destinations, compare offers, and complete reservations with ease.",
    technologies: ["PHP", "HTML", "CSS", "MySQL"],
    image: "/travel&tour.png",
    liveUrl: "#",
    role: "Full Stack Developer",
    duration: "3 months",
    team: "School Project",
  },
  {
    title: "Home Scape",
    description:
      "A modern real estate listing web app for browsing properties, filtering by type and location, viewing details, saving favorites, and connecting with agents.",
    technologies: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Shadcn/UI",
    ],
    image: "/homescape.png",
    liveUrl: "https://real-state-home-scape.vercel.app/",
    role: "UI/UX Designer & Frontend Developer",
    duration: "1 Week",
    team: "Solo Project",
  },
];
