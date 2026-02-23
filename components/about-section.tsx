import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";
import {
  Database,
  Palette,
  Settings,
  Server,
  GitBranch,
  Layers,
  Monitor,
  LayoutGrid,
} from "lucide-react";

const techCategories: {
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

export function AboutSection() {
  const tools = [
    {
      category: "Development",
      items: ["VS Code", "Git", "GitHub"],
    },
    { category: "Project Management", items: ["ClickUp", "Quire"] },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Aspiring Front-End Web Developer with experience in building
                responsive, user-focused web applications. I work with React,
                Next.js, Node.js, and modern tooling, and CMS such as Wix. I
                enjoy QA, system integration, and continuous learning. Always
                open to new challenges and collaboration.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                Tech Stack
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {techCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <div
                      key={category.title}
                      className="rounded-lg border border-border bg-card p-4 space-y-3"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="font-semibold text-foreground">
                          {category.title}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item) => (
                          <Badge
                            key={item.name}
                            variant="secondary"
                            className="text-xs font-medium flex items-center gap-1.5 py-1.5"
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={14}
                              height={14}
                              className="shrink-0 rounded-sm object-contain"
                            />
                            {item.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Certifications
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-black font-medium">
                      Wadhwani: Employability Skills
                    </span>
                    <Badge variant="secondary">2024</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-black font-medium">
                      Sololearn: Web Development
                    </span>
                    <Badge variant="secondary">2023</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Tools & Software
                </h3>
                <div className="space-y-4">
                  {tools.map((toolGroup) => (
                    <div key={toolGroup.category}>
                      <h4 className="text-sm font-medium text-primary mb-2">
                        {toolGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {toolGroup.items.map((tool) => (
                          <Badge key={tool} variant="outline">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
