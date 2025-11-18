import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/40 to-slate-950 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80 backdrop-blur">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance projects
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl font-bold tracking-tight text-white">
            Crafting modern, interactive experiences
          </h1>
          <p className="mt-4 text-lg text-slate-300/90">
            Full‑stack developer specializing in React, TypeScript, and delightful UI animations.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a href="#work" className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition">
              View Projects
            </a>
            <a href="#contact" className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* soft glow */}
      <div className="pointer-events-none absolute -bottom-10 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgba(56,189,248,0.15),transparent)]" />
    </section>
  )
}
