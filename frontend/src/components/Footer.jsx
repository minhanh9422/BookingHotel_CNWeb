import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { hotel } from "../Hotel_Information";
import { Theme } from "../controllers/collorController";

export default function Footer() {
  const c = Theme;

  return (
    <footer
      className="border-t mt-24"
      style={{
        backgroundColor: c.background.secondary,
        borderColor: c.border.light,
        color: c.text.secondary,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo */}
          <div>
            <h3
              className="text-lg font-semibold uppercase tracking-wider mb-2"
              style={{ color: c.text.primary }}
            >
              {hotel.name}
            </h3>
            <p className="text-sm max-w-xs" style={{ color: c.text.secondary }}>
              Trải nghiệm sự tinh tế và đẳng cấp tại {hotel.name} – nơi kết hợp
              giữa phong cách hiện đại và nét đẹp truyền thống.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wide mb-3"
              style={{ color: c.text.primary }}
            >
              Thao tác nhanh
            </h4>
            <nav className="flex flex-col space-y-2">
              {[
                ["Xem phòng", "/rooms"],
                ["Tiện ích", "/amenities"],
                ["Trưng bày", "/gallery"],
                ["Liên hệ", "/contact"],
              ].map(([label, path]) => (
                <Link
                  key={path}
                  to={path}
                  className="text-sm transition-all duration-200"
                  style={{ color: c.text.secondary }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = c.brand.main)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = c.text.secondary)
                  }
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wide mb-3"
              style={{ color: c.text.primary }}
            >
              Liên hệ
            </h4>
            <div className="flex flex-col space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={16} color={c.brand.main} />
                <span>{hotel.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} color={c.brand.main} />
                <span>{hotel.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} color={c.brand.main} />
                <span>{hotel.email}</span>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wide mb-3"
              style={{ color: c.text.primary }}
            >
              Giờ hoạt động
            </h4>
            <div className="text-sm mb-4">
              <p>Reception: 24/7</p>
              <p>Check-in: {hotel.checkin}</p>
              <p>Check-out: {hotel.checkout}</p>
            </div>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full transition transform hover:scale-105"
                  style={{
                    backgroundColor: c.background.accent,
                    color: c.text.primary,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = c.brand.main)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = c.background.accent)
                  }
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="border-t pt-6 text-center text-sm"
          style={{
            borderColor: c.border.light,
            color: c.text.muted,
          }}
        >
          © 2025 {hotel.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
