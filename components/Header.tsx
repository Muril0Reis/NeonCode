'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Início', href: '/#home', isLink: false },
    { name: 'Sobre', href: '/#about', isLink: false },
    { name: 'Serviços', href: '/#services', isLink: false },
    { name: 'Portfólio', href: '/#portfolio', isLink: false },
    { name: 'Contato', href: '/#contact', isLink: false },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:glass dark:bg-[#3b0354]/30 backdrop-blur-md shadow-lg' 
          : 'bg-transparent dark:bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold"
          >
            <Link 
              href="/" 
              className={`transition-all ${
                scrolled 
                  ? 'text-gradient' 
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-pink-200 drop-shadow-lg'
              }`}
            >
              NeonCode
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.isLink ? (
                <motion.div key={item.name} whileHover={{ scale: 1.1 }}>
                  <Link
                    href={item.href}
                    className={`transition-colors font-medium ${
                      scrolled
                        ? 'text-gray-700 dark:text-white hover:text-pink-500'
                        : 'text-white hover:text-pink-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.1 }}
                  className={`transition-colors font-medium ${
                    scrolled
                      ? 'text-gray-700 dark:text-white hover:text-pink-500'
                      : 'text-white hover:text-pink-300'
                  }`}
                >
                  {item.name}
                </motion.a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'hover:bg-gray-100 text-gray-700 dark:text-white' : 'hover:bg-white/10 text-white'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden mt-4 space-y-4 pb-4 ${
                !scrolled ? 'bg-black/20 backdrop-blur-sm rounded-lg px-4' : ''
              }`}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 10 }}
                  className={`block transition-colors font-medium ${
                    scrolled
                      ? 'text-gray-700 dark:text-white hover:text-pink-500'
                      : 'text-white hover:text-pink-300'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}