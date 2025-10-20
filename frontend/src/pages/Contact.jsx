import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useToast } from "../hooks/use-toast";
import { Theme } from "../controllers/collorController";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: Theme.background.primary }}
    >
      <Header />

      {/* Hero Section */}
      <section className="py-16 text-center">
        <h1
          className="text-4xl font-bold"
          style={{ color: Theme.text.primary }}
        >
          Contact Us
        </h1>
        <p
          className="mt-2 text-lg"
          style={{ color: Theme.text.secondary }}
        >
          We're here to assist you with any inquiries
        </p>
      </section>

      {/* Main Section */}
      <section className="px-6 md:px-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2
                className="text-2xl font-semibold"
                style={{ color: Theme.text.primary }}
              >
                Get In Touch
              </h2>
              <p
                className="mt-3 text-base"
                style={{ color: Theme.text.secondary }}
              >
                Whether you have questions about reservations, amenities, or
                special requests, our team is ready to help.
              </p>
            </div>

            <div className="space-y-8">
              <InfoItem
                icon={<MapPin size={20} />}
                title="Address"
                text="123 Luxury Avenue, Downtown, City 12345"
              />
              <InfoItem
                icon={<Phone size={20} />}
                title="Phone"
                text="+1 (555) 123-4567 · 24/7 Reception"
              />
              <InfoItem
                icon={<Mail size={20} />}
                title="Email"
                text="hello@manhhotel.com · info@manhhotel.com"
              />
            </div>

            <div
              className="p-6 rounded-xl border"
              style={{
                backgroundColor: Theme.background.secondary,
                borderColor: Theme.border.light,
              }}
            >
              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: Theme.text.primary }}
              >
                Operating Hours
              </h3>
              <div className="flex flex-col space-y-2 text-sm">
                <Hours label="Reception" value="24 Hours" />
                <Hours label="Restaurant" value="7:00 AM - 11:00 PM" />
                <Hours label="Spa" value="9:00 AM - 9:00 PM" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 p-6 rounded-xl border"
            style={{
              backgroundColor: Theme.background.secondary,
              borderColor: Theme.border.light,
            }}
          >
            <h2
              className="text-2xl font-semibold mb-2"
              style={{ color: Theme.text.primary }}
            >
              Send a Message
            </h2>

            {["name", "email", "subject"].map((field) => (
              <div key={field}>
                <label
                  className="block mb-1 text-sm font-medium"
                  style={{ color: Theme.text.secondary }}
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  placeholder={`Your ${field}`}
                  className="w-full p-3 border rounded-md focus:outline-none"
                  style={{
                    backgroundColor: Theme.background.primary,
                    borderColor: Theme.border.medium,
                    color: Theme.text.primary,
                  }}
                />
              </div>
            ))}

            <div>
              <label
                className="block mb-1 text-sm font-medium"
                style={{ color: Theme.text.secondary }}
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                placeholder="Your message..."
                className="w-full p-3 border rounded-md resize-none focus:outline-none"
                style={{
                  backgroundColor: Theme.background.primary,
                  borderColor: Theme.border.light,
                  color: Theme.text.primary,
                }}
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center font-semibold py-3 rounded-md transition-all"
              style={{
                backgroundColor: Theme.background.accent,
                color: "#fff",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  Theme.brand.hover)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  Theme.background.accent)
              }
            >
              Send Message
              <Send size={16} className="ml-2" />
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* Small reusable components */
function InfoItem({ icon, title, text }) {
  return (
    <div className="flex gap-4">
      <div className="p-3 border rounded-md flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
}

function Hours({ label, value }) {
  return (
    <div className="flex justify-between border-b pb-2 last:border-0">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
