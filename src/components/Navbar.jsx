import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between h-16 px-4">
            <a href="#" className="inline-flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 shadow-[0_0_20px_rgba(234,88,12,0.6)]" />
              <span className="text-white font-semibold tracking-tight">KLIX Digital</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-black bg-orange-500 hover:bg-orange-400 px-4 py-2 rounded-lg transition-colors">
                Start a Project
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-sm text-white/80 hover:text-white bg-white/5 border border-white/10 px-4 py-3 rounded-lg"
                  >
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="text-sm text-black bg-orange-500 hover:bg-orange-400 px-4 py-3 rounded-lg text-center">
                  Start a Project
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
