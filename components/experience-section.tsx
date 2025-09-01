import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Briefcase } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Experience</h2>
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
                    <CardTitle className="text-xl text-foreground mb-2">Web Developer Intern</CardTitle>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="font-medium text-primary">PRIME IT SOLUTION</span>
                    </div>
                    <Badge variant="secondary">2024 - 2025</Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-pretty">
                      Contributed to real-world web development projects, gaining hands-on experience with modern
                      frameworks and development practices.
                    </p>
                  </div>

                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-pretty">
                      Collaborated with senior developers on client projects, learning industry best practices and
                      professional development workflows.
                    </p>
                  </div>

                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-pretty">
                      Developed responsive web applications using JavaScript, React.js, and modern CSS frameworks.
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">React.js</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">HTML5</Badge>
                    <Badge variant="outline">CSS3</Badge>
                    <Badge variant="outline">Git</Badge>
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
                    <CardTitle className="text-xl text-foreground mb-2">Freelance Web Developer</CardTitle>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="font-medium text-primary">Independent</span>
                    </div>
                    <Badge variant="outline">2025 - Present</Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <p className="text-muted-foreground text-pretty mb-4">
                  Transitioned to freelance work, taking on independent projects and building direct client
                  relationships while delivering custom web solutions.
                </p>

                <div className="pt-2">
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Skills Developed</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Client Communication</Badge>
                    <Badge variant="outline">Project Management</Badge>
                    <Badge variant="outline">Full-Stack Development</Badge>
                    <Badge variant="outline">Problem Solving</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
