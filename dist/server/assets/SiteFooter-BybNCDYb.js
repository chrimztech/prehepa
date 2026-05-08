import { r as reactExports, V as jsxRuntimeExports } from "./server-BFIAzCXj.js";
import { L as Link } from "./router-DrXWsfw4.js";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$4 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const logo = "/assets/rehepa-logo-DmKnrEo_.jpeg";
const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
function SiteHeader() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "brand-stripe h-0.5 w-full" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Rehepa Aerospace", className: "h-16 w-16 rounded-md object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-bold tracking-tight", children: "REHEPA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.2em] text-muted-foreground", children: "Aerospace Ltd" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-8 md:flex", children: [
        nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: n.to,
            activeOptions: { exact: n.to === "/" },
            className: "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
            activeProps: { className: "text-primary font-semibold" },
            children: n.label
          },
          n.to
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/contact",
            className: "rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105",
            children: "Request a Quote"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "rounded-md p-2 text-foreground",
          onClick: () => setOpen(!open),
          "aria-label": "Toggle menu",
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
        }
      ) })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col gap-1 px-6 py-4", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: n.to,
        activeOptions: { exact: n.to === "/" },
        onClick: () => setOpen(false),
        className: "rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-primary",
        activeProps: { className: "bg-primary/10 text-primary font-semibold" },
        children: n.label
      },
      n.to
    )) }) })
  ] });
}
const socialLinks = [
  {
    icon: () => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className: "h-6 w-6 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#1877F2", d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.236.195 2.236.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" }) }),
    href: "https://facebook.com/rehepa",
    label: "Facebook"
  },
  {
    icon: () => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className: "h-6 w-6 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "currentColor", d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-9.14l-5.727-7.08-6.59 7.08H.77l8.47-9.63L0 1.154h9.21l5.11 6.328 5.55-6.328zm-1.327 19.36h2.74L6.68 3.61H3.78l13.794 16.9z" }) }),
    href: "https://twitter.com/rehepa",
    label: "X"
  },
  {
    icon: () => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className: "h-6 w-6 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#0A66C2", d: "M20.447 20.452h-3.554v-5.505c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.566H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.848 3.368-1.848 3.6 0 4.267 2.37 4.267 5.455v5.288zM5.337 7.433c-1.144 0-2.063-.925-2.063-2.065 0-1.139.92-2.064 2.063-2.064 1.14 0 2.064.925 2.064 2.064 0 1.14-.925 2.065-2.064 2.065zm1.777 13.019H3.555V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.207 24 24 23.227 24 22.271V1.729C24 .774 23.207 0 22.222 0h.003z" }) }),
    href: "https://linkedin.com/company/rehepa",
    label: "LinkedIn"
  },
  {
    icon: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", className: "h-6 w-6 fill-current", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#E4405F", d: "M12 2.2c3.2 0 3.6 0 4.9.07 1.2.07 2 .27 2.6.42a5 5 0 0 1 1.7.92 5 5 0 0 1 .92 1.7c.15.6.35 1.4.42 2.6.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.07 1.2-.27 2-.42 2.6a5 5 0 0 1-.92 1.7 5 5 0 0 1-1.7.92c-.6.15-1.4.35-2.6.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.07-2-.27-2.6-.42a5 5 0 0 1-1.7-.92 5 5 0 0 1-.92-1.7c-.15-.6-.35-1.4-.42-2.6C2.2 19.2 2.2 18.8 2.2 16.6s0-3.6.07-4.9c.07-1.2.27-2 .42-2.6a5 5 0 0 1 .92-1.7 5 5 0 0 1 1.7-.92c.6-.15 1.4-.35 2.6-.42C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .07 5.6.13 4.5.34 3.6.65a7.3 7.3 0 0 0-2.6 1.56A7.3 7.3 0 0 0 .65 4.6C.34 5.5 0 6.6 0 8l.07 4 .07 4c.07 1.4.34 2.5.65 3.4a7.3 7.3 0 0 0 1.56 2.6 7.3 7.3 0 0 0 2.6 1.56c.9.31 2 .52 3.4.58 1.3.07 1.7.07 5 .07s3.7 0 5-.07c1.4-.06 2.5-.27 3.4-.58a7.3 7.3 0 0 0 2.6-1.56 7.3 7.3 0 0 0 1.56-2.6c.31-.9.52-2 .58-3.4l.07-4 .07-4C23.8 5.4 23.8 5 23.73 4c-.06-1.4-.33-2.5-.65-3.4a7.3 7.3 0 0 0-1.56-2.6A7.3 7.3 0 0 0 20.4.65a7.3 7.3 0 0 0-3.4-.58L16 .07 12 0z" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#E4405F", d: "M12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.6a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" })
    ] }),
    href: "https://instagram.com/rehepa",
    label: "Instagram"
  },
  {
    icon: () => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className: "h-6 w-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "currentColor", d: "M16.5 3.5v5.3a3.5 3.5 0 0 1-3.5 3.5H9.1v4.7a2.5 2.5 0 1 1-5 0V7.3a3.5 3.5 0 0 1 3.5-3.5h3.9a3.5 3.5 0 0 1 3.5 3.5V8h2.5a2.5 2.5 0 0 1 0 5v-5.2a3.5 3.5 0 0 1-3.5-3.5z" }) }),
    href: "https://tiktok.com/@rehepa",
    label: "TikTok"
  }
];
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border bg-card/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-bold", children: "REHEPA AEROSPACE LTD" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-md text-sm text-muted-foreground", children: "Forward-looking Zambian aerospace and drone company delivering cutting-edge RPAS-based services for surveying, mapping, agriculture and inspection." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 brand-stripe h-1 w-32 rounded-full" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground", children: "Home" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-foreground", children: "Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-foreground", children: "About" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-foreground", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mt-0.5 h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+260972830832", className: "hover:text-foreground", children: "+260 972 830 832" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "mt-0.5 h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:onijahzani@yahoo.com", className: "hover:text-foreground", children: "onijahzani@yahoo.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "05/07 Simon Mwansa Kapwepwe Rd, Chainda, Lusaka" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-sm text-muted-foreground md:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Rehepa Aerospace Ltd. All rights reserved."
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4", children: socialLinks.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: s.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-muted-foreground transition-colors hover:opacity-80",
          "aria-label": s.label,
          children: s.icon()
        },
        s.label
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "ZCAR Part 18 · ICAO Compliant Operations" })
    ] }) })
  ] });
}
export {
  Mail as M,
  Phone as P,
  SiteHeader as S,
  SiteFooter as a,
  MapPin as b,
  createLucideIcon as c
};
