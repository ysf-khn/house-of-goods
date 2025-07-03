"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6">
        {/* Logo */}
        <div className="text-center mb-6 pt-3">
          <Link href="/" className="inline-block">
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground tracking-wide">
              House of Goods
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center border-t border-black py-4">
          <ul className="flex space-x-8 md:space-x-12 text-xs">
            <li>
              <Link
                href="#"
                className="text-foreground hover:text-primary transition-colors duration-200 font-body font-medium tracking-wide"
              >
                NEW ARRIVALS
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-foreground hover:text-primary transition-colors duration-200 font-body font-medium tracking-wide"
              >
                HOME DECOR
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-foreground hover:text-primary transition-colors duration-200 font-body font-medium tracking-wide"
              >
                LIGHTING
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-foreground hover:text-primary transition-colors duration-200 font-body font-medium tracking-wide"
              >
                TREES, PLANTS & POTS
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-foreground hover:text-primary transition-colors duration-200 font-body font-medium tracking-wide"
              >
                FLORALS & GREENERY
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-foreground hover:text-primary transition-colors duration-200 font-body font-medium tracking-wide"
              >
                CONTACT
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-foreground hover:text-primary transition-colors duration-200 font-body font-medium tracking-wide"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
