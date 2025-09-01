import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <Card className="overflow-hidden">
              <CardHeader className="bg-primary/5">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-foreground mb-2">
                      Software Developer Intern
                    </CardTitle>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="font-medium text-primary">
                        PRIME IT SOLUTION
                      </span>
                    </div>
                    <Badge variant="secondary">January 2025 - June 2025</Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-pretty">
                      Designed and integrated ABAC (Attribute-Based Access
                      Control) with a user management system connected to SAP
                      APIs, enabling department-based filtering,
                      administrator-approved permissions, and seamless retrieval
                      of business unit, role, and location data..
                    </p>
                  </div>

                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-pretty">
                      Implemented user activation/inactivation functionality to
                      support dynamic permission control, streamlined
                      onboarding, and efficient lifecycle management
                    </p>
                  </div>

                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-pretty">
                      Developed modules for Exchange Order supplier invoices,
                      Cash Advance temporary company payments on behalf of
                      clients, and Payment Disbursement paying suppliers based
                      on orders, with an automated workflow integrated into the
                      Travel Order process to streamline approvals and financial
                      handling.
                    </p>
                  </div>

                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-pretty">
                      Participated in the designing and documentation of the
                      Travel Mid Office System, with a focus on system
                      scalability, long-term growth, and smooth knowledge
                      transfer.
                    </p>
                  </div>

                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-pretty">
                      Engaged with stakeholders and mentors to gather
                      requirements, develop design solutions, and contribute to
                      the project’s successful delivery.
                    </p>
                  </div>

                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-pretty">
                      Contributed to the development of a prototype checklist
                      tool that helps farmers manage their agricultural
                      operations based on selected areas from a farm map.
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    Technologies & Frameworks Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">React.js</Badge>
                    <Badge variant="outline">C# </Badge>
                    <Badge variant="outline">ASP.NET V8 </Badge>
                    <Badge variant="outline">Microsoft SQL </Badge>
                    <Badge variant="outline">React Native </Badge>
                    <Badge variant="outline">HTML5</Badge>
                    <Badge variant="outline">CSS3</Badge>
                    <Badge variant="outline">Redux</Badge>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    Development Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Figma</Badge>
                    <Badge variant="outline">ClickUp</Badge>
                    <Badge variant="outline">Git</Badge>
                    <Badge variant="outline">GitHub</Badge>
                    <Badge variant="outline">Visual Studio Code</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-primary/5">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-foreground mb-2">
                      Freelance Web Developer
                    </CardTitle>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="font-medium text-primary">
                        Independent
                      </span>
                    </div>
                    <Badge variant="outline">2025 - Present</Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <p className="text-muted-foreground text-pretty mb-4">
                  Transitioned to freelance work, taking on independent projects
                  and building direct client relationships while delivering
                  custom web solutions.
                </p>

                <div className="pt-2">
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    Technologies & Frameworks Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">React.js</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Express.js</Badge>
                    <Badge variant="outline">Supabase</Badge>
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    Development Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Figma</Badge>
                    <Badge variant="outline">ClickUp</Badge>
                    <Badge variant="outline">Git</Badge>
                    <Badge variant="outline">Github</Badge>
                    <Badge variant="outline">Visual Studio Code</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
