import { V as jsxRuntimeExports } from "./server-BFIAzCXj.js";
import { L as Link } from "./router-DrXWsfw4.js";
import { c as createLucideIcon, S as SiteHeader, a as SiteFooter } from "./SiteFooter-BybNCDYb.js";
import { A as ArrowRight, s as services, i as industries } from "./services-DdsW3e8o.js";
import { P as PictureImage } from "./image-utils-BYZBT1_L.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode$2);
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const heroImg = "/assets/hero-drone-Bhe_4I7K.jpg";
const lidarImg = "/assets/lidar-mapping-BTKEbr-m.jpg";
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PictureImage, { src: heroImg, alt: "Surveying drone over Zambian landscape at dusk", className: "h-full w-full object-cover opacity-60", width: 1920, height: 1080 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background/70" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto flex max-w-7xl flex-col items-start px-6 pt-24 pb-32 md:pt-36 md:pb-44", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-flag-green animate-pulse" }),
          "ZCAR Part 18 · Lusaka, Zambia"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl", children: [
          "See more. Plan smarter.",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "Operate safer." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl", children: "Rehepa Aerospace delivers cutting-edge drone, LiDAR and GIS services that transform how Zambian industries survey, map and inspect their world." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-shadow transition-transform hover:scale-105", children: [
            "Request a Survey",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-card", children: "Explore Services" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-2 gap-8 border-t border-border pt-8 md:grid-cols-4", children: [{
          v: "12+",
          l: "RPAS Services"
        }, {
          v: "8",
          l: "Industries Served"
        }, {
          v: "100%",
          l: "ZCAR Compliant"
        }, {
          v: "24/7",
          l: "Mission Support"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-bold text-foreground md:text-4xl", children: s.v }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground", children: s.l })
        ] }, s.l)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-card/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Why Rehepa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-bold md:text-5xl", children: "Aerial intelligence built for Zambian industry." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground", children: "We combine licensed pilots, structured workflows and modern UAV technology to deliver accurate, actionable data faster — and at a fraction of the cost of traditional methods." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: [{
        icon: Zap,
        title: "Faster Delivery",
        desc: "Days, not weeks. Aerial workflows that move at the speed of decisions."
      }, {
        icon: Shield,
        title: "Safety-First",
        desc: "ZCAR Part 18 & ICAO compliant operations on every mission."
      }, {
        icon: Target,
        title: "Survey-Grade Accuracy",
        desc: "RTK and LiDAR-class precision for engineering decisions."
      }, {
        icon: Award,
        title: "Skilled Pilots",
        desc: "Licensed remote pilots with structured operational standards."
      }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5 card-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-6 w-6 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-semibold", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: f.desc })
      ] }, f.title)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "What We Do" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-bold md:text-5xl", children: "A complete aerial toolkit." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground", children: [
          "View all services ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: services.slice(0, 6).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 card-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-48 w-full overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PictureImage, { src: s.image, alt: s.title, className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105", width: 800, height: 600 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-semibold", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.desc })
        ] })
      ] }, s.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-2xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PictureImage, { src: lidarImg, alt: "LiDAR terrain visualization", className: "w-full", loading: "lazy", width: 1280, height: 800 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Data → Decisions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-bold md:text-5xl", children: "From raw flights to ready-to-use deliverables." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground", children: "Every mission is processed in-house and delivered as the formats your team already uses — orthomosaics, DEM/DTM, contour maps, point clouds, 3D meshes and analytical reports." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-2", children: ["GeoTIFF", "LAS / LAZ", "DXF", "OBJ / FBX", "Shapefile", "PDF Reports"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground", children: t }, t)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Industries" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-bold md:text-5xl", children: "Trusted across sectors." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex flex-wrap justify-center gap-3", children: industries.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full border border-border bg-card px-5 py-2 text-sm font-medium", children: i }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-background p-10 md:p-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-flag-green/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold md:text-5xl", children: "Ready to get aerial?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Tell us about your project. We'll plan the mission, fly it, and hand you the data." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-shadow transition-transform hover:scale-105", children: [
          "Start a Project ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Index as component
};
