"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectDetailDialog } from "@/components/project-detail-dialog";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: () => void;
}) {
  return (
    <Card
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className="group h-full min-h-[380px] flex flex-col hover:shadow-lg transition-all duration-500 overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <div className="relative overflow-hidden shrink-0">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={300}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardHeader className="shrink-0">
        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 min-h-0">
        <p className="text-muted-foreground text-sm leading-relaxed text-pretty line-clamp-4">
          {project.description}
        </p>
      </CardContent>
    </Card>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const openDetail = (project: Project) => {
    setSelectedProject(project);
    setDetailOpen(true);
  };

  const closeDetail = () => {
    setDetailOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Here are some of the projects I've worked on that showcase my skills
            in web development and problem-solving.
          </p>
        </div>

        {/* Grid for small & medium screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden items-stretch">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onSelect={() => openDetail(project)}
            />
          ))}
        </div>

        <Carousel className="w-full hidden lg:block">
          <CarouselContent className="-ml-4 flex items-stretch">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3 flex"
              >
                <ProjectCard
                  project={project}
                  onSelect={() => openDetail(project)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>

      <ProjectDetailDialog
        project={selectedProject}
        open={detailOpen}
        onClose={closeDetail}
      />
    </section>
  );
}
