import { motion } from 'framer-motion'
import { Shield, Zap, Globe, Lock, Cpu, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Military-Grade Encryption',
    description: 'Your data is protected by AES-256 bit encryption, the same standard used by security experts worldwide.'
  },
  {
    icon: Zap,
    title: 'Ultra-Fast Speeds',
    description: 'Experience lightning-fast connection speeds with our optimized global network of 10Gbps servers.'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Access content from anywhere in the world with servers in over 50 countries and 100+ locations.'
  },
  {
    icon: Lock,
    title: 'No-Logs Policy',
    description: 'We never track, collect, or share your private data. Your online activity remains completely anonymous.'
  },
  {
    icon: Cpu,
    title: 'Advanced Protocols',
    description: 'Choose from multiple protocols including WireGuard®, OpenVPN, and IKEv2 for the best balance of speed and security.'
  },
  {
    icon: Smartphone,
    title: 'Multi-Device Support',
    description: 'Protect all your devices. One subscription allows you to connect up to 10 devices simultaneously.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Why Choose <span className="text-gradient">VPLeo-Shop</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            We provide the most secure and reliable VPN service to protect your digital life and give you unrestricted access to the internet.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 group hover:border-purple-500/50 transition-colors"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
