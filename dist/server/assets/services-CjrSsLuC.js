import { V as jsxRuntimeExports } from "./server-BFIAzCXj.js";
import { L as Link } from "./router-DrXWsfw4.js";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-BybNCDYb.js";
import { s as services, A as ArrowRight } from "./services-DdsW3e8o.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-card/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-20 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 max-w-3xl font-display text-5xl font-bold tracking-tight md:text-6xl", children: "Every mission, end-to-end." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg text-muted-foreground", children: "From flight planning and data capture to processing and delivery — Rehepa offers a full stack of aerial and GIS services tailored to Zambian operating conditions." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 card-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video overflow-hidden rounded-lg mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.image, alt: s.title, className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-semibold", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.desc })
    ] }, s.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border bg-card/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold md:text-4xl", children: "Have a unique requirement?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "We custom-build mission profiles for specialised projects." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-shadow transition-transform hover:scale-105", children: [
        "Talk to our team ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ServicesPage as component
};
