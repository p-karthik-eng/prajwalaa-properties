import React from 'react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Working with Prajwaala Properties was a fantastic experience. From start to finish, they were professional, attentive to our needs, and delivered on their promises. Our dream home is a testament to their dedication to quality and excellence.",
      author: "Mr. and Mrs. Kumar",
      role: "Happy Homeowners"
    },
    {
      id: 2,
      quote: "I highly recommend Prajwaala Properties to anyone looking for a reliable and trustworthy real estate partner. Their attention to detail, transparent communication, and commitment to customer satisfaction set them apart in the industry.",
      author: "Ms. Rao",
      role: "Satisfied Customer"
    },
    {
      id: 3,
      quote: "Prajwaala Properties made the entire home buying process smooth and stress-free for us. Their team was knowledgeable, responsive, and guided us every step of the way. We couldn't be happier with our decision to choose them.",
      author: "Mr. and Mrs. Reddy",
      role: "Delighted Homeowners"
    }
  ];

  return (
    <section className="w-full bg-white text-[#111111] py-20 px-6 md:px-16 lg:px-24 font-sans overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-16 border-b border-gray-200 pb-8 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="text-[#d39443] text-sm uppercase tracking-[0.25em] font-medium block mb-2">
              Client Trust
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-wide uppercase text-[#1c1c1c]">
              Voices of <span className="font-bold">Satisfaction</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm md:text-base max-w-sm mt-4 md:mt-0 font-light leading-relaxed">
            Discover what our clients have to say about their experience with Prajwaala Properties:
          </p>
        </div>

        {/* Structural Matrix Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 border border-gray-200 rounded-sm">
          {testimonials.map((t) => (
            <div 
              key={t.id} 
              className="p-8 md:p-10 flex flex-col justify-between bg-white hover:bg-[#fafafa] transition-colors duration-300 relative group"
            >
              {/* Decorative Minimalist Gold Quote Accent */}
              <div className="text-4xl font-serif text-[#d39443]/20 group-hover:text-[#d39443]/40 transition-colors duration-300 select-none absolute top-6 left-6">
                “
              </div>

              {/* Quote Content */}
              <div className="relative z-10 pt-4 mb-8">
                <p className="text-gray-700 font-light italic leading-relaxed text-md md:text-[15px] lg:text-base">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info Block */}
              <div className="pt-6 border-t border-gray-100 mt-auto">
                <h4 className="font-serif text-lg font-medium tracking-wide text-[#1c1c1c]">
                  {t.author}
                </h4>
                <div className="text-xs mt-1 text-[#d39443] font-medium uppercase tracking-wider">
                  {t.role}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}