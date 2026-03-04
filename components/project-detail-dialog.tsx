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
        {/* On mobile/tablet: one scroll; on lg: two columns with independent scroll */}
        <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden lg:overflow-hidden lg:flex lg:flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:flex-1 lg:min-h-0 lg:overflow-hidden">
            {/* Left column: project info */}
            <div className="flex flex-col p-4 sm:p-6 lg:p-8 lg:overflow-y-auto lg:min-h-0 shrink-0 lg:shrink">
              <Card className="border shadow-sm lg:min-h-0">
                <CardContent className="pt-4 pb-4 px-4 sm:pt-6 sm:pb-6 sm:px-6 space-y-4 sm:space-y-6">
                  <DialogTitle asChild>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground scroll-mt-6 tracking-tight break-words">
                      {project.title}
                    </h1>
                  </DialogTitle>
                  <dl className="space-y-4 sm:space-y-5 text-base">
                    <div className="flex gap-3 min-w-0">
                      <User className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <dt className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                          Role
                        </dt>
                        <dd className="text-foreground mt-1 text-base sm:text-lg break-words">{project.role}</dd>
                      </div>
                    </div>
                    <div className="flex gap-3 min-w-0">
                      <Layers className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <dt className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                          Tech Stack
                        </dt>
                        <dd className="text-foreground mt-1 text-base sm:text-lg break-words">
                          {project.technologies.join(", ")}
                        </dd>
                      </div>
                    </div>
                    <div className="flex gap-3 min-w-0">
                      <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <dt className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                          Duration
                        </dt>
                        <dd className="text-foreground mt-1 text-base sm:text-lg break-words">
                          {project.duration}
                        </dd>
                      </div>
                    </div>
                    <div className="flex gap-3 min-w-0">
                      <Users className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <dt className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                          Team
                        </dt>
                        <dd className="text-foreground mt-1 text-base sm:text-lg break-words">{project.team}</dd>
                      </div>
                    </div>
                    <div className="flex gap-3 min-w-0">
                      <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <dt className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                          Description
                        </dt>
                        <dd className="text-foreground leading-relaxed text-pretty mt-1 text-base sm:text-lg break-words">
                          {project.description}
                        </dd>
                      </div>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </div>

            {/* Right column: Project gallery */}
            <div className="flex flex-col p-4 sm:p-6 lg:p-8 lg:overflow-y-auto lg:min-h-0 bg-muted/20 lg:border-l border-t lg:border-t-0 mt-4 lg:mt-0 pt-4 lg:pt-0">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold uppercase tracking-wider text-foreground pt-2 sm:pt-4 pb-3 sm:pb-4 shrink-0">
                Project Gallery
              </h2>
              <Card className="border shadow-sm lg:flex-1 lg:min-h-0 lg:flex lg:flex-col">
                <CardContent className="pt-4 pb-4 px-4 sm:pt-6 sm:pb-6 sm:px-6 flex flex-col gap-4">
                  {/* Main image: fixed aspect on mobile/tablet to prevent overlap */}
                  <div className="relative w-full aspect-video min-h-[200px] sm:min-h-[240px] rounded-lg overflow-hidden border bg-muted/30 lg:flex-1 lg:min-h-[240px]">
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
            <div className="mt-4 pb-6 sm:pb-0 flex justify-end shrink-0">
              {hasLiveDemo ? (
                <Button asChild variant="default" size="lg" className="w-full sm:w-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 shrink-0" />
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
                  <ExternalLink className="w-4 h-4 mr-2 shrink-0" />
                  Live Demo Coming Soon
                </Button>
              )}
            </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
