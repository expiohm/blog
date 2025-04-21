'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
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
  );
} 