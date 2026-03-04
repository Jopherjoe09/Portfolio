"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  User,
  Layers,
  Clock,
  Users,
  FileText,
  ExternalLink,
} from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectDetailDialogProps = {
  project: Project | null;
  open: boolean;
  onClose: () => void;
};

export function ProjectDetailDialog({
  project,
  open,
  onClose,
}: ProjectDetailDialogProps) {
  if (!project) return null;

  const hasLiveDemo = project.liveUrl && project.liveUrl !== "#";
  const tabletImage = project.tabletImage || project.image;
  const mobileImage = project.mobileImage || project.image;

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="fixed inset-0 w-screen h-screen max-w-none max-h-none translate-x-0 translate-y-0 rounded-none border-0 p-0 gap-0 overflow-hidden flex flex-col data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-0 overflow-hidden">
          {/* Left column: project info inside a card */}
          <div className="flex flex-col p-6 lg:p-8 overflow-y-auto">
            <Card className="border shadow-sm flex-1 min-h-0">
              <CardContent className="pt-6 pb-6 px-6 space-y-6">
                <DialogTitle asChild>
                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground scroll-mt-6 tracking-tight">
                    {project.title}
                  </h1>
                </DialogTitle>
                <dl className="space-y-5 text-base">
                  <div className="flex gap-3">
                    <User className="h-6 w-6 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <dt className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Role
                      </dt>
                      <dd className="text-foreground mt-1 text-lg">{project.role}</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Layers className="h-6 w-6 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <dt className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Tech Stack
                      </dt>
                      <dd className="text-foreground mt-1 text-lg">
                        {project.technologies.join(", ")}
                      </dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="h-6 w-6 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <dt className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Duration
                      </dt>
                      <dd className="text-foreground mt-1 text-lg">
                        {project.duration}
                      </dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Users className="h-6 w-6 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <dt className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Team
                      </dt>
                      <dd className="text-foreground mt-1 text-lg">{project.team}</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FileText className="h-6 w-6 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <dt className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Description
                      </dt>
                      <dd className="text-foreground leading-relaxed text-pretty mt-1 text-lg">
                        {project.description}
                      </dd>
                    </div>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </div>

          {/* Right column: Project gallery card + Live Demo */}
          <div className="flex flex-col p-6 lg:p-8 overflow-y-auto bg-muted/20 border-l min-h-0">
            <h2 className="text-base font-semibold uppercase tracking-wider text-foreground mb-4 shrink-0">
              Project Gallery
            </h2>
            <Card className="border shadow-sm flex-1 min-h-0 flex flex-col">
              <CardContent className="pt-6 pb-6 px-6 flex flex-col gap-4 flex-1 min-h-0">
                {/* Main image */}
                <div className="relative w-full flex-1 min-h-[240px] rounded-lg overflow-hidden border bg-muted/30">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-contain object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Tablet view, Mobile view — grid max 2 columns (commented out)
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 shrink-0">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Tablet view
                    </span>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border bg-muted/30">
                      <Image
                        src={tabletImage || "/placeholder.svg"}
                        alt={`${project.title} tablet view`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Mobile view
                    </span>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border bg-muted/30">
                      <Image
                        src={mobileImage || "/placeholder.svg"}
                        alt={`${project.title} mobile view`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                </div>
                */}
              </CardContent>
            </Card>
            <div className="mt-4 flex justify-end shrink-0">
              {hasLiveDemo ? (
                <Button asChild variant="default" size="lg" className="w-full sm:w-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Project
                  </a>
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="lg"
                  disabled
                  className="w-full sm:w-auto"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo Coming Soon
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
