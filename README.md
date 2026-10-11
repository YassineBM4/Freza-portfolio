# Emna Besrour — Portfolio

Portfolio professionnel d'Emna Besrour, élève ingénieure en génie informatique (Tunisie), spécialisée en développement web full-stack, jeux vidéo et applications mobiles.

Le site rassemble en un seul endroit :

- une présentation et les compétences clés ;
- des études de cas détaillées des projets (**MEKORAMA**, jeu mobile 3D Unity/C#, et **Yalla**, application ludo-éducative Flutter) ;
- un parcours / expérience sous forme de chronologie ;
- les publications LinkedIn et un lien vers le profil ;
- les dépôts GitHub publics (chargés en direct depuis l'API GitHub) ;
- les coordonnées et un formulaire de contact (Netlify Forms).

## Technologies

- TanStack Start (React 19, TanStack Router) + Vite
- Tailwind CSS 4
- Content Collections (projets rédigés en Markdown)
- Netlify Forms (formulaire de contact) et Netlify Image CDN (images optimisées)

## Lancer en local

```bash
pnpm install
netlify dev        # ou : pnpm dev
```

## Modifier le contenu

- Informations personnelles, compétences, expérience, publications LinkedIn : `src/data/profile.ts`
- Projets (études de cas) : `content/projects/*.md` — ajouter un fichier crée automatiquement une nouvelle page `/projets/<nom-du-fichier>`
- Visuels des projets : `public/img/`
