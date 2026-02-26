import { Separator } from "@/components/ui/separator"

interface MenuItem {
  name: string
  description: string
  price: string
}

interface MenuCategory {
  title: string
  items: MenuItem[]
}

const categories: MenuCategory[] = [
  {
    title: "Espresso",
    items: [
      { name: "Espresso", description: "Rich, full-bodied single or double shot", price: "3.50" },
      { name: "Americano", description: "Espresso with hot water, smooth and bold", price: "4.00" },
      { name: "Cortado", description: "Equal parts espresso and steamed milk", price: "4.50" },
      { name: "Flat White", description: "Velvety micro-foam over a double ristretto", price: "5.00" },
      { name: "Cappuccino", description: "Classic espresso, steamed milk, dense foam", price: "5.00" },
      { name: "Latte", description: "Smooth espresso with silky steamed milk", price: "5.50" },
    ],
  },
  {
    title: "Brewed",
    items: [
      { name: "Pour Over", description: "Hand-brewed, single-origin of the day", price: "5.00" },
      { name: "Cold Brew", description: "Slow-steeped for 18 hours, served over ice", price: "5.50" },
      { name: "Batch Brew", description: "Fresh pot, rotating origins weekly", price: "3.50" },
      { name: "Iced Coffee", description: "Chilled batch brew, served over ice", price: "4.00" },
    ],
  },
  {
    title: "Pastries",
    items: [
      { name: "Almond Croissant", description: "Flaky, buttery, filled with almond cream", price: "4.50" },
      { name: "Banana Bread", description: "House-baked with walnuts and brown butter", price: "4.00" },
      { name: "Morning Bun", description: "Cinnamon-sugar, orange zest, warm and soft", price: "4.00" },
      { name: "Sourdough Toast", description: "Thick-sliced with seasonal jam and butter", price: "5.00" },
    ],
  },
]

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="group flex items-baseline justify-between gap-4 py-4">
      <div className="flex-1">
        <h3 className="text-base font-medium text-foreground transition-colors group-hover:text-accent">
          {item.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
      </div>
      <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
        ${item.price}
      </span>
    </div>
  )
}

function MenuCategoryBlock({ category }: { category: MenuCategory }) {
  return (
    <div>
      <h2 className="font-serif text-3xl text-foreground md:text-4xl">{category.title}</h2>
      <div className="mt-4">
        {category.items.map((item, idx) => (
          <div key={item.name}>
            <MenuItemRow item={item} />
            {idx < category.items.length - 1 && <Separator className="bg-border/60" />}
          </div>
        ))}
      </div>
    </div>
  )
}

export function MenuSection() {
  return (
    <section id="menu" className="bg-card py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            What We Serve
          </p>
          <h2 className="font-serif text-4xl text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">Our Menu</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Carefully sourced, thoughtfully prepared. Prices reflect our
            commitment to fair-trade partnerships and quality.
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <MenuCategoryBlock key={cat.title} category={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}
