import { NextResponse } from "next/server"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().optional(),
  firstName: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(1),
})

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Contact <onboarding@resend.dev>"

  if (!apiKey || !toEmail) {
    return NextResponse.json(
      { message: "Configuration email manquante côté serveur." },
      { status: 500 }
    )
  }

  const body = await request.json().catch(() => null)
  const parsed = contactSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Les données du formulaire sont invalides." },
      { status: 400 }
    )
  }

  const { name, firstName, email, phone, subject, message } = parsed.data
  const fullName = [firstName, name].filter(Boolean).join(" ").trim()
  const textLines = [
    `Nom: ${fullName || "Non renseigné"}`,
    `Email: ${email}`,
    `Téléphone: ${phone || "Non renseigné"}`,
    "",
    message,
  ]

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `[Portfolio] ${subject}`,
      reply_to: email,
      text: textLines.join("\n"),
    }),
  })

  if (!resendResponse.ok) {
    const errorBody = await resendResponse.json().catch(() => null)
    const errorMessage =
      typeof errorBody?.message === "string"
        ? errorBody.message
        : "L'envoi du message a échoué."
    return NextResponse.json(
      { message: errorMessage },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
