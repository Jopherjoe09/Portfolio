"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format, parseISO } from "date-fns";
import { certifications, type Certification } from "@/data/about";
import { cn } from "@/lib/utils";
import { Award, CheckCircle2, ExternalLink } from "lucide-react";

function formatCertificateDate(isoDate: string) {
  return format(parseISO(isoDate), "MMMM d, yyyy");
}

function CertificationDetailDialog({
  cert,
  open,
  onOpenChange,
}: {
  cert: Certification | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!cert) return null;

  const viewHref =
    cert.credentialUrl && cert.credentialUrl !== "#"
      ? cert.credentialUrl
      : cert.image;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton
        className={cn(
          "max-h-[min(92vh,900px)] max-w-3xl overflow-y-auto border-border bg-background p-0 text-foreground shadow-lg sm:rounded-xl",
          "duration-300",
          "[&>button]:right-3 [&>button]:top-3 [&>button]:z-20",
        )}
      >
        <DialogDescription className="sr-only">
          Certificate details for {cert.title} from {cert.issuer}
        </DialogDescription>

        <div className="relative w-full border-b border-border bg-muted/30">
          <div className="flex max-h-[min(58vh,520px)] min-h-[200px] w-full items-center justify-center p-4 sm:p-6">
            <Image
              src={cert.image}
              alt={`${cert.title} — ${cert.issuer}`}
              width={1600}
              height={1200}
              className="h-auto max-h-[min(58vh,520px)] w-full object-contain"
              sizes="(max-width: 768px) 100vw, 768px"
              priority={false}
            />
          </div>
        </div>

        <div className="space-y-4 p-5 sm:p-6">
          <DialogHeader className="space-y-3 text-left">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex min-w-0 flex-1 items-start gap-3">
                <div
                  className="relative hidden h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border bg-card ring-1 ring-border/60 sm:block"
                  aria-hidden
                >
                  <Image
                    src={cert.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {cert.issuer}
                  </p>
                  <DialogTitle className="mt-1 text-xl font-semibold text-foreground sm:text-2xl">
                    {cert.title}
                  </DialogTitle>
                </div>
              </div>
              <Badge
                variant="outline"
                className="shrink-0 gap-1 border-primary/40 bg-primary/10 text-primary"
              >
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                Verified
              </Badge>
            </div>
          </DialogHeader>

          <dl className="grid gap-4 text-sm">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Date
                </dt>
                <dd className="mt-0.5 font-medium text-foreground">
                  {formatCertificateDate(cert.date)}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Type
                </dt>
                <dd className="mt-0.5 font-medium text-foreground">
                  {cert.type}
                </dd>
              </div>
              <div className="min-w-[12rem]">
                <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Field
                </dt>
                <dd className="mt-0.5 font-medium text-foreground">
                  {cert.field}
                </dd>
              </div>
            </div>
            <div>
              <dt className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Skills
              </dt>
              <dd>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-foreground/40 bg-card text-foreground shadow-sm hover:bg-muted/50 dark:border-foreground/35"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </dd>
            </div>
          </dl>

          <div className="pt-1">
            <Button asChild className="w-full sm:w-auto">
              <a href={viewHref} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Certificate
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function CertificationCard({
  cert,
  onSelect,
}: {
  cert: Certification;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className={cn(
        "group flex h-full min-h-[200px] w-full flex-col overflow-hidden rounded-xl border border-border bg-card text-left",
        "border-t-2 border-t-transparent shadow-sm",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:border-t-violet-500 hover:shadow-lg hover:shadow-violet-500/10",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      )}
    >
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-muted/40">
        <Image
          src={cert.image}
          alt={`${cert.title} — ${cert.issuer}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          {cert.issuer}
        </p>
        <p className="font-semibold leading-snug text-foreground line-clamp-2">
          {cert.title}
        </p>
        <div className="flex items-center gap-1.5 pt-1 text-sm text-muted-foreground">
          <Award className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
          <time dateTime={cert.date}>{formatCertificateDate(cert.date)}</time>
        </div>
      </div>
    </button>
  );
}

export function CertificationsSection() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selected, setSelected] = useState<Certification | null>(null);
  const showNav = certifications.length > 3;

  useEffect(() => {
    if (!dialogOpen) {
      const id = window.setTimeout(() => setSelected(null), 280);
      return () => window.clearTimeout(id);
    }
  }, [dialogOpen]);

  const openCert = (cert: Certification) => {
    setSelected(cert);
    setDialogOpen(true);
  };

  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1.5">
          Credentials
        </p>
        <h3 className="text-xl font-semibold text-foreground">
          Certifications
        </h3>
      </div>

      <Carousel
        opts={{
          align: "start",
          duration: 28,
          dragFree: false,
        }}
        className={cn("w-full", showNav && "px-0 sm:px-11")}
      >
        <CarouselContent className="-ml-3">
          {certifications.map((cert) => (
            <CarouselItem
              key={cert.id}
              className="pl-3 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <CertificationCard cert={cert} onSelect={() => openCert(cert)} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {showNav ? (
          <>
            <CarouselPrevious
              type="button"
              className="left-0 top-1/2 z-10 h-9 w-9 -translate-y-1/2 border-border bg-card/95 shadow-md hover:bg-card"
            />
            <CarouselNext
              type="button"
              className="right-0 top-1/2 z-10 h-9 w-9 -translate-y-1/2 border-border bg-card/95 shadow-md hover:bg-card"
            />
          </>
        ) : null}
      </Carousel>

      <CertificationDetailDialog
        cert={selected}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}
