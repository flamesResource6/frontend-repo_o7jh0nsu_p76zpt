import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Code2 } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Chat App',
    desc: 'WebSocket powered chat with auth, themes, and file sharing.',
    tags: ['React', 'FastAPI', 'WebSocket'],
    link: '#'
  },
  {
    title: '3D Product Viewer',
    desc: 'Interactive 3D viewer with Spline + custom shaders.',
    tags: ['Spline', 'Three.js', 'Vite'],
    link: '#'
  },
  {
    title: 'AI Code Assistant',
    desc: 'Inline code suggestions with embeddings and RAG.',
    tags: ['Python', 'LLM', 'Vector DB'],
    link: '#'
  },
]

function Tag({ children }) {
  return (
    <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300/90">
      {children}
    </span>
  )
}

export default function Projects() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Featured Work</h2>
          <p className="mt-2 text-slate-300/90">Selected projects that showcase my focus on performance, UX, and polish.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/30 p-5 shadow-lg shadow-black/20 hover:border-cyan-400/40 hover:shadow-cyan-500/10 transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white">
                  <Code2 size={18} className="text-cyan-400" />
                  <h3 className="font-semibold">{p.title}</h3>
                </div>
                <ExternalLink size={18} className="text-slate-400 group-hover:text-white transition"/>
              </div>

              <p className="mt-3 text-sm text-slate-300/90">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => <Tag key={t}>{t}</Tag>)}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-6 h-32 rounded-xl bg-[linear-gradient(120deg,rgba(56,189,248,0.08),transparent),radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] border border-white/5" />
            </motion.a>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-[radial-gradient(closest-side,rgba(56,189,248,0.12),transparent)]" />
    </section>
  )
}
