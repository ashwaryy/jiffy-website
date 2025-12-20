import Link from "next/link";

import { GiraffeMascot } from "./icons";

export default function Footer() {
  const productLinks = [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Analytics", href: "/analytics" },
    { label: "Pricing", href: "/pricing" },
    { label: "Request Demo", href: "/demo" },
  ];

  const resourceLinks = [
    { label: "Student Support Guide", href: "/resources/student-support-automation" },
    { label: "Prospective Student Engagement", href: "/resources/prospective-student-engagement" },
    { label: "Chatbots vs FAQ Pages", href: "/resources/chatbots-vs-faq-pages" },
    { label: "ICA vs RAG White Paper", href: "/resources/white-paper" },
    { label: "Analytics Case Study", href: "/resources/case-study" },
  ];

  const useCaseLinks = [
    { label: "Admissions", href: "/resources/prospective-student-engagement" },
    { label: "Student Support", href: "/resources/student-support-automation" },
    { label: "IT Help Desk", href: "/resources/chatbots-vs-faq-pages" },
  ];

  return (
    <footer className="bg-linear-to-b from-warm-50 to-amber-50/50 border-t border-amber-100/50 py-16 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
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

          {/* Product */}
          <div>
            <h3 className="text-secondary font-semibold mb-4 text-sm uppercase tracking-wider">Product</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-500 hover:text-primary transition-colors text-sm inline-flex items-center gap-1 group">
                    <span className="w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="text-secondary font-semibold mb-4 text-sm uppercase tracking-wider">Use Cases</h3>
            <ul className="space-y-2">
              {useCaseLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-500 hover:text-primary transition-colors text-sm inline-flex items-center gap-1 group">
                    <span className="w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className="text-secondary font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-500 hover:text-primary transition-colors text-sm inline-flex items-center gap-1 group">
                    <span className="w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
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
