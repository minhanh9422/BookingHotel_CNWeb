import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { rooms } from '../data/mock';
import {Theme} from "../controllers/collorController"

const Rooms = () => {
  const navigate = useNavigate();
  const [selectedCapacity, setSelectedCapacity] = useState('all');

  const filteredRooms =
    selectedCapacity === 'all'
      ? rooms
      : rooms.filter((room) => room.capacity >= parseInt(selectedCapacity));

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: Theme.background.primary }}>
      <Header />

      {/* PHẦN HERO */}
      <section
        className="py-20 text-center border-b"
        style={{ backgroundColor: Theme.background.accent, borderColor: Theme.border.light }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm tracking-widest uppercase mb-2" style={{ color: Theme.text.secondary }}>
            KHÁM PHÁ KHÔNG GIAN NGHỈ DƯỠNG
          </p>
          <h1 className="text-4xl font-semibold uppercase" style={{ color: Theme.text.light
           }}>
            Phòng & Suite
          </h1>
          <p className="text-lg mt-4" style={{ color: Theme.text.secondary }}>
            Tận hưởng bộ sưu tập phòng nghỉ được thiết kế tinh tế dành riêng cho bạn
          </p>
        </div>
      </section>

      {/* NỘI DUNG CHÍNH */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* THANH LỌC */}
          <div
            className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10 p-5 border"
            style={{ backgroundColor: 'white', borderColor: Theme.border }}
          >
            <label className="text-sm font-medium" style={{ color: Theme.textPrimary }}>
              Lọc theo số lượng khách:
            </label>
            <select
              value={selectedCapacity}
              onChange={(e) => setSelectedCapacity(e.target.value)}
              className="px-4 py-3 border rounded-md bg-white text-sm focus:outline-none focus:ring-2 w-full sm:w-auto"
              style={{
                color: Theme.text.primary,
                borderColor: Theme.border.light,
                outlineColor: Theme.background.accent,
              }}
            >
              <option value="all">Tất cả phòng</option>
              <option value="2">Từ 2 khách trở lên</option>
              <option value="3">Từ 3 khách trở lên</option>
              <option value="4">Từ 4 khách trở lên</option>
            </select>
          </div>

          {/* DANH SÁCH PHÒNG */}
          <div className="flex flex-col gap-16">
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 border-b pb-10"
                style={{ borderColor: Theme.border.light }}
              >
                {/* ẢNH PHÒNG */}
                <div className="relative h-[240px] sm:h-[320px] lg:h-[450px] overflow-hidden rounded-lg">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <span
                    className={`absolute top-4 right-4 px-4 py-2 text-xs sm:text-sm font-medium uppercase tracking-wider border backdrop-blur-md rounded-md`}
                    style={{
                      backgroundColor: room.available ? 'rgba(255,255,255,0.9)' : 'rgba(31,31,31,0.9)',
                      color: room.available ? Theme.text.primary : 'white',
                      borderColor: room.available ? Theme.text.primary : Theme.border.light,
                    }}
                  >
                    {room.available ? '✓ Còn phòng' : 'Hết phòng'}
                  </span>
                </div>

                {/* THÔNG TIN PHÒNG */}
                <div className="flex flex-col justify-between gap-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h2 className="text-2xl font-semibold" style={{ color: Theme.text.primary }}>
                        {room.name}
                      </h2>
                      {room.available && (
                        <p className="text-sm italic mt-1" style={{ color: Theme.text.secondary }}>
                          Còn lại {room.availableRooms} phòng
                        </p>
                      )}
                    </div>

                    {/* 💰 GIÁ VNĐ CHUẨN */}
                    <p
                      className="text-2xl font-semibold whitespace-nowrap flex items-baseline gap-1"
                      style={{ color: Theme.text.primary }}
                    >
                      <sup className="text-sm align-super">đ</sup>
                      {room.price.toLocaleString('vi-VN')}
                      <span className="text-sm" style={{ color: Theme.text.secondary }}>
                        /đêm
                      </span>
                    </p>
                  </div>

                  {/* Mô tả */}
                  <p className="text-base" style={{ color: Theme.text.secondary }}>
                    {room.description}
                  </p>

                  {/* Tiện nghi */}
                  <div className="flex flex-wrap gap-3">
                    {room.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 border text-sm rounded-md"
                        style={{
                          backgroundColor: 'white',
                          borderColor: Theme.border.light,
                          color: Theme.text.primary,
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Sức chứa */}
                  <div className="flex items-center gap-2 text-sm" style={{ color: Theme.text.secondary }}>
                    <Users size={16} />
                    <span>Dành cho {room.capacity} khách trở lên</span>
                  </div>

                  {/* Nút đặt phòng */}
                  <div>
                    <button
                      onClick={() => navigate('/booking', { state: { selectedRoom: room } })}
                      disabled={!room.available}
                      className="mt-3 w-full sm:w-auto px-6 py-3 rounded-md font-semibold transition-colors"
                      style={{
                        backgroundColor: room.available
                          ? Theme.background.accent
                          : Theme.background.secondary,
                        color: room.available
                          ? 'white'
                          : Theme.text.light,
                      }}
                      onMouseEnter={(e) => {
                        if (room.available) e.currentTarget.style.backgroundColor = Theme.brand.hover;
                      }}
                      onMouseLeave={(e) => {
                        if (room.available) e.currentTarget.style.backgroundColor = Theme.background.accent;
                      }}
                    >
                      {room.available ? 'Đặt phòng ngay' : 'Tạm hết phòng'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;
