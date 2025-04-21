'use client';

import { motion } from "framer-motion"
import { HomeIcon, BuildingOfficeIcon, SparklesIcon } from "@heroicons/react/24/outline"

const services = [
  {
    title: "Residential Design",
    description: "Transform your home into a personalized sanctuary with our bespoke residential design services.",
    icon: HomeIcon,
  },
  {
    title: "Commercial Spaces",
    description: "Create inspiring work environments that boost productivity and reflect your brand identity.",
    icon: BuildingOfficeIcon,
  },
  {
    title: "Luxury Interiors",
    description: "Experience the epitome of luxury with our high-end interior design solutions.",
    icon: SparklesIcon,
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
            Discover our comprehensive range of interior design services tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">
                {service.title}
              </h3>
              <p className="text-secondary/80 mb-6">
                {service.description}
              </p>
              <button className="text-primary font-medium hover:text-primary/80 transition-colors">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 