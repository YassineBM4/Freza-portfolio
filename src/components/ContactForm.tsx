import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'

const field =
  'w-full rounded-xl border border-line bg-ink px-4 py-3 text-cream placeholder:text-mist/60 outline-none transition focus:border-coral'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  if (status === 'sent') {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-line bg-ink-2 p-10 text-center">
        <CheckCircle2 className="mb-4 h-12 w-12 text-mint" />
        <h3 className="mb-2 font-display text-2xl">Message envoyé</h3>
        <p className="mb-6 text-mist">Merci pour votre message, je vous réponds dans les plus brefs délais.</p>
        <button onClick={() => setStatus('idle')} className="rounded-full border border-line px-5 py-2 text-sm hover:border-coral">
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={(e) => {
        e.preventDefault()
        setStatus('sending')
        const formData = new FormData(e.currentTarget)
        fetch('/__forms.html', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
        })
          .then((r) => setStatus(r.ok ? 'sent' : 'error'))
          .catch(() => setStatus('error'))
      }}
      className="space-y-4 rounded-3xl border border-line bg-ink-2 p-6 sm:p-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Ne pas remplir : <input name="bot-field" />
        </label>
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm text-mist">
          Nom
          <input name="name" required placeholder="Votre nom" className={`${field} mt-1.5`} />
        </label>
        <label className="block text-sm text-mist">
          E-mail
          <input name="email" type="email" required placeholder="vous@exemple.com" className={`${field} mt-1.5`} />
        </label>
      </div>
      <label className="block text-sm text-mist">
        Objet
        <input name="subject" placeholder="Stage, collaboration, projet…" className={`${field} mt-1.5`} />
      </label>
      <label className="block text-sm text-mist">
        Message
        <textarea name="message" required rows={5} placeholder="Votre message…" className={`${field} mt-1.5 resize-none`} />
      </label>
      {status === 'error' && <p className="text-sm text-coral">Une erreur est survenue. Vous pouvez aussi m'écrire directement par e-mail.</p>}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-semibold text-ink transition hover:bg-sun disabled:opacity-60"
      >
        <Send size={16} />
        {status === 'sending' ? 'Envoi…' : 'Envoyer le message'}
      </button>
    </form>
  )
}
