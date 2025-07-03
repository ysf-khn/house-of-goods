"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
                Crafting Spaces,
                <br />
                Creating Stories
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                At House of Goods, we believe that every home tells a story. Our
                carefully curated collection brings together artisanal
                craftsmanship, timeless design, and sustainable materials to
                create pieces that don&apos;t just fill a space, but transform
                it.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                Each item in our collection is chosen for its ability to bring
                warmth, character, and authenticity to your home. We partner
                with skilled artisans and conscious makers who share our
                commitment to quality and sustainability.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    Sustainable Sourcing
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Ethically sourced materials and responsible manufacturing
                    practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    Artisan Partnerships
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Direct collaboration with skilled craftspeople around the
                    world.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    Timeless Design
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Classic pieces that transcend trends and grow with your
                    style.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    Personal Touch
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Curated collections that reflect your unique aesthetic
                    vision.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&h=1000&fit=crop&q=80"
                alt="Artisan workspace with pottery and natural materials"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-lg -z-10"></div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-12">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              What Our Customers Say
            </h3>
            <p className="font-body text-muted-foreground">
              Experiences from homes we&apos;ve helped transform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="font-body text-foreground mb-4 leading-relaxed">
                &ldquo;The quality is exceptional and the pieces have completely
                transformed our living room. Every guest asks where we found
                such beautiful decor!&rdquo;
              </blockquote>
              <footer>
                <cite className="font-body text-sm text-muted-foreground not-italic">
                  Jessica Martinez
                </cite>
              </footer>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="font-body text-foreground mb-4 leading-relaxed">
                &ldquo;Fast shipping and incredible customer service. The
                artificial plants look so realistic that even my green-thumbed
                neighbor was fooled!&rdquo;
              </blockquote>
              <footer>
                <cite className="font-body text-sm text-muted-foreground not-italic">
                  Michael Thompson
                </cite>
              </footer>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="font-body text-foreground mb-4 leading-relaxed">
                &ldquo;I&apos;ve been a customer for over two years now. The
                timeless designs mean I never have to worry about my decor going
                out of style.&rdquo;
              </blockquote>
              <footer>
                <cite className="font-body text-sm text-muted-foreground not-italic">
                  Sarah Williams
                </cite>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
