import React, { useState } from "react";
import { X, Check } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { amenities } from "../data/mock";
import { Theme } from "../controllers/collorController";

export default function Amenities() {
  const [selectedAmenity, setSelectedAmenity] = useState(null);

  return (
    <div style={{ backgroundColor: Theme.background.primary }}>
      <Header />

      {/* Hero Section */}
      <section
        className="py-20 text-center"
        style={{ backgroundColor: Theme.background.secondary }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <h1
            className="text-4xl font-semibold uppercase tracking-wide mb-4"
            style={{ color: Theme.text.primary }}
          >
            Exceptional Amenities
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: Theme.text.secondary }}
          >
            Every detail thoughtfully crafted for your comfort and convenience.
          </p>
        </div>
      </section>

      {/* Amenity Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity) => (
            <div
              key={amenity.id}
              onClick={() => setSelectedAmenity(amenity)}
              className="cursor-pointer rounded-2xl overflow-hidden border shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
              style={{
                backgroundColor: Theme.background.primary,
                borderColor: Theme.border.light,
              }}
            >
              <div className="relative w-full h-80 overflow-hidden">
                <img
                  src={amenity.image}
                  alt={amenity.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end justify-center opacity-0 hover:opacity-100 transition">
                  <span className="text-white uppercase tracking-wider text-sm border border-white px-5 py-2 mb-8">
                    Learn More
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h2
                  className="text-xl font-semibold mb-2"
                  style={{ color: Theme.text.primary }}
                >
                  {amenity.name}
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: Theme.text.secondary }}
                >
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-20"
        style={{ backgroundColor: Theme.background.accent }}
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              title: "Complimentary Services",
              items: [
                "High-speed WiFi throughout the property",
                "Daily housekeeping",
                "Morning newspaper delivery",
                "Welcome refreshments",
              ],
            },
            {
              title: "Dining Options",
              items: [
                "Fine dining restaurant",
                "Rooftop bar with panoramic views",
                "24-hour room service",
                "Private dining experiences",
              ],
            },
            {
              title: "Recreation & Wellness",
              items: [
                "Heated indoor pool",
                "Full-service spa",
                "State-of-the-art fitness center",
                "Yoga and meditation studio",
              ],
            },
            {
              title: "Business Facilities",
              items: [
                "Executive meeting rooms",
                "Conference facilities",
                "Business center with printing",
                "Private workspaces",
              ],
            },
          ].map((feature, i) => (
            <div key={i}>
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: Theme.text.primary }}
              >
                {feature.title}
              </h3>
              <ul className="space-y-2">
                {feature.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="pl-5 relative text-sm"
                    style={{ color: Theme.text.secondary }}
                  >
                    <span
                      className="absolute left-0"
                      style={{ color: Theme.text.primary }}
                    >
                      —
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedAmenity && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 p-4"
          onClick={() => setSelectedAmenity(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-xl overflow-hidden shadow-lg animate-fadeIn"
            style={{ backgroundColor: Theme.background.primary }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-5 right-5 bg-white border rounded-full p-2 hover:bg-[#453927] hover:text-white transition"
              onClick={() => setSelectedAmenity(null)}
            >
              <X size={20} />
            </button>

            <div className="w-full h-80 overflow-hidden">
              <img
                src={selectedAmenity.image}
                alt={selectedAmenity.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <h2
                className="text-2xl font-semibold mb-3"
                style={{ color: Theme.text.primary }}
              >
                {selectedAmenity.name}
              </h2>
              <p
                className="text-base mb-6"
                style={{ color: Theme.text.secondary }}
              >
                {selectedAmenity.fullDescription}
              </p>

              <div className="mb-6">
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ color: Theme.text.primary }}
                >
                  Features
                </h3>
                <ul className="space-y-2">
                  {selectedAmenity.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: Theme.text.primary }}
                    >
                      <Check size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setSelectedAmenity(null)}
                className="px-5 py-2 rounded-lg font-semibold text-sm transition"
                style={{
                  backgroundColor: Theme.brand.main,
                  color: Theme.text.light,
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
