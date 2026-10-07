import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Check, Award, ArrowRight, Handshake } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PictureImage } from "@/lib/image-utils";
import { industries, investmentPriorities } from "@/lib/services";
import cropImg from "@/assets/agriculture-drone.webp";
import onijahImg from "@/assets/team/onijah-zani.webp";
import madalitsoImg from "@/assets/team/madalitso-zulu.webp";
import mosesImg from "@/assets/team/moses-chilunjika.webp";
import eliasImg from "@/assets/team/elias-mwendanei.webp";
import adinoImg from "@/assets/team/adino-bbuna.webp";
import samsonImg from "@/assets/team/samson-musonda.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Rehepa Aerospace" },
      {
        name: "description",
        content:
          "Rehepa Aerospace Ltd is a Zambian aerospace and drone-technology company delivering aerial data, surveying, mapping, inspection and monitoring solutions. Meet the team.",
      },
      { property: "og:title", content: "About | Rehepa Aerospace" },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Onijah Zani", role: "UAV Pilot | Accountable Manager", image: onijahImg },
  { name: "Madalitso Zulu", role: "Company Secretary", image: madalitsoImg },
  { name: "Moses Chilunjika", role: "ICT Specialist | Marketing Strategist", image: mosesImg },
  { name: "Elias Mwendanei", role: "Digital Content Creator", image: eliasImg },
  { name: "Adino Bbuna", role: "Marketing", image: adinoImg },
  { name: "Samson Musonda", role: "Digital Content Creator", image: samsonImg },
];

const pilots = [
  {
    name: "Onijah Zani",
    role: "UAV Pilot | Accountable Manager",
    image: onijahImg,
    bio: "Licensed remote pilot with extensive experience in LiDAR, photogrammetry and precision aerial surveys across Zambia.",
    certifications: ["ZCAR Part 18", "ICAO RPAS Compliant", "RTK Operations"],
    lead: true,
  },
];

const values = [
  "Innovation and continuous improvement",
  "Professionalism and integrity",
  "Safety-first operations",
  "Accuracy and reliability in data delivery",
  "Client-focused service and flexibility",
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="section-shell border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">About</div>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold tracking-tight md:text-6xl">
            A Zambian aerospace company built for the future.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Rehepa Aerospace Ltd is a Zambian aerospace and drone-technology company delivering
            aerial data, surveying, mapping, inspection and monitoring solutions. We support clients
            across government, mining, engineering, agriculture and commercial sectors using modern
            UAV and geospatial workflows.
          </p>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Our approach is <span className="font-semibold text-foreground">Capture</span>,{" "}
            <span className="font-semibold text-foreground">Process</span>,{" "}
            <span className="font-semibold text-foreground">Analyse</span> and{" "}
            <span className="font-semibold text-foreground">Deliver</span>: planning safe missions
            with the appropriate UAV and sensor; converting raw observations into structured
            geospatial information; extracting measurements, anomalies, volumes and terrain
            information; and delivering practical outputs for engineering, GIS, planning, operations
            and management.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-2">
        <div className="glass-panel rounded-[2rem] border border-border p-8 card-shadow">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">
            Our Vision
          </div>
          <p className="mt-4 text-lg leading-relaxed">
            To become a trusted leader in aerospace services, recognised for excellence,
            reliability, and value-driven aerial solutions across Zambia and beyond.
          </p>
        </div>
        <div className="glass-panel rounded-[2rem] border border-border p-8 card-shadow">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">
            Our Mission
          </div>
          <p className="mt-4 text-lg leading-relaxed">
            To deliver high-impact aerospace and drone services driven by innovation, safety, and
            professionalism, enabling smarter decisions through accurate aerial data.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card/30">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-border card-shadow">
            <PictureImage
              src={cropImg}
              alt="Drone over agricultural land"
              className="w-full"
              width={1280}
              height={800}
            />
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Values
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold">What we stand for.</h2>
            <ul className="mt-8 space-y-4">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-foreground">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="glass-panel rounded-[2rem] border border-border p-10 md:p-14">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">
            Safety Policy
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Aviation safety, by design.
          </h2>
          <p className="mt-5 max-w-3xl text-muted-foreground">
            Rehepa Aerospace Ltd is fully committed to the highest standards of aviation safety. Our
            management provides leadership, resources and oversight to ensure all RPAS operations
            comply with ZCARs Part 18 and ICAO standards. Supervisors ensure adherence to safety
            procedures, operational compliance, personnel competence, and a proactive safety
            culture.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Team
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold">The people behind every flight.</h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <div
                key={m.name}
                className="glass-panel rounded-[1.75rem] border border-border p-6 text-center card-shadow"
              >
                <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full">
                  <PictureImage
                    src={m.image}
                    alt={m.name}
                    className="h-full w-full object-cover"
                    width={192}
                    height={192}
                  />
                </div>
                <div className="mt-4 font-semibold">{m.name}</div>
                <div className="text-sm text-muted-foreground">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl gap-12 px-6 py-20">
        <div className="text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Pilots
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold">Licensed and mission-ready.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Every Rehepa mission is led by experienced, ZCAR-compliant remote pilots with a
            commitment to safety, precision, and professionalism.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pilots.map((p) => (
            <div
              key={p.name}
              className="group glass-panel overflow-hidden rounded-[1.75rem] border border-border transition-all hover:-translate-y-1.5 hover:border-primary/40 card-shadow"
            >
              <div className="relative overflow-hidden">
                <PictureImage
                  src={p.image}
                  alt={p.name}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={800}
                  height={500}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                {p.lead && (
                  <div className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur">
                    Lead Pilot
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="font-display text-lg font-semibold">{p.name}</div>
                <div className="text-sm text-muted-foreground">{p.role}</div>
                <div className="mt-3 text-sm text-muted-foreground">{p.bio}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.certifications.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-1 rounded-full border border-border bg-primary/10 px-2.5 py-0.5 text-xs text-primary"
                    >
                      <Award className="h-3 w-3" />
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">
              Partner With Us
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold">
              Growing Zambia&apos;s aerial data capacity.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Rehepa Aerospace is expanding its technical capacity to take on larger and more
              demanding assignments. We welcome clients seeking repeat survey and monitoring work,
              as well as strategic, financial and equipment partners who want to help scale
              professional drone and geospatial services in Zambia and beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {industries.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium"
                >
                  {i}
                </span>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-shadow transition-transform hover:scale-[1.02]"
            >
              Discuss a partnership <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="glass-panel rounded-[2rem] border border-border p-8 card-shadow">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Handshake className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-semibold">Investment priorities</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {investmentPriorities.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
