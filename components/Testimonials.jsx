import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Digital Nomad',
      content: 'Best VPN I have ever used. Lightning fast speeds and connects instantly. The global coverage is amazing!',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=1'
    },
    {
      name: 'Sarah Johnson',
      role: 'Cybersecurity Expert',
      content: 'Military-grade encryption and no logging policy. Finally a VPN that actually cares about privacy.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=2'
    },
    {
      name: 'Mike Williams',
      role: 'Streamer',
      content: 'Unblocks all streaming services and the speed is incredible. 4K streaming without any buffering!',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=3'
    }
  ]

  return (
    <section className="py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Users Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join millions of satisfied users who trust us with their online privacy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6">"{testimonial.content}"</p>

              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}