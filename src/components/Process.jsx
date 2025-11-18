import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  { title: 'Discover', desc: 'Gather goals, constraints, and success metrics. Align on scope and timelines.' },
  { title: 'Design', desc: 'Wireframes, flows, and motion studies. Iterate quickly with stakeholders.' },
  { title: 'Build', desc: 'Implement robust, accessible UI with a solid backend foundation.' },
  { title: 'Launch', desc: 'Ship confidently with monitoring, analytics, and ongoing iteration.' },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Process</h2>
          <p className="mt-2 text-slate-300/90">A simple path to ship value fast — and keep improving.</p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/30 p-6 shadow-lg shadow-black/20"
            >
              <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                {i + 1}
              </div>
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-[radial-gradient(closest-side,rgba(56,189,248,0.12),transparent)]" />
    </section>
  )
}
