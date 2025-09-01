"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                <span className="text-balance">Hi, I'm</span>{" "}
                <span className="text-primary text-balance">
                  Jopher Joe Ribo
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-6 text-balance">
                Aspiring Web Developer Turning Ideas into Code
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl lg:max-w-none text-pretty">
                Constantly growing, I create web experiences that are clean,
                responsive, and user-centered.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button
                size="lg"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/file/Jopher Joe Ribo (Resume).pdf";
                  link.download = "Jopher Joe Ribo (Resume).pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="w-full sm:w-auto"
              >
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto bg-transparent"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-72 h-96 sm:w-80 sm:h-[28rem] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/jopher-profile.png"
                  alt="Jopher Joe Ribo - Professional graduation photo"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-16">
          <Link
            href="/about"
            className="text-muted-foreground hover:text-primary transition-colors animate-bounce inline-block"
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
          </Link>
        </div>
      </div>
    </section>
  );
}
