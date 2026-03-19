import { motion } from 'framer-motion'
import { Github, Twitter, Facebook, Instagram, Mail } from 'lucide-react'
import Logo from './Logo'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Servers', 'Download', 'API'],
    Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
    Resources: ['Help Center', 'Guides', 'Community', 'Status', 'Partners'],
    Legal: ['Privacy', 'Terms', 'Cookie Policy', 'Licenses', 'Security']
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <Logo />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Protecting your privacy with next-generation VPN technology.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Github, url: 'https://github.com' },
                { icon: Twitter, url: 'https://twitter.com' },
                { icon: Facebook, url: 'https://facebook.com' },
                { icon: Instagram, url: 'https://instagram.com' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="w-8 h-8 glass-card flex items-center justify-center hover:text-white transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => scrollToSection(link)}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h5 className="font-semibold mb-1">Stay Updated</h5>
              <p className="text-sm text-gray-400">Get the latest news and updates</p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-white/5 border border-white/10 rounded-l-xl focus:outline-none focus:border-purple-500 transition-colors"
                required
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-r-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                <Mail className="w-5 h-5" />
              </button>
            </form>
          </div>
          {subscribed && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 text-sm text-center md:text-right mt-2"
            >
              ✓ Successfully subscribed!
            </motion.p>
          )}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 VPLeo-Shop. All rights reserved. Made with ❤️ for privacy.</p>
        </div>
      </div>
    </footer>
  )
}