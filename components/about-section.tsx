"use client"

import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const experiences = [
  {
    logo: "/images/iut.png",
    title: "DUT MMI \u2013 IUT de Lens",
    date: "2020 \u2013 2022",
  },
  {
    logo: "/images/bonsai.png",
    title: "D\u00e9veloppeur Full Stack",
    date: "Mai 2022",
  },
  {
    logo: "/images/top-office.png",
    title: "D\u00e9veloppeur Full Stack",
    date: "2023",
  },
  {
    logo: "/images/groupe-all.png",
    title: "D\u00e9veloppeur Full Stack",
    date: "2023\u20132025",
  },
]

const certifications = [
  {
    img: ""
  }
]

export function AboutSection() {
  const title = useScrollReveal()
  const description = useScrollReveal()
  const timeline = useScrollReveal(0.1)
  const certTitle = useScrollReveal()
  const certCards = useScrollReveal(0.05)

  return (
    <section id="about" className="px-6 py-20 md:px-16 lg:px-24">
      <div
        ref={title.ref}
        className={`transition-all duration-700 ease-out ${title.isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {"About me..."}
        </h2>
      </div>

      <div
        ref={description.ref}
        className={`transition-all duration-700 delay-200 ease-out ${description.isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <p className="mt-6 max-w-4xl leading-relaxed text-foreground">
          {"My name is Tom Engélibert, and I'm a full-stack web developer. Passionate about creating high-performance and intuitive applications, I have a strong foundation in React, Next.js, TypeScript, Tailwind CSS, and backend development with Symfony and Laravel. Curious and motivated, I enjoy learning new technologies and tackling technical challenges."}
        </p>
      </div>

      <div
        ref={timeline.ref}
        className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-4"
      >
        {experiences.map((exp, index) => (
          <div
            key={exp.title + exp.date}
            className={`flex flex-col items-center gap-3 text-center transition-all duration-500 ease-out ${timeline.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            style={{
              transitionDelay: timeline.isVisible ? `${index * 150}ms` : "0ms",
            }}
          >
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-[#D9D9D9]">
              <Image
                src={exp.logo}
                alt={exp.title}
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">{exp.title}</p>
              <p className="text-sm text-muted-foreground">{exp.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        ref={certTitle.ref}
        className={`transition-all duration-700 ease-out ${certTitle.isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <h3 className="mt-16 text-2xl font-bold text-foreground">Certifications</h3>
      </div>

      <div
        ref={certCards.ref}
        className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-[#D9D9D9] bg-background transition-all duration-500 ease-out ${certCards.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            style={{
              transitionDelay: certCards.isVisible
                ? `${(i - 1) * 150}ms`
                : "0ms",
            }}
          >
            <svg
              viewBox="0 0 200 150"
              className="h-full w-full text-[#D9D9D9]"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            >
              <rect x="10" y="10" width="180" height="130" rx="8" fill="none" />
              <line x1="10" y1="10" x2="190" y2="140" />
              <line x1="190" y1="10" x2="10" y2="140" />
              <text
                x="100"
                y="25"
                textAnchor="middle"
                fontSize="5"
                fill="currentColor"
                stroke="none"
              >
                {"Certification placeholder"}
              </text>
            </svg>
          </div>
        ))}
      </div>
    </section>
  )
}
