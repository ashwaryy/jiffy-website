import Link from "next/link";

export default function Footer() {
  const links = [
    { label: "Home", href: "/" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Analytics", href: "/analytics" },
    { label: "Resources", href: "/resources" },
    { label: "Request Demo", href: "/demo" },
  ];

  return (
    <footer className="bg-[#FFF8DC] border-t border-[#8B4513]/10 py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-secondary mb-4 block">
              Jiffy
            </Link>
            <p className="text-secondary/80 text-sm">
              Your Institution's Knowledge Agent.
              <br />
              Built by{" "}
              <a 
                href="https://goodfaithlabs.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold hover:underline"
              >
                Good Faith Labs
              </a>
            </p>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="text-secondary font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-secondary/80 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-secondary font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-secondary/60 cursor-not-allowed">Privacy Policy</span>
              </li>
              <li>
                <span className="text-secondary/60 cursor-not-allowed">Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#8B4513]/10 text-center text-sm text-secondary/60">
          &copy; {new Date().getFullYear()} Jiffy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
