# AGENTS.md

Portfolio professionnel (en français) d'Emna Besrour. TanStack Start + React 19 + Tailwind CSS 4, déployé sur Netlify.

## Architecture

- `src/routes/__root.tsx` — document HTML (`lang="fr"`), meta SEO, polices Google (Fraunces / Manrope / JetBrains Mono), header + footer globaux.
- `src/routes/index.tsx` — page unique avec sections ancrées : `#apropos`, `#competences`, `#projets`, `#experience`, `#linkedin`, `#github`, `#contact`.
- `src/routes/projets.$slug.tsx` — étude de cas d'un projet (loader sur Content Collections, Markdown rendu avec `marked`).
- `src/data/profile.ts` — source unique des données personnelles (contact, compétences, chronologie d'expérience, extraits LinkedIn) + helper `img()` pour Netlify Image CDN.
- `content/projects/*.md` — projets ; schéma dans `content-collections.ts` (title, subtitle, period, role, platform, order, cover, accent, stack, metrics, highlights, github, linkedin).
- `src/components/` — `SiteHeader`, `SiteFooter`, `GitHubSection` (fetch client de l'API publique GitHub, avec repli si indisponible), `ContactForm`.
- `public/__forms.html` — squelette statique pour la détection Netlify Forms. Le formulaire React poste vers `/__forms.html` ; tout champ ajouté doit aussi être ajouté au squelette.
- `public/img/` — visuels des projets (générés), toujours servis via `img(src, width)` → `/.netlify/images`.

## Conventions

- Thème sombre défini via `@theme` dans `src/styles.css` (couleurs `ink`, `ink-2`, `line`, `cream`, `mist`, `coral`, `mint`, `sun` ; polices `font-display`, `font-mono`).
- Le texte visible est en français. Les liens entre sections utilisent `/#ancre` pour fonctionner depuis les pages projet.
- LinkedIn n'offre pas d'API publique : les publications sont reproduites dans `linkedinPosts` et renvoient au profil.
- `src/components/ui/` contient des primitives héritées du template, non utilisées actuellement.
