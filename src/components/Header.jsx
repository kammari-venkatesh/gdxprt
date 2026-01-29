import { useState } from 'react'
import Logo from './Logo'
import Button from './Button'

const nav = ['Login', 'Blog', 'Resources', 'Contact Us']

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center group">
            <Logo />
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 rounded-lg text-gray-600 hover:text-primary hover:bg-sky-pale/60 font-medium transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button>Apply Now</Button>
          </div>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden p-2.5 rounded-xl text-gray-600 hover:bg-gray-100 hover:text-primary transition"
            aria-label="Menu"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
        {open && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {nav.map((item) => (
                <a key={item} href="#" className="px-4 py-3 rounded-xl text-gray-600 hover:text-primary hover:bg-sky-pale/60 font-medium">
                  {item}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-gray-100">
                <Button className="w-full">Apply Now</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
