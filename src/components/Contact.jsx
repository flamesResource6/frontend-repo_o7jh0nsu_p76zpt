import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    await new Promise(r => setTimeout(r, 800))
    setStatus('Thanks! I will reply soon.')
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let's build something</h2>
          <p className="mt-2 text-slate-300/90">Tell me about your project — timeline, goals, and what success looks like.</p>
        </div>

        <motion.form onSubmit={onSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid gap-4 md:grid-cols-2">
          <motion.input whileFocus={{ scale: 1.01 }} required placeholder="Name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
          <motion.input whileFocus={{ scale: 1.01 }} required type="email" placeholder="Email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
          <motion.input whileFocus={{ scale: 1.01 }} required placeholder="Company" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 md:col-span-2" />
          <motion.textarea whileFocus={{ scale: 1.01 }} required placeholder="Project details" rows={6} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 md:col-span-2" />
          <div className="md:col-span-2 flex items-center justify-between">
            <motion.button whileTap={{ scale: 0.98 }} whileHover={{ y: -2 }} className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition">Send message</motion.button>
            <span className="text-sm text-slate-300/80">{status}</span>
          </div>
        </motion.form>
      </div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-[radial-gradient(closest-side,rgba(56,189,248,0.12),transparent)]" />
    </section>
  )
}
