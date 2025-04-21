'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Modern Interior Design"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Space with Modern Design
            </h1>
            <p className="text-xl text-white/90 mb-8">
              We create beautiful, functional spaces that reflect your style and enhance your lifestyle.
            </p>
            <Link
              href="/portfolio"
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">About Our Studio</h2>
              <p className="text-gray-600 mb-6">
                We are a team of passionate designers dedicated to creating spaces that inspire and delight.
                Our approach combines creativity with functionality to deliver exceptional results.
              </p>
              <Link
                href="/about"
                className="inline-block bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-black/90 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/about-image.jpg"
                alt="About Our Studio"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  src={`/images/featured-project-${project}.jpg`}
                  alt={`Featured Project ${project}`}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
                <h3 className="text-xl font-semibold mt-4">Project {project}</h3>
                <p className="text-gray-600 mt-2">
                  A beautiful example of our design expertise and attention to detail.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              Have a project in mind? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
} 