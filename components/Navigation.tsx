"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"


export const Navigation = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // When mounted, we can safely read the theme (avoids hydration mismatch)
  useEffect(() => setMounted(true), [])

  const toggle = () => {
    const current = resolvedTheme ?? theme
    setTheme(current === "dark" ? "light" : "dark")
  }

  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <div className="flex items-center gap-12">
        <h1 className="text-xl font-bold text-foreground">Jainco</h1>

        <div className="hidden md:flex items-center gap-8 text-sm font-mono">
          <Link
            href="#protocol"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            / PROTOCOL
          </Link>
          <Link
            href="#developers"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            / DEVELOPERS
          </Link>
          <Link
            href="#integrations"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            / INTEGRATIONS
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            / CONTACT
          </Link>
          <Link
            href="#community"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            / COMMUNITY
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          aria-label="Toggle theme"
          title="Toggle theme"
          onClick={toggle}
          className="p-2 rounded-md transition-colors hover:bg-muted/10"
        >
          {!mounted ? (
            <span className="w-5 h-5 inline-block" />
          ) : (resolvedTheme ?? theme) === "dark" ? (
            // show moon when dark
            <Moon className="w-5 h-5 text-foreground" />
          ) : (
            // show sun when light
            <Sun className="w-5 h-5 text-foreground" />
          )}
        </button>

        <Link href="/sign-up">
          <Button variant="outline" className="border-border hover:bg-secondary">
            Sign up
          </Button>
        </Link>
      </div>
    </nav>
  )
}