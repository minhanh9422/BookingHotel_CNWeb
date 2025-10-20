import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { rooms, addBooking } from '../data/mock';
import { useToast } from '../hooks/use-toast';
import { Theme } from '../controllers/collorController';

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const selectedRoomFromState = location.state?.selectedRoom;

  const [formData, setFormData] = useState({
    roomId: selectedRoomFromState?.id || '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const selectedRoom = rooms.find(r => r.id === parseInt(formData.roomId));

  const calculateNights = () => {
    if (formData.checkIn && formData.checkOut) {
      const inDate = new Date(formData.checkIn);
      const outDate = new Date(formData.checkOut);
      const nights = Math.ceil((outDate - inDate) / (1000 * 60 * 60 * 24));
      return nights > 0 ? nights : 0;
    }
    return 0;
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    return selectedRoom ? nights * selectedRoom.price : 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.roomId || !formData.checkIn || !formData.checkOut) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    if (calculateNights() <= 0) {
      toast({
        title: 'Invalid Dates',
        description: 'Check-out date must be after check-in date.',
        variant: 'destructive',
      });
      return;
    }

    const booking = addBooking({
      ...formData,
      roomName: selectedRoom.name,
      nights: calculateNights(),
      total: calculateTotal(),
    });

    toast({
      title: 'Reservation Confirmed',
      description: `Your booking at ${selectedRoom.name} has been confirmed. Booking ID: ${booking.id}`,
    });

    setTimeout(() => navigate('/'), 2000);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const getTodayDate = () => new Date().toISOString().split('T')[0];
  const getTomorrowDate = () => {
    const t = new Date();
    t.setDate(t.getDate() + 1);
    return t.toISOString().split('T')[0];
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: Theme.background.primary }}
    >
      <Header />

      {/* HERO */}
      <section className="text-center py-20 bg-gradient-to-b from-[#f6efe5] to-[#e3c7a8]">
        <h1 className="text-4xl font-bold text-[#3B2F2F] mb-2">Reserve Your Stay</h1>
        <p className="text-lg text-[#5C4033]">Complete your booking details below</p>
      </section>

      {/* FORM */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-10">
          {/* FORM LEFT */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Accommodation */}
            <div
              className="p-8 rounded-xl shadow-md"
              style={{ backgroundColor: Theme.background.secondary }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-[#3B2F2F]">
                Accommodation Details
              </h2>

              <div className="flex flex-col gap-5">
                <div>
                  <label className="block text-[#3B2F2F] mb-2">Select Room</label>
                  <select
                    name="roomId"
                    value={formData.roomId}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:outline-none"
                    required
                  >
                    <option value="">Choose a room</option>
                    {rooms.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} - {r.price.toLocaleString()}₫/đêm
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#3B2F2F] mb-2 flex items-center gap-2">
                      <Calendar size={16} /> Check-in
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      min={getTodayDate()}
                      className="w-full p-3 border rounded-md focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#3B2F2F] mb-2 flex items-center gap-2">
                      <Calendar size={16} /> Check-out
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      min={formData.checkIn || getTomorrowDate()}
                      className="w-full p-3 border rounded-md focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#3B2F2F] mb-2">Number of Guests</label>
                  <input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    min="1"
                    max={selectedRoom?.capacity || 4}
                    className="w-full p-3 border rounded-md focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Guest Info */}
            <div
              className="p-8 rounded-xl shadow-md"
              style={{ backgroundColor: Theme.background.secondary }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-[#3B2F2F]">
                Guest Information
              </h2>

              <div className="flex flex-col gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 border rounded-md focus:outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 border rounded-md focus:outline-none"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-3 border rounded-md focus:outline-none"
                  required
                />
                <textarea
                  name="specialRequests"
                  placeholder="Special Requests (Optional)"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows="4"
                  className="p-3 border rounded-md focus:outline-none resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 text-white font-semibold rounded-lg transition-all"
              style={{ backgroundColor: Theme.background.accent }}
            >
              Confirm Reservation
            </button>
          </form>

          {/* SUMMARY */}
          <div
            className="p-8 rounded-xl shadow-md h-fit sticky top-24"
            style={{ backgroundColor: Theme.background.secondary }}
          >
            <h2 className="text-2xl font-semibold text-[#3B2F2F] mb-4">
              Booking Summary
            </h2>

            {selectedRoom ? (
              <>
                <div className="flex justify-between py-2 border-b border-[#bfa38a]">
                  <span>Room</span>
                  <span>{selectedRoom.name}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#bfa38a]">
                  <span>Price/night</span>
                  <span>{selectedRoom.price.toLocaleString()}₫</span>
                </div>

                {formData.checkIn && formData.checkOut && (
                  <>
                    <div className="flex justify-between py-2">
                      <span>Check-in</span>
                      <span>{new Date(formData.checkIn).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>Check-out</span>
                      <span>{new Date(formData.checkOut).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-[#bfa38a] mt-2 font-semibold">
                      <span>Total</span>
                      <span>{calculateTotal().toLocaleString()}₫</span>
                    </div>
                  </>
                )}
              </>
            ) : (
              <p className="text-[#5C4033] text-sm">Select a room to view pricing details.</p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
