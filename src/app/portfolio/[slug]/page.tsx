'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

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
];

export default function ProjectDetail() {
  const params = useParams();
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="text-blue-600 hover:underline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <Link
          href="/portfolio"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 sm:mb-8"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Portfolio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-square w-full"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-lg"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <span className="text-sm font-medium text-blue-600 mb-2">
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              {project.description}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Request Consultation
              </button>
              <button className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                View Similar Projects
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
} 