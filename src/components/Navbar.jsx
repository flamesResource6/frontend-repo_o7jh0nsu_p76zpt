import React from 'react'
import { Menu, Github, Linkedin, Mail } from 'lucide-react'

const NavLink = ({ href, children }) => (
  <a href={href} className="text-slate-200/80 hover:text-white transition-colors">
    {children}
  </a>
)

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 px-4 sm:px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
            <span className="font-semibold tracking-tight text-white">Dev Portfolio</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-slate-200/80 hover:text-white transition">
              <Github size={18} />
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-slate-200/80 hover:text-white transition">
              <Linkedin size={18} />
            </a>
            <a aria-label="Email" href="#contact" className="p-2 rounded-md hover:bg-white/5 text-slate-200/80 hover:text-white transition">
              <Mail size={18} />
            </a>
          </div>

          <button className="md:hidden p-2 rounded-md hover:bg-white/5 text-slate-200/80 hover:text-white transition" aria-label="Menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
