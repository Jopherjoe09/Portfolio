import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { TimelineSection } from "@/components/timeline-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ScrollAnimationReveal } from "@/components/scroll-animation.reveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <ScrollAnimationReveal delay={100}>
        <AboutSection />
      </ScrollAnimationReveal>
      <ScrollAnimationReveal delay={200}>
        <div id="timeline">
          <TimelineSection />
        </div>
      </ScrollAnimationReveal>
      <ScrollAnimationReveal delay={300}>
        <div id="experience">
          <ExperienceSection />
        </div>
      </ScrollAnimationReveal>
      <ScrollAnimationReveal delay={400}>
        <div id="projects">
          <ProjectsSection />
        </div>
      </ScrollAnimationReveal>
      <ScrollAnimationReveal delay={500}>
        <ContactSection />
      </ScrollAnimationReveal>
      <ScrollAnimationReveal delay={100}>
        <Footer />
      </ScrollAnimationReveal>
    </main>
  );
}
