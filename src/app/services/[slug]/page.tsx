import Image from 'next/image';
import { notFound } from 'next/navigation';

const services = {
  'residential': {
    title: 'Residential Design',
    description: 'Transform your home into a personalized sanctuary with our bespoke residential design services. We create spaces that reflect your unique style while ensuring comfort and functionality.',
    image: '/services/residential.jpg',
    features: [
      'Custom space planning and layout design',
      'Material and finish selection',
      'Furniture and decor curation',
      'Lighting design and implementation',
      'Project management and coordination',
    ],
  },
  'commercial': {
    title: 'Commercial Design',
    description: 'Create inspiring workspaces that boost productivity and reflect your brand identity. Our commercial design services help businesses create environments that support their goals and values.',
    image: '/services/commercial.jpg',
    features: [
      'Brand-aligned design concepts',
      'Workplace optimization',
      'Collaborative space design',
      'Sustainable design solutions',
      'Turnkey project management',
    ],
  },
  'space-planning': {
    title: 'Space Planning',
    description: 'Optimize your space with intelligent layouts that maximize functionality and flow. Our space planning services ensure every square foot serves a purpose while maintaining aesthetic appeal.',
    image: '/services/space-planning.jpg',
    features: [
      'Detailed space analysis',
      'Traffic flow optimization',
      'Furniture layout planning',
      'Storage solutions',
      '3D visualization',
    ],
  },
  'custom-furniture': {
    title: 'Custom Furniture',
    description: 'Commission unique, handcrafted pieces that perfectly complement your space. Our custom furniture service brings your vision to life with exceptional craftsmanship and attention to detail.',
    image: '/services/custom-furniture.jpg',
    features: [
      'Bespoke design consultation',
      'Material selection',
      'Handcrafted construction',
      'Quality assurance',
      'Installation and setup',
    ],
  },
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif mb-6">About This Service</h2>
              <p className="text-gray-600 mb-8">{service.description}</p>
              
              <h3 className="text-2xl font-serif mb-4">What We Offer</h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-black mt-1 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 