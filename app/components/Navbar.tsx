"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { label: "NEW ARRIVALS", href: "#" },
    { label: "HOME DECOR", href: "#" },
    { label: "LIGHTING", href: "#" },
    { label: "PLANTS & POTS", mobileLabel: "PLANTS", href: "#" },
    { label: "FLORALS & GREENERY", mobileLabel: "FLORALS", href: "#" },
    { label: "CONTACT", href: "#" },
    { label: "FAQ", href: "#" },
  ];

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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center border-t border-black py-4">
          <ul className="flex space-x-8 lg:space-x-12 text-xs">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-body font-medium tracking-wide"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-black py-4">
          {/* Mobile Menu Button */}
          <div className="flex justify-center">
            <button
              onClick={toggleMobileMenu}
              className="text-foreground hover:text-primary transition-colors duration-200 p-2"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          {isMobileMenuOpen && (
            <div className="mt-4 pb-4 border-t border-border/30 animate-fade-in">
              <ul className="flex flex-col space-y-4 text-center pt-4">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-foreground hover:text-primary transition-colors duration-200 font-body font-medium tracking-wide text-sm py-2"
                    >
                      {item.mobileLabel || item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
