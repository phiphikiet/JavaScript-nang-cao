// Bai 1
// Mảng sự kiện trong trận đấu [phút, sự kiện]
const events = [
    [10, 'Ghi bàn'],
    [25, 'Thay người'],
    [40, 'Nhận thẻ vàng'],
    [64, 'Nhận thẻ vàng'], // Thẻ vàng không đúng
    [75, 'Ghi bàn'],
    // Thêm các sự kiện khác tại đây
  ];
  
  // 1. Tạo mảng sự kiện khác nhau
  const uniqueEvents = [...new Set(events.map(event => event[1]))];
    
  // 2. Xóa thẻ vàng phút 64
  const filteredEvents = events.filter(event => !(event[0] === 64 && event[1] === 'Nhận thẻ vàng'));
    
  // 3. In ra console theo định dạng
  const totalEvents = events.length;
  const averageEvents = totalEvents / 90; // Giả sử mỗi trận đấu có 90 phút
    
  console.log(`${totalEvents} sự kiện xảy ra, trung bình mỗi ${Math.round(90 / averageEvents)} phút.`);

  // Bai2
  // Biến hoặc mảng để đánh dấu hiệp của từng sự kiện
  let halfMarkings = [];

  // Lặp qua mảng sự kiện và đánh dấu hiệp
  for (const event of events) {
  const minute = event[0];
  const eventName = event[1];
    
  // Kiểm tra sự kiện thuộc hiệp 1 hay hiệp 2
  const half = minute <= 45 ? 'Hiệp 1' : 'Hiệp 2';

  // Đánh dấu hiệp cho sự kiện
  halfMarkings.push(`${eventName} (${half})`);
  }

  // In ra màn hình
  console.log("Danh sách sự kiện với đánh dấu hiệp:");
  halfMarkings.forEach(event => console.log(event));