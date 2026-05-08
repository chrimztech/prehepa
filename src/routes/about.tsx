import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PictureImage } from "@/lib/image-utils";
import cropImg from "@/assets/crop-spraying.jpg";
import onijahImg from "@/assets/Onijah_Zani_UAV_Pilot_Accountable_Manager.png";
import madalitsoImg from "@/assets/Madalitso_Zulu_Company_Secretary.png";
import mosesImg from "@/assets/Moses_Chilunjika_ICT_Specialist_Marketing_Strategist.png";
import eliasImg from "@/assets/Elias_Mwendanei_Digital_Content_Creator.png";
import adinoImg from "@/assets/Adino_Bbuna_Digital_Content_Creator.png";
import samsonImg from "@/assets/Samson_Musonda_Marketing.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Rehepa Aerospace" },
      { name: "description", content: "Forward-looking Zambian aerospace and drone company. Meet the team and our mission." },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Onijah Zani", role: "UAV Pilot · Accountable Manager", image: onijahImg },
  { name: "Madalitso Zulu", role: "Company Secretary", image: madalitsoImg },
  { name: "Moses Chilunjika", role: "ICT Specialist · Marketing Strategist", image: mosesImg },
  { name: "Elias Mwendanei", role: "Digital Content Creator", image: eliasImg },
  { name: "Adino Bbuna", role: "Marketing", image: adinoImg },
  { name: "Samson Musonda", role: "Digital Content Creator", image: samsonImg },
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

      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">About</div>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold tracking-tight md:text-6xl">
            A Zambian aerospace company built for the future.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Rehepa Aerospace Ltd is a forward-looking Zambian aerospace and drone company delivering
            cutting-edge RPAS-based services. We empower organisations to see more, plan smarter,
            and operate safer through modern UAV technology.
          </p>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8 card-shadow">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">Our Vision</div>
          <p className="mt-4 text-lg leading-relaxed">
            To become a trusted leader in aerospace services, recognised for excellence,
            reliability, and value-driven aerial solutions across Zambia and beyond.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8 card-shadow">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">Our Mission</div>
          <p className="mt-4 text-lg leading-relaxed">
            To deliver high-impact aerospace and drone services driven by innovation, safety, and
            professionalism — enabling smarter decisions through accurate aerial data.
          </p>
        </div>
      </section>

       {/* Values + image */}
       <section className="border-y border-border bg-card/30">
         <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
           <div className="overflow-hidden rounded-2xl border border-border">
             <PictureImage src={cropImg} alt="Drone over agricultural land" className="w-full" loading="lazy" width={1280} height={800} />
           </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">Our Values</div>
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

      {/* Safety */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-card to-background p-10 md:p-14">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">Safety Policy</div>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Aviation safety, by design.</h2>
          <p className="mt-5 max-w-3xl text-muted-foreground">
            Rehepa Aerospace Ltd is fully committed to the highest standards of aviation safety. Our
            management provides leadership, resources and oversight to ensure all RPAS operations
            comply with ZCARs Part 18 and ICAO standards. Supervisors ensure adherence to safety
            procedures, operational compliance, personnel competence, and a proactive safety culture.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">Our Team</div>
          <h2 className="mt-3 font-display text-4xl font-bold">The people behind every flight.</h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="rounded-xl border border-border bg-card p-6 card-shadow text-center">
                <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full">
                  <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
                </div>
                <div className="mt-4 font-semibold">{m.name}</div>
                <div className="text-sm text-muted-foreground">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
