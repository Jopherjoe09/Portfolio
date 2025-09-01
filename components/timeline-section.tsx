import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap } from "lucide-react"

export function TimelineSection() {
  const timelineItems = [
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
      badges: ["Professional Experience", "Client Projects", "Industry Skills", "Freelancing"],
    },
    {
      year: "2024 - 2023",
      title: "Advanced School Projects",
      company: "University of Cebu - Main Campus",
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
      company: "University of Cebu - Main Campus",
      icon: GraduationCap,
      color: "bg-primary",
      side: "right",
      description: [
        "Started programming journey with foundational projects.",
        "Learned core concepts of web development.",
        "Built first simple web applications with HTML, CSS, and JavaScript.",
      ],
      badges: ["HTML & CSS", "JavaScript Basics", "Programming Logic", "Web Fundamentals", "Problem Solving"],
    },
  ]

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Timeline</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Center timeline line (desktop only) */}
          <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-border hidden lg:block"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const IconComponent = item.icon
              const listItems =
                item.achievements ?? (Array.isArray(item.description) ? item.description : [item.description])

              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center ${
                    item.side === "left" ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${item.side === "left" ? "lg:pr-8" : "lg:pl-8"}`}>
                    <Card className="relative">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <CardTitle className="text-xl text-foreground">{item.title}</CardTitle>
                          <Badge variant="secondary" className="w-fit">
                            <Calendar className="w-3 h-3 mr-1" />
                            {item.year}
                          </Badge>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <IconComponent className="w-4 h-4 mr-1" />
                          <span className="font-medium text-primary">{item.company}</span>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Bullet points */}
                        <div className="space-y-3">
                          {listItems.map((text, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-muted-foreground text-pretty">{text}</p>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4">
                          <h4 className="text-sm font-medium text-foreground mb-2">
                            {item.achievements ? "Milestone Achievements" : "Learning Focus"}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.badges.map((badge, idx) => (
                              <Badge key={idx} variant="outline">
                                {badge}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center dot (now shows on all devices) */}
                  <div className="flex items-center justify-center w-auto lg:w-2/12 my-6 lg:my-0">
                    <div
                      className={`w-3 h-3 lg:w-4 lg:h-4 ${item.color} rounded-full border-2 lg:border-4 border-background shadow-lg z-10`}
                    ></div>
                  </div>

                  {/* Empty space for opposite side (desktop only) */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
