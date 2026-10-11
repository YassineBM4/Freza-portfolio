import { createFileRoute, Link } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { GitHubSection } from '@/components/GitHubSection'
import { ContactForm } from '@/components/ContactForm'
import { experience, img, linkedinPosts, profile, skillGroups } from '@/data/profile'

export const Route = createFileRoute('/')({
  component: Home,
})

function SectionTitle({ index, kicker, title, children }: { index: string; kicker: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-coral">
        {index} — {kicker}
      </p>
      <h2 className="font-display text-4xl leading-tight sm:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-lg text-mist">{children}</p>}
    </div>
  )
}

function Home() {
  const projects = [...allProjects].sort((a, b) => a.order - b.order)

  return (
    <main>
      {/* Hero */}
      <section className="grain relative overflow-hidden pt-32 pb-24 sm:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.3fr_1fr]">
          <div className="rise">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 font-mono text-xs text-mist">
              <span className="h-2 w-2 animate-pulse rounded-full bg-mint" /> Ouverte aux stages & opportunités
            </p>
            <h1 className="font-display text-5xl leading-[1.05] sm:text-7xl">
              {profile.firstName} <span className="italic text-coral">Besrour</span>
            </h1>
            <p className="mt-5 text-xl text-cream sm:text-2xl">{profile.title}</p>
            <p className="mt-2 font-mono text-sm text-mist">{profile.tagline}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#projets" className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-semibold text-ink transition hover:bg-sun">
                Voir mes projets <ArrowRight size={18} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 transition hover:border-coral">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 transition hover:border-coral">
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>

          <div className="rise relative [animation-delay:150ms] lg:scale-110 lg:origin-left">
            <div className="grid grid-cols-2 gap-x-5 gap-y-3">
              {projects.map((p, i) => (
                <Link
                  key={p._meta.path}
                  to="/projets/$slug"
                  params={{ slug: p._meta.path }}
                  className={`group aspect-[4/3] overflow-hidden rounded-2xl border border-line ${i % 2 === 1 ? 'mt-6' : ''}`}
                >
                  <img
                    src={img(p.cover, 900)}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
              ))}
            </div>
            <div className="absolute -bottom-6 left-6 rounded-2xl border border-line bg-ink-2/95 px-5 py-4 backdrop-blur">
              <p className="font-display text-3xl text-sun">4</p>
              <p className="text-xs text-mist">projets livrés en 2026, dont 1 stage</p>
            </div>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="apropos" className="border-t border-line py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.4fr]">
          <SectionTitle index="01" kicker="À propos" title="Concevoir, coder, livrer." />
          <div className="space-y-5 text-lg leading-relaxed text-mist">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <dl className="grid gap-4 pt-6 sm:grid-cols-3">
              {[
                { k: 'Basée en', v: profile.location },
                { k: 'Spécialités', v: 'Web · Mobile · Jeux' },
                { k: 'Disponibilité', v: 'Stages & projets' },
              ].map((d) => (
                <div key={d.k} className="rounded-2xl border border-line p-4">
                  <dt className="font-mono text-xs uppercase tracking-wider text-mist">{d.k}</dt>
                  <dd className="mt-1 text-cream">{d.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section id="competences" className="border-t border-line bg-ink-2/40 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle index="02" kicker="Compétences" title="Une boîte à outils polyvalente.">
            Du gameplay 3D à l'architecture d'applications, en passant par le web full-stack.
          </SectionTitle>
          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((g) => (
              <div key={g.title} className="rounded-3xl border border-line bg-ink p-7">
                <h3 className="font-display text-2xl">{g.title}</h3>
                <p className="mt-2 mb-5 text-sm text-mist">{g.description}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-cream">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projets" className="border-t border-line py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle index="03" kicker="Projets" title="Projets sélectionnés.">
            Une marketplace e-commerce full-stack, une application web Angular réalisée en stage et deux applications mobiles, conçues de bout en bout.
          </SectionTitle>
          <div className="space-y-10">
            {projects.map((p, i) => (
              <article key={p._meta.path} className="grid overflow-hidden rounded-3xl border border-line bg-ink-2 lg:grid-cols-2">
                <div className={`relative ${i % 2 ? 'lg:order-2' : ''}`}>
                  <img src={img(p.cover, 1000)} alt={p.title} className="h-full min-h-72 w-full object-cover" />
                  <span className="absolute top-5 left-5 rounded-full bg-ink/80 px-3 py-1 font-mono text-xs backdrop-blur">{p.period}</span>
                </div>
                <div className="flex flex-col p-8 sm:p-10">
                  <p className="font-mono text-xs uppercase tracking-wider" style={{ color: p.accent }}>{p.platform}</p>
                  <h3 className="mt-2 font-display text-4xl">{p.title}</h3>
                  <p className="mt-1 text-cream/90">{p.subtitle}</p>
                  <p className="mt-4 text-mist">{p.description}</p>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {p.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-display text-3xl" style={{ color: p.accent }}>{m.value}</p>
                        <p className="text-xs text-mist">{m.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-full bg-ink px-3 py-1 font-mono text-xs text-mist">{s}</span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap gap-4 pt-8">
                    <Link to="/projets/$slug" params={{ slug: p._meta.path }} className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-coral">
                      Étude de cas <ArrowRight size={16} />
                    </Link>
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-mist hover:text-cream">
                        <Github size={16} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Expérience */}
      <section id="experience" className="border-t border-line bg-ink-2/40 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.6fr]">
          <SectionTitle index="04" kicker="Expérience" title="Parcours & réalisations.">
            Un stage en entreprise et des projets menés de bout en bout, avec des livrables concrets.
          </SectionTitle>
          <ol className="relative border-l border-line">
            {experience.map((e) => (
              <li key={e.role} className="relative mb-12 pl-8 last:mb-0">
                <span className="absolute top-1.5 -left-[7px] h-3.5 w-3.5 rounded-full border-2 border-ink bg-coral" />
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-mono text-xs text-coral">{e.period}</p>
                  <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${e.kind.startsWith('Expérience') ? 'border-coral bg-coral/10 text-coral' : 'border-line text-mist'}`}>
                    {e.kind}
                  </span>
                </div>
                <h3 className="mt-1 font-display text-2xl">{e.role}</h3>
                <p className="text-sm text-mist">{e.org}</p>
                <ul className="mt-4 space-y-2 text-mist">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-3 shrink-0 bg-mint" />
                      {pt}
                    </li>
                  ))}
                </ul>
                {'slug' in e && e.slug && (
                  <Link to="/projets/$slug" params={{ slug: e.slug }} className="mt-4 inline-flex items-center gap-1 text-sm text-cream hover:text-coral">
                    Détails du projet <ArrowRight size={14} />
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* LinkedIn */}
      <section id="linkedin" className="border-t border-line py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle index="05" kicker="LinkedIn" title="Ce que je partage.">
            Mes publications récentes sur LinkedIn, où je présente mes projets à la communauté tech.
          </SectionTitle>
          <div className="grid gap-5 md:grid-cols-2">
            {linkedinPosts.map((post) => {
              const project = projects.find((p) => p._meta.path === post.slug)
              return (
                <a key={post.slug} href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="group flex flex-col rounded-3xl border border-line bg-ink-2 p-7 transition hover:border-[#0a66c2]">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-[#0a66c2] text-white"><Linkedin size={20} /></span>
                    <div>
                      <p className="font-semibold">{profile.name}</p>
                      <p className="text-xs text-mist">{profile.title}</p>
                    </div>
                    <ArrowUpRight className="ml-auto text-mist group-hover:text-cream" size={18} />
                  </div>
                  <p className="flex-1 leading-relaxed text-cream/90">« {post.excerpt} »</p>
                  {project && (
                    <img src={img(project.cover, 800)} alt={project.title} className="mt-5 aspect-video w-full rounded-2xl object-cover" />
                  )}
                  <p className="mt-4 font-mono text-xs text-[#5aa2ec]">{post.tags.join(' ')}</p>
                </a>
              )
            })}
          </div>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0a66c2] px-6 py-3 font-semibold text-white transition hover:bg-[#004182]">
            <Linkedin size={18} /> Se connecter sur LinkedIn
          </a>
        </div>
      </section>

      {/* GitHub */}
      <section id="github" className="border-t border-line bg-ink-2/40 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle index="06" kicker="GitHub" title="Le code derrière les projets." />
          <GitHubSection />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-line py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionTitle index="07" kicker="Contact" title="Travaillons ensemble.">
              Stage, projet ou simple échange : n'hésitez pas à me contacter.
            </SectionTitle>
            <ul className="space-y-3">
              {[
                { icon: Mail, label: 'E-mail', value: profile.email, href: `mailto:${profile.email}` },
                { icon: Phone, label: 'Téléphone', value: profile.phone, href: profile.phoneHref },
                { icon: MapPin, label: 'Localisation', value: profile.location },
                { icon: Linkedin, label: 'LinkedIn', value: 'emna-besrour', href: profile.linkedin },
                { icon: Github, label: 'GitHub', value: `@${profile.githubUser}`, href: profile.github },
              ].map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-coral"><Icon size={18} /></span>
                    <span>
                      <span className="block font-mono text-xs uppercase tracking-wider text-mist">{label}</span>
                      <span className="text-cream">{value}</span>
                    </span>
                  </>
                )
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl p-2 transition hover:bg-ink-2">
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-2">{inner}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
