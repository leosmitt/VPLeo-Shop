import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, Globe2 } from 'lucide-react'

export default function Hero() {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 glass-card text-sm mb-6"
            >
              <span className="text-gradient font-semibold">🚀 Trusted by 1M+ Users</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-gradient">Secure</span>
              <br />
              <span className="text-white">Your Digital Life</span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-lg">
              Experience lightning-fast, private, and secure internet access with our next-generation VPN technology.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToPricing}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-lg flex items-center space-x-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToPricing}
                className="px-8 py-4 glass-card font-semibold text-lg hover:bg-white/10 transition-all"
              >
                See Plans
              </motion.button>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Shield, text: 'Military Grade' },
                { icon: Zap, text: '10Gbps Speed' },
                { icon: Globe2, text: '50+ Countries' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <feature.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <span className="text-sm text-gray-400">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Animated Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[600px]">
              {/* Main Card */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 glass-card p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Connected</div>
                    <div className="text-sm text-gray-400">Netherlands</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Download</span>
                    <span className="text-green-400">245 Mbps</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
                    />
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Upload</span>
                    <span className="text-blue-400">125 Mbps</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "45%" }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{ 
                  y: [0, -30, 0],
                  x: [0, 20, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-0 right-0 w-64 glass-card p-4"
              >
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-semibold">Fastest Server</span>
                </div>
                <div className="text-2xl font-bold text-gradient mt-2">0.2ms</div>
                <div className="text-xs text-gray-400">Latency</div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 30, 0],
                  x: [0, -20, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-0 left-0 w-56 glass-card p-4"
              >
                <div className="flex items-center space-x-2">
                  <Globe2 className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-semibold">Servers</span>
                </div>
                <div className="text-2xl font-bold text-gradient mt-2">3500+</div>
                <div className="text-xs text-gray-400">Worldwide</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/40 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}