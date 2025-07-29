import React, { useState } from 'react'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Skills', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Portfolio', href: '#' },
  { label: 'Contact', href: '#' },
]

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/* Topbar for desktop, hamburger for mobile */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a] border-b border-[#232323] shadow-none flex items-center justify-between px-4 md:px-12 h-16 md:h-20">
        <h2 className="text-2xl font-bold text-white tracking-tight">Ronit</h2>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <li key={link.label}>
              <Button asChild variant="outline" className="border-[#232323] bg-[#18181b] text-white hover:bg-[#232323]">
                <a href={link.href}>{link.label}</a>
              </Button>
            </li>
          ))}
        </ul>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 rounded hover:bg-[#18181b] focus:outline-none"
          aria-label="Open menu"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={28} className="text-white" />
        </button>
      </nav>

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-full max-w-xs bg-[#0a0a0a] border-r border-[#232323] text-white z-50 transform transition-transform duration-300 md:hidden shadow-xl flex flex-col justify-center ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Sidebar navigation"
      >
        <div className="flex items-center justify-between p-4 border-b border-[#232323]">
          <h2 className="text-2xl font-bold tracking-tight">Ronit</h2>
          <button
            className="p-2 rounded hover:bg-[#18181b] focus:outline-none"
            aria-label="Close menu"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={28} className="text-white" />
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-6 flex-1 justify-center">
          {navLinks.map(link => (
            <li key={link.label}>
              <Button
                asChild
                variant="outline"
                className="w-full justify-start border-[#232323] bg-[#18181b] text-white hover:bg-[#232323]"
                onClick={() => setSidebarOpen(false)}
              >
                <a href={link.href}>{link.label}</a>
              </Button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Spacer to avoid content under fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  )
}

export default Navbar
