'use client';

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import About from "@/components/About"
import Services from "@/components/Services"
import ProcessTimeline from "@/components/ProcessTimeline"
import PortfolioGallery from "@/components/PortfolioGallery"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Luxury Interior Design"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Transform Your Space
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of luxury and comfort with our bespoke interior design services
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Portfolio Gallery */}
      <PortfolioGallery />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </main>
  )
} 