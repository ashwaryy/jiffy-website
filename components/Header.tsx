import Link from "next/link";
import Button from "./Button";

export default function Header() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Analytics", href: "/analytics" },
    { label: "Resources", href: "/resources" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="text-2xl font-bold text-secondary tracking-tight">
              Jiffy
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-600 hover:text-primary transition-colors font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
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