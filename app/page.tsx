import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Gallery from "./components/Gallery";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

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
                Home of Goods is a curated home decor brand offering a
                distinctive selection of premium lifestyle products including
                elegant artificial flowers and plants, designer lighting,
                statement furniture, refined homewares and décor, marble
                accents, soft furnishings, and festive seasonal collections.
              </p>
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
