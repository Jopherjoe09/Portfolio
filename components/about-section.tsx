import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Palette,
  Settings,
  Globe,
  Server,
  GitBranch,
  Layers,
  Zap,
  FileCode,
  Monitor,
  Cloud,
  Terminal,
} from "lucide-react";

export function AboutSection() {
  const techStack = [
    { name: "JavaScript", icon: FileCode, color: "text-yellow-500" },
    { name: "React.js", icon: Layers, color: "text-blue-500" },
    { name: "Node.js", icon: Server, color: "text-green-600" },
    { name: "Express.js", icon: Zap, color: "text-gray-700" },
    { name: "PHP", icon: Code, color: "text-indigo-600" },
    { name: "HTML5", icon: Globe, color: "text-orange-500" },
    { name: "CSS3", icon: Palette, color: "text-blue-600" },
    { name: "Tailwind CSS", icon: Palette, color: "text-cyan-500" },
    { name: "Git", icon: GitBranch, color: "text-orange-600" },
    { name: "GitHub", icon: GitBranch, color: "text-gray-800" },
    { name: "Figma", icon: Monitor, color: "text-pink-500" },
    { name: "ClickUp", icon: Settings, color: "text-purple-500" },
    { name: "MySQL", icon: Database, color: "text-blue-700" },
    { name: "MongoDB", icon: Database, color: "text-green-500" },
    { name: "TypeScript", icon: FileCode, color: "text-blue-600" },
    { name: "Next.js", icon: Layers, color: "text-black" },
    { name: "Bootstrap", icon: Palette, color: "text-purple-600" },
    { name: "jQuery", icon: Code, color: "text-blue-500" },
    { name: "REST APIs", icon: Cloud, color: "text-green-600" },
    { name: "JSON", icon: Terminal, color: "text-yellow-600" },
  ];

  const tools = [
    {
      category: "Development",
      items: ["VS Code", "Git", "GitHub", "npm"],
    },
    { category: "Design", items: ["Figma", "Canva"] },
    { category: "Project Management", items: ["ClickUp", "Quire"] },
    { category: "Database", items: ["MySQL", "phpMyAdmin", "MongoDB"] },
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
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-6">
                Aspiring Front-End Web Developer specializing in system
                integration, workflow automation, and access control solutions.
                Experienced in building dynamic web applications and connecting
                front-office operations with back-office systems to streamline
                business processes and improve efficiency.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-6">
                With hands-on experience from internships, freelance projects,
                and academic work, I specialize as a Frontend Developer,
                building responsive and user-focused web applications. My
                expertise includes JavaScript, React.js, Express.js, Node.js,
                and TypeScript, and I’m committed to continuous learning to stay
                updated with the latest industry trends and deliver impactful
                solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                When I'm not coding, I enjoy exploring new frameworks,
                contributing to open-source projects, and collaborating with
                fellow developers. I'm always excited to take on new challenges
                that push my skills to the next level.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                Tech Stack
              </h3>
              <div className="relative overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                  {techStack.concat(techStack).map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="mx-2 text-sm py-2 px-4 flex-shrink-0 flex items-center gap-2"
                      >
                        <IconComponent className={`w-4 h-4 ${tech.color}`} />
                        {tech.name}
                      </Badge>
                    );
                  })}
                </div>
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
