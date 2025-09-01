"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const projects = [
    {
      title: "Web-Based Attendance System",
      description:
        "A comprehensive attendance management system built with modern web technologies. Features real-time tracking, reporting, and user management capabilities.",
      technologies: ["JavaScript", "PHP", "MySQL", "HTML5", "CSS3"],
      image: "/attendance-system-dashboard-interface.png",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Travel & Tour Platform",
      description:
        "A full-featured travel booking platform with destination browsing, booking management, and user reviews. Responsive design optimized for all devices.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      image: "/travel-booking-website-interface.png",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Streamline Enrollment System",
      description:
        "An educational enrollment system that simplifies the registration process for students and administrators. Features document management and automated workflows.",
      technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap"],
      image: "/student-enrollment-system-interface.png",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce solution with shopping cart, payment integration, and inventory management. Built with responsive design and optimized performance.",
      technologies: ["React.js", "Node.js", "Stripe", "MongoDB"],
      image: "/ecommerce-platform-interface.png",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and progress tracking capabilities.",
      technologies: ["Vue.js", "Express.js", "Socket.io", "PostgreSQL"],
      image: "/task-management-app-interface.png",
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying || projects.length <= 3) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.max(1, projects.length - 2))
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, projects.length])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.max(1, projects.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + Math.max(1, projects.length - 2)) % Math.max(1, projects.length - 2),
    )
  }

  const getVisibleProjects = () => {
    const visibleProjects = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projects.length
      visibleProjects.push(projects[index])
    }
    return visibleProjects
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Here are some of the projects I've worked on that showcase my skills in web development and problem-solving.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleProjects().map((project, index) => (
              <Card
                key={`${currentIndex}-${index}`}
                className="group hover:shadow-lg transition-all duration-500 overflow-hidden transform hover:scale-105 animate-in fade-in-0 slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="w-10 h-10 rounded-full p-0 bg-transparent"
              disabled={projects.length <= 3}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {Array.from({ length: Math.max(1, projects.length - 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="w-10 h-10 rounded-full p-0 bg-transparent"
              disabled={projects.length <= 3}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
