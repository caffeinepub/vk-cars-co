import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-[#080C0F] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img
              src="/assets/generated/vk-cars-logo-transparent.dim_400x200.png"
              alt="VK Cars & Co"
              className="h-14 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Mohali's trusted destination for premium used and luxury vehicles.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
                <span>
                  Phase 7, Industrial Area,
                  <br />
                  Mohali, Punjab 160055
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={14} className="text-gold shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-gold transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={14} className="text-gold shrink-0" />
                <a
                  href="mailto:info@vkcars.in"
                  className="hover:text-gold transition-colors"
                >
                  info@vkcars.in
                </a>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">
              EXPLORE
            </h4>
            <div className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "Car Inventory", to: "/inventory" },
                { label: "Book Test Drive", to: "/book-test-drive" },
                { label: "About Us", to: "/about" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-gray-400 text-sm hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">
              SERVICES
            </h4>
            <div className="space-y-3">
              {[
                "Used Car Sales",
                "Luxury Vehicles",
                "Car Financing",
                "Test Drives",
                "Vehicle Inspection",
              ].map((s) => (
                <p key={s} className="text-gray-400 text-sm">
                  {s}
                </p>
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">
              FOLLOW US
            </h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/50 transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/50 transition-all"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/50 transition-all"
              >
                <Youtube size={16} />
              </a>
            </div>
            <div className="glass-panel p-4">
              <p className="text-xs text-gray-400 leading-relaxed">
                &ldquo;Driven by Trust. Powered by Quality.&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="divider-gold" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
          <p className="text-gray-500 text-xs">
            © {year} VK Cars & Co. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noreferrer"
              className="text-gold/60 hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
