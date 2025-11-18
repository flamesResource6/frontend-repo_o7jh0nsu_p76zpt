import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* background decoration */}
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.12),transparent_50%)]" />

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 py-8 text-center text-slate-400">
        <div className="mx-auto max-w-7xl px-6">
          <p>© {new Date().getFullYear()} Your Name — Built with love, coffee, and clean code.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
