"use client"

import { Send, Phone, Mail, Linkedin } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function ContactSection() {
  const title = useScrollReveal()
  const form = useScrollReveal(0.05)
  const info = useScrollReveal()

  return (
    <section id="contact" className="px-6 py-20 pb-32 md:px-16 lg:px-24">
      <div
        ref={title.ref}
        className={`transition-all duration-700 ease-out ${title.isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {"Get in touch with me..."}
        </h2>
      </div>

      <div className="mt-10 flex flex-col gap-10 lg:flex-row">
        <form
          ref={form.ref}
          onSubmit={(e) => e.preventDefault()}
          className={`flex max-w-2xl flex-1 flex-col gap-5 transition-all duration-700 delay-200 ease-out ${form.isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">Nom</label>
              <input
                type="text"
                className="rounded-[12px] border border-[#D9D9D9] bg-background px-4 py-3 text-sm text-foreground focus:border-[#40C529] focus:outline-none focus:ring-1 focus:ring-[#40C529]"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">{"\u0050r\u00e9nom"}</label>
              <input
                type="text"
                className="rounded-[12px] border border-[#D9D9D9] bg-background px-4 py-3 text-sm text-foreground focus:border-[#40C529] focus:outline-none focus:ring-1 focus:ring-[#40C529]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">Mail</label>
              <input
                type="email"
                className="rounded-[12px] border border-[#D9D9D9] bg-background px-4 py-3 text-sm text-foreground focus:border-[#40C529] focus:outline-none focus:ring-1 focus:ring-[#40C529]"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">{"\u0054\u00e9l\u00e9phone"}</label>
              <input
                type="tel"
                className="rounded-[12px] border border-[#D9D9D9] bg-background px-4 py-3 text-sm text-foreground focus:border-[#40C529] focus:outline-none focus:ring-1 focus:ring-[#40C529]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Sujet du message</label>
            <input
              type="text"
              className="rounded-[12px] border border-[#D9D9D9] bg-background px-4 py-3 text-sm text-foreground focus:border-[#40C529] focus:outline-none focus:ring-1 focus:ring-[#40C529]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Message</label>
            <textarea
              rows={6}
              className="resize-none rounded-[12px] border border-[#D9D9D9] bg-background px-4 py-3 text-sm text-foreground focus:border-[#40C529] focus:outline-none focus:ring-1 focus:ring-[#40C529]"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-fit items-center gap-2 rounded-[16px] bg-[#40C529] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#38b023]"
          >
            <Send className="h-4 w-4" />
            Envoyer
          </button>
        </form>

        <div
          ref={info.ref}
          className={`flex flex-col gap-4 pt-6 transition-all duration-700 delay-[400ms] ease-out lg:pt-0 ${info.isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
        >
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-foreground" />
            <span className="text-sm text-foreground">0619330674</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-foreground" />
            <span className="text-sm text-foreground">tom.engelibert@gmail.com</span>
          </div>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition-opacity hover:opacity-70"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="h-5 w-5 text-foreground" />
          </a>
        </div>
      </div>
    </section>
  )
}
