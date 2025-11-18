import React from 'react'
import { motion } from 'framer-motion'

export default function FooterCTA() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/30 p-8 sm:p-12 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">Have an idea worth shipping?</h3>
          <p className="mt-2 text-slate-300/90">Lets turn it into a beautiful, performant product.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="#contact" className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition">Start a project</a>
            <a href="#work" className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition">See my work</a>
          </div>

          <motion.div initial={{ opacity: 0.3 }} animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
          <motion.div initial={{ opacity: 0.3 }} animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 6, delay: 1.2, repeat: Infinity }} className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}
