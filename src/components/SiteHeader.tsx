import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Github, Linkedin, Menu, X } from 'lucide-react'
import { profile } from '@/data/profile'

const nav = [
  { href: '/#apropos', label: 'À propos' },
  { href: '/#competences', label: 'Compétences' },
  { href: '/#projets', label: 'Projets' },
  { href: '/#experience', label: 'Expérience' },
  { href: '/#github', label: 'GitHub' },
  { href: '/#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-coral font-display text-sm font-semibold text-ink">
            EB
          </span>
          <span className="font-display text-lg text-cream">{profile.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-mist lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-cream">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full border border-line p-2 text-mist transition hover:border-coral hover:text-cream">
            <Linkedin size={16} />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full border border-line p-2 text-mist transition hover:border-coral hover:text-cream">
            <Github size={16} />
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="p-2 text-cream lg:hidden" aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-ink px-5 py-4 lg:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-mist hover:text-cream">
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
