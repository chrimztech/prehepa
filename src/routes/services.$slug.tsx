import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PictureImage } from "@/lib/image-utils";
import { getServiceBySlug, services, workflow } from "@/lib/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) return { meta: [{ title: "Service not found | Rehepa Aerospace" }] };
    const title = `${service.title} in Zambia | Rehepa Aerospace`;
    return {
      meta: [
        { title },
        { name: "description", content: service.desc },
        { property: "og:title", content: title },
        { property: "og:description", content: service.desc },
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useLoaderData();
  const index = services.findIndex((s) => s.slug === slug);
  const service = services[index];
  const number = String(index + 1).padStart(2, "0");
  const related = [1, 2, 3].map((offset) => services[(index + offset) % services.length]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="section-shell border-b border-border bg-card/30">
        <div className="mx-auto grid max-w-site items-center gap-12 px-6 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-sm text-muted-foreground"
            >
              <Link to="/services" className="hover:text-primary">
                Services
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground">{service.title}</span>
            </nav>

            <div className="mt-8 flex items-center gap-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <service.icon className="h-7 w-7" />
              </div>
              <span className="font-display text-3xl font-bold text-muted-foreground/40">
                {number}
              </span>
            </div>

            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{service.desc}</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                search={{ service: service.title }}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-shadow transition-transform hover:scale-[1.02]"
              >
                Request this service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-card"
              >
                <ArrowLeft className="h-4 w-4" /> All services
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-border card-shadow">
            <PictureImage
              src={service.image}
              alt={service.title}
              className="aspect-[4/3] w-full object-cover"
              width={1200}
              height={900}
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-site gap-6 px-6 py-20 lg:grid-cols-3 lg:px-10">
        <div className="glass-panel rounded-[2rem] border border-border p-8 card-shadow">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">
            Applications
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold">What it&apos;s used for</h2>
          <ul className="mt-6 space-y-3">
            {service.uses.map((u) => (
              <li key={u} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                <span>{u}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel rounded-[2rem] border border-border p-8 card-shadow">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">
            Deliverables
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold">What you receive</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {service.outputs.map((o) => (
              <span
                key={o}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium"
              >
                {o}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] border border-border p-8 card-shadow">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">Sectors</div>
          <h2 className="mt-3 font-display text-2xl font-bold">Who it&apos;s for</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {service.sectors.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-primary/10 px-3 py-1.5 text-sm text-primary"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {service.gallery.length > 0 && (
        <section className="mx-auto max-w-site px-6 pb-20 lg:px-10">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">
            From Our Projects
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Sample outputs</h2>
          <div className={`mt-10 grid gap-6 ${service.gallery.length > 1 ? "md:grid-cols-2" : ""}`}>
            {service.gallery.map((g: { src: string; caption: string }) => (
              <figure
                key={g.caption}
                className="glass-panel overflow-hidden rounded-[1.75rem] border border-border card-shadow"
              >
                <a
                  href={g.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/95 p-2"
                  aria-label={`Open full-size image: ${g.caption}`}
                >
                  <PictureImage
                    src={g.src}
                    alt={g.caption}
                    className={`w-full object-contain ${service.gallery.length > 1 ? "h-80 md:h-[30rem]" : "max-h-[40rem]"}`}
                  />
                </a>
                <figcaption className="px-5 py-4 text-sm text-muted-foreground">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="section-shell border-y border-border bg-card/30">
        <div className="mx-auto max-w-site px-6 py-20 lg:px-10">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">
            How We Work
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Capture, process, analyse, deliver.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((w) => (
              <div
                key={w.step}
                className="rounded-[1.5rem] border border-border bg-background/40 p-6"
              >
                <div className="text-xs font-semibold tracking-[0.25em] text-primary">{w.step}</div>
                <div className="mt-2 text-lg font-semibold">{w.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-6 py-20 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Related services</h2>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground"
          >
            View all {services.length} services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              to="/services/$slug"
              params={{ slug: r.slug }}
              className="group glass-panel overflow-hidden rounded-[1.75rem] border border-border transition-all hover:-translate-y-1.5 hover:border-primary/40 card-shadow"
            >
              <div className="relative h-44 w-full overflow-hidden bg-muted">
                <PictureImage
                  src={r.image}
                  alt={r.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={1200}
                  height={900}
                />
              </div>
              <div className="flex items-center justify-between gap-4 p-6">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{r.title}</h3>
                </div>
                <ArrowRight className="h-4 w-4 flex-none text-primary transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-site px-6 pb-24 lg:px-10">
        <div className="glass-panel relative overflow-hidden rounded-[2rem] border border-border p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Need {service.title} for your project?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us about the site, area and deliverables you need, and we&apos;ll plan the
              mission around them.
            </p>
            <Link
              to="/contact"
              search={{ service: service.title }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-shadow transition-transform hover:scale-[1.02]"
            >
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
