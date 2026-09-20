import { createFileRoute } from "@tanstack/react-router";
import {
  Leaf,
  Sun,
  Droplets,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Sprout,
  HeartHandshake,
  Truck,
} from "lucide-react";

import heroImage from "../assets/hero-greenhouse.jpg";
import plantMonstera from "../assets/plant-monstera.jpg";
import plantFiddle from "../assets/plant-fiddle.jpg";
import plantSnake from "../assets/plant-snake.jpg";
import plantSucculent from "../assets/plant-succulent.jpg";
import collectionOutdoor from "../assets/collection-outdoor.jpg";
import collectionPots from "../assets/collection-pots.jpg";
import storyGrower from "../assets/story-grower.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const collections = [
  { name: "Indoor Plants", count: "68 species", image: plantMonstera },
  { name: "Outdoor & Garden", count: "94 species", image: collectionOutdoor },
  { name: "Succulents & Cacti", count: "51 species", image: plantSucculent },
  { name: "Pots & Planters", count: "36 designs", image: collectionPots },
];

const featured = [
  {
    name: "Monstera Deliciosa",
    detail: "Swiss cheese plant · 60cm",
    price: "$48",
    light: "Bright, indirect",
    water: "Weekly",
    image: plantMonstera,
  },
  {
    name: "Fiddle Leaf Fig",
    detail: "Ficus lyrata · 120cm",
    price: "$89",
    light: "Bright light",
    water: "Fortnightly",
    image: plantFiddle,
  },
  {
    name: "Snake Plant",
    detail: "Sansevieria · 45cm",
    price: "$32",
    light: "Any light",
    water: "Monthly",
    image: plantSnake,
  },
  {
    name: "Echeveria Trio",
    detail: "Succulent set · 10cm",
    price: "$24",
    light: "Full sun",
    water: "Sparingly",
    image: plantSucculent,
  },
];

const services = [
  {
    icon: Sprout,
    title: "Repotting clinic",
    text: "Bring your plant in and our growers will move it to a bigger home — fresh soil, new pot, done while you browse.",
  },
  {
    icon: HeartHandshake,
    title: "Plant doctor, every Sunday",
    text: "Yellowing leaves, droop or pests? Free diagnosis and honest advice from our horticulturists.",
  },
  {
    icon: Truck,
    title: "Local delivery & planting",
    text: "Same-day delivery in the valley, and we'll even place and plant larger trees where they belong.",
  },
];

