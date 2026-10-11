import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'fr' | 'en'

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
    lang: 'fr',
    setLang: () => { },
})

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>('fr')

    useEffect(() => {
        try {
            const saved = localStorage.getItem('lang')
            if (saved === 'fr' || saved === 'en') setLangState(saved)
            else if (navigator.language.startsWith('en')) setLangState('en')
        } catch { }
    }, [])

    useEffect(() => {
        document.documentElement.lang = lang
    }, [lang])

    const setLang = (l: Lang) => {
        setLangState(l)
        try {
            localStorage.setItem('lang', l)
        } catch { }
    }

    return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)

export const dict = {
    fr: {
        nav: { about: 'À propos', skills: 'Compétences', projects: 'Projets', experience: 'Expérience', github: 'GitHub', contact: 'Contact' },
        open: 'Ouverte aux stages & opportunités',
        seeProjects: 'Voir mes projets',
        myCv: 'Mon CV',
        delivered: 'projets livrés en 2026, dont 1 stage',
        about: { kicker: 'À propos', title: 'Concevoir, coder, livrer.', basedIn: 'Basée en', specialties: 'Spécialités', availability: 'Disponibilité', specialtiesValue: 'Web · Mobile · Jeux', availabilityValue: 'Stages & projets' },
        skills: { kicker: 'Compétences', title: 'Une boîte à outils polyvalente.', intro: "Du gameplay 3D à l'architecture d'applications, en passant par le web full-stack." },
        projects: { kicker: 'Projets', title: 'Projets sélectionnés.', intro: 'Une marketplace e-commerce full-stack, une application web Angular réalisée en stage et deux applications mobiles, conçues de bout en bout.', caseStudy: 'Étude de cas', all: 'Tous les projets' },
        experience: { kicker: 'Expérience', title: 'Parcours & réalisations.', intro: 'Un stage en entreprise et des projets menés de bout en bout, avec des livrables concrets.', details: 'Détails du projet', professionalPrefix: 'Expérience' },
        linkedin: { kicker: 'LinkedIn', title: 'Ce que je partage.', intro: 'Mes publications récentes sur LinkedIn, où je présente mes projets à la communauté tech.', connect: 'Se connecter sur LinkedIn' },
        github: { kicker: 'GitHub', title: 'Le code derrière les projets.' },
        contact: { kicker: 'Contact', title: 'Travaillons ensemble.', intro: "Stage, projet ou simple échange : n'hésitez pas à me contacter.", email: 'E-mail', phone: 'Téléphone', location: 'Localisation' },
        project: {
            keyAchievements: 'Réalisations clés',
            role: 'Rôle',
            period: 'Période',
            technologies: 'Technologies',
            viewGithub: 'Voir sur GitHub',
            linkedinPost: 'Publication LinkedIn',
            next: 'Projet suivant',
        },
    },
    en: {
        nav: { about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Experience', github: 'GitHub', contact: 'Contact' },
        open: 'Open to internships & opportunities',
        seeProjects: 'View my projects',
        myCv: 'My CV',
        delivered: 'projects delivered in 2026, including 1 internship',
        about: { kicker: 'About', title: 'Design, code, ship.', basedIn: 'Based in', specialties: 'Specialties', availability: 'Availability', specialtiesValue: 'Web · Mobile · Games', availabilityValue: 'Internships & projects' },
        skills: { kicker: 'Skills', title: 'A versatile toolbox.', intro: 'From 3D gameplay to application architecture, including full-stack web.' },
        projects: { kicker: 'Projects', title: 'Selected projects.', intro: 'A full-stack e-commerce marketplace, an Angular web app built during an internship, and two mobile apps, designed end to end.', caseStudy: 'Case study', all: 'All projects' },
        experience: { kicker: 'Experience', title: 'Background & achievements.', intro: 'An industry internship and projects carried out end to end, with concrete deliverables.', details: 'Project details', professionalPrefix: 'Professional' },
        linkedin: { kicker: 'LinkedIn', title: 'What I share.', intro: 'My recent LinkedIn posts, where I present my projects to the tech community.', connect: 'Connect on LinkedIn' },
        github: { kicker: 'GitHub', title: 'The code behind the projects.' },
        contact: { kicker: 'Contact', title: "Let's work together.", intro: 'Internship, project or just a chat: feel free to reach out.', email: 'Email', phone: 'Phone', location: 'Location' },
        project: {
            keyAchievements: 'Key achievements',
            role: 'Role',
            period: 'Period',
            technologies: 'Technologies',
            viewGithub: 'View on GitHub',
            linkedinPost: 'LinkedIn post',
            next: 'Next project',
        },
    },
}

export function useT() {
    const { lang } = useLang()
    return dict[lang]
}