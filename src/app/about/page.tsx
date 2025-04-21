'use client';

import { motion } from "framer-motion"
import Image from "next/image"

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Lead Designer",
    image: "/images/team/sarah.jpg",
    bio: "With over 15 years of experience in luxury interior design, Sarah brings a unique blend of creativity and technical expertise to every project."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Project Manager",
    image: "/images/team/michael.jpg",
    bio: "Michael ensures every project runs smoothly, coordinating between clients, contractors, and designers to deliver exceptional results."
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Senior Designer",
    image: "/images/team/emma.jpg",
    bio: "Specializing in modern and contemporary designs, Emma creates spaces that are both beautiful and functional."
  }
]

export default function About() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl font-serif mb-6">About Luxury Interiors</h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            We are a team of passionate designers dedicated to creating beautiful, functional spaces that reflect your unique style and personality.
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-3xl font-serif mb-6">Our Story</h2>
            <p className="text-secondary mb-6">
              Founded in 2010, Luxury Interiors has grown from a small design studio to a leading interior design firm. Our journey has been guided by a commitment to excellence and a passion for creating spaces that inspire.
            </p>
            <p className="text-secondary mb-6">
              We believe that great design is not just about aesthetics, but about creating environments that enhance the way people live and work. Every project we undertake is approached with this philosophy in mind.
            </p>
            <p className="text-secondary">
              Our team of experienced designers works closely with clients to understand their vision and bring it to life, combining innovative design solutions with timeless elegance.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/about/studio.jpg"
              alt="Our Design Studio"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-serif text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2">{member.name}</h3>
                  <p className="text-primary mb-4">{member.role}</p>
                  <p className="text-secondary">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-serif mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Innovation</h3>
              <p className="text-secondary">We constantly push boundaries to create unique and inspiring designs.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Quality</h3>
              <p className="text-secondary">We never compromise on quality, ensuring every detail is perfect.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Collaboration</h3>
              <p className="text-secondary">We work closely with clients to bring their vision to life.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 