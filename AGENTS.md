# Repository Guidelines

## Project Structure & Module Organization
- `src/app/`: Next.js App Router (layouts, routes like `/[lang]`).
- `src/components/`: Reusable React components (PascalCase `.tsx`).
- `src/hooks/`: Custom hooks (camelCase, start with `use`).
- `src/lib/`: Utilities (e.g., dictionaries helpers).
- `src/content/`: i18n JSON (`en.json`, `el.json`). Keep keys consistent across locales.
- `public/`: Static assets (SVGs, icons).
- `middleware.ts`: Locale handling and routing.

## Build, Test, and Development Commands
- `npm run dev`: Start local dev server (default port 3000). Example: `PORT=3002 npm run dev`.
- `npm run build`: Production build with Turbopack.
- `npm run start`: Run the production server.
- `npm run lint`: Lint the codebase using ESLint.

## Coding Style & Naming Conventions
- **Language**: TypeScript + React (Next.js 15).
- **Formatting/Linting**: ESLint (`next/core-web-vitals`, `next/typescript`). Use 2‑space indentation; prefer named exports.
- **Components**: PascalCase filenames in `src/components` (e.g., `RiskWarningModal.tsx`).
- **Hooks**: `useSomething.ts` in `src/hooks`.
- **Content**: Lowercase, hyphenless JSON keys shared across locales.
- **Tailwind**: Utility-first styles; custom colors in `tailwind.config.ts`.

## Testing Guidelines
- No test framework is configured yet. Recommended: Vitest + React Testing Library for unit/UI; Playwright for e2e.
- Place tests alongside files as `Component.test.tsx` or under `src/__tests__/`.
- Aim for critical path coverage (locale switching, modal behavior, animations do not block tests).
- Run tests via `npm test` once added; keep CI deterministic.

## Commit & Pull Request Guidelines
- **Commits**: Imperative, concise subject lines (seen in history: “Fix …”, “Add …”, “Update …”). Scope optional, no need for Conventional Commit prefixes.
- **PRs**: Include clear summary, linked issues, before/after screenshots for UI, and notes on i18n/content changes. Keep PRs focused and small.

## Security & Configuration Tips
- Avoid committing secrets. Use `NEXT_PUBLIC_*` only for safe, client-exposed values.
- Keep locale files (`src/content/*.json`) in sync and validate keys during review.
