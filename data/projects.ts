export type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
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
    liveUrl: "https://aignition-frontend.vercel.app/",
  },
  {
    title: "WEB-BASED STREAMLINE ENROLLMENT SYSTEM",
    description:
      "Developed to simplify and automate the registration process, allowing users to easily create accounts, submit applications, and track their enrollment status in real time.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/enrollment.png",
    liveUrl: "#",
  },
  {
    title: "WEB-BASED ATTENDANCE SYSTEM",
    description:
      "Developed a web-based Attendance System with modules for Administrators, Instructors, and Students; implemented QR code generation for online attendance, a virtual classroom seating feature for offline sessions, and Excel file import for bulk student data management.",
    technologies: ["React.js", "Node.js", "Express.js", "Supabase"],
    image: "/attendance.png",
    liveUrl: "https://attendance-system-one-teal.vercel.app/",
  },
  {
    title: "Travel & Tour",
    description:
      "A responsive web platform designed for travel agencies, featuring tour package listings, booking management, customer inquiries, and secure payment options. Built to deliver a smooth user experience, it helps clients explore destinations, compare offers, and complete reservations with ease.",
    technologies: ["PHP", "HTML", "CSS", "MySQL"],
    image: "/travel&tour.png",
    liveUrl: "#",
  },
];
