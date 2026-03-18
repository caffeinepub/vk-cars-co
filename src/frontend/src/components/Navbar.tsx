import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "HOME", to: "/" as const },
  { label: "INVENTORY", to: "/inventory" as const },
  { label: "ABOUT US", to: "/about" as const },
  { label: "CONTACT", to: "/contact" as const },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky-nav" data-ocid="nav.panel">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" data-ocid="nav.link">
          <img
            src="/assets/generated/vk-cars-logo-transparent.dim_400x200.png"
            alt="VK Cars & Co"
            className="h-12 w-auto"
            loading="lazy"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid="nav.link"
              className={`text-xs font-semibold tracking-widest uppercase transition-colors duration-200 ${
                location.pathname === link.to
                  ? "text-gold"
                  : "text-gray-400 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/book-test-drive"
            search={{ carId: undefined }}
            data-ocid="nav.primary_button"
          >
            <button type="button" className="gold-btn text-xs px-5 py-2.5">
              BOOK TEST DRIVE
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="lg:hidden text-gold p-2"
          onClick={() => setIsOpen(!isOpen)}
          data-ocid="nav.toggle"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass-panel mx-4 mb-4 p-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                data-ocid="nav.link"
                className={`text-xs font-semibold tracking-widest uppercase py-2 border-b border-white/5 ${
                  location.pathname === link.to ? "text-gold" : "text-gray-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/book-test-drive"
              search={{ carId: undefined }}
              onClick={() => setIsOpen(false)}
            >
              <button
                type="button"
                className="gold-btn w-full text-xs py-3"
                data-ocid="nav.primary_button"
              >
                BOOK TEST DRIVE
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
