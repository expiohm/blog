'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "/images/testimonials/sarah.jpg",
    content: "The team transformed our outdated home into a modern masterpiece. Their attention to detail and creative solutions exceeded our expectations.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    image: "/images/testimonials/michael.jpg",
    content: "Our office space now reflects our brand perfectly. The design is both functional and inspiring, creating an environment that boosts productivity.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Restaurant Owner",
    image: "/images/testimonials/emily.jpg",
    content: "The interior design completely transformed our restaurant. The ambiance is perfect, and our customers love the new look and feel.",
  },
];

export default function Testimonials() {
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
            Client Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 