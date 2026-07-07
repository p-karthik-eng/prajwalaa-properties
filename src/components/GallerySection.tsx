import React from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  imageSrc: string;
  altText: string;
}

export default function GallerySection() {
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      imageSrc: '/gallery1.jpeg',
      altText: 'Central Court Yard landscape architecture',
    },
    {
      id: 2,
      imageSrc: '/gallery2.jpeg',
      altText: 'Modern luxury Club House elevation',
    },
    {
      id: 3,
      imageSrc: '/gallery3.jpeg',
      altText: 'Luxury infinity swimming pool beside residential towers',
    },
    {
      id: 4,
      imageSrc: '/gallery4.jpeg',
      altText: 'Outdoor basketball court amenity illuminated at dusk',
    },
    {
      id: 5,
      imageSrc: '/gallery5.jpeg',
      altText: 'Community outdoor fitness station and gym area',
    },
    {
      id: 6,
      imageSrc: '/gallery6.jpeg',
      altText: 'Fenced outdoor tennis court layout',
    },
  ];

  return (
    <section className="w-full bg-white text-[#111111] py-16 px-6 md:px-16 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-wide text-[#1c1c1c]">
            Gallery
          </h2>
        </div>

        {/* Responsive Grid Setup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="group flex flex-col bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden rounded-sm transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Image Frame Container */}
              <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.altText}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}