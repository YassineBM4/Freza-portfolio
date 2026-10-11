import type { Lang } from '@/lib/i18n'

type En = {
  title?: string
  subtitle: string
  description: string
  role: string
  platform: string
  highlights: string[]
  metrics: string[] // labels only, same order as in the .md file
  body: string // markdown
}

export const projectsEn: Record<string, En> = {
  luxora: {
    subtitle: 'Multi-vendor e-commerce platform',
    description:
      'Full-stack web marketplace bringing together customers, vendors and administrators: shared catalog, persistent cart, order management and online payments through the Stripe and PayPal APIs.',
    role: 'Full-stack developer — design, database, API & interfaces',
    platform: 'Web · Full-stack marketplace',
    highlights: [
      'Built a full-stack multi-vendor marketplace with 3 roles: customers, vendors and administrators.',
      'Integrated core e-commerce features: shared catalog, persistent cart, order management and payments via Stripe and PayPal.',
      'Created a vendor portal with 6 modules and an admin console organized in 10 sections.',
      'Modeled a 17-table relational database covering products, users, transactions, reviews and the VIP program.',
    ],
    metrics: ['roles: customer, vendor, admin', 'relational tables', 'payment gateways'],
    body: `## Context

**LUXORA** is a **multi-vendor** e-commerce platform: several shops sell their products in a single catalog, and customers order and pay online in one place.

The site relies on **several APIs**: an internal API for products, orders and accounts, plus the **Stripe** and **PayPal** payment APIs.

## Three spaces, three roles

- **Customers**: browse the shared catalog, persistent cart, checkout, payment, order tracking, reviews and VIP program.
- **Vendors**: a portal with **6 modules** to manage their shop, products and orders.
- **Administrators**: a console organized in **10 sections** to oversee users, vendors, the catalog and transactions.

## Technical architecture

- **Role-based access control**: each user only sees the screens and actions that match their role.
- **Payments**: Stripe and PayPal API integration to offer two secure payment methods.
- **Persistent cart**: the cart is kept between sessions so customers never lose their items.
- **17-table relational database**: products, users, orders, transactions, reviews and VIP program, with relationships that keep data consistent.

## What I learned

This project let me design a complete web application, from the database to the interface. I learned to model complex data, integrate third-party payment APIs and organize an application around several user profiles with very different needs.`,
  },

  mekorama: {
    subtitle: 'Isometric 3D platformer mobile game',
    description:
      'Complete 5-level prototype built from scratch with Unity and C#: a character crosses dynamic environments to collect keys and stars, with a 360° camera designed for touch.',
    role: 'Game developer — design, gameplay, UI, optimization & deployment',
    platform: 'Android (smartphone)',
    highlights: [
      'Physics-based character control: movement, jump, collision detection and interaction with obstacles.',
      '5 levels with progressive difficulty mixing platform navigation, obstacle avoidance and end-of-level goals.',
      '360° rotating camera optimized for touch gestures, letting players explore the map to find the right path.',
      'C# scripting of the interface, the level selection menu and the key and star collection logic.',
      'Optimization of 3D assets and rendering for a smooth experience on smartphone.',
      'Build and deployment on smartphone, with controls and an interface adapted to touch screens.',
    ],
    metrics: ['levels with progressive difficulty', 'touch-controlled rotating camera', 'built from scratch'],
    body: `## Context

MEKORAMA is an isometric 3D platformer inspired by diorama puzzles, designed and developed entirely with **Unity** and **C#**. The goal was to deliver a playable prototype end to end: from the movement mechanics to the export on smartphone.

The player guides a character through suspended, dynamic environments. To finish a level, they must **collect the keys and stars** and reach the final goal, exploring the map with a **360° rotating camera**.

## Technical challenges

- **Physics & level design**: tuning the character's physics (speed, gravity, jump) for a precise feel while designing levels that get harder without frustrating the player.
- **360° touch camera**: turning swipe gestures into smooth rotation around the scene, without conflicting with the movement controls.
- **Mobile performance**: balancing 3D visual quality and smoothness on devices with limited resources.

## Approach

1. Prototyping the core mechanics (movement, jump, collisions) in a test scene.
2. Building the 5 levels with a progressive difficulty curve.
3. Developing the interface: main menu, level selection, key and star counter.
4. Optimizing assets and rendering settings, then testing on a real device.
5. Building and deploying the mobile version.

## Result

The game is **fully exported and runs smoothly on mobile**. This project let me strengthen my skills in mobile engineering, gameplay-oriented programming and 3D performance optimization.`,
  },

  'pgh-angular': {
    title: 'Angular Web Application — PGH',
    subtitle: 'Front-end development internship at Poulina Group Holding',
    description:
      'Web application built during an internship at Poulina Group Holding: initial architecture with Angular 22, responsive home interface, npm scripts for the whole development cycle and a first unit test.',
    role: 'Front-End Angular Developer Intern',
    platform: 'Web · Professional internship · Zahra, Tunisia',
    highlights: [
      'Designed and structured the initial architecture of a web application with Angular 22, setting up the development and build environment.',
      'Built a responsive home interface adapted to all screen sizes, including screens under 650 px.',
      'Configured npm scripts for running, building, watching and testing, to streamline the development cycle.',
      'Wrote a unit test for the Angular root component to verify it works and strengthen the application’s reliability.',
    ],
    metrics: ['months of internship in a company', 'screens covered by the responsive layout', 'npm scripts: run, build, watch, test'],
    body: `## Context

This application was built during my **front-end development internship** at **Poulina Group Holding (PGH)**, in Zahra (Tunisia), from July to September 2026.

My mission was to lay the foundations of a new web application with **Angular 22**: a clean, scalable architecture, a ready-to-use working environment for the team and a first interface usable on every screen.

## What I built

- **Initial architecture**: organization of the Angular project (components, modules, assets), then configuration of the development and build environment.
- **Responsive home interface**: a layout that adapts to computers, tablets and smartphones, with a dedicated breakpoint for screens **under 650 px**.
- **npm scripts**: commands to start the development server, build the application, rebuild on every change (watch) and run the tests.
- **Unit test**: a test of the Angular **root component** to check that it is created and displayed correctly.

## Approach

1. **Start from a solid base**: a clear structure from the beginning makes it easier for the team to add new features.
2. **Think mobile first**: the home interface was tested on several screen widths so the layout stays readable under 650 px.
3. **Automate the daily routine**: npm scripts group the common commands and speed up the development cycle.
4. **Test from the start**: the first unit test is the starting point for the project's test coverage.

## What I learned

This internship was my first experience in a company. I learned to work on a professional project with its quality and maintainability requirements, to master **Angular** and **TypeScript**, and to set up the tools that make a team more efficient: build scripts, tests and responsive design.`,
  },

  yalla: {
    subtitle: 'Educational mobile game app for kids',
    description:
      'Flutter app that turns learning into an adventure: 8 ecological worlds, 9 game modes, 48 levels and a parental dashboard to raise children’s awareness of environmental protection.',
    role: 'Mobile developer — architecture, kids UI/UX, game logic & persistence',
    platform: 'Mobile (Flutter, Arabic RTL interface)',
    highlights: [
      'Educational game app built with Flutter and Dart, featuring 8 ecological worlds (nature, animals, ocean, recycling, energy…) and 9 interactive game modes.',
      '48 structured levels (6 per world) with score, star, badge and progress tracking via SQLite and SharedPreferences.',
      'State management with Riverpod and declarative navigation with GoRouter for a smooth journey between worlds, levels and mini-games.',
      'Parental dashboard to follow the child’s progress and results.',
      'Fully Arabic interface with RTL (right-to-left) support.',
      'Animated, kid-friendly interface: Flame mini-games, Rive and Lottie animations, sound effects and a reward system.',
    ],
    metrics: ['ecological worlds', 'interactive game modes', 'levels (6 per world)'],
    body: `## Context

**Yalla** is an educational mobile app designed to help children learn by playing. It offers a playful experience around **environmental protection**: nature, animals, ocean, recycling and energy.

The goal is simple: **turn learning into an adventure**, while raising young children's awareness of essential issues.

## Key features

- **8 ecological worlds** to explore, each with its own visual atmosphere.
- **9 interactive game modes** and mini-games (Flame engine).
- **48 levels** with stars, badges and rewards to motivate the child.
- **Parental dashboard** to follow progress.
- **Arabic interface** with full right-to-left (RTL) reading support.

## Technical architecture

- **Flutter & Dart** for a single codebase and an animation-rich interface.
- **Riverpod** for predictable, testable state management.
- **GoRouter** for navigation between worlds, levels and parent screens.
- **SQLite & SharedPreferences** for local persistence of scores, progress and preferences.
- **Rive & Lottie** for animations, **Flame** for mini-games.

## What I learned

This project let me work on every aspect of mobile development: animated child-friendly interface, smooth navigation, progress management, sound and animations, SQL database and designing a user experience adapted to a young audience.`,
  },
}

type Localizable = {
  _meta: { path: string }
  metrics: readonly { value: string; label: string }[]
}

// Returns the project in the chosen language (French = unchanged)
export function localizeProject<T extends Localizable>(p: T, lang: Lang): T & { body?: string } {
  if (lang === 'fr') return p
  const en = projectsEn[p._meta.path]
  if (!en) return p
  const { metrics: labels, ...rest } = en
  return {
    ...p,
    ...rest,
    metrics: p.metrics.map((m, i) => ({ ...m, label: labels[i] ?? m.label })),
  }
}