import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from './Logo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/10' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <Logo />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Features', id: 'features' },
              { name: 'Pricing', id: 'pricing' },
              { name: 'Servers', id: 'globe' },
              { name: 'About', id: 'about' }
            ].map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white">
                <span>More</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="glass-card p-2">
                  {['Blog', 'Support', 'API'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Log in
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('pricing')}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 space-y-2">
            {[
              { name: 'Features', id: 'features' },
              { name: 'Pricing', id: 'pricing' },
              { name: 'Servers', id: 'globe' },
              { name: 'About', id: 'about' },
              { name: 'Blog', id: 'blog' },
              { name: 'Support', id: 'support' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 flex flex-col space-y-2">
              <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
                Log in
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold"
              >
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}