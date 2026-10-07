import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { company, services } from "@/lib/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Rehepa Aerospace" },
      {
        name: "description",
        content:
          "Contact Rehepa Aerospace Ltd in Lusaka for drone surveying, mapping, inspection and GIS services. Call or WhatsApp +260 972 830 832.",
      },
      { property: "og:title", content: "Contact | Rehepa Aerospace" },
    ],
  }),
  component: ContactPage,
});

const contactLinks = [
  {
    icon: Phone,
    label: "Call",
    value: company.phone,
    href: company.phoneHref,
  },
  {
    label: "WhatsApp",
    value: company.phone,
    href: company.whatsappHref,
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        viewBox="0 0 32 32"
        {...props}
        className={`fill-current text-green-500 ${props.className || ""}`}
      >
        <path d="M16 0C7.16 0 0 6.847 0 15.277c0 2.818.893 5.472 2.486 7.646l-2.76 8.29 8.73-2.753C10.515 31.2 13.18 32 16 32c8.84 0 16-6.847 16-15.277S24.84 0 16 0zm0 27.93c-2.567 0-4.953-.73-6.98-1.998l-.5-.31-5.19 1.65 1.68-5.06-.32-.53A11.15 11.15 0 0 1 4.86 15.3C4.86 9.483 9.398 5 16 5s11.14 4.483 11.14 10.277-4.538 10.277-11.14 10.277z" />
        <path d="M22.07 17.352l-1.264-.872c-.253-.18-.49-.36-.643-.48-.237-.18-.49-.06-.686.12l-.247.256a.51.51 0 0 1-.596.02c-.395-.26-1.016-.73-1.836-1.15-.413-.21-.793-.12-1.026.12-.49.48-1.33 1.21-2.35 1.43-.32.06-.48-.06-.65-.22a4.56 4.56 0 0 1-1.24-2.24c0-.12.02-.256.06-.39l.14-.53c.06-.22.03-.42-.06-.57-.1-.18-.25-.36-.45-.54l-.49-.49c-.36-.36-.81-.54-1.26-.54-.2 0-.4.03-.59.08-.42.1-.79.35-1.02.64l-.4.51c-.18.25-.27.54-.27.83 0 .49.14.97.42 1.4.33.5.81.91 1.36 1.19.55.28 1.17.44 1.82.44.43 0 .84-.06 1.23-.17.54-.15 1.06-.4 1.54-.72.38-.25.72-.55 1.02-.88.2-.23.37-.48.5-.73.06-.12.12-.25.15-.38.03-.12.02-.25 0-.37l-.08-.34c-.03-.15-.06-.3-.1-.44l.26-.22c.18-.15.47-.21.79-.18.49.03.97.18 1.43.44l.25.12c.18.09.38.12.58.09.2-.03.39-.12.53-.26l.49-.54c.18-.2.24-.47.14-.71-.1-.24-.38-.42-.71-.42h-.12c-.25 0-.48.12-.64.3-.25.27-.54.53-.86.75z" />
      </svg>
    ),
  },
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: MapPin,
    label: "Office",
    value: company.address,
    href: "https://www.google.com/maps/search/?api=1&query=Simon+Mwansa+Kapwepwe+Road+Chainda+Lusaka+Zambia",
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const email = fd.get("email") as string;
    const phone = fd.get("phone") as string;
    const service = fd.get("service") as string;
    const message = fd.get("message") as string;
    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\n${message}`,
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="section-shell border-b border-border bg-card/30">
        <div className="mx-auto max-w-site px-6 lg:px-10 py-20 md:py-24">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</div>
          <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">
            Let&apos;s plan your mission.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Tell us about your project and we&apos;ll get back to you in the soonest possible time.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-site gap-10 px-6 lg:px-10 py-20 lg:grid-cols-[1fr_1.5fr]">
        <div className="space-y-6">
          {contactLinks.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass-panel flex items-start gap-4 rounded-[1.5rem] border border-border p-5 transition-colors hover:border-primary/40 card-shadow"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {c.label}
                </div>
                <div className="mt-1 font-medium">{c.value}</div>
              </div>
            </a>
          ))}

          <div className="glass-panel rounded-[1.5rem] border border-border p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">
              Operating Hours
            </div>
            <div className="mt-3 text-sm text-muted-foreground">Mon - Fri | 08:00 - 17:00 CAT</div>
            <div className="mt-1 text-sm text-muted-foreground">Field operations on request</div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          suppressHydrationWarning
          className="glass-panel rounded-[2rem] border border-border p-8 card-shadow"
        >
          <h2 className="font-display text-2xl font-bold">Project enquiry</h2>
          <p className="mt-1 text-sm text-muted-foreground">All fields required.</p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <Field label="Full name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" required />
            <div>
              <label
                htmlFor="service"
                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
              >
                Service
              </label>
              <select
                id="service"
                name="service"
                required
                suppressHydrationWarning
                className="mt-2 w-full rounded-2xl border border-border bg-background/80 px-3 py-2.5 text-sm outline-none focus:border-primary"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
                <option>Partnership / Investment</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              suppressHydrationWarning
              className="mt-2 w-full resize-none rounded-2xl border border-border bg-background/80 px-3 py-2.5 text-sm outline-none focus:border-primary"
              placeholder="Site location, area size, deadlines, deliverables..."
            />
          </div>

          <button
            type="submit"
            suppressHydrationWarning
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-shadow transition-transform hover:scale-[1.02]"
          >
            <Send className="h-4 w-4" /> Send enquiry
          </button>

          {sent && (
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-flag-green">
              <CheckCircle className="h-4 w-4" />
              Opening your email client... If nothing happens, email us directly at {company.email}.
            </p>
          )}
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        suppressHydrationWarning
        className="mt-2 w-full rounded-2xl border border-border bg-background/80 px-3 py-2.5 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}
