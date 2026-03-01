import { Sparkles } from "lucide-react"

export function AvailabilityBadge() {
  return (
    <div className="inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white" style={{ background: "linear-gradient(90deg, rgba(64, 197, 41, 1) 0%, rgba(161, 217, 151, 1) 100%)" }}>
      <Sparkles className="h-4 w-4" />
      <span>Available for opportunities</span>
    </div>
  )
}
