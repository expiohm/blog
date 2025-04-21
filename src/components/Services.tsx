'use client';

import { motion } from "framer-motion"
import { HomeIcon, BuildingOfficeIcon, SparklesIcon, PaintBrushIcon, CubeIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const services = [
  {
    title: "Residential Design",
    description: "Transform your home into a personalized sanctuary with our bespoke residential design services. We create spaces that reflect your lifestyle and personality.",
    icon: HomeIcon,
    link: "/services#residential"
  },
  {
    title: "Commercial Spaces",
    description: "Create inspiring work environments that boost productivity and reflect your brand identity. From offices to retail spaces, we design for success.",
    icon: BuildingOfficeIcon,
    link: "/services#commercial"
  },
  {
    title: "Luxury Interiors",
    description: "Experience the epitome of luxury with our high-end interior design solutions. Premium materials, custom finishes, and exceptional attention to detail.",
    icon: SparklesIcon,
    link: "/services#luxury"
  },
  {
    title: "Space Planning",
    description: "Optimize your space with our expert space planning services. We ensure every square foot is utilized effectively and aesthetically.",
    icon: CubeIcon,
    link: "/services#planning"
  },
  {
    title: "Custom Furniture",
    description: "Elevate your space with our custom furniture designs. Each piece is crafted to perfection, combining style and functionality.",
    icon: PaintBrushIcon,
    link: "/services#furniture"
  },
  {
    title: "Renovation Services",
    description: "Transform your existing space with our renovation services. We breathe new life into your interiors while maintaining their character.",
    icon: WrenchScrewdriverIcon,
    link: "/services#renovation"
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of interior design services tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="text-black font-medium hover:text-black/80 transition-colors inline-flex items-center"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 