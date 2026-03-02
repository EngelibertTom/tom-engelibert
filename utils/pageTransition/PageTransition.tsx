"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import styles from "./styles.module.css"

type PageTransitionProps = {
  children: React.ReactNode
  delayMs?: number
  onCovered?: () => void
}

const PageTransition = ({
  children,
  delayMs = 0,
  onCovered,
}: PageTransitionProps) => {
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const COLUMNS = 8
  const ROWS = 1

  useEffect(() => {
    const tiles = overlayRef.current?.querySelectorAll(`.${styles.tile}`)
    if (!tiles) return

    const timeline = gsap.timeline({ delay: delayMs / 1000 })

    timeline.fromTo(
      tiles,
      {
        scaleY: 0,
        transformOrigin: "top center",
      },
      {
        scaleY: 1,
        duration: 0.6,
        stagger: {
          amount: 0.8,
          from: "start",
          grid: [ROWS, COLUMNS],
        },
        ease: "power2.out",
      }
    )

    timeline.call(() => {
      onCovered?.()
    })

    timeline.to(tiles, {
      scaleY: 0,
      transformOrigin: "bottom center",
      duration: 0.6,
      delay: 0.4,
      stagger: {
        amount: 0.8,
        from: "end",
        grid: [ROWS, COLUMNS],
      },
      ease: "power2.in",
      onComplete: () => {
        if (overlayRef.current) {
          overlayRef.current.style.pointerEvents = "none"
        }
      },
    })

    return () => {
      timeline.kill()
    }
  }, [])

  return (
    <>
      <div ref={overlayRef} className={styles.overlay}>
        {Array.from({ length: COLUMNS * ROWS }).map((_, index) => (
          <div key={index} className={styles.tile} />
        ))}
      </div>
      {children}
    </>
  )
}

export default PageTransition