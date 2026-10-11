
export default [
  {
    "title": "LUXORA",
    "subtitle": "Plateforme e-commerce multivendeur",
    "description": "Marketplace web full-stack qui réunit clients, vendeurs et administrateurs : catalogue partagé, panier persistant, gestion des commandes et paiements en ligne via les API Stripe et PayPal.",
    "period": "03/2026 – 04/2026",
    "role": "Développeuse full-stack — conception, base de données, API & interfaces",
    "platform": "Web · Marketplace full-stack",
    "order": 4,
    "cover": "/img/luxora.png",
    "accent": "#f5c451",
    "stack": [
      "Full-stack",
      "API REST",
      "API Stripe",
      "API PayPal",
      "Base de données SQL",
      "Authentification par rôles"
    ],
    "metrics": [
      {
        "value": "3",
        "label": "rôles : client, vendeur, admin"
      },
      {
        "value": "17",
        "label": "tables relationnelles"
      },
      {
        "value": "2",
        "label": "passerelles de paiement"
      }
    ],
    "highlights": [
      "Développement d'une marketplace multivendeur full-stack avec 3 rôles : clients, vendeurs et administrateurs.",
      "Intégration des principales fonctionnalités e-commerce : catalogue partagé, panier persistant, gestion des commandes et paiements via Stripe et PayPal.",
      "Création d'un portail vendeur comprenant 6 modules et d'une console d'administration organisée en 10 rubriques.",
      "Modélisation d'une base de données relationnelle de 17 tables couvrant les produits, les utilisateurs, les transactions, les avis et le programme VIP."
    ],
    "github": "https://github.com/emnabesrour/Luxura",
    "linkedin": "https://lnkd.in/p/eK_ZzJjk",
    "content": "## Contexte\n\n**LUXORA** est une plateforme e-commerce **multivendeur** : plusieurs boutiques vendent leurs produits dans un même catalogue, et les clients commandent et paient en ligne en un seul endroit.\n\nLe site s'appuie sur **plusieurs API** : une API interne pour les produits, les commandes et les comptes, et les API de paiement **Stripe** et **PayPal**.\n\n## Trois espaces, trois rôles\n\n- **Clients** : navigation dans le catalogue partagé, panier persistant, commande, paiement, suivi des commandes, avis et programme VIP.\n- **Vendeurs** : un portail de **6 modules** pour gérer leur boutique, leurs produits et leurs commandes.\n- **Administrateurs** : une console organisée en **10 rubriques** pour superviser les utilisateurs, les vendeurs, le catalogue et les transactions.\n\n## Architecture technique\n\n- **Contrôle d'accès par rôle** : chaque utilisateur ne voit que les écrans et les actions qui correspondent à son rôle.\n- **Paiements** : intégration des API Stripe et PayPal pour proposer deux moyens de paiement sécurisés.\n- **Panier persistant** : le panier est conservé entre les sessions pour ne pas perdre les articles du client.\n- **Base de données relationnelle de 17 tables** : produits, utilisateurs, commandes, transactions, avis et programme VIP, avec des relations qui garantissent la cohérence des données.\n\n## Ce que j'ai appris\n\nCe projet m'a permis de concevoir une application web complète, de la base de données à l'interface. J'ai appris à modéliser des données complexes, à intégrer des API de paiement tierces et à organiser une application autour de plusieurs profils d'utilisateurs aux besoins très différents.",
    "_meta": {
      "filePath": "luxora.md",
      "fileName": "luxora.md",
      "directory": ".",
      "extension": "md",
      "path": "luxora"
    }
  },
  {
    "title": "MEKORAMA",
    "subtitle": "Jeu mobile de plateforme 3D isométrique",
    "description": "Prototype complet de 5 niveaux développé from scratch avec Unity et C# : un personnage traverse des environnements dynamiques pour collecter clés et étoiles, avec une caméra 360° pensée pour le tactile.",
    "period": "04/2026 – 06/2026",
    "role": "Développeuse de jeu — conception, gameplay, UI, optimisation & déploiement",
    "platform": "Android (smartphone)",
    "order": 1,
    "cover": "/img/mekorama.png",
    "accent": "#f97362",
    "stack": [
      "Unity",
      "C#",
      "Moteur physique Unity",
      "Unity UI",
      "Touch Input",
      "Build mobile"
    ],
    "metrics": [
      {
        "value": "5",
        "label": "niveaux à difficulté progressive"
      },
      {
        "value": "360°",
        "label": "caméra rotative tactile"
      },
      {
        "value": "100 %",
        "label": "conçu from scratch"
      }
    ],
    "highlights": [
      "Contrôle du personnage basé sur la physique : déplacement, saut, détection des collisions et interactions avec les obstacles.",
      "5 niveaux à difficulté progressive mêlant navigation sur plateformes, évitement d'obstacles et objectifs de fin de niveau.",
      "Système de caméra rotative à 360° optimisé pour les gestes tactiles, permettant d'explorer la carte pour trouver le bon chemin.",
      "Scripting C# de l'interface, du menu de sélection des niveaux et de la logique de collecte des clés et des étoiles.",
      "Optimisation des assets 3D et du rendu pour garantir une expérience fluide sur smartphone.",
      "Compilation (build) et déploiement sur smartphone, avec des contrôles et une interface adaptés aux écrans tactiles."
    ],
    "github": "https://github.com/emnabesrour/MEKORAMA",
    "linkedin": "https://lnkd.in/p/e9U6K_bX",
    "content": "## Contexte\n\nMEKORAMA est un jeu de plateforme 3D isométrique inspiré des puzzles-diorama, conçu et développé intégralement avec **Unity** et **C#**. L'objectif était de livrer un prototype jouable de bout en bout : de la mécanique de déplacement jusqu'à l'export sur smartphone.\n\nLe joueur guide un personnage à travers des environnements suspendus et dynamiques. Pour terminer un niveau, il doit **collecter les clés et les étoiles** et atteindre l'objectif final, en explorant la carte grâce à une **caméra rotative à 360°**.\n\n## Défis techniques\n\n- **Physique & level design** — régler la physique du personnage (vitesse, gravité, saut) pour un ressenti précis tout en concevant des niveaux qui montent en difficulté sans frustrer le joueur.\n- **Caméra 360° tactile** — transformer des gestes de glissement en rotation fluide autour de la scène, sans conflit avec les commandes de déplacement.\n- **Performance mobile** — trouver l'équilibre entre qualité visuelle 3D et fluidité sur des appareils aux ressources limitées.\n\n## Approche\n\n1. Prototypage des mécaniques de base (mouvement, saut, collisions) dans une scène de test.\n2. Construction des 5 niveaux avec une courbe de difficulté progressive.\n3. Développement de l'interface : menu principal, sélection des niveaux, compteur de clés et d'étoiles.\n4. Optimisation des assets et des paramètres de rendu, puis tests sur appareil réel.\n5. Build et déploiement de la version mobile.\n\n## Résultat\n\nLe jeu est **entièrement exporté et tourne de manière fluide sur mobile**. Ce projet m'a permis de consolider mes compétences en ingénierie mobile, en programmation orientée gameplay et en optimisation des performances 3D.",
    "_meta": {
      "filePath": "mekorama.md",
      "fileName": "mekorama.md",
      "directory": ".",
      "extension": "md",
      "path": "mekorama"
    }
  },
  {
    "title": "Application web Angular — PGH",
    "subtitle": "Stage en développement Front-end chez Poulina Group Holding",
    "description": "Application web réalisée en stage chez Poulina Group Holding : mise en place de l'architecture initiale avec Angular 22, interface d'accueil responsive, scripts npm pour tout le cycle de développement et premier test unitaire.",
    "period": "07/2026 – 09/2026",
    "role": "Stagiaire en développement Front-end Angular",
    "platform": "Web · Stage professionnel · Zahra, Tunisie",
    "order": 3,
    "cover": "/img/pgh-angular.png",
    "accent": "#ff4f6d",
    "stack": [
      "Angular 22",
      "TypeScript",
      "HTML5",
      "CSS3 / Responsive",
      "npm",
      "Angular CLI",
      "Tests unitaires"
    ],
    "metrics": [
      {
        "value": "3",
        "label": "mois de stage en entreprise"
      },
      {
        "value": "< 650 px",
        "label": "écrans couverts par le responsive"
      },
      {
        "value": "4",
        "label": "scripts npm : lancement, build, watch, test"
      }
    ],
    "highlights": [
      "Conception et structuration de l'architecture initiale d'une application web avec Angular 22, avec la configuration de l'environnement de développement et de compilation.",
      "Développement d'une interface d'accueil responsive, adaptée aux différentes tailles d'écran, y compris les écrans de moins de 650 px.",
      "Configuration des scripts npm pour le lancement, la compilation, la surveillance (watch) et les tests, afin de faciliter le cycle de développement.",
      "Écriture d'un test unitaire du composant racine Angular pour vérifier son bon fonctionnement et renforcer la fiabilité de l'application."
    ],
    "github": "https://github.com/emnabesrour/poulina-app",
    "linkedin": "https://lnkd.in/p/ezheSpHk",
    "content": "## Contexte\n\nCette application a été réalisée pendant mon **stage de développement Front-end** chez **Poulina Group Holding (PGH)**, à Zahra (Tunisie), de juillet à septembre 2026.\n\nMa mission consistait à poser les bases d'une nouvelle application web avec **Angular 22** : une architecture propre et évolutive, un environnement de travail prêt à l'emploi pour l'équipe et une première interface utilisable sur tous les écrans.\n\n## Ce que j'ai réalisé\n\n- **Architecture initiale** : organisation du projet Angular (composants, modules, ressources), puis configuration de l'environnement de développement et de compilation.\n- **Interface d'accueil responsive** : mise en page qui s'adapte aux ordinateurs, tablettes et smartphones, avec un point de rupture dédié aux écrans de **moins de 650 px**.\n- **Scripts npm** : commandes pour lancer le serveur de développement, compiler l'application, recompiler à chaque modification (watch) et exécuter les tests.\n- **Test unitaire** : test du **composant racine** Angular pour vérifier qu'il se crée et s'affiche correctement.\n\n## Approche\n\n1. **Partir d'une base saine** : une structure claire dès le départ facilite l'ajout de nouvelles fonctionnalités par l'équipe.\n2. **Penser d'abord au mobile** : l'interface d'accueil a été testée sur plusieurs largeurs d'écran pour que la mise en page reste lisible sous 650 px.\n3. **Automatiser le quotidien** : les scripts npm regroupent les commandes courantes et rendent le cycle de développement plus rapide.\n4. **Tester dès le début** : le premier test unitaire sert de point de départ à la couverture de tests du projet.\n\n## Ce que j'ai appris\n\nCe stage a été ma première expérience en entreprise. J'ai appris à travailler sur un projet professionnel avec ses exigences de qualité et de maintenabilité, à maîtriser **Angular** et **TypeScript**, et à mettre en place les outils qui rendent une équipe plus efficace : scripts de build, tests et conception responsive.",
    "_meta": {
      "filePath": "pgh-angular.md",
      "fileName": "pgh-angular.md",
      "directory": ".",
      "extension": "md",
      "path": "pgh-angular"
    }
  },
  {
    "title": "Yalla",
    "subtitle": "Application mobile ludo-éducative pour enfants",
    "description": "Application Flutter qui transforme l'apprentissage en aventure : 8 univers écologiques, 9 modes de jeu, 48 niveaux et un tableau de bord parental pour sensibiliser les enfants à la protection de l'environnement.",
    "period": "01/2026 – 03/2026",
    "role": "Développeuse mobile — architecture, UI/UX enfant, logique de jeu & persistance",
    "platform": "Mobile (Flutter, interface en arabe RTL)",
    "order": 2,
    "cover": "/img/yalla.png",
    "accent": "#34b38a",
    "stack": [
      "Flutter",
      "Dart",
      "Riverpod",
      "GoRouter",
      "SQLite",
      "SharedPreferences",
      "Flame",
      "Rive",
      "Lottie"
    ],
    "metrics": [
      {
        "value": "8",
        "label": "univers écologiques"
      },
      {
        "value": "9",
        "label": "modes de jeu interactifs"
      },
      {
        "value": "48",
        "label": "niveaux (6 par univers)"
      }
    ],
    "highlights": [
      "Application ludo-éducative développée avec Flutter et Dart, comprenant 8 univers écologiques (nature, animaux, océan, recyclage, énergie…) et 9 modes de jeu interactifs.",
      "48 niveaux structurés (6 par univers) avec suivi des scores, des étoiles, des badges et de la progression via SQLite et SharedPreferences.",
      "Gestion d'état avec Riverpod et navigation déclarative avec GoRouter pour un parcours fluide entre univers, niveaux et mini-jeux.",
      "Tableau de bord parental permettant de suivre l'évolution et les résultats de l'enfant.",
      "Interface entièrement en arabe avec prise en charge RTL (droite-à-gauche).",
      "Interface animée et adaptée aux enfants : mini-jeux avec Flame, animations Rive et Lottie, effets sonores et système de récompenses."
    ],
    "github": "https://github.com/emnabesrour/Yalla-app",
    "linkedin": "https://lnkd.in/p/eZfMn4Db",
    "content": "## Contexte\n\n**Yalla** est une application mobile éducative conçue pour aider les enfants à apprendre en jouant. Elle propose une expérience ludique autour de la **protection de l'environnement** : nature, animaux, océan, recyclage et énergie.\n\nL'objectif est simple : **transformer l'apprentissage en aventure**, tout en sensibilisant les plus jeunes à des enjeux essentiels.\n\n## Fonctionnalités clés\n\n- **8 univers écologiques** à explorer, chacun avec sa propre ambiance visuelle.\n- **9 modes de jeu** interactifs et mini-jeux (moteur Flame).\n- **48 niveaux** avec étoiles, badges et récompenses pour motiver l'enfant.\n- **Tableau de bord parental** pour suivre la progression.\n- **Interface en arabe** avec prise en charge complète du sens de lecture RTL.\n\n## Architecture technique\n\n- **Flutter & Dart** pour une base de code unique et une interface riche en animations.\n- **Riverpod** pour une gestion d'état prévisible et testable.\n- **GoRouter** pour la navigation entre univers, niveaux et écrans parent.\n- **SQLite & SharedPreferences** pour la persistance locale des scores, de la progression et des préférences.\n- **Rive & Lottie** pour les animations, **Flame** pour les mini-jeux.\n\n## Ce que j'ai appris\n\nCe projet m'a permis de travailler sur l'ensemble des aspects du développement mobile : interface animée pour enfants, navigation fluide, gestion de la progression, sons et animations, base de données SQL et conception d'une expérience utilisateur adaptée à un jeune public.",
    "_meta": {
      "filePath": "yalla.md",
      "fileName": "yalla.md",
      "directory": ".",
      "extension": "md",
      "path": "yalla"
    }
  }
]