'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Luxury Living Room",
    description: "Modern living space with premium finishes and natural lighting",
    image: "/images/projects/living-room.jpg",
    slug: "luxury-living-room",
    category: "Residential",
  },
  {
    id: 2,
    title: "Contemporary Kitchen",
    description: "State-of-the-art kitchen with smart storage solutions",
    image: "/images/projects/kitchen.jpg",
    slug: "contemporary-kitchen",
    category: "Residential",
  },
  {
    id: 3,
    title: "Minimalist Bedroom",
    description: "Calm and serene bedroom retreat with custom storage",
    image: "/images/projects/bedroom.jpg",
    slug: "minimalist-bedroom",
    category: "Residential",
  },
  {
    id: 4,
    title: "Modern Office Space",
    description: "Innovative workspace design promoting collaboration",
    image: "/images/projects/office.jpg",
    slug: "modern-office",
    category: "Commercial",
  },
  {
    id: 5,
    title: "Boutique Hotel Lobby",
    description: "Elegant and welcoming hotel entrance design",
    image: "/images/projects/hotel-lobby.jpg",
    slug: "hotel-lobby",
    category: "Commercial",
  },
  {
    id: 6,
    title: "Restaurant Interior",
    description: "Stylish dining space with unique ambiance",
    image: "/images/projects/restaurant.jpg",
    slug: "restaurant-interior",
    category: "Commercial",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest and most impressive design projects that showcase our
            commitment to excellence and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/60" />
                <div className="absolute top-4 right-4 bg-white/90 text-black px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 transition-transform duration-300 group-hover:-translate-y-20">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-block bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  View Project
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-black/90 transition-colors"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 