// Mock data for Manh Hotel
import {galleryController} from "../controllers/galleryController"

export const rooms = [
  {
    id: 1,
    name: 'Phòng Suite Hạng Sang (Deluxe Suite)',
    description: 'Phòng rộng rãi với tầm nhìn ra thành phố, được trang bị tiện nghi hiện đại và không gian thoải mái tinh tế.',
    price: 3500000,
    image: galleryController.DeluxeSuite,
    features: [
      'Giường King cỡ lớn',
      'Tầm nhìn ra thành phố',
      'WiFi miễn phí',
      'Diện tích 45m²',
      'Mini Bar',
      'TV thông minh'
    ],
    capacity: 2,
    available: true,
    availableRooms: 3
  },
  {
    id: 2,
    name: 'Phòng Cao Cấp (Premium Room)',
    description: 'Phòng hiện đại với ánh sáng ấm áp và nội thất sang trọng, mang lại cảm giác thư giãn tuyệt đối.',
    price: 2800000,
    image: galleryController.PremiumRoom,
    features: [
      'Giường Queen cỡ lớn',
      'Bàn làm việc',
      'WiFi miễn phí',
      'Diện tích 35m²',
      'Máy pha cà phê',
      'TV thông minh'
    ],
    capacity: 2,
    available: true,
    availableRooms: 5
  },
  {
    id: 3,
    name: 'Phòng Suite Điều Hành (Executive Suite)',
    description: 'Phòng sang trọng với khu vực sinh hoạt riêng biệt, lý tưởng cho kỳ nghỉ dài hoặc khách doanh nhân.',
    price: 4500000,
    image: galleryController.ExecutiveSuite,
    features: [
      'Giường King cỡ lớn',
      'Phòng khách riêng',
      'WiFi miễn phí',
      'Diện tích 60m²',
      'Mini Bar',
      'Ban công riêng'
    ],
    capacity: 3,
    available: false,
    availableRooms: 0
  },
  {
    id: 4,
    name: 'Biệt Thự Hạng Sang (Luxury Villa)',
    description: 'Biệt thự riêng biệt với thiết kế tinh tế, tiện nghi cao cấp và không gian riêng tư tuyệt đối cho du khách đẳng cấp.',
    price: 6500000,
    image: galleryController.LuxuryVilla,
    features: [
      '2 Giường King cỡ lớn',
      'Hồ bơi riêng',
      'WiFi miễn phí',
      'Diện tích 120m²',
      'Phòng bếp riêng',
      'Sân hiên riêng'
    ],
    capacity: 4,
    available: true,
    availableRooms: 1
  }
];

