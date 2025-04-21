'use client';

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Luxury Living Room",
    category: "Residential",
    image: "/images/portfolio/luxury-living-room.jpg",
    slug: "luxury-living-room",
    description: "A sophisticated living space featuring custom furniture and premium finishes"
  },
  {
    id: 2,
    title: "Modern Kitchen",
    category: "Residential",
    image: "/images/portfolio/modern-kitchen.jpg",
    slug: "modern-kitchen",
    description: "Contemporary kitchen design with state-of-the-art appliances"
  },
  {
    id: 3,
    title: "Contemporary Bedroom",
    category: "Residential",
    image: "/images/portfolio/contemporary-bedroom.jpg",
    slug: "contemporary-bedroom",
    description: "Elegant bedroom design with custom lighting and storage solutions"
  },
  {
    id: 4,
    title: "Office Space",
    category: "Commercial",
    image: "/images/portfolio/office-space.jpg",
    slug: "office-space",
    description: "Modern office design promoting productivity and collaboration"
  },
  {
    id: 5,
    title: "Restaurant Interior",
    category: "Commercial",
    image: "/images/portfolio/restaurant-interior.jpg",
    slug: "restaurant-interior",
    description: "Upscale restaurant design with custom lighting and seating"
  },
  {
    id: 6,
    title: "Hotel Lobby",
    category: "Hospitality",
    image: "/images/portfolio/hotel-lobby.jpg",
    slug: "hotel-lobby",
    description: "Luxurious hotel lobby featuring custom furniture and art pieces"
  }
]

export default function Portfolio() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-serif text-center mb-4">Our Portfolio</h1>
          <p className="text-xl text-secondary text-center mb-12 max-w-3xl mx-auto">
            Explore our collection of stunning interior design projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative h-80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white/80 text-sm mb-2">{project.category}</span>
                <h3 className="text-white text-2xl font-serif mb-4">{project.title}</h3>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-block bg-white text-black px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
                >
                  View Project
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
} 