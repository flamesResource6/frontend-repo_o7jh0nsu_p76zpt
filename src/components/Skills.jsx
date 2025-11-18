import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { group: 'Frontend', items: [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'TailwindCSS', level: 92 },
    { name: 'Framer Motion', level: 88 },
  ]},
  { group: 'Backend', items: [
    { name: 'Node / FastAPI', level: 82 },
    { name: 'GraphQL / REST', level: 86 },
    { name: 'Postgres / Mongo', level: 80 },
  ]},
  { group: 'Tooling', items: [
    { name: 'Vite / Webpack', level: 85 },
    { name: 'CI/CD', level: 78 },
    { name: 'Testing', level: 75 },
  ]},
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Skills & Stack</h2>
          <p className="mt-2 text-slate-300/90">Technologies I use to build fast, reliable, delightful products.</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((group) => (
            <motion.div
              key={group.group}
              variants={item}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/30 p-6 shadow-lg shadow-black/20"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-white font-semibold">{group.group}</h3>
                <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              <div className="space-y-4">
                {group.items.map((s) => (
                  <div key={s.name}>
                    <div className="flex items-center justify-between text-sm text-slate-300/90">
                      <span>{s.name}</span>
                      <span>{s.level}%</span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(56,189,248,0.35)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-[radial-gradient(closest-side,rgba(56,189,248,0.12),transparent)]" />
    </section>
  )
}