const testimonials = [
  {
    quote:
      "They matched me with a fiddle leaf that actually thrives. Nobody else bothered to ask about my windows.",
    name: "Priya N.",
    detail: "Riverside",
  },
  {
    quote:
      "The Sunday clinic saved my monstera twice. I've never been talked out of a plant I didn't need.",
    name: "Marcus T.",
    detail: "Old Mill",
  },
  {
    quote:
      "Our café's living wall still gets compliments every week. It grew in beautifully — never forced.",
    name: "Dana & Cole",
    detail: "Fern & Co.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="size-4.5" />
            </span>
            <span className="font-display text-xl font-semibold tracking-tight">
              Green Life Nursery
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#collections" className="transition-colors hover:text-primary">
              Collections
            </a>
            <a href="#featured" className="transition-colors hover:text-primary">
              Featured
            </a>
            <a href="#services" className="transition-colors hover:text-primary">
              Services
            </a>
            <a href="#story" className="transition-colors hover:text-primary">
              Our Story
            </a>
          </div>
          <a
            href="#visit"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Visit Us
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="mx-auto max-w-7xl px-6 pt-14 pb-16 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-secondary-foreground uppercase">
              <span className="size-1.5 rounded-full bg-accent" />
              Family-grown since 2009
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] font-semibold tracking-tight text-balance md:text-7xl">
              Bring the <span className="text-primary italic">green life</span> home.
            </h1>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-pretty text-muted-foreground">
              Green Life is a working nursery of over 1,200 living plants — grown slow
              under glass, sold honestly, and matched to the light you actually have.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#collections"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
              >
                Browse collections
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#visit"
                className="rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                Plan a visit
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <p className="font-display text-3xl font-semibold text-primary">1,200+</p>
                <p className="mt-1 text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
                  Species in stock
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-primary">15 yrs</p>
                <p className="mt-1 text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
                  Growing the same stock
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-primary">4.9★</p>
                <p className="mt-1 text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
                  2,300 reviews
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="Sunlit greenhouse interior filled with lush plants"
              width={1920}
              height={1088}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
            />
            <div className="absolute -bottom-5 left-6 rounded-2xl border border-border bg-card px-5 py-4 shadow-lg">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                Open daily
              </p>
              <p className="mt-1 font-display text-lg font-semibold">8am – 6pm</p>
              <p className="text-sm text-muted-foreground">Glasshouse & garden yard</p>
            </div>
          </div>
        </div>
      </header>

      {/* Collections */}
      <section id="collections" className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Shop by collection
            </h2>
            <p className="hidden text-sm text-muted-foreground sm:block">
              4 categories · 1,200+ species
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {collections.map((c) => (
              <a
                key={c.name}
                href="#visit"
                className="group relative overflow-hidden rounded-2xl border border-border"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-3 bottom-3 rounded-xl border border-border/60 bg-background/90 px-4 py-3 backdrop-blur-sm">
                  <p className="font-display text-base font-semibold md:text-lg">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.count}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured plants */}
      <section id="featured" className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-balance md:text-5xl">
            Fresh this week
          </h2>
          <a
            href="#visit"
            className="hidden items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/75 sm:inline-flex"
          >
            See all plants <ArrowRight className="size-4" />
          </a>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <article
              key={p.name}
              className="overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <img
                src={p.image}
                alt={p.name}
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold leading-tight">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.detail}</p>
                  </div>
                  <span className="font-display text-lg font-semibold text-primary">
                    {p.price}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Sun className="size-3.5 text-accent" /> {p.light}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Droplets className="size-3.5 text-accent" /> {p.water}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-border bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-cream/60 uppercase">
              Services
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              We don't just sell plants. We keep them alive.
            </h2>
            <p className="mt-4 leading-relaxed text-cream/75">
              Every plant leaves with a care card tuned to your home. And if something
              looks off later, bring it back — our growers diagnose it for free.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-cream/15 bg-cream/5 p-6"
              >
                <div className="grid size-11 place-items-center rounded-full bg-cream/10">
                  <s.icon className="size-5 text-cream" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={storyGrower}
            alt="A grower potting a young fern at the Green Life workbench"
            width={1024}
            height={1024}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover"
          />
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Our story
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Grown slow, on a working farm.
            </h2>
            <p className="mt-5 max-w-[52ch] leading-relaxed text-pretty text-muted-foreground">
              Since 2009, Green Life has raised its stock from seed and cutting on two
              acres of glasshouse in the valley. No imported shock, no forced growth —
              just patient plants that settle into your home faster and last longer.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <Leaf className="mt-0.5 size-4 shrink-0 text-primary" />
                100% grown from our own seed and cuttings
              </li>
              <li className="flex items-start gap-2.5">
                <Leaf className="mt-0.5 size-4 shrink-0 text-primary" />
                Peat-free compost and recycled pots as standard
              </li>
              <li className="flex items-start gap-2.5">
                <Leaf className="mt-0.5 size-4 shrink-0 text-primary" />
                Lifetime care advice with every plant
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-balance md:text-5xl">
            From our customers
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <blockquote className="font-display text-lg leading-snug text-balance">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{t.name}</span> ·{" "}
                  {t.detail}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Visit / footer */}
      <footer id="visit" className="border-t border-border bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl">
                Come stand among the <span className="italic">green.</span>
              </h2>
              <p className="mt-5 max-w-[42ch] text-cream/75">
                The Glasshouse, 12 Fernway, the valley. Open daily 8–6. Free parking,
                and dogs are welcome in the outdoor yard.
              </p>
              <a
                href="mailto:hello@greenlifenursery.com"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-semibold text-forest transition-colors hover:bg-cream/90"
              >
                Send an inquiry
                <ArrowRight className="size-4" />
              </a>
            </div>
            <div className="grid gap-6 text-sm sm:grid-cols-2">
              <div className="rounded-2xl border border-cream/15 bg-cream/5 p-6">
                <h3 className="flex items-center gap-2 font-semibold">
                  <MapPin className="size-4" /> Find us
                </h3>
                <p className="mt-3 text-cream/70">
                  12 Fernway, The Valley
                  <br />
                  Open daily 8am – 6pm
                </p>
              </div>
              <div className="rounded-2xl border border-cream/15 bg-cream/5 p-6">
                <h3 className="flex items-center gap-2 font-semibold">
                  <Phone className="size-4" /> Get in touch
                </h3>
                <p className="mt-3 space-y-1.5 text-cream/70">
                  <span className="flex items-center gap-2">
                    <Mail className="size-3.5" /> hello@greenlifenursery.com
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone className="size-3.5" /> (555) 019-2244
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="size-3.5" /> Mon–Sun, 8–6
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-cream/15 pt-6 text-xs text-cream/60">
            <span className="flex items-center gap-2">
              <Leaf className="size-3.5" /> © 2026 Green Life Nursery · Grown slow.
            </span>
            <span>Instagram · Pinterest · Newsletter</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
