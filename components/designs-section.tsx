"use client";

import Image from "next/image";
import { ExternalLink, Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { designsData } from "@/data/designs";
import type { Design } from "@/data/designs";

function DesignActionButton({
  label,
  icon: Icon,
  href,
  enabled,
}: {
  label: string;
  icon: typeof ExternalLink;
  href: string;
  enabled: boolean;
}) {
  const button = enabled ? (
    <Button variant="outline" size="sm" className="flex-1" asChild>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon className="w-3.5 h-3.5 shrink-0" />
        {label}
      </a>
    </Button>
  ) : (
    <Button
      variant="outline"
      size="sm"
      className="flex-1 opacity-50 cursor-not-allowed"
      disabled
    >
      <Icon className="w-3.5 h-3.5 shrink-0" />
      {label}
    </Button>
  );

  if (enabled) return button;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="flex-1">{button}</span>
      </TooltipTrigger>
      <TooltipContent>Link not available</TooltipContent>
    </Tooltip>
  );
}

function DesignCard({ design }: { design: Design }) {
  const hasDesignUrl = Boolean(design.designUrl && design.designUrl !== "#");
  const hasPrototypeUrl = Boolean(
    design.prototypeUrl && design.prototypeUrl !== "#"
  );

  return (
    <Card className="group h-full min-h-[380px] flex flex-col hover:shadow-lg transition-all duration-500 overflow-hidden">
      <div className="relative overflow-hidden shrink-0">
        <Image
          src={design.image || "/placeholder.svg"}
          alt={design.title}
          width={600}
          height={300}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardHeader className="shrink-0 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {design.title}
          </CardTitle>
          <Badge variant="secondary" className="shrink-0">
            {design.tool}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1 min-h-0 flex flex-col gap-4">
        <p className="text-muted-foreground text-sm leading-relaxed text-pretty line-clamp-4">
          {design.description}
        </p>
        <div className="flex gap-2 mt-auto">
          <DesignActionButton
            label="View Design"
            icon={ExternalLink}
            href={design.designUrl ?? "#"}
            enabled={hasDesignUrl}
          />
          <DesignActionButton
            label="View Prototype"
            icon={Play}
            href={design.prototypeUrl ?? "#"}
            enabled={hasPrototypeUrl}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export function DesignsSection() {
  return (
    <TooltipProvider>
      <section id="designs" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              My Designs
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Here are some of the UI/UX designs and visual works I've crafted
              using Figma and Canva.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden items-stretch">
            {designsData.map((design, index) => (
              <DesignCard key={index} design={design} />
            ))}
          </div>

          <Carousel className="w-full hidden lg:block">
            <CarouselContent className="-ml-4 flex items-stretch">
              {designsData.map((design, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3 flex"
                >
                  <DesignCard design={design} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </section>
    </TooltipProvider>
  );
}
