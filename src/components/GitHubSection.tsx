import { useEffect, useState } from 'react'
import { ArrowUpRight, GitFork, Github, Star } from 'lucide-react'
import { profile } from '@/data/profile'

type Repo = {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  fork: boolean
}

type User = { public_repos: number; followers: number; avatar_url: string }

// Public GitHub data is fetched client-side; the section degrades to a profile link if the API is unavailable.
export function GitHubSection() {
  const [repos, setRepos] = useState<Repo[] | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const base = `https://api.github.com/users/${profile.githubUser}`
    Promise.all([
      fetch(base).then((r) => (r.ok ? r.json() : Promise.reject())),
      fetch(`${base}/repos?sort=updated&per_page=12`).then((r) => (r.ok ? r.json() : Promise.reject())),
    ])
      .then(([u, r]: [User, Repo[]]) => {
        setUser(u)
        setRepos(r.filter((x) => !x.fork).slice(0, 6))
      })
      .catch(() => setFailed(true))
  }, [])

  return (
    <div>
      <div className="mb-8 flex flex-col gap-6 rounded-3xl border border-line bg-ink-2 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {user?.avatar_url ? (
            <img src={user.avatar_url} alt="" className="h-14 w-14 rounded-full border border-line" />
          ) : (
            <span className="grid h-14 w-14 place-items-center rounded-full border border-line"><Github /></span>
          )}
          <div>
            <p className="font-display text-xl">@{profile.githubUser}</p>
            <p className="text-sm text-mist">
              {user ? `${user.public_repos} dépôts publics · ${user.followers} abonnés` : 'Code source, expérimentations et projets'}
            </p>
          </div>
        </div>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-coral">
          Voir le profil GitHub <ArrowUpRight size={16} />
        </a>
      </div>

      {repos === null && !failed && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-36 animate-pulse rounded-2xl border border-line bg-ink-2" />
          ))}
        </div>
      )}

      {repos && repos.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="group flex flex-col rounded-2xl border border-line bg-ink-2 p-5 transition hover:-translate-y-1 hover:border-coral/60">
              <div className="mb-2 flex items-start justify-between gap-2">
                <p className="font-mono text-sm text-cream">{repo.name}</p>
                <ArrowUpRight size={16} className="text-mist transition group-hover:text-coral" />
              </div>
              <p className="mb-4 flex-1 text-sm text-mist">{repo.description ?? 'Dépôt public'}</p>
              <div className="flex items-center gap-4 font-mono text-xs text-mist">
                {repo.language && (
                  <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-mint" />{repo.language}</span>
                )}
                <span className="flex items-center gap-1"><Star size={12} />{repo.stargazers_count}</span>
                <span className="flex items-center gap-1"><GitFork size={12} />{repo.forks_count}</span>
              </div>
            </a>
          ))}
        </div>
      )}

      {(failed || (repos && repos.length === 0)) && (
        <p className="text-mist">Retrouvez l'ensemble de mes dépôts directement sur mon profil GitHub.</p>
      )}
    </div>
  )
}