export const amenities = [
  {
    id: 1,
    name: 'Phòng ăn',
    description: 'Trải nghiệm ẩm thực đặc sắc với nguyên liệu tươi ngon tại địa phương',
    fullDescription:
      'Thưởng thức nhà hàng đạt giải thưởng của chúng tôi với thực đơn theo mùa do bếp trưởng sáng tạo. Từ bữa tối thân mật đến buổi tiệc mừng, mỗi bữa ăn đều là một trải nghiệm đáng nhớ.',
    image: galleryController.fine_dinning,
    features: [
      'Ẩm thực chuẩn Michelin',
      'Hầm rượu với hơn 500 loại rượu',
      'Phòng ăn riêng tư',
      'Thực đơn đặc biệt của bếp trưởng',
    ],
  },
  {
    id: 2,
    name: 'Spa & Chăm sóc sức khỏe',
    description: 'Liệu pháp thư giãn trong không gian yên bình',
    fullDescription:
      'Thư giãn cùng các liệu trình massage, chăm sóc da và trị liệu toàn thân được thiết kế để phục hồi sự cân bằng và tĩnh tại cho bạn.',
    image: galleryController.spa,
    features: [
      'Chuyên viên trị liệu chuyên nghiệp',
      'Liệu trình dành cho cặp đôi',
      'Liệu pháp hương thơm',
      'Phòng xông hơi & sauna',
    ],
  },
  {
    id: 3,
    name: 'Trung tâm thể hình',
    description: 'Trang thiết bị hiện đại giúp duy trì sức khỏe của bạn',
    fullDescription:
      'Giữ gìn thói quen tập luyện trong phòng gym được trang bị đầy đủ thiết bị hiện đại dành cho cả luyện tập sức mạnh và tim mạch.',
    image: galleryController.gym,
    features: [
      'Hoạt động 24/7',
      'Huấn luyện viên cá nhân',
      'Lớp học yoga',
      'Thiết bị hiện đại',
    ],
  },
  {
    id: 4,
    name: 'Hồ bơi trong nhà',
    description: 'Hồ bơi nước ấm với tầm nhìn toàn cảnh',
    fullDescription:
      'Thả mình trong làn nước ấm của hồ bơi trong nhà được chiếu sáng tự nhiên, mang đến cảm giác thư giãn và sang trọng.',
    image: galleryController.pool,
    features: [
      'Nhiệt độ ổn định quanh năm',
      'Dịch vụ bên hồ bơi',
      'Khu vực ghế nằm thư giãn',
      'Dịch vụ khăn tắm miễn phí',
    ],
  },
  {
    id: 5,
    name: 'Dịch vụ hỗ trợ khách hàng',
    description: 'Hỗ trợ cá nhân 24/7 cho mọi nhu cầu của bạn',
    fullDescription:
      'Đội ngũ lễ tân chuyên nghiệp luôn sẵn sàng 24/7 để giúp bạn đặt chỗ, sắp xếp tour, phương tiện di chuyển và mọi yêu cầu đặc biệt.',
    image: galleryController.service,
    features: [
      'Phục vụ 24/7',
      'Gợi ý địa điểm địa phương',
      'Tổ chức sự kiện',
      'Sắp xếp phương tiện di chuyển',
    ],
  },
  {
    id: 6,
    name: 'Trung tâm hội nghị',
    description: 'Không gian chuyên nghiệp dành cho hội họp và làm việc',
    fullDescription:
      'Tổ chức cuộc họp hoặc hội nghị trong không gian hiện đại được trang bị công nghệ tiên tiến và kết nối Internet tốc độ cao.',
    image: galleryController.businessCenter,
    features: [
      'Phòng họp riêng biệt',
      'Hội nghị trực tuyến',
      'WiFi tốc độ cao',
      'Dịch vụ in ấn, photocopy',
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Nguyễn Thị Tươi',
    location: 'Hà Nội',
    rating: 5,
    comment: 'Một trải nghiệm phi thường. Sự chú ý đến từng chi tiết và dịch vụ đặc biệt đã vượt quá mọi mong đợi.'
  },
  {
    id: 2,
    name: 'James Chen',
    location: 'Singapore',
    rating: 5,
    comment: 'Refined elegance at its finest. The perfect balance of luxury and comfort.'
  },
  {
    id: 3,
    name: 'Trần Đức Thắng',
    location: 'Hải Phòng',
    rating: 5,
    comment: 'Dịch vụ hoàn hảo và chỗ ở tuyệt vời. Chắc chắn sẽ quay lại.'
  }
];

export const gallery = [
  galleryController.fine_dinning, 
  galleryController.DeluxeSuite,
  galleryController.ExecutiveSuite,
  galleryController.LuxuryVilla,
  galleryController.PremiumRoom,
  galleryController.businessCenter,
  galleryController.gym,
  galleryController.pic3,
  galleryController.pic6,
  galleryController.room1,
  galleryController.spa2,
  galleryController.pic9,
  galleryController.pool,
  galleryController.spa,
  galleryController.service,
];

// Mock booking storage
export const mockBookings = [];

export const addBooking = (booking) => {
  const newBooking = {
    id: Date.now(),
    ...booking,
    createdAt: new Date().toISOString()
  };
  mockBookings.push(newBooking);
  return newBooking;
};