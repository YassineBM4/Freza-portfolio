import { profile } from '@/data/profile'

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-mist sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name} · {profile.location}</p>
        <div className="flex gap-5">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cream">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-cream">GitHub</a>
          <a href={`mailto:${profile.email}`} className="hover:text-cream">E-mail</a>
        </div>
      </div>
    </footer>
  )
}
