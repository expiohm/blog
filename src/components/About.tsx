'use client';

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-6">
              About Our Studio
            </h2>
            <p className="text-lg text-secondary/80 mb-6">
              We are a team of passionate interior designers dedicated to creating
              spaces that reflect your unique style and personality. With over 15
              years of experience, we've transformed countless homes and
              commercial spaces into beautiful, functional environments.
            </p>
            <p className="text-lg text-secondary/80 mb-8">
              Our approach combines timeless design principles with modern
              innovation, ensuring that every project we undertake is both
              aesthetically pleasing and practical for everyday living.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors">
              Learn More
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px]"
          >
            <Image
              src="/images/about.jpg"
              alt="About Our Studio"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 