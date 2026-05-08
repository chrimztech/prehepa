import { r as reactExports, V as jsxRuntimeExports } from "./server-BFIAzCXj.js";
import { c as createLucideIcon, S as SiteHeader, P as Phone, M as Mail, b as MapPin, a as SiteFooter } from "./SiteFooter-BybNCDYb.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-DrXWsfw4.js";
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
const contactLinks = [{
  icon: Phone,
  label: "Call",
  value: "+260 972 830 832",
  href: "tel:+260972830832"
}, {
  label: "WhatsApp",
  value: "+260 972 830 832",
  href: "https://wa.me/260972830832",
  icon: (props) => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 32 32", ...props, className: `fill-current text-green-500 ${props.className || ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 0C7.16 0 0 6.847 0 15.277c0 2.818.893 5.472 2.486 7.646l-2.76 8.29 8.73-2.753C10.515 31.2 13.18 32 16 32c8.84 0 16-6.847 16-15.277S24.84 0 16 0zm0 27.93c-2.567 0-4.953-.73-6.98-1.998l-.5-.31-5.19 1.65 1.68-5.06-.32-.53A11.15 11.15 0 0 1 4.86 15.3C4.86 9.483 9.398 5 16 5s11.14 4.483 11.14 10.277-4.538 10.277-11.14 10.277z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22.07 17.352l-1.264-.872c-.253-.18-.49-.36-.643-.48-.237-.18-.49-.06-.686.12l-.247.256a.51.51 0 0 1-.596.02c-.395-.26-1.016-.73-1.836-1.15-.413-.21-.793-.12-1.026.12-.49.48-1.33 1.21-2.35 1.43-.32.06-.48-.06-.65-.22a4.56 4.56 0 0 1-1.24-2.24c0-.12.02-.256.06-.39l.14-.53c.06-.22.03-.42-.06-.57-.1-.18-.25-.36-.45-.54l-.49-.49c-.36-.36-.81-.54-1.26-.54-.2 0-.4.03-.59.08-.42.1-.79.35-1.02.64l-.4.51c-.18.25-.27.54-.27.83 0 .49.14.97.42 1.4.33.5.81.91 1.36 1.19.55.28 1.17.44 1.82.44.43 0 .84-.06 1.23-.17.54-.15 1.06-.4 1.54-.72.38-.25.72-.55 1.02-.88.2-.23.37-.48.5-.73.06-.12.12-.25.15-.38.03-.12.02-.25 0-.37l-.08-.34c-.03-.15-.06-.3-.1-.44l.26-.22c.18-.15.47-.21.79-.18.49.03.97.18 1.43.44l.25.12c.18.09.38.12.58.09.2-.03.39-.12.53-.26l.49-.54c.18-.2.24-.47.14-.71-.1-.24-.38-.42-.71-.42h-.12c-.25 0-.48.12-.64.3-.25.27-.54.53-.86.75z" })
  ] })
}, {
  icon: Mail,
  label: "Email",
  value: "onijahzani@yahoo.com",
  href: "mailto:onijahzani@yahoo.com"
}, {
  icon: MapPin,
  label: "Office",
  value: "05/07 Simon Mwansa Kapwepwe Rd, Chainda, Lusaka"
}];
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Project enquiry from ${fd.get("name")}`);
    const body = encodeURIComponent(`Name: ${fd.get("name")}
Email: ${fd.get("email")}
Phone: ${fd.get("phone")}
Service: ${fd.get("service")}

${fd.get("message")}`);
    window.location.href = `mailto:onijahzani@yahoo.com?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-card/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-20 md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-5xl font-bold md:text-6xl", children: "Let's plan your mission." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-lg text-muted-foreground", children: "Tell us about your project and we'll get back to you within one business day." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1.5fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        contactLinks.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: c.href, target: c.label === "WhatsApp" ? "_blank" : void 0, rel: c.label === "WhatsApp" ? "noopener noreferrer" : void 0, className: "flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 card-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: c.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-medium", children: c.value })
          ] })
        ] }, c.label)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-gradient-to-br from-card to-background p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-primary", children: "Operating Hours" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm text-muted-foreground", children: "Mon – Fri · 08:00 – 17:00 CAT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: "Field operations on request" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, suppressHydrationWarning: true, className: "rounded-2xl border border-border bg-card p-8 card-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "Project enquiry" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "All fields required." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-5 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", name: "name", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", type: "tel", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Service" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "service", required: true, suppressHydrationWarning: true, className: "mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary", defaultValue: "", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select a service" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "LiDAR Surveying" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Topographic Survey" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Orthomosaic Mapping" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "3D Modelling" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Volumetric / Stockpile" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Crop Spraying" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Multispectral Surveying" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Aerial Filming" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Surveillance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Drone Servicing & Repair" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Other" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Project details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 5, required: true, suppressHydrationWarning: true, className: "mt-2 w-full resize-none rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary", placeholder: "Site location, area size, deadlines, deliverables…" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", suppressHydrationWarning: true, className: "mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-shadow transition-transform hover:scale-105", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
          " Send enquiry"
        ] }),
        sent && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-flag-green", children: "Opening your email client… If nothing happens, email us directly at onijahzani@yahoo.com." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, required, suppressHydrationWarning: true, className: "mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" })
  ] });
}
export {
  ContactPage as component
};
