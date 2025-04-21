import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&h=900"
          alt="Luxury Interior Design"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6">
            Transform Your Space Into a Work of Art
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-200">
            Experience the perfect blend of luxury, comfort, and functionality with our bespoke interior design services.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
} 