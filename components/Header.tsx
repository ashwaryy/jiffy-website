import Link from "next/link";
import Button from "./Button";
import { GiraffeMascot } from "./icons";

export default function Header() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Analytics", href: "/analytics" },
    { label: "Resources", href: "/resources" },
  ];

  return (
    <header
      className="fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 animate-fade-in-up bg-white/90"
    >
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0 flex items-center gap-2 transition-scale">
            <Link
              href="/"
              className="text-2xl font-bold text-secondary tracking-tight flex items-center gap-2"
            >
              <GiraffeMascot variant="happy" size={36} />
              <span className="bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent">
                Jiffy
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <div
                key={item.href}
                className={`animate-fade-in-up animate-delay-${100 + index * 50}`}
              >
                <Link
                  href={item.href}
                  className="text-slate-600 hover:text-primary transition-colors font-medium text-sm relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-amber-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </div>
            ))}
          </nav>

          <div className="hidden md:block animate-fade-in-up animate-delay-300">
            <Button href="/demo" variant="primary" className="text-sm px-5 py-2">
              Request Demo
            </Button>
          </div>

          {/* Mobile menu button placeholder */}
          <div className="md:hidden">
            {/* Simple mobile menu logic would go here */}
          </div>
        </div>
      </div>
    </header>
  );
}
