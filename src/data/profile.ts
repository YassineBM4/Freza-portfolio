export const profile = {
  name: 'Emna Besrour',
  firstName: 'Emna',
  title: 'Élève ingénieure en Génie Informatique',
  tagline: 'Développement Web Full-Stack · Jeux vidéo · Applications mobiles',
  location: 'Tunisie',
  email: 'emnabesrour8@gmail.com',
  phone: '+216 94 599 159',
  phoneHref: 'tel:+21694599159',
  linkedin: 'https://www.linkedin.com/in/emna-besrour-1938a6418/',
  github: 'https://github.com/emnabesrour',
  cv: '/Emna_Besrour_CV.pdf',
  githubUser: 'emnabesrour',
  about: [
    "Étudiante en génie informatique, je conçois des expériences numériques complètes — du gameplay d'un jeu 3D mobile jusqu'à l'architecture d'une application éducative multi-écrans, en passant par une marketplace e-commerce multivendeur et une application web Angular réalisée en stage chez Poulina Group Holding.",
    "J'aime relever des défis où la technique rencontre l'expérience utilisateur : optimiser un rendu 3D pour smartphone, structurer l'état d'une application Flutter, ou concevoir une interface accessible pour les enfants.",
  ],
}

export const skillGroups = [
  {
    title: 'Développement mobile',
    description: 'Applications cross-platform animées, persistance locale, UI adaptée au tactile.',
    items: ['Flutter', 'Dart', 'Riverpod', 'GoRouter', 'SQLite', 'SharedPreferences', 'Rive', 'Lottie'],
  },
  {
    title: 'Développement de jeux',
    description: 'Gameplay physique, level design, caméras et optimisation 3D mobile.',
    items: ['Unity', 'C#', 'Physique & collisions', 'Level design', 'Flame', 'Build Android'],
  },
  {
    title: 'Web Full-Stack',
    description: 'Interfaces front-end responsives, API back-end et bases de données relationnelles.',
    items: ['Angular', 'TypeScript', 'HTML / CSS responsive', 'npm', 'Tests unitaires', 'Back-end', 'API REST', 'Stripe', 'PayPal', 'Bases de données SQL'],
  },
  {
    title: 'Compétences transverses',
    description: 'Méthode, qualité et sens du produit.',
    items: ['UI/UX', 'Optimisation des performances', 'Internationalisation RTL', 'Git & GitHub'],
  },
]

export const experience = [
  {
    period: '07/2026 – 09/2026',
    role: 'Stagiaire en développement Front-end Angular',
    org: 'Poulina Group Holding (PGH) · Zahra, Tunisie',
    kind: 'Expérience professionnelle · Stage',
    slug: 'pgh-angular',
    points: [
      'Conception et structuration de l’architecture initiale d’une application web avec Angular 22, avec la configuration de l’environnement de développement et de compilation.',
      'Développement d’une interface d’accueil responsive, adaptée aux différentes tailles d’écran, notamment aux écrans de moins de 650 px.',
      'Configuration des scripts npm pour le lancement, la compilation, la surveillance et les tests, facilitant ainsi le cycle de développement.',
      'Implémentation d’un test unitaire du composant racine Angular pour vérifier son fonctionnement et contribuer à la fiabilité de l’application.',
    ],
  },
  {
    period: '04/2026 – 06/2026',
    role: 'Développeuse de jeux mobiles 3D',
    org: 'Projet MEKORAMA · Unity / C#',
    kind: 'Projet personnel',
    slug: 'mekorama',
    points: [
      'Conception et développement from scratch d’un jeu de plateforme 3D isométrique de 5 niveaux.',
      'Mise en place d’un personnage physique (déplacement, saut, collisions) et d’une caméra 360° tactile.',
      'Optimisation des assets 3D et déploiement d’un build fluide sur smartphone.',
    ],
  },
  {
    period: '03/2026 – 04/2026',
    role: 'Développeuse full-stack',
    org: 'Projet LUXORA · Plateforme e-commerce multivendeur',
    kind: 'Projet personnel',
    slug: 'luxora',
    points: [
      'Développement d’une marketplace multivendeur full-stack avec 3 rôles : clients, vendeurs et administrateurs.',
      'Intégration des principales fonctionnalités e-commerce : catalogue partagé, panier persistant, gestion des commandes et paiements via Stripe et PayPal.',
      'Création d’un portail vendeur comprenant 6 modules et d’une console d’administration organisée en 10 rubriques.',
      'Modélisation d’une base de données relationnelle de 17 tables couvrant les produits, les utilisateurs, les transactions, les avis et le programme VIP.',
    ],
  },
  {
    period: '01/2026 – 03/2026',
    role: 'Développeuse mobile Flutter',
    org: 'Projet Yalla · Flutter / Dart',
    kind: 'Projet personnel',
    slug: 'yalla',
    points: [
      'Développement d’une application ludo-éducative : 8 univers, 9 modes de jeu et 48 niveaux.',
      'Architecture Riverpod + GoRouter, persistance SQLite / SharedPreferences.',
      'Tableau de bord parental et interface en arabe avec prise en charge RTL.',
    ],
  },
  {
    period: 'En cours',
    role: 'Élève ingénieure en Génie Informatique',
    org: 'Formation d’ingénieur · Tunisie',
    kind: 'Formation',
    points: [
      'Formation en génie logiciel, développement web, mobile et systèmes.',
      'Réalisation de projets concrets en équipe et en autonomie.',
    ],
  },
] as const

// LinkedIn publications, reproduced from the profile.
export const linkedinPosts = [
  {
    slug: 'mekorama',
    excerpt:
      "Thrilled to share a look at my latest mobile development project: a 3D isometric platformer built from scratch using Unity and C#. The game is fully exported and running smoothly on mobile!",
    tags: ['#Unity3D', '#CSharp', '#GameDevelopment', '#MobileGaming', '#IndieDev'],
  },
  {
    slug: 'yalla',
    excerpt:
      "I'm excited to introduce Yalla App, an educational mobile app developed with Flutter, designed to help children learn through play — with interactive worlds, mini-games, rewards and a parent dashboard.",
    tags: ['#Flutter', '#Dart', '#MobileApp', '#EdTech', '#LearningThroughPlay'],
  },
]

export const img = (src: string, _w: number) => src