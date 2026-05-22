export type Design = {
  title: string;
  description: string;
  image: string;
  tool: "Figma" | "Canva";
  designUrl?: string;
  prototypeUrl?: string;
};

export const designsData: Design[] = [
  {
    title: "Aignition",
    description:
      "Designed the UI/UX for an international academic competition platform, crafting three core interfaces: a dynamic Landing Page for public engagement, a Participant Portal for registration and submissions, and an Admin Portal for competition management and oversight.",
    image: "/aignition.png",
    tool: "Figma",
    designUrl:
      "https://www.figma.com/design/tnMNCPpYAMxSkbBntH2sjX/Aignition--Portfolio-?t=CFq3hxUexkdN18Wy-0",
    prototypeUrl:
      "https://www.figma.com/proto/tnMNCPpYAMxSkbBntH2sjX/Aignition--Portfolio-?t=CFq3hxUexkdN18Wy-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=1-62",
  },
  {
    title: "Travel & Tour",
    description:
      "Crafted the UI/UX for a Travel & Tour platform in Figma, covering three key screens — a welcoming Home page, a Tours page showcasing available packages, and a Booking page designed for a smooth and intuitive reservation experience.",
    image: "/travelandtour.png",
    tool: "Figma",
    designUrl:
      "https://www.figma.com/design/PQLo8Qx4ZYhMxFfDzNRh0l/Trave---Tour--Portfolio-?t=ll04trmnuD4Nkk64-0",
    prototypeUrl:
      "https://www.figma.com/proto/PQLo8Qx4ZYhMxFfDzNRh0l/Trave---Tour--Portfolio-?node-id=1-591&p=f&t=CFq3hxUexkdN18Wy-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A591",
  },
  {
    title: "Admin Hub Dashboard",
    description:
      "Designed a full Admin Hub UI in Figma with Dashboard, Users, Orders, Products, and Analytics pages — focused on clarity, efficient navigation, and data visibility.",
    image: "/adminhub.png",
    tool: "Figma",
    designUrl:
      "https://www.figma.com/design/cp9ssqOIoG8wtCjZ0duKwf/Admin-Hub--Portfolio-?node-id=0-1&p=f&t=kPbSQ74citwQsiUj-0",
    prototypeUrl:
      "https://www.figma.com/proto/cp9ssqOIoG8wtCjZ0duKwf/Admin-Hub--Portfolio-?node-id=1-552&p=f&t=kPbSQ74citwQsiUj-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A552",
  },
  {
    title: "San Fabian Super App",
    description:
      "Designed a government super app UI in Figma for San Fabian residents, covering 20+ screens across civic services, document requests, community reports, voucher redemption, and local government forms.",
    image: "/superapp.png",
    tool: "Figma",
    designUrl:
      "https://www.figma.com/design/LFre5KmtRp4t2yD0XAurgh/San-Fabian-Super-App--Portfolio-?t=kPbSQ74citwQsiUj-0",
    prototypeUrl:
      "https://www.figma.com/proto/LFre5KmtRp4t2yD0XAurgh/San-Fabian-Super-App--Portfolio-?t=kPbSQ74citwQsiUj-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=1-923&starting-point-node-id=1%3A923",
  },
];
