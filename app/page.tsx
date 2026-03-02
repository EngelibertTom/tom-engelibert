"use client"

import { useState } from "react"
import { SidebarNav } from "@/components/sidebar-nav"
import { HeroSection } from "@/components/hero-section"
import { TechMarquee } from "@/components/tech-marquee"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import OnBoarding from "@/components/onboarding/onboarding"
import PageTransition from "@/utils/pageTransition/PageTransition"

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeSection, setActiveSection] = useState("presentation")
  const [showOnboarding, setShowOnboarding] = useState(true)
  const dominoDelayMs = 0

  return (
    <PageTransition
      delayMs={dominoDelayMs}
      onCovered={() => {
        setShowOnboarding(false)
      }}
    >
      {showOnboarding ? <OnBoarding /> : null}
      <div className="relative flex min-h-screen bg-background">
        <SidebarNav
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          activeSection={activeSection}
          onNavigate={setActiveSection}
        />

        <div className="flex min-w-0 flex-1 flex-col">
          <main className="flex-1">
            <HeroSection />
            <TechMarquee />
            <ProjectsSection />
            <AboutSection />
            <ContactSection />
          </main>
        </div>
      </div>
    </PageTransition>
  )
}
