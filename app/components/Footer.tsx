"use client";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl font-semibold mb-4">
              House of Goods
            </h3>
            <p className="font-body text-background/80 leading-relaxed max-w-md">
              Curating beautiful, sustainable home decor that tells your story.
              Every piece is chosen with intention, crafted with care, and
              designed to last.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-body text-background/80 hover:text-background transition-colors duration-200"
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-body text-background/80 hover:text-background transition-colors duration-200"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="font-body text-background/80 hover:text-background transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="mailto:info@houseofgoodsllc.com"
                className="text-background/80 hover:text-background transition-colors duration-200"
                aria-label="Email"
              >
                info@houseofgoodsllc.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-background/60 text-sm mb-4 md:mb-0">
            © 2025 House of Goods. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
