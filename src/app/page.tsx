import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              Have a project in mind? We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
} 