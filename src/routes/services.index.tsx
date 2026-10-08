import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PictureImage } from "@/lib/image-utils";
import { deliverables, services } from "@/lib/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Rehepa Aerospace" },
      {
        name: "description",
        content:
          "LiDAR surveying, multispectral and thermal imaging, aerial surveillance, conservation monitoring, topographic, corridor and bathymetric surveys, 3D modelling, infrastructure inspection, mineral exploration, geophysical surveys, stockpile volumes and GIS support.",
      },
      { property: "og:title", content: "Services | Rehepa Aerospace" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="section-shell border-b border-border bg-card/30">
        <div className="mx-auto max-w-site px-6 lg:px-10 py-20 md:py-28">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">
            Services
          </div>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold tracking-tight md:text-6xl">
            Every mission, end-to-end.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We capture, process, analyse and deliver — from mission planning with the right UAV and
            sensor through to measurements, models and maps your team can act on.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-site px-6 lg:px-10 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group glass-panel rounded-[1.75rem] border border-border p-6 transition-all hover:-translate-y-1.5 hover:border-primary/40 card-shadow"
            >
              <div className="mb-4 aspect-video overflow-hidden rounded-[1.25rem] bg-muted">
                <PictureImage
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={1200}
                  height={900}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="font-display text-2xl font-bold text-muted-foreground/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mt-4 text-lg font-semibold group-hover:text-primary">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-site px-6 lg:px-10 py-16">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">
            Typical Deliverables
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            What you receive at the end of a mission.
          </h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {deliverables.map((d) => (
              <span
                key={d}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-site px-6 lg:px-10 py-16 text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Have a unique requirement?
          </h2>
          <p className="mt-3 text-muted-foreground">
            We custom-build mission profiles for specialised projects.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-shadow transition-transform hover:scale-[1.02]"
          >
            Talk to our team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
