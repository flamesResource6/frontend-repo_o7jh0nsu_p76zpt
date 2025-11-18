import React, { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function Hero() {
  // Mouse-reactive 3D tilt for the content card
  const cardRef = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useTransform(my, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(mx, [-0.5, 0.5], [-12, 12])

  const handleMouseMove = (e) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mx.set(x)
    my.set(y)
  }

  const techChips = ['React', 'TypeScript', 'Framer Motion', 'Node.js', 'Tailwind', 'Three.js']

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* 3D background scene with subtle zoom/pan */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 scale-[1.02] will-change-transform">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* color wash and vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/35 to-slate-950/70 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_35%,black,transparent)]" />
        {/* Neon grid at bottom for a futuristic floor */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:linear-gradient(to_top,black,transparent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80 backdrop-blur"
            >
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-ping [animation-duration:1.6s]" />
              Now booking Q4 projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight text-white"
            >
              Immersive 3D & Motion-driven Experiences
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 text-lg text-slate-300/90"
            >
              I craft fluid, interactive interfaces that feel alive — blending WebGL, delightful micro‑interactions, and solid engineering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#work"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition"
              >
                See the Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                Start a Project
              </motion.a>
            </motion.div>

            {/* orbiting chips */}
            <div className="mt-10 flex flex-wrap gap-2">
              {techChips.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.4 }}
                  className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300/90 backdrop-blur hover:bg-white/10 transition"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right: glass 3D card with tilt */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative h-[380px] sm:h-[420px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
          >
            {/* holographic sheen */}
            <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,211,238,0.15),rgba(59,130,246,0.15),rgba(147,51,234,0.15),rgba(34,211,238,0.15))] mix-blend-overlay" style={{ transform: 'translateZ(40px)' }} />
            <div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 [mask:linear-gradient(white,transparent_50%)]" style={{ transform: 'translateZ(50px)' }} />

            {/* subtle grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* floating particles */}
            {Array.from({ length: 18 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/60 shadow-[0_0_20px_rgba(34,211,238,0.45)]"
                initial={{ x: Math.random() * 320 + 30, y: Math.random() * 260 + 40, opacity: 0 }}
                animate={{ y: [null, (Math.random() * 200 + 40)], opacity: [0.2, 0.9, 0.2] }}
                transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                style={{ transform: 'translateZ(80px)' }}
              />
            ))}

            {/* center badge */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ transform: 'translateZ(70px)' }}
            >
              <div className="relative">
                <div className="absolute inset-0 blur-2xl bg-cyan-400/30 rounded-full" />
                <div className="relative h-36 w-36 rounded-full border border-white/20 bg-gradient-to-br from-cyan-400/30 to-purple-500/30 backdrop-blur-xl flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.35)]">
                  <span className="text-white font-semibold tracking-wide">LIVE</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Ambient blobs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="pointer-events-none absolute -bottom-10 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgba(56,189,248,0.18),transparent)]"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
        className="pointer-events-none absolute left-16 top-28 h-24 w-24 rounded-full bg-cyan-400/25 blur-2xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2.2, delay: 0.4, repeat: Infinity, repeatType: 'mirror' }}
        className="pointer-events-none absolute right-24 top-40 h-20 w-20 rounded-full bg-blue-500/25 blur-2xl"
      />
    </section>
  )
}
