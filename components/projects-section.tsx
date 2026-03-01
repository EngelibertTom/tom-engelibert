"use client"

import { useState } from "react"
import { ArrowDown, ExternalLink } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const filters = [
  "All",
  "React",
  "Next.js",
  "TypeScript",
  "SCSS",
  "Tailwind",
  "Firebase",
  "Figma",
]

const projects = [
  {
    title: "Simularbre",
    description:
      "Application web de simulation de plantation d'arbre en milieu urbain permettant de sensibiliser les utilisateurs aux défis et enjeux du réchauffement climatique. Cet outil permet d4estimer l'impact en temps réel de la plantation d'arbres sur la température des ilots de chaleur identifiés.",
    tags: ["React", "Next.js", "Mapbox", "OpenWeather API"],
    github: "#",
    live: "https://competition-vert.vercel.app/",
  },
  {
    title: "Mélogéo",
    description:
      "Application web immersive utilisant les données de la météo pour générer une expérience audiovisuelle. Découvrez comment les données géographiques et météorologiques se transforment en une symphonie immersive.",
    tags: ["React", "Next.js", "Tone.js", "Mapbox", "OpenWeather API"],
    github: "#",
    live: "https://epreuve-rentree-d6dp.vercel.app/map",
  },
  {
    title: "IA et Armement",
    description:
      "Site dont l'objectif est de sensibiliser le public aux enjeux de l'IA dans le domaine militaire. Il propose une experience immersive et interactive, permettant aux utilisateurs de découvrir les implications de l'IA dans les conflits armés.",
    tags: ["Next.js", "Tailwind"],
    github: "#",
    live: "https://out-of-school-nu.vercel.app/",
  },
  {
    title: "Delicious",
    description:
      "Site de recettes interactif utilisant l'API de Gastronogeek et Next.js. Ce site m'a permis de mettre en avant mes compétences en design en créant une interface attrayante et fonctionnelle, en intégrant des animations et transitions de pages.",
    tags: ["Next.js", "Tailwind CSS", "API Rest"],
    github: "#",
    live: "https://gastronogeek-lsgy.vercel.app/",
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
              <a
                href={project.live}
                className="inline-flex items-center gap-2 rounded-[16px] border border-[#D9D9D9] bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-[#40C529]/50"
              >
                <ExternalLink className="h-4 w-4" />
                Live
              </a>
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
          Aucun projet avec ce filtre.
        </p>
      )}
    </section>
  )
}
