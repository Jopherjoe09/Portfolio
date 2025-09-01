"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";

export function ProjectsSection() {
  const projects = [
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

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Here are some of the projects I've worked on that showcase my skills
            in web development and problem-solving.
          </p>
        </div>

        {/* Grid for small & medium screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-500 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={300}
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
                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent"
                  >
                    <a href={project.liveUrl} target="_blank">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Carousel className="w-full hidden lg:block">
          <CarouselContent className="-ml-4 flex">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="group hover:shadow-lg transition-all duration-500 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={300}
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
                    <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-2">
                      {project.title ===
                        "WEB-BASED STREAMLINE ENROLLMENT SYSTEM" ||
                      project.title === "Travel & Tour" ? (
                        <Button
                          size="sm"
                          variant="outline"
                          disabled
                          className="flex-1"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Live Demo Coming Soon
                        </Button>
                      ) : (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="flex-1 bg-transparent"
                        >
                          <a href={project.liveUrl} target="_blank">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute  top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute  top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}
