'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Our Design Studio
            </h2>
            <p className="text-gray-600 mb-6">
              We are a team of passionate designers dedicated to creating spaces that inspire and delight. With over 10 years of experience, we've transformed countless homes and businesses into beautiful, functional environments.
            </p>
            <p className="text-gray-600 mb-8">
              Our approach combines creativity with practicality, ensuring that every design not only looks stunning but also serves its purpose perfectly.
            </p>
            <Link
              href="/about"
              className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-black/90 transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px]"
          >
            <Image
              src="/images/about-image.jpg"
              alt="Design Studio"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 