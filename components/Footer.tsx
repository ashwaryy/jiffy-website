import Link from "next/link";

import { GiraffeMascot } from "./icons";

export default function Footer() {
  const links = [
    { label: "Home", href: "/" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Analytics", href: "/analytics" },
    { label: "Resources", href: "/resources" },
    { label: "Request Demo", href: "/demo" },
  ];

  return (
    <footer className="bg-linear-to-b from-warm-50 to-amber-50/50 border-t border-amber-100/50 py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-secondary mb-4 tracking-tight group">
              <div>
                <GiraffeMascot size={32} />
              </div>
              <span className="bg-linear-to-r from-primary to-amber-500 bg-clip-text text-transparent">Jiffy</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Your Institution's Knowledge Agent.
              <br />
              Built by{" "}
              <a
                href="https://goodfaithlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-secondary hover:text-primary transition-colors"
              >
                Good Faith Labs
              </a>
            </p>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="text-secondary font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-500 hover:text-primary transition-colors text-sm inline-flex items-center gap-1 group">
                    <span className="w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-secondary font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-slate-400 text-sm cursor-not-allowed">Privacy Policy</span>
              </li>
              <li>
                <span className="text-slate-400 text-sm cursor-not-allowed">Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-amber-100/50 text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Jiffy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
