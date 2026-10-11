import { useState, useEffect, useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { Github, Linkedin, Menu, X } from 'lucide-react'
import { profile } from '@/data/profile'
import { useLang, useT, type Lang } from '@/lib/i18n'

const SLIDE_MS = 100

function LangSwitch() {
  const { lang, setLang } = useLang()
  // The pill follows this value, which changes right away on click
  const [visual, setVisual] = useState<Lang>(lang)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Stay in sync if the language is restored from localStorage after load
  useEffect(() => {
    setVisual(lang)
  }, [lang])

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current)
  }, [])

  const choose = (code: Lang) => {
    if (code === visual) return
    setVisual(code) // pill starts sliding now
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setLang(code), SLIDE_MS) // content changes when it arrives
  }

  const options: { code: Lang; label: string; aria: string }[] = [
    { code: 'fr', label: 'FR', aria: 'Passer en français' },
    { code: 'en', label: 'EN', aria: 'Switch to English' },
  ]

  return (
    <div
      role="group"
      aria-label="Language"
      className="relative grid grid-cols-2 items-center rounded-full border border-line p-0.5"
    >
      <span
        aria-hidden="true"
        className={`absolute top-0.5 bottom-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-coral shadow-[0_0_12px_rgba(249,115,98,0.35)] transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
          visual === 'en' ? 'translate-x-full' : 'translate-x-0'
        }`}
      />
      {options.map((o) => (
        <button
          key={o.code}
          type="button"
          onClick={() => choose(o.code)}
          aria-label={o.aria}
          aria-pressed={visual === o.code}
          className={`relative z-10 rounded-full px-3.5 py-1 font-mono text-xs transition-colors duration-500 ${
            visual === o.code ? 'font-semibold text-ink' : 'text-mist hover:text-cream'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const t = useT()

  const nav = [
    { href: '/#apropos', label: t.nav.about },
    { href: '/#competences', label: t.nav.skills },
    { href: '/#projets', label: t.nav.projects },
    { href: '/#experience', label: t.nav.experience },
    { href: '/#github', label: t.nav.github },
    { href: '/#contact', label: t.nav.contact },
  ]

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

        {/* Desktop: social icons + language switch */}
        <div className="hidden items-center gap-3 lg:flex">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full border border-line p-2 text-mist transition hover:border-coral hover:text-cream">
            <Linkedin size={16} />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full border border-line p-2 text-mist transition hover:border-coral hover:text-cream">
            <Github size={16} />
          </a>
          <span className="mx-1 h-5 w-px bg-line" aria-hidden="true" />
          <LangSwitch />
        </div>

        {/* Mobile: language switch + menu button */}
        <div className="flex items-center gap-3 lg:hidden">
          <LangSwitch />
          <button onClick={() => setOpen(!open)} className="p-2 text-cream" aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
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