'use client';

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Luxury Penthouse",
    status: "Completed",
    location: "New York, NY",
    image: "/images/projects/penthouse.jpg",
    slug: "luxury-penthouse"
  },
  {
    id: 2,
    title: "Boutique Hotel",
    status: "In Progress",
    location: "Miami, FL",
    image: "/images/projects/boutique-hotel.jpg",
    slug: "boutique-hotel"
  },
  {
    id: 3,
    title: "Corporate Headquarters",
    status: "Completed",
    location: "San Francisco, CA",
    image: "/images/projects/corporate-hq.jpg",
    slug: "corporate-hq"
  },
  {
    id: 4,
    title: "Modern Villa",
    status: "In Progress",
    location: "Los Angeles, CA",
    image: "/images/projects/modern-villa.jpg",
    slug: "modern-villa"
  }
]

export default function Projects() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-serif text-center mb-4">Our Projects</h1>
          <p className="text-xl text-secondary text-center mb-12 max-w-3xl mx-auto">
            Discover our latest interior design projects and transformations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    project.status === "Completed" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-serif mb-2">{project.title}</h2>
                <p className="text-secondary mb-4">{project.location}</p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
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