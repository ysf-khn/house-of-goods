"use client";

import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    image: "/gallery/1.jpg",
    title: "Modern Sofa Collection",
    category: "Seating",
  },
  {
    id: 2,
    image: "/gallery/2.jpg",
    title: "Artisan Dining Tables",
    category: "Furniture",
  },
  {
    id: 3,
    image: "/gallery/3.jpg",
    title: "Ceramic Vase Set",
    category: "Decor",
  },
  {
    id: 4,
    image: "/gallery/4.jpg",
    title: "Ambient Lighting",
    category: "Lighting",
  },
  {
    id: 5,
    image: "/gallery/5.jpg",
    title: "Woven Textiles",
    category: "Textiles",
  },
];

export default function Gallery() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Signature Pieces
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated collection of timeless furniture and
            decor, each piece chosen for its exceptional craftsmanship and
            enduring beauty.
          </p>
        </div>

        {/* Gallery Grid - 2 Rows Layout */}
        <div className="space-y-8">
          {/* First Row - Images 1 and 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryItems.slice(0, 2).map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-sm font-body font-medium tracking-widest uppercase mb-1">
                          {item.category}
                        </p>
                        <h3 className="font-heading text-xl font-semibold">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - Images 3, 4, and 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.slice(2, 5).map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-sm font-body font-medium tracking-widest uppercase mb-1">
                          {item.category}
                        </p>
                        <h3 className="font-heading text-xl font-semibold">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
