import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path
          fill="#1877F2"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.236.195 2.236.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        />
      </svg>
    ),
    href: "https://www.facebook.com/share/1EbRk17gJ8/",
    label: "Facebook",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path
          fill="currentColor"
          d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-9.14l-5.727-7.08-6.59 7.08H.77l8.47-9.63L0 1.154h9.21l5.11 6.328 5.55-6.328zm-1.327 19.36h2.74L6.68 3.61H3.78l13.794 16.9z"
        />
      </svg>
    ),
    href: "https://twitter.com/rehepa",
    label: "X",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path
          fill="#0A66C2"
          d="M20.447 20.452h-3.554v-5.505c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.566H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.848 3.368-1.848 3.6 0 4.267 2.37 4.267 5.455v5.288zM5.337 7.433c-1.144 0-2.063-.925-2.063-2.065 0-1.139.92-2.064 2.063-2.064 1.14 0 2.064.925 2.064 2.064 0 1.14-.925 2.065-2.064 2.065zm1.777 13.019H3.555V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.207 24 24 23.227 24 22.271V1.729C24 .774 23.207 0 22.222 0h.003z"
        />
      </svg>
    ),
    href: "https://linkedin.com/company/rehepa",
    label: "LinkedIn",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path
          fill="#E4405F"
          d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.07 2 .27 2.6.42a5 5 0 0 1 1.7.92 5 5 0 0 1 .92 1.7c.15.6.35 1.4.42 2.6.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.07 1.2-.27 2-.42 2.6a5 5 0 0 1-.92 1.7 5 5 0 0 1-1.7.92c-.6.15-1.4.35-2.6.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.07-2-.27-2.6-.42a5 5 0 0 1-1.7-.92 5 5 0 0 1-.92-1.7c-.15-.6-.35-1.4-.42-2.6C2.2 19.2 2.2 18.8 2.2 16.6s0-3.6.07-4.9c.07-1.2.27-2 .42-2.6a5 5 0 0 1 .92-1.7 5 5 0 0 1 1.7-.92c.6-.15 1.4-.35 2.6-.42C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .07 5.6.13 4.5.34 3.6.65a7.3 7.3 0 0 0-2.6 1.56A7.3 7.3 0 0 0 .65 4.6C.34 5.5 0 6.6 0 8l.07 4 .07 4c.07 1.4.34 2.5.65 3.4a7.3 7.3 0 0 0 1.56 2.6 7.3 7.3 0 0 0 2.6 1.56c.9.31 2 .52 3.4.58 1.3.07 1.7.07 5 .07s3.7 0 5-.07c1.4-.06 2.5-.27 3.4-.58a7.3 7.3 0 0 0 2.6-1.56 7.3 7.3 0 0 0 1.56-2.6c.31-.9.52-2 .58-3.4l.07-4 .07-4C23.8 5.4 23.8 5 23.73 4c-.06-1.4-.33-2.5-.65-3.4a7.3 7.3 0 0 0-1.56-2.6A7.3 7.3 0 0 0 20.4.65a7.3 7.3 0 0 0-3.4-.58L16 .07 12 0z"
        />
        <path
          fill="#E4405F"
          d="M12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.6a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"
        />
      </svg>
    ),
    href: "https://www.instagram.com/rehepa_aerospace_ltd/?utm_source=qr&r=nametag",
    label: "Instagram",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M16.5 3.5v5.3a3.5 3.5 0 0 1-3.5 3.5H9.1v4.7a2.5 2.5 0 1 1-5 0V7.3a3.5 3.5 0 0 1 3.5-3.5h3.9a3.5 3.5 0 0 1 3.5 3.5V8h2.5a2.5 2.5 0 0 1 0 5v-5.2a3.5 3.5 0 0 1-3.5-3.5z"
        />
      </svg>
    ),
    href: "https://vm.tiktok.com/ZS9FyXq4hKhRy-pPKb8/",
    label: "TikTok",
  },
];

export function SiteFooter() {
  return (
    <footer className="section-shell border-t border-border bg-card/30">
      <div className="section-grid mx-auto grid max-w-7xl gap-10 rounded-[2rem] px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl font-bold">REHEPA AEROSPACE LTD</div>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            Forward-looking Zambian aerospace and drone company delivering cutting-edge RPAS-based
            services for surveying, mapping, agriculture and inspection.
          </p>
          <div className="mt-6 brand-stripe h-1.5 w-32 rounded-full" />
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-primary" />
              <a href="tel:+260972830832" className="hover:text-foreground">+260 972 830 832</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              <a href="mailto:onijahzani@yahoo.com" className="hover:text-foreground">onijahzani@yahoo.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              <span>05/07 Simon Mwansa Kapwepwe Rd, Chainda, Lusaka</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-4">
            <span>&copy; {new Date().getFullYear()} Rehepa Aerospace Ltd. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-transparent p-2 text-muted-foreground transition hover:border-border hover:bg-card hover:opacity-80"
                aria-label={s.label}
              >
                {s.icon()}
              </a>
            ))}
          </div>
          <div>ZCAR Part 18 | ICAO Compliant Operations</div>
        </div>
      </div>
    </footer>
  );
}
