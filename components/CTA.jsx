import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, Lock } from 'lucide-react'

export default function CTA() {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 p-12 md:p-16"
        >
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <div className="flex space-x-2">
                {[Shield, Zap, Lock].map((Icon, i) => (
                  <div key={i} className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                ))}
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Secure Your <span className="text-gradient">Digital Life?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Join over 1 million users who trust us for their online privacy and security.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button 
                onClick={scrollToPricing}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-lg flex items-center space-x-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                <span>Get Started Now - It's Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <p className="text-sm text-gray-400 mt-4">
              No credit card required • 30-day money-back guarantee
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}