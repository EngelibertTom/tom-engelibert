"use client"

import { useState } from "react"
import { Send, Phone, Mail, Linkedin } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function ContactSection() {
  const title = useScrollReveal()
  const form = useScrollReveal(0.05)
  const info = useScrollReveal()
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

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
        <div
          ref={form.ref}
          className={`flex max-w-2xl flex-1 flex-col transition-all duration-700 delay-200 ease-out ${form.isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <form
            onSubmit={async (event) => {
            event.preventDefault()
            setStatus("sending")
            setErrorMessage(null)

            const formElement = event.currentTarget
            const formData = new FormData(formElement)
            const payload = {
              name: String(formData.get("name") ?? "").trim(),
              firstName: String(formData.get("firstName") ?? "").trim(),
              email: String(formData.get("email") ?? "").trim(),
              phone: String(formData.get("phone") ?? "").trim(),
              subject: String(formData.get("subject") ?? "").trim(),
              message: String(formData.get("message") ?? "").trim(),
            }

            try {
              const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              })

              if (!response.ok) {
                const data = await response.json().catch(() => null)
                const message =
                  typeof data?.message === "string"
                    ? data.message
                    : "Something went wrong. Please try again in a moment."
                setErrorMessage(message)
                setStatus("error")
                return
              }

              formElement.reset()
              setStatus("success")
            } catch (error) {
              setErrorMessage("Unable to send the message right now.")
              setStatus("error")
            }
            }}
            className="flex flex-col gap-5"
          >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">Name</label>
              <input
                type="text"
                name="name"
                className="rounded-[12px] border border-[#D9D9D9] bg-background px-4 py-3 text-sm text-foreground focus:border-[#40C529] focus:outline-none focus:ring-1 focus:ring-[#40C529]"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">First name</label>
              <input
                type="text"
                name="firstName"
                className="rounded-[12px] border border-[#D9D9D9] bg-background px-4 py-3 text-sm text-foreground focus:border-[#40C529] focus:outline-none focus:ring-1 focus:ring-[#40C529]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">Mail</label>
              <input
                type="email"
                name="email"
                required
                className="rounded-[12px] border border-[#D9D9D9] bg-background px-4 py-3 text-sm text-foreground focus:border-[#40C529] focus:outline-none focus:ring-1 focus:ring-[#40C529]"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">Phone</label>
              <input
                type="tel"
                name="phone"
                className="rounded-[12px] border border-[#D9D9D9] bg-background px-4 py-3 text-sm text-foreground focus:border-[#40C529] focus:outline-none focus:ring-1 focus:ring-[#40C529]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Subject</label>
            <input
              type="text"
              name="subject"
              required
              className="rounded-[12px] border border-[#D9D9D9] bg-background px-4 py-3 text-sm text-foreground focus:border-[#40C529] focus:outline-none focus:ring-1 focus:ring-[#40C529]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Message</label>
            <textarea
              rows={6}
              name="message"
              required
              className="resize-none rounded-[12px] border border-[#D9D9D9] bg-background px-4 py-3 text-sm text-foreground focus:border-[#40C529] focus:outline-none focus:ring-1 focus:ring-[#40C529]"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex w-fit items-center gap-2 rounded-[16px] bg-[#40C529] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#38b023]"
          >
            <Send className="h-4 w-4" />
            {status === "sending" ? "Sending..." : "Send"}
          </button>

          {status === "success" ? (
            <p className="text-sm text-[#40C529]" role="status" aria-live="polite">
              Thanks! Your message has been sent.
            </p>
          ) : null}
            {status === "error" ? (
              <p className="text-sm text-red-500" role="status" aria-live="polite">
                {errorMessage ?? "Something went wrong. Please try again later."}
              </p>
            ) : null}
          </form>
        </div>

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
