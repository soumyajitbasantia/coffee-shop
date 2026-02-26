import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-coffee.jpg"
          alt="Overhead view of artisanal coffee and roasted beans on a warm surface"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start px-6 pt-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-secondary/80">
          Artisanal Coffee Roasters
        </p>
        <h1 className="max-w-3xl font-serif text-5xl leading-tight text-secondary md:text-7xl lg:text-8xl">
          <span className="text-balance">Best Served Often</span>
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-secondary/80">
          Single-origin beans, roasted in small batches. Every cup tells the
          story of its soil, its sun, and the hands that picked it.
        </p>
        <div className="mt-10 flex gap-4">
          <Link
            href="#menu"
            className="rounded-sm bg-secondary px-6 py-3 text-sm uppercase tracking-widest text-foreground transition-opacity hover:opacity-90"
          >
            View Menu
          </Link>
          <Link
            href="#about"
            className="rounded-sm border border-secondary/40 px-6 py-3 text-sm uppercase tracking-widest text-secondary transition-colors hover:bg-secondary/10"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
