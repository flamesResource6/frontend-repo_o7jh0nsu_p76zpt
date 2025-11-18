import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Delivered beyond expectations. The attention to detail and performance was outstanding.',
    author: 'Sarah C.',
    role: 'Product Lead @ SaaSCo'
  },
  {
    quote: 'A rare mix of speed, quality, and communication. Would absolutely work together again.',
    author: 'Daniel M.',
    role: 'Founder @ StealthFintech'
  },
  {
    quote: 'Transformed our MVP into a polished product. Our users noticed the difference immediately.',
    author: 'Priya R.',
    role: 'Head of Design @ HealthTech'
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Kind Words</h2>
          <p className="mt-2 text-slate-300/90">Feedback from people I7ve shipped with.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/30 p-6 shadow-lg shadow-black/20"
            >
              <p className="text-slate-200">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-400">
                <span className="font-medium text-white">{t.author}</span> · {t.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-[radial-gradient(closest-side,rgba(56,189,248,0.12),transparent)]" />
    </section>
  )
}
