import { useEffect, useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="h-10 w-10 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-soft group-hover:scale-105 transition-transform">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-serif text-lg leading-tight">
            <span className="block text-primary font-semibold">Mental Health</span>
            <span className="block text-xs tracking-[0.25em] text-gold uppercase">
              Well-Being Clinic
            </span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/book-appointment"
              className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-gold hover:text-primary transition-colors"
            >
              Book a Session
            </Link>
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-10 w-10 grid place-items-center rounded-full bg-card text-primary"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <ul className="px-6 py-5 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block py-1 text-foreground/80 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/book-appointment"
                onClick={() => setOpen(false)}
                className="block w-full text-center rounded-full bg-primary text-primary-foreground py-2.5"
              >
                Book a Session
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
