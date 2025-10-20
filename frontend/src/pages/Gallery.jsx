import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { gallery } from "../data/mock";
import { Theme } from "../controllers/collorController";

export default function Gallery() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: Theme.background.primary }}
    >
      <Header />

      {/* Hero section */}
      <section
        className="py-20 text-center"
        style={{ backgroundColor: Theme.background.secondary }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1
            className="text-4xl font-semibold uppercase tracking-wide mb-3"
            style={{ color: Theme.text.primary }}
          >
            Gallery
          </h1>
          <p
            className="text-base text-gray-600"
            style={{ color: Theme.text.secondary }}
          >
            Explore the refined spaces and exceptional design of{" "}
            <span style={{ color: Theme.brand.main }}>Manh Hotel</span>.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-sm border transition-transform duration-300 hover:scale-[1.03]"
                style={{
                  backgroundColor: Theme.background.accent,
                  borderColor: Theme.border.light,
                }}
              >
                <img
                  src={image}
                  alt={`Manh Hotel - View ${index + 1}`}
                  className="w-full h-72 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
