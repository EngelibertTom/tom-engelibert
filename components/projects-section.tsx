"use client"

import { useState } from "react"
import { ArrowDown, ExternalLink } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const filters = [
  "All",
  "React",
  "React Native",
  "Symfony",
  "Next.js",
  "TypeScript",
  "SCSS",
  "Tailwind",
  "Figma",
]

const projects = [
  {
    title: "Simularbre",
    description:
      "A web application that simulates tree planting in urban environments, raising user awareness of the challenges and issues of climate change. This tool allows users to estimate the real-time impact of tree planting on the temperature of identified urban heat islands.",
    tags: ["React", "Next.js", "Mapbox", "OpenWeather API"],
    github: "https://github.com/EngelibertTom/competition",
    live: "https://competition-vert.vercel.app/",
  },
  {
    title: "Mélogéo",
    description:
      "An immersive web application that uses weather data to generate an audiovisual experience. Discover how geographic and meteorological data are transformed into an immersive symphony.",
    tags: ["React", "Next.js", "Tone.js", "Mapbox", "OpenWeather API"],
    github: "https://github.com/EngelibertTom/epreuve-rentree",
    live: "https://epreuve-rentree-d6dp.vercel.app/map",
  },
  {
    title: "IA et Armement",
    description:
      "This website aims to raise public awareness of the challenges posed by AI in the military. It offers an immersive and interactive experience, allowing users to explore the implications of AI in armed conflicts.",
    tags: ["Next.js", "Tailwind"],
    github: "https://github.com/EngelibertTom/out-of-school",
    live: "https://out-of-school-nu.vercel.app/",
  },
  {
    title: "Delicious",
    description:
      "Interactive recipe website using the Gastronogeek API and Next.js. This site allowed me to showcase my design skills by creating an attractive and functional interface, integrating animations and page transitions.",
    tags: ["Next.js", "Tailwind CSS", "API Rest"],
    github: "https://github.com/EngelibertTom/gastronogeek",
    live: "https://gastronogeek-lsgy.vercel.app/",
  },
  {
    title: "Marcel & CO",
    description:
      "This mobile application, developed during a hackathon in 2023, scans products and assesses their environmental impact using a moral compass. This project provided an opportunity to test the swipe functionality with React Native. to test the functionality of this framework. It uses an API and lists the retrieved data.",
    tags: ["React Native", "API Rest"],
    github: "https://github.com/EngelibertTom/Marcel-CO",
    live: "",
  },
  {
    title: "Initiation React Native",
    description:
      "This React Native application was designed to test the functionality of this framework. It uses an API and lists the retrieved data.",
    tags: ["React Native", "API Rest"],
    github: "https://github.com/EngelibertTom/https://github.com/EngelibertTom/acnh",
    live: "",
  },
]

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [showAll, setShowAll] = useState(false)
  const title = useScrollReveal()
  const filtersReveal = useScrollReveal()
  const cardsReveal = useScrollReveal(0.05)

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter))

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3)

  return (
    <section id="projects" className="px-6 py-20 md:px-16 lg:px-24">
      <div
        ref={title.ref}
        className={`transition-all duration-700 ease-out ${title.isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {"Projects..."}
        </h2>
      </div>

      <div
        ref={filtersReveal.ref}
        className={`mt-8 flex flex-wrap justify-center gap-3 transition-all duration-700 delay-200 ease-out ${filtersReveal.isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => {
              setActiveFilter(filter)
              setShowAll(false)
            }}
            className={`rounded-[16px] border px-5 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${
              activeFilter === filter
                ? "border-[#40C529] bg-[#40C529]/10 text-[#40C529]"
                : "border-[#D9D9D9] bg-background text-foreground hover:border-[#40C529]/50"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div
        ref={cardsReveal.ref}
        className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {visibleProjects.map((project, index) => (
          <div
            key={`${project.title}-${index}`}
            className={`group flex flex-col justify-between rounded-2xl border border-[#D9D9D9] bg-card p-6 transition-all duration-500 ease-out hover:border-[#40C529] hover:shadow-[0_4px_24px_rgba(64,197,41,0.25)] ${cardsReveal.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            style={{
              transitionDelay: cardsReveal.isVisible
                ? `${index * 150}ms`
                : "0ms",
            }}
          >
            <div>
              <h3 className="text-xl font-bold text-card-foreground transition-colors duration-300 ease-in-out group-hover:text-[#40C529]">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="rounded-full border border-[#D9D9D9] bg-muted px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={project.github}
                className="inline-flex items-center gap-2 rounded-[16px] bg-[#40C529] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <GithubIcon className="h-4 w-4" />
                Github
              </a>
              {project.live ? (
  
    <a href={project.live}
    className="inline-flex items-center gap-2 rounded-[16px] border border-[#D9D9D9] bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-[#40C529]/50"
  >
    <ExternalLink className="h-4 w-4" />
    Live
  </a>
) : (
  <span className="inline-flex items-center gap-2 rounded-[16px] border border-[#D9D9D9] bg-muted px-4 py-2 text-sm font-medium text-muted-foreground cursor-not-allowed opacity-50">
    <ExternalLink className="h-4 w-4" />
    Live
  </span>
)}
            </div>
          </div>
        ))}
      </div>

      {!showAll && filteredProjects.length > 3 && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 rounded-[16px] border border-[#D9D9D9] bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-[#40C529]/50"
          >
            <ArrowDown className="h-4 w-4" />
            Show more
            <ArrowDown className="h-4 w-4" />
          </button>
        </div>
      )}

      {filteredProjects.length === 0 && (
        <p className="mt-10 text-center text-muted-foreground">
          No projects found with this filter.
        </p>
      )}
    </section>
  )
}
