import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { services } from "@/lib/services";
import { PictureImage } from "@/lib/image-utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services · Rehepa Aerospace" },
      { name: "description", content: "LiDAR, topographic survey, orthomosaic mapping, 3D modelling, crop spraying, multispectral and aerial inspection services." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">Services</div>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold tracking-tight md:text-6xl">
            Every mission, end-to-end.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            From flight planning and data capture to processing and delivery — Rehepa offers a full
            stack of aerial and GIS services tailored to Zambian operating conditions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 card-shadow">
              <div className="aspect-video overflow-hidden rounded-lg mb-4">
                <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
              </div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Have a unique requirement?</h2>
          <p className="mt-3 text-muted-foreground">We custom-build mission profiles for specialised projects.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-shadow transition-transform hover:scale-105">
            Talk to our team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
