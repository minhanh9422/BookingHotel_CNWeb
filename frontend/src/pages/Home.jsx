import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeaderSection from "../components/Header";
import Footer from "../components/Footer";
import { rooms, amenities, testimonials } from "../data/mock";
import { galleryController } from "../controllers/galleryController";
import { Theme } from "../controllers/collorController";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: Theme.background.primary }}>
      <HeaderSection />

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <img
          src={galleryController.room1}
          alt="Phòng khách sạn sang trọng"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-white">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            Trải Nghiệm Nghỉ Dưỡng Thư Dãn
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10">
            Tận hưởng dịch vụ hoàn hảo và không gian sang trọng giữa tốt nhất Hà Nội
          </p>
          <button
            onClick={() => navigate("/booking")}
            className="px-6 py-3 rounded-md font-semibold border border-white hover:bg-transparent hover:text-white transition"
            style={{
              backgroundColor: Theme.text.light,
              color: Theme.text.primary,
            }}
          >
            Đặt Phòng Ngay
          </button>
        </div>
      </section>

      {/* Rooms Showcase */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-semibold"
              style={{ color: Theme.brand.subtle }}
            >
              Phòng Nghỉ Của Chúng Tôi
            </h2>
            <p
              className="mt-4 max-w-2xl mx-auto"
              style={{ color: Theme.text.secondary }}
            >
              Không gian được thiết kế tinh tế, mang đến sự thoải mái và tiện nghi
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {rooms.map((room) => (
              <div
                key={room.id}
                onClick={() => navigate(`/rooms/${room.id}`)}
                className="cursor-pointer hover:-translate-y-1 transition-transform duration-200 border"
                style={{
                  backgroundColor: Theme.background.primary,
                  borderColor: Theme.border.light,
                }}
              >
                <div className="relative h-80">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                  {room.available ? (
                    <span
                      className="absolute top-4 right-4 px-4 py-1 text-xs font-semibold uppercase backdrop-blur-sm border"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.9)",
                        color: Theme.text.primary,
                        borderColor: Theme.text.primary,
                      }}
                    >
                      Còn {room.availableRooms} phòng
                    </span>
                  ) : (
                    <span
                      className="absolute top-4 right-4 px-4 py-1 text-xs font-semibold uppercase backdrop-blur-sm border"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.8)",
                        color: Theme.text.light,
                        borderColor: Theme.text.primary,
                      }}
                    >
                      Hết phòng
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <h3
                    className="text-xl font-medium mb-2"
                    style={{ color: Theme.text.primary }}
                  >
                    {room.name}
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{ color: Theme.text.primary }}
                  >
                    {room.description}
                  </p>
                  <div
                    className="flex justify-between items-center border-t pt-4 mt-4"
                    style={{ borderColor: Theme.border.light }}
                  >
                    <span
                      className="text-lg font-semibold"
                      style={{ color: Theme.text.secondary }}
                    >
                      {room.price.toLocaleString("vi-VN")}
                      <sup>đ</sup>/ Đêm
                    </span>
                    <button
                      className="text-sm font-medium transition"
                      style={{
                        color: Theme.brand.main,
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.color = Theme.brand.hover)
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.color = Theme.brand.main)
                      }
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate("/rooms")}
              className="px-6 py-3 rounded-md font-semibold transition"
              style={{
                backgroundColor: Theme.brand.main,
                color: Theme.text.light,
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = Theme.brand.hover)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = Theme.brand.main)
              }
            >
              Xem tất cả phòng
            </button>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section
        className="py-20 mt-16"
        style={{ backgroundColor: Theme.background.secondary }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-semibold"
              style={{ color: Theme.brand.subtle }}
            >
              Tiện Ích Nổi Bật
            </h2>
            <p
              className="mt-4"
              style={{ color: Theme.text.secondary }}
            >
              Mọi chi tiết đều được chăm chút cho sự thoải mái của bạn
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a) => (
              <div
                key={a.id}
                className="p-8 border hover:-translate-y-1 transition-transform"
                style={{
                  backgroundColor: Theme.text.light,
                  borderColor: Theme.border.light,
                }}
              >
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: Theme.text.primary }}
                >
                  {a.name}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: Theme.text.secondary }}
                >
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="py-20"
        style={{ backgroundColor: Theme.background.primary }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-semibold"
              style={{ color: Theme.brand.subtle }}
            >
              Cảm Nhận Của Khách Hàng
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="p-8 border-l-4"
                style={{
                  backgroundColor: Theme.background.secondary,
                  borderColor: Theme.text.primary,
                }}
              >
                <p
                  className="italic mb-6"
                  style={{ color: Theme.text.secondary }}
                >
                  "{t.comment}"
                </p>
                <div
                  className="border-t pt-4"
                  style={{ borderColor: Theme.border.light }}
                >
                  <p
                    className="font-medium"
                    style={{ color: Theme.text.primary }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: Theme.text.muted }}
                  >
                    {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20"
        style={{ backgroundColor: Theme.background.secondary }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-semibold"
            style={{ color: Theme.text.secondary }}
          >
            Hãy Bắt Đầu Kỳ Nghỉ Của Bạn Ngay Hôm Nay
          </h2>
          <p
            className="mt-6 mb-10 text-lg"
            style={{ color: Theme.text.secondary }}
          >
            Lựa chọn nơi nghỉ ngơi lý tưởng và tận hưởng từng khoảnh khắc thư giãn
          </p>
          <button
            onClick={() => navigate("/booking")}
            className="flex items-center justify-center mx-auto gap-2 px-6 py-3 rounded-md font-semibold transition"
            style={{
              backgroundColor: Theme.brand.main,
              color: Theme.text.light,
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = Theme.brand.hover)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = Theme.brand.main)
            }
          >
            Đặt phòng ngay
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
