---
title: "LUXORA"
subtitle: "Plateforme e-commerce multivendeur"
description: "Marketplace web full-stack qui réunit clients, vendeurs et administrateurs : catalogue partagé, panier persistant, gestion des commandes et paiements en ligne via les API Stripe et PayPal."
period: "03/2026 – 04/2026"
role: "Développeuse full-stack — conception, base de données, API & interfaces"
platform: "Web · Marketplace full-stack"
order: 4
cover: "/img/luxora.png"
accent: "#f5c451"
stack: ["Full-stack", "API REST", "API Stripe", "API PayPal", "Base de données SQL", "Authentification par rôles"]
metrics:
  - { value: "3", label: "rôles : client, vendeur, admin" }
  - { value: "17", label: "tables relationnelles" }
  - { value: "2", label: "passerelles de paiement" }
highlights:
  - "Développement d'une marketplace multivendeur full-stack avec 3 rôles : clients, vendeurs et administrateurs."
  - "Intégration des principales fonctionnalités e-commerce : catalogue partagé, panier persistant, gestion des commandes et paiements via Stripe et PayPal."
  - "Création d'un portail vendeur comprenant 6 modules et d'une console d'administration organisée en 10 rubriques."
  - "Modélisation d'une base de données relationnelle de 17 tables couvrant les produits, les utilisateurs, les transactions, les avis et le programme VIP."
github: "https://github.com/emnabesrour/Luxura"
linkedin: "https://lnkd.in/p/eK_ZzJjk"
---

## Contexte

**LUXORA** est une plateforme e-commerce **multivendeur** : plusieurs boutiques vendent leurs produits dans un même catalogue, et les clients commandent et paient en ligne en un seul endroit.

Le site s'appuie sur **plusieurs API** : une API interne pour les produits, les commandes et les comptes, et les API de paiement **Stripe** et **PayPal**.

## Trois espaces, trois rôles

- **Clients** : navigation dans le catalogue partagé, panier persistant, commande, paiement, suivi des commandes, avis et programme VIP.
- **Vendeurs** : un portail de **6 modules** pour gérer leur boutique, leurs produits et leurs commandes.
- **Administrateurs** : une console organisée en **10 rubriques** pour superviser les utilisateurs, les vendeurs, le catalogue et les transactions.

## Architecture technique

- **Contrôle d'accès par rôle** : chaque utilisateur ne voit que les écrans et les actions qui correspondent à son rôle.
- **Paiements** : intégration des API Stripe et PayPal pour proposer deux moyens de paiement sécurisés.
- **Panier persistant** : le panier est conservé entre les sessions pour ne pas perdre les articles du client.
- **Base de données relationnelle de 17 tables** : produits, utilisateurs, commandes, transactions, avis et programme VIP, avec des relations qui garantissent la cohérence des données.

## Ce que j'ai appris

Ce projet m'a permis de concevoir une application web complète, de la base de données à l'interface. J'ai appris à modéliser des données complexes, à intégrer des API de paiement tierces et à organiser une application autour de plusieurs profils d'utilisateurs aux besoins très différents.
