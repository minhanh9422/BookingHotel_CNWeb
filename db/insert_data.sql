-- INSERT SAMPLE DATA
-- ============================================
use hotel_booking_db;
-- Insert Users
INSERT INTO Users (name, email, password, phone, role) VALUES
('Nguyễn Văn An', 'admin@hotel.com', '$2y$10$abcdefghijklmnopqrstuv', '0901234567', 'admin'),
('Trần Thị Bình', 'staff@hotel.com', '$2y$10$abcdefghijklmnopqrstuv', '0902345678', 'staff'),
('Lê Minh Cường', 'cuong.le@email.com', '$2y$10$abcdefghijklmnopqrstuv', '0903456789', 'customer'),
('Phạm Thu Dương', 'duong.pham@email.com', '$2y$10$abcdefghijklmnopqrstuv', '0904567890', 'customer'),
('Hoàng Văn Em', 'em.hoang@email.com', '$2y$10$abcdefghijklmnopqrstuv', '0905678901', 'customer');

-- Insert Rooms
INSERT INTO Rooms (room_name, description, price, capacity, image_url, status) VALUES
('Phòng Deluxe 101', 'Phòng sang trọng với view thành phố, giường king size', 1200000, 2, 'https://example.com/deluxe101.jpg', 'available'),
('Phòng Suite 201', 'Phòng cao cấp với phòng khách riêng, ban công rộng', 2500000, 4, 'https://example.com/suite201.jpg', 'available'),
('Phòng Standard 102', 'Phòng tiêu chuẩn thoải mái, đầy đủ tiện nghi', 800000, 2, 'https://example.com/standard102.jpg', 'available'),
('Phòng Family 301', 'Phòng gia đình rộng rãi, 2 giường đôi', 1800000, 6, 'https://example.com/family301.jpg', 'available'),
('Phòng VIP 401', 'Phòng VIP với jacuzzi, minibar cao cấp', 3500000, 2, 'https://example.com/vip401.jpg', 'unavailable');

-- Insert Services
INSERT INTO Services (service_name, price, description, image_url) VALUES
('Massage trị liệu', 500000, 'Dịch vụ massage thư giãn toàn thân 90 phút', 'https://example.com/massage.jpg'),
('Ăn sáng buffet', 250000, 'Buffet sáng phong phú với món Á - Âu', 'https://example.com/breakfast.jpg'),
('Đưa đón sân bay', 400000, 'Dịch vụ đưa đón sân bay bằng xe riêng', 'https://example.com/airport.jpg'),
('Giặt ủi', 150000, 'Dịch vụ giặt ủi quần áo cao cấp', 'https://example.com/laundry.jpg'),
('Tour city', 800000, 'Tour tham quan thành phố 1 ngày có hướng dẫn viên', 'https://example.com/tour.jpg');

-- Insert Bookings
INSERT INTO Bookings (user_id, room_id, check_in, check_out, guests, total_price, status) VALUES
(3, 1, '2025-10-25', '2025-10-28', 2, 3600000, 'confirmed'),
(4, 2, '2025-11-01', '2025-11-05', 3, 10000000, 'confirmed'),
(5, 3, '2025-10-22', '2025-10-24', 2, 1600000, 'completed'),
(3, 4, '2025-11-10', '2025-11-12', 4, 3600000, 'pending'),
(4, 1, '2025-12-20', '2025-12-25', 2, 6000000, 'confirmed');

-- Insert Booking_services
INSERT INTO Booking_services (booking_id, service_id, quantity, subtotal) VALUES
(1, 2, 3, 750000),
(1, 1, 1, 500000),
(2, 2, 4, 1000000),
(2, 3, 2, 800000),
(2, 5, 3, 2400000),
(3, 2, 2, 500000),
(3, 4, 1, 150000),
(5, 2, 5, 1250000),
(5, 1, 2, 1000000);

-- Insert ReviewServices
INSERT INTO ReviewServices (user_id, service_id, rating, comment) VALUES
(3, 1, 5, 'Dịch vụ massage rất tuyệt vời, nhân viên chuyên nghiệp'),
(4, 2, 4, 'Buffet sáng đa dạng, tuy nhiên hơi đông người'),
(5, 3, 5, 'Tài xế lái xe cẩn thận, xe sạch sẽ, đúng giờ'),
(3, 5, 4, 'Tour rất hay, hướng dẫn viên nhiệt tình'),
(4, 4, 3, 'Giặt ủi OK nhưng hơi lâu');

-- Insert ReviewRoom
INSERT INTO ReviewRoom (user_id, room_id, rating, comment) VALUES
(3, 1, 5, 'Phòng sạch sẽ, view đẹp, nhân viên thân thiện'),
(4, 2, 5, 'Phòng suite rộng rãi, sang trọng, rất hài lòng'),
(5, 3, 4, 'Phòng tốt với mức giá này, tuy nhiên hơi nhỏ'),
(3, 4, 5, 'Phòng family hoàn hảo cho gia đình, con cái rất thích'),
(4, 1, 4, 'Phòng đẹp nhưng cách âm chưa tốt lắm');