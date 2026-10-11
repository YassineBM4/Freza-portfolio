import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { marked } from 'marked'
import { ArrowLeft, ArrowRight, Check, Github, Linkedin } from 'lucide-react'
import { img, profile } from '@/data/profile'
import { localizeProject } from '@/data/projects-en'
import { useLang, useT } from '@/lib/i18n'

export const Route = createFileRoute('/projets/$slug')({
  loader: ({ params }) => {
    const project = allProjects.find((p) => p._meta.path === params.slug)
    if (!project) throw notFound()
    return project
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — ${profile.name}` },
          { name: 'description', content: loaderData.description },
        ]
      : [],
  }),
  component: ProjectPage,
})

function ProjectPage() {
  const { lang } = useLang()
  const t = useT()

  // The loader returns the French project; we translate it here so it reacts to the language switch
  const found = Route.useLoaderData()
  const project = localizeProject(found, lang)
  const others = allProjects
    .filter((p) => p._meta.path !== found._meta.path)
    .map((p) => localizeProject(p, lang))

  // English body comes from projects-en.ts, French body from the .md file
  const bodyMarkdown = lang === 'en' && project.body ? project.body : found.content

  return (
    <main className="pt-24">
      <div className="mx-auto max-w-5xl px-5">
        <a href="/#projets" className="inline-flex items-center gap-2 text-sm text-mist hover:text-cream">
          <ArrowLeft size={16} /> {t.projects.all}
        </a>

        <header className="mt-8 rise">
          <p className="font-mono text-xs uppercase tracking-wider" style={{ color: project.accent }}>
            {project.period} · {project.platform}
          </p>
          <h1 className="mt-3 font-display text-5xl sm:text-7xl">{project.title}</h1>
          <p className="mt-3 text-xl text-mist">{project.subtitle}</p>
        </header>

        <img src={img(project.cover, 1600)} alt={project.title} className="mt-10 aspect-video w-full rounded-3xl border border-line object-cover" />

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {project.metrics.map((m) => (
            <div key={m.value + m.label} className="rounded-2xl border border-line bg-ink-2 p-5">
              <p className="font-display text-4xl" style={{ color: project.accent }}>{m.value}</p>
              <p className="mt-1 text-sm text-mist">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="mb-6 font-display text-3xl">{t.project.keyAchievements}</h2>
            <ul className="space-y-4">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-4 text-cream/90">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full" style={{ backgroundColor: project.accent }}>
                    <Check size={14} className="text-ink" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <div className="prose-case mt-6" dangerouslySetInnerHTML={{ __html: marked.parse(bodyMarkdown) as string }} />
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-line bg-ink-2 p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-mist">{t.project.role}</p>
              <p className="mt-1 text-cream">{project.role}</p>
              <p className="mt-5 font-mono text-xs uppercase tracking-wider text-mist">{t.project.period}</p>
              <p className="mt-1 text-cream">{project.period}</p>
              <p className="mt-5 font-mono text-xs uppercase tracking-wider text-mist">{t.project.technologies}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span key={s} className="rounded-full bg-ink px-3 py-1 font-mono text-xs">{s}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-cream px-5 py-3 text-sm font-semibold text-ink hover:bg-coral">
                  <Github size={16} /> {t.project.viewGithub}
                </a>
              )}
              {project.linkedin && (
                <a href={project.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-sm hover:border-[#0a66c2]">
                  <Linkedin size={16} /> {t.project.linkedinPost}
                </a>
              )}
            </div>
          </aside>
        </div>

        {others.map((o) => (
          <Link key={o._meta.path} to="/projets/$slug" params={{ slug: o._meta.path }} className="group my-20 flex items-center justify-between rounded-3xl border border-line bg-ink-2 p-8 transition hover:border-coral">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-mist">{t.project.next}</p>
              <p className="mt-1 font-display text-3xl">{o.title}</p>
              <p className="text-mist">{o.subtitle}</p>
            </div>
            <ArrowRight className="text-mist transition group-hover:translate-x-1 group-hover:text-coral" />
          </Link>
        ))}
      </div>
    </main>
  )
}