import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">About Me</h2>
            <p className="mt-3 text-slate-300/90">
              I build high‑quality web apps with an eye for motion and micro‑interactions. I love shipping
              polished experiences that feel fast, intuitive, and playful — without sacrificing accessibility
              or maintainability.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-white">5+ yrs</div>
                <div className="text-slate-300/80">Experience</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-white">30+</div>
                <div className="text-slate-300/80">Projects</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-white">10ms</div>
                <div className="text-slate-300/80">Interaction budget</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-white">100%</div>
                <div className="text-slate-300/80">Commitment</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
              <div className="h-full w-full rounded-xl border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.2),transparent_40%)]" />
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-xl bg-cyan-400/20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
