import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Zap, Target, Award } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { services, industries } from "@/lib/services";
import { PictureImage } from "@/lib/image-utils";
import { useTransition } from "react";
import heroImg from "@/assets/hero-drone.jpg";
import lidarImg from "@/assets/lidar-mapping.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rehepa Aerospace Ltd · Drone & GIS Services in Zambia" },
      { name: "description", content: "ZCAR-compliant Zambian drone company delivering LiDAR, topographic, orthomosaic, multispectral and crop-spraying services for mining, construction and agriculture." },
      { property: "og:title", content: "Rehepa Aerospace Ltd · Drone & GIS Services" },
      { property: "og:description", content: "Cutting-edge RPAS-based aerial data services across Zambia." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

       {/* HERO */}
       <section className="relative overflow-hidden">
         <div className="absolute inset-0">
           <PictureImage src={heroImg} alt="Surveying drone over Zambian landscape at dusk" className="h-full w-full object-cover opacity-60" width={1920} height={1080} />
           <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background/70" />
         </div>

         <div className="relative mx-auto flex max-w-7xl flex-col items-start px-6 pt-24 pb-32 md:pt-36 md:pb-44">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-flag-green animate-pulse" />
            ZCAR Part 18 · Lusaka, Zambia
          </div>

          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            See more. Plan smarter.{" "}
            <span className="text-gradient-brand">Operate safer.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Rehepa Aerospace delivers cutting-edge drone, LiDAR and GIS services that transform how
            Zambian industries survey, map and inspect their world.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-shadow transition-transform hover:scale-105"
            >
              Request a Survey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-card"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-8 md:grid-cols-4">
            {[
              { v: "12+", l: "RPAS Services" },
              { v: "8", l: "Industries Served" },
              { v: "100%", l: "ZCAR Compliant" },
              { v: "24/7", l: "Mission Support" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-foreground md:text-4xl">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-primary">Why Rehepa</div>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
                Aerial intelligence built for Zambian industry.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                We combine licensed pilots, structured workflows and modern UAV technology to deliver
                accurate, actionable data faster — and at a fraction of the cost of traditional methods.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Zap, title: "Faster Delivery", desc: "Days, not weeks. Aerial workflows that move at the speed of decisions." },
                { icon: Shield, title: "Safety-First", desc: "ZCAR Part 18 & ICAO compliant operations on every mission." },
                { icon: Target, title: "Survey-Grade Accuracy", desc: "RTK and LiDAR-class precision for engineering decisions." },
                { icon: Award, title: "Skilled Pilots", desc: "Licensed remote pilots with structured operational standards." },
              ].map((f) => (
                <div key={f.title} className="rounded-xl border border-border bg-card p-5 card-shadow">
                  <f.icon className="h-6 w-6 text-primary" />
                  <div className="mt-3 font-semibold">{f.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">What We Do</div>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">A complete aerial toolkit.</h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
            <div key={s.title} className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 card-shadow">
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <PictureImage src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" width={800} height={600} />
              </div>
              <div className="p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

       {/* DATA SECTION */}
       <section className="relative border-y border-border">
         <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
           <div className="relative overflow-hidden rounded-2xl border border-border">
             <PictureImage src={lidarImg} alt="LiDAR terrain visualization" className="w-full" loading="lazy" width={1280} height={800} />
           </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">Data → Decisions</div>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              From raw flights to ready-to-use deliverables.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Every mission is processed in-house and delivered as the formats your team already uses
              — orthomosaics, DEM/DTM, contour maps, point clouds, 3D meshes and analytical reports.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["GeoTIFF", "LAS / LAZ", "DXF", "OBJ / FBX", "Shapefile", "PDF Reports"].map((t) => (
                <span key={t} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">Industries</div>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Trusted across sectors.</h2>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {industries.map((i) => (
            <div key={i} className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium">
              {i}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-background p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-flag-green/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl font-bold md:text-5xl">Ready to get aerial?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us about your project. We'll plan the mission, fly it, and hand you the data.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-shadow transition-transform hover:scale-105"
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
