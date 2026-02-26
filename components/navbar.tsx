"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-2xl tracking-tight text-foreground">
          Ember
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {["Menu", "About", "Locations", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#menu"
          className="hidden rounded-sm bg-primary px-5 py-2.5 text-sm uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90 md:inline-block"
        >
          Order Now
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {["Menu", "About", "Locations", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#menu"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-block rounded-sm bg-primary px-5 py-2.5 text-sm uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Order Now
          </Link>
        </div>
      )}
    </header>
  )
}
