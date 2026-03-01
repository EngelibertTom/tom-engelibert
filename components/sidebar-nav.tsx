"use client"

import { ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Presentation", id: "presentation" },
  { label: "Projects", id: "projects" },
  { label: "About me", id: "about" },
  { label: "Contact", id: "contact" },
]

export function SidebarNav({
  isOpen,
  onToggle,
  activeSection,
  onNavigate,
}: {
  isOpen: boolean
  onToggle: () => void
  activeSection: string
  onNavigate: (id: string) => void
}) {
  const handleClick = (id: string) => {
    onNavigate(id)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={cn(
          "sticky top-0 hidden h-screen shrink-0 flex-col items-center bg-[#40C529] transition-all duration-300 ease-in-out md:flex",
          isOpen ? "w-52" : "w-12"
        )}
      >
        <button
          onClick={onToggle}
          className="mt-4 flex h-8 w-8 cursor-pointer items-center justify-center self-end rounded-full mr-2 transition-transform duration-200 hover:scale-110"
          aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          <ChevronLeft
            className={cn(
              "h-5 w-5 text-white transition-transform duration-300 ease-in-out",
              !isOpen && "rotate-180"
            )}
          />
        </button>

        <nav
          className={cn(
            "mt-12 flex w-full flex-col gap-2 px-3 transition-all duration-300 ease-in-out",
            isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
          )}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={cn(
                "cursor-pointer rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ease-in-out",
                activeSection === item.id
                  ? "bg-white text-[#40C529] shadow-sm"
                  : "text-white hover:bg-[#36a821]"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around bg-[#40C529] py-3 md:hidden">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={cn(
              "cursor-pointer rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 ease-in-out",
              activeSection === item.id
                ? "bg-white text-[#40C529] shadow-sm"
                : "text-white"
            )}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </>
  )
}
