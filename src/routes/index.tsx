import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  benefits,
  capabilities,
  company,
  deliverables,
  industries,
  services,
  workflow,
} from "@/lib/services";
import { PictureImage } from "@/lib/image-utils";
import heroImg from "@/assets/hero-drone.webp";
import pointCloudImg from "@/assets/projects/lidar-rgb-point-cloud.webp";

// Feature services that have real project imagery first, topped up to six from the full list.
const featuredServices = [
  ...services.filter((s) => s.gallery.length > 0),
  ...services.filter((s) => s.gallery.length === 0),
].slice(0, 6);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rehepa Aerospace Ltd | Drone Surveying, Mapping & Aerial Intelligence in Zambia" },
      {
        name: "description",
        content:
          "Zambian drone and geospatial company delivering LiDAR, topographic and corridor surveys, multispectral and thermal imaging, inspection, stockpile volumes and GIS for government, mining, engineering and agriculture.",
      },
      {
        property: "og:title",
        content: "Rehepa Aerospace Ltd | Aerial Intelligence, Surveying & Mapping",
      },
      {
        property: "og:description",
        content:
          "Professional drone and geospatial solutions for government, mining, engineering, agriculture, conservation and commercial clients across Zambia.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="section-shell relative overflow-hidden">
        <div className="absolute inset-0">
          <PictureImage
            src={heroImg}
            alt="Surveying drone over Zambian landscape at dusk"
            className="h-full w-full object-cover opacity-70"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/35 via-background/20 to-background/45" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_top,transparent,rgba(0,0,0,0.28))]" />
        </div>

        <div className="section-grid relative mx-auto grid max-w-site gap-16 px-6 lg:px-10 pb-28 pt-20 md:grid-cols-[1.2fr_0.8fr] md:items-end md:pb-36 md:pt-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-xs text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-flag-green" />
              {company.tagline} | Lusaka, Zambia
            </div>

            <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.98] tracking-tight md:text-7xl">
              Accurate aerial data for smarter decisions.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-foreground/78 md:text-xl">
              Rehepa Aerospace delivers professional drone and geospatial solutions — surveying,
              mapping, inspection and monitoring — for government, mining, engineering, agriculture,
              conservation and commercial clients.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-shadow transition-transform hover:scale-[1.02]"
              >
                Request a Survey
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-card"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border/70 pt-8 md:grid-cols-4">
              {[
                { v: String(services.length), l: "Core Services" },
                { v: String(deliverables.length), l: "Deliverable Types" },
                { v: String(industries.length), l: "Sectors Served" },
                { v: "ZCAR", l: "Part 18 Operations" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-bold text-foreground md:text-4xl">
                    {s.v}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.24em] text-foreground/60">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel card-shadow rounded-[2rem] border border-white/15 p-6 md:p-7">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Our Approach
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold">From flight to decision.</h2>
            <div className="mt-8 space-y-3">
              {workflow.map((w) => (
                <div
                  key={w.step}
                  className="rounded-2xl border border-border/70 bg-background/30 p-4"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-semibold tracking-[0.25em] text-primary">
                      {w.step}
                    </span>
                    <span className="font-semibold">{w.title}</span>
                  </div>
                  <div className="mt-1 text-sm text-foreground/72">{w.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell border-y border-border bg-card/30">
        <div className="mx-auto max-w-site px-6 lg:px-10 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-primary">
                Why Aerial Data
              </div>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
                See more, measure more, risk less.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Modern UAV and geospatial workflows let teams capture large or difficult sites
                quickly and safely, then turn that data into measurements, models and maps they can
                act on.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((f) => (
                <div
                  key={f.title}
                  className="glass-panel rounded-[1.5rem] border border-border p-5 card-shadow"
                >
                  <f.icon className="h-6 w-6 text-primary" />
                  <div className="mt-3 font-semibold">{f.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-6 lg:px-10 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">
              What We Do
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              A complete aerial toolkit.
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground"
          >
            View all {services.length} services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group glass-panel overflow-hidden rounded-[1.75rem] border border-border transition-all hover:-translate-y-1.5 hover:border-primary/40 card-shadow"
            >
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <PictureImage
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={1200}
                  height={900}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold group-hover:text-primary">{s.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell border-y border-border bg-card/30">
        <div className="mx-auto max-w-site px-6 lg:px-10 py-20">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">
            Core Capabilities
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Four disciplines, one team.
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="glass-panel rounded-[1.5rem] border border-border p-6 card-shadow"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 flex-none text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell relative">
        <div className="mx-auto grid max-w-site items-center gap-12 px-6 lg:px-10 py-24 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2rem] border border-border card-shadow">
            <PictureImage
              src={pointCloudImg}
              alt="Colourised LiDAR point cloud of a survey site"
              className="w-full"
              width={1280}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">
              Typical Deliverables
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              From raw flights to ready-to-use outputs.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Every mission is processed and quality-checked, then delivered in formats your
              engineering, GIS, planning and operations teams already use.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {deliverables.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-card/70 px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-site px-6 lg:px-10 py-24">
          <div className="text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">
              Industries
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Built for the sectors that move Zambia.
            </h2>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {industries.map((i) => (
              <div
                key={i}
                className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium"
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-6 lg:px-10 pb-24">
        <div className="glass-panel relative overflow-hidden rounded-[2rem] border border-border p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-flag-green/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl font-bold md:text-5xl">Ready to get aerial?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us about your project. We&apos;ll plan the mission, fly it, and hand you the
              data.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-shadow transition-transform hover:scale-[1.02]"
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
