import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase } from "lucide-react";
import { experienceItems } from "@/data/experience";

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
            {experienceItems.map((job, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-primary/5">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground mb-2">
                        {job.title}
                      </CardTitle>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="font-medium text-primary">
                          {job.company}
                        </span>
                      </div>
                      <Badge
                        variant={job.periodVariant ?? "secondary"}
                      >
                        {job.period}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    {job.highlights.map((text, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground text-pretty">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Technologies & Frameworks Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Development Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.tools.map((tool) => (
                        <Badge key={tool} variant="outline">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
