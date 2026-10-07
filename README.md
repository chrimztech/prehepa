# Rehepa Aerospace Ltd — Website

Company website for Rehepa Aerospace Ltd (aerial intelligence, surveying and mapping, Lusaka, Zambia).
Built with TanStack Start (React 19, SSR), Tailwind CSS v4, and deployed to Cloudflare Workers.

## Develop

```bash
npm install
npm run dev
```

## Check before deploying

```bash
npm run check   # typecheck + lint + production build
```

## Deploy (Cloudflare Workers)

```bash
npx wrangler login   # first time only
npm run deploy       # builds, then runs `wrangler deploy`
```

The Worker is named `rehepa-aerospace` (see `wrangler.jsonc`). After the first deploy, attach a custom
domain in the Cloudflare dashboard under Workers & Pages → rehepa-aerospace → Settings → Domains & Routes.

To test the production build locally on the Workers runtime: `npm run build && npx wrangler dev`.

## Editing content

- Company details, services, deliverables, capabilities and industries: `src/lib/services.ts`
- Pages: `src/routes/` (`index`, `services`, `about`, `contact`)
- Images: `src/assets/` (WebP; keep service images around 1200px wide)
