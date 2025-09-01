import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { TimelineSection } from "@/components/timeline-section"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <ScrollAnimation delay={100}>
        <div id="timeline">
          <TimelineSection />
        </div>
      </ScrollAnimation>
      <ScrollAnimation delay={200}>
        <div id="experience">
          <ExperienceSection />
        </div>
      </ScrollAnimation>
      <ScrollAnimation delay={300}>
        <div id="projects">
          <ProjectsSection />
        </div>
      </ScrollAnimation>
      <ScrollAnimation delay={100}>
        <Footer />
      </ScrollAnimation>
    </main>
  )
}
