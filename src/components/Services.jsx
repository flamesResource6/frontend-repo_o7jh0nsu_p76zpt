import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Rocket, TerminalSquare, Palette } from 'lucide-react'

const services = [
  {
    title: 'Product Engineering',
    desc: 'From idea to launch. I turn specs into scalable, maintainable products with a focus on shipping fast and iterating.',
    icon: Rocket,
    accent: 'from-cyan-400 to-blue-500'
  },
  {
    title: 'Frontend Experience',
    desc: 'Pixel-perfect UI, motion design, and accessibility baked in. Micro-interactions that feel alive.',
    icon: Palette,
    accent: 'from-fuchsia-400 to-purple-500'
  },
  {
    title: 'APIs & Integrations',
    desc: 'FastAPI + Node services, database design, auth, payments, analytics, and third‑party integrations.',
    icon: TerminalSquare,
    accent: 'from-emerald-400 to-teal-500'
  },
  {
    title: 'Performance & DX',
    desc: 'Lighthouse audits, bundle slimming, CI/CD, testing strategy, and solid developer tooling.',
    icon: Sparkles,
    accent: 'from-amber-400 to-orange-500'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">What I Do</h2>
          <p className="mt-2 text-slate-300/90">High-impact work across frontend, backend, and product delivery.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/30 p-5 shadow-lg shadow-black/20"
              >
                <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${s.accent} p-2 text-white shadow-[0_0_24px_rgba(56,189,248,0.25)]`}>
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-300/90">{s.desc}</p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl"
                />
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-[radial-gradient(closest-side,rgba(56,189,248,0.12),transparent)]" />
    </section>
  )
}
