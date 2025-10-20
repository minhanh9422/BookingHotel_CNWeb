import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Theme } from "../controllers/collorController";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);
  const c = Theme;

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur border-b transition-colors duration-300"
      style={{
        backgroundColor: c.background.primary,
        borderColor: c.border.light,
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-semibold tracking-widest uppercase transition-colors duration-200"
            style={{ color: c.text.primary }}
          >
            Manh Hotel
          </Link>

          {/* Navigation */}
          <nav
            className={`flex items-center gap-10 transition-all duration-300
              lg:static lg:flex-row lg:opacity-100 lg:visible
              fixed left-0 right-0 top-[101px] bottom-0 flex-col justify-center
              bg-[${c.background.primary}] backdrop-blur
              ${
                mobileMenuOpen
                  ? "translate-y-0 opacity-100 visible"
                  : "-translate-y-full opacity-0 invisible"
              }`}
          >
            {[
              { to: "/", label: "Trang chủ" },
              { to: "/rooms", label: "Phòng" },
              { to: "/amenities", label: "Tiện ích" },
              { to: "/gallery", label: "Trưng bày" },
              { to: "/contact", label: "Liên hệ" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`relative text-sm font-medium transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                ${
                  isActive(link.to)
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`}
                style={{
                  color: isActive(link.to)
                    ? c.text.primary
                    : c.text.secondary,
                  borderColor: c.brand.main,
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* Book Now (Mobile only) */}
            <Link
              to="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="block lg:hidden mt-6 text-white px-6 py-2.5 rounded-lg font-semibold text-sm shadow-md transition"
              style={{
                backgroundColor: c.brand.main,
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = c.brand.hover)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = c.brand.main)
              }
            >
              Đặt phòng ngay
            </Link>
          </nav>

          {/* Utilities */}
          <div className="flex items-center gap-4">
            <Link
              to="/booking"
              className="hidden lg:inline-block text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-md transition"
              style={{
                backgroundColor: c.brand.main,
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = c.brand.hover)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = c.brand.main)
              }
            >
              Đặt phòng ngay
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2"
              style={{ color: c.text.primary }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
