import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="font-serif text-2xl text-foreground">
              Ember
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Roasted with care in small batches. Brewed with intention.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Visit Us
            </h3>
            <address className="mt-4 text-sm not-italic leading-relaxed text-foreground">
              142 Roastery Lane
              <br />
              Portland, OR 97201
              <br />
              <span className="text-muted-foreground">Mon - Sat, 7am - 5pm</span>
            </address>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Connect
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {[
                { label: "Instagram", href: "#" },
                { label: "Twitter", href: "#" },
                { label: "Email Us", href: "mailto:hello@ember.coffee" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Ember Coffee Roasters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
