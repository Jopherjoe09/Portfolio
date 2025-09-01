import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <AboutSection />
        <footer className="bg-muted/30 py-8 border-t">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-sm">© 2025 Jopher Joe Ribo. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  )
}
