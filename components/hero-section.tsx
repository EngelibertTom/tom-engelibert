"use client"

import Image from "next/image"
import { FileText, Send } from "lucide-react"
import { AvailabilityBadge } from "./availability-badge"
import { ParticlesBackground } from "./particles-background"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function HeroSection() {
  const badge = useScrollReveal()
  const heading = useScrollReveal()
  const buttons = useScrollReveal()
  const photo = useScrollReveal()

  return (
    <section id="presentation" className="relative flex min-h-screen flex-col justify-center px-6 py-20 md:px-16 lg:px-24">
      <ParticlesBackground />

      <div
        ref={badge.ref}
        className={`transition-all duration-700 ease-out ${badge.isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <AvailabilityBadge />
      </div>

      <div className="mt-12 flex flex-col-reverse items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-6">
          <div
            ref={heading.ref}
            className={`transition-all duration-700 delay-200 ease-out ${heading.isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              {"Hello, I'm Tom Engelibert"}
            </h1>
            <p className="mt-2 text-2xl text-foreground md:text-3xl lg:text-4xl">
              {"a "}
              <span className="font-semibold italic text-[#40C529]">React</span>
              {" developer"}
            </p>
          </div>

          <div
            ref={buttons.ref}
            className={`flex flex-wrap gap-3 transition-all duration-700 delay-[400ms] ease-out ${buttons.isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-[16px] border border-[#D9D9D9] bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <FileText className="h-4 w-4 text-[#40C529]" />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[16px] border border-[#D9D9D9] bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Send className="h-4 w-4 text-[#40C529]" />
              Get in touch
            </a>
          </div>
        </div>

        <div
          ref={photo.ref}
          className={`relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-muted shadow-lg transition-all duration-700 delay-300 ease-out md:h-52 md:w-52 lg:h-60 lg:w-60 ${photo.isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
        >
          <Image
            src="/images/profile.jpg"
            alt="Tom Engelibert profile photo"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
