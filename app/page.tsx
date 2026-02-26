import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { MenuSection } from "@/components/menu-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MenuSection />
      <Footer />
    </main>
  )
}
