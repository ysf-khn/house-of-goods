import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Gallery from "./components/Gallery";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSlider />
        {/* Luxury Destination Section */}
        <section className="py-12 md:py-16 px-6">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-lg md:text-xl font-medium text-foreground mb-6 tracking-wide">
              YOUR ULTIMATE DESTINATION FOR LUXURY LIVING
            </h2>
            <div className="text-foreground/70">
              <p className="font-body text-sm md:text-base leading-relaxed">
                House of Goods LLC is a curated home decor brand offering a
                distinctive selection of premium lifestyle products including
                elegant artificial flowers and plants, designer lighting,
                statement furniture, refined homewares and décor, marble
                accents, soft furnishings, and festive seasonal collections.
              </p>
            </div>
          </div>
        </section>

        {/* Shop by Category - text only, 5 in a row on desktop */}
        <section className="py-12 md:py-16 px-6">
          <div className="container mx-auto max-w-4xl text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-2">
              Shop by Category
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              Explore our curated categories to find the perfect pieces for your
              home.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <Link
                href="/categories/furniture"
                className="group block rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border bg-white p-6"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  Furniture
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Timeless tables, seating, and more
                </p>
              </Link>
              <Link
                href="/categories/home-decor"
                className="group block rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border bg-white p-6"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  Home Decor
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Mirrors, mats, and decorative accents
                </p>
              </Link>
              <Link
                href="/categories/lighting"
                className="group block rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border bg-white p-6"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  Lighting
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Lamps and pendant lights
                </p>
              </Link>
              <Link
                href="/categories/plants-and-pots"
                className="group block rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border bg-white p-6"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  Plants & Pots
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Planters, vases, and more
                </p>
              </Link>
              <Link
                href="/categories/florals-and-greenery"
                className="group block rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border bg-white p-6"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  Florals & Greenery
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Artificial flowers and lush greens
                </p>
              </Link>
            </div>
          </div>
        </section>

        <Gallery />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
