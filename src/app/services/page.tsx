'use client';

import { motion } from "framer-motion"
import Image from "next/image"
import Link from 'next/link'

const services = [
  {
    id: 1,
    title: "Interior Design",
    description: "Transform your space with our bespoke interior design solutions. We create beautiful, functional environments that reflect your unique style.",
    image: "/images/services/interior-design.jpg"
  },
  {
    id: 2,
    title: "Space Planning",
    description: "Optimize your space with our expert space planning services. We ensure every square foot is utilized effectively and aesthetically.",
    image: "/images/services/space-planning.jpg"
  },
  {
    id: 3,
    title: "Custom Furniture",
    description: "Elevate your space with our custom furniture designs. Each piece is crafted to perfection, combining style and functionality.",
    image: "/images/services/custom-furniture.jpg"
  },
  {
    id: 4,
    title: "Renovation",
    description: "Transform your existing space with our renovation services. We breathe new life into your interiors while maintaining their character.",
    image: "/images/services/renovation.jpg"
  }
]

export default function Services() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-serif text-center mb-4">Our Services</h1>
          <p className="text-xl text-secondary text-center mb-12 max-w-3xl mx-auto">
            Discover our comprehensive range of interior design services tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-serif mb-4">{service.title}</h2>
                <p className="text-secondary mb-6">{service.description}</p>
                <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
} 