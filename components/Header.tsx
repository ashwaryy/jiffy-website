"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import { GiraffeMascot } from "./icons";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Analytics", href: "/analytics" },
    { label: "Pricing", href: "/pricing" },
    { label: "Resources", href: "/resources" },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 animate-fade-in-up bg-white/90">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="shrink-0 flex items-center gap-2">
            <Link href="/" className="text-2xl font-bold text-secondary tracking-tight flex items-center gap-2" onClick={closeMobileMenu}>
              <GiraffeMascot size={36} />
              <span className="bg-linear-to-r from-primary to-amber-500 bg-clip-text text-transparent">Jiffy</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <div key={item.href} className={`animate-fade-in-up animate-delay-${100 + index * 50}`}>
                <Link href={item.href} className="text-slate-600 hover:text-primary transition-colors font-medium text-sm relative group">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-amber-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </div>
            ))}
          </nav>

          <div className="hidden md:block animate-fade-in-up animate-delay-300">
            <Button href="/demo" variant="primary" className="text-sm px-5 py-2">
              Request Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-white border-b border-slate-200 shadow-lg transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-600 hover:text-primary transition-colors font-medium text-base py-2 border-b border-slate-100 last:border-b-0"
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <Button href="/demo" variant="primary" className="w-full justify-center" onClick={closeMobileMenu}>
              Request Demo
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
