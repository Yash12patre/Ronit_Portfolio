import React, { useState } from 'react'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/* Topbar for desktop, hamburger for mobile */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#000103] border-b border-[#515052] shadow-lg flex items-center justify-between px-4 md:px-12 h-16 md:h-20">
        <h2 className="text-2xl font-bold text-[#FFFFFA] tracking-tight">Ronit</h2>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <li key={link.label}>
              <Button asChild variant="outline" className="border-[#515052] bg-[#333138] text-[#FFFFFA] hover:bg-[#FF312E] transition-all duration-300">
                <a href={link.href}>{link.label}</a>
              </Button>
            </li>
          ))}
        </ul>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 rounded hover:bg-[#333138] focus:outline-none transition-colors duration-300"
          aria-label="Open menu"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={28} className="text-[#FFFFFA]" />
        </button>
      </nav>

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#000103]/80 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-full max-w-xs bg-[#000103] border-r border-[#515052] text-[#FFFFFA] z-50 transform transition-transform duration-300 md:hidden shadow-xl flex flex-col justify-center ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Sidebar navigation"
      >
        <div className="flex items-center justify-between p-4 border-b border-[#515052]">
          <h2 className="text-2xl font-bold tracking-tight">Ronit</h2>
          <button
            className="p-2 rounded hover:bg-[#333138] focus:outline-none transition-colors duration-300"
            aria-label="Close menu"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={28} className="text-[#FFFFFA]" />
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-6 flex-1 justify-center">
          {navLinks.map(link => (
            <li key={link.label}>
              <Button
                asChild
                variant="outline"
                className="w-full justify-start border-[#515052] bg-[#333138] text-[#FFFFFA] hover:bg-[#FF312E] transition-all duration-300"
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
