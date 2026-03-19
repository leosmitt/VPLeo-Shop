import { motion } from 'framer-motion'
import { Check, Star, Zap, Shield, Globe2 } from 'lucide-react'
import { useRouter } from 'next/router'

export default function Pricing() {
  const router = useRouter()

  const plans = [
    {
      name: 'Basic',
      price: 5.99,
      features: [
        '5 Devices',
        '500 Mbps Speed',
        '10 Countries',
        'Basic Support',
        'No Logging'
      ],
      icon: Shield
    },
    {
      name: 'Pro',
      price: 9.99,
      popular: true,
      features: [
        '10 Devices',
        '2 Gbps Speed',
        '30 Countries',
        'Priority Support',
        'No Logging',
        'Ad Blocker',
        'Split Tunneling'
      ],
      icon: Zap
    },
    {
      name: 'Enterprise',
      price: 19.99,
      features: [
        'Unlimited Devices',
        '10 Gbps Speed',
        '50+ Countries',
        '24/7 Premium Support',
        'No Logging',
        'Ad Blocker',
        'Split Tunneling',
        'Dedicated IP',
        'Team Management'
      ],
      icon: Globe2
    }
  ]

  const handlePlanSelect = (planName, price) => {
    // Here you would typically redirect to checkout
    // For demo, we'll just show an alert
    alert(`You selected the ${planName} plan at $${price}/month. Redirecting to checkout...`)
    
    // In production, uncomment this:
    // router.push(`/checkout?plan=${planName.toLowerCase()}&price=${price}`)
  }

  return (
    <section id="pricing" className="py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative glass-card p-8 ${
                plan.popular ? 'border-purple-500/50 shadow-purple-500/20' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center space-x-1 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full text-sm">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-400">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handlePlanSelect(plan.name, plan.price)}
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/25'
                    : 'glass-card hover:bg-white/10'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            🛡️ 30-day money-back guarantee • No credit card required for trial
          </p>
        </motion.div>
      </div>
    </section>
  )
}