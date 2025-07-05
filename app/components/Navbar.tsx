"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const categoriesTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY < 32) {
            setShowNavbar(true);
          } else if (currentScrollY > lastScrollY.current) {
            setShowNavbar(false); // scrolling down
          } else {
            setShowNavbar(true); // scrolling up
          }
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    {
      label: "CATEGORIES",
      dropdown: [
        { label: "FURNITURE", href: "/categories/furniture" },
        { label: "HOME DECOR", href: "/categories/home-decor" },
        { label: "LIGHTING", href: "/categories/lighting" },
        {
          label: "PLANTS & POTS",
          mobileLabel: "PLANTS",
          href: "/categories/plants-and-pots",
        },
        {
          label: "FLORALS & GREENERY",
          mobileLabel: "FLORALS",
          href: "/categories/florals-and-greenery",
        },
      ],
    },
    { label: "CONTACT", href: "#" },
    { label: "FAQ", href: "#" },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95vw] max-w-5xl bg-background/95 backdrop-blur-md border border-border/70 rounded-2xl shadow-xl ${
        showNavbar ? "navbar-visible" : "navbar-hidden"
      }`}
      style={{
        transition:
          "opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)",
        willChange: "opacity, transform",
        transformOrigin: "top center",
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="House of Goods Logo"
              width={80}
              height={80}
              className="object-contain drop-shadow-md transition-transform duration-200 hover:scale-105"
            />
          </Link>
          {/* Navigation */}
          <nav className="flex-1 flex justify-end items-center">
            <ul className="hidden md:flex space-x-6 lg:space-x-10 text-sm items-center">
              {/* CATEGORIES Dropdown */}
              <li
                className="relative group"
                onMouseEnter={() => {
                  if (categoriesTimeout.current) {
                    clearTimeout(categoriesTimeout.current);
                    categoriesTimeout.current = null;
                  }
                  setCategoriesOpen(true);
                }}
                onMouseLeave={() => {
                  categoriesTimeout.current = setTimeout(() => {
                    setCategoriesOpen(false);
                  }, 150);
                }}
              >
                <button
                  className="text-foreground hover:text-primary transition-colors duration-200 font-body font-medium tracking-wide px-2 py-1 rounded-md hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/40 flex items-center gap-1"
                  onClick={() => setCategoriesOpen((open) => !open)}
                  aria-haspopup="true"
                  aria-expanded={categoriesOpen}
                  type="button"
                >
                  CATEGORIES
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      categoriesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`absolute right-0 mt-2 w-48 bg-background border border-border/50 rounded-lg shadow-lg transition-opacity duration-200 z-20 ${
                    categoriesOpen
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <ul className="py-2">
                    {(navItems[0]?.dropdown ?? []).map((cat, idx) => (
                      <li key={idx}>
                        <Link
                          href={cat.href || "#"}
                          className="block px-4 py-2 text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200 font-body font-medium tracking-wide text-sm rounded-md"
                        >
                          {cat.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              {/* CONTACT and FAQ */}
              <li>
                <Link
                  href={navItems[1]?.href || "#"}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-body font-medium tracking-wide px-2 py-1 rounded-md hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <Link
                  href={navItems[2]?.href || "#"}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-body font-medium tracking-wide px-2 py-1 rounded-md hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  FAQ
                </Link>
              </li>
            </ul>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-foreground hover:text-primary transition-colors duration-200 p-2 rounded-full border border-border/30 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/40"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg
                  className="w-7 h-7"
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
          </nav>
        </div>
        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 pb-2 border-t border-border/30 animate-fade-in bg-background/95 rounded-xl shadow-lg mx-2">
            <ul className="flex flex-col space-y-2 text-center pt-2">
              {/* CATEGORIES Dropdown for mobile */}
              <li>
                <button
                  className="w-full flex items-center justify-center text-foreground hover:text-primary transition-colors duration-200 font-body font-medium tracking-wide text-base py-2 rounded-md hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/40"
                  onClick={() => setCategoriesOpen((open) => !open)}
                  aria-haspopup="true"
                  aria-expanded={categoriesOpen}
                  type="button"
                >
                  CATEGORIES
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      categoriesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {categoriesOpen && (
                  <ul className="py-2">
                    {(navItems[0]?.dropdown ?? []).map((cat, idx) => (
                      <li key={idx}>
                        <Link
                          href={cat.href || "#"}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-2 text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200 font-body font-medium tracking-wide text-base rounded-md"
                        >
                          {cat.mobileLabel || cat.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {/* CONTACT and FAQ */}
              <li>
                <Link
                  href={navItems[1]?.href || "#"}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-foreground hover:text-primary transition-colors duration-200 font-body font-medium tracking-wide text-base py-2 rounded-md hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <Link
                  href={navItems[2]?.href || "#"}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-foreground hover:text-primary transition-colors duration-200 font-body font-medium tracking-wide text-base py-2 rounded-md hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
