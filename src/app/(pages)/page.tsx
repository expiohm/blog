'use client';

import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import Services from "@/components/Services"
import ProcessTimeline from "@/components/ProcessTimeline"
import PortfolioGallery from "@/components/PortfolioGallery"
import Testimonials from "@/components/Testimonials"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <Services />
      <PortfolioGallery />
      <ProcessTimeline />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  )
} 