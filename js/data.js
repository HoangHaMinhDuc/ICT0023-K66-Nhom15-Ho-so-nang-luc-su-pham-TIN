// Dữ liệu mẫu đã ẩn danh. Nhóm thay bằng dữ liệu thật khi từng thành viên đồng ý công bố.
const MEMBERS = [
  { id: 1, name: "Khúc Trọng Nam", role: "Nhóm trưởng, Driver", year: 2, skills: ["HTML/CSS", "JavaScript", "Git"], bio: "Mình tên là Khúc Trọng Nam. Ngày sinh: 14/2/2007 (19 tuổi). Quê quán: Điện Biên. Sinh viên ngành Sư phạm Tin học – Khóa K66. Sở thích: tìm hiểu cấu trúc mã nguồn mở, đọc tài liệu công nghệ, chơi cờ vua và nghe nhạc lofi khi viết code. Không thích: deadline dồn dập vào phút chót, code không thụt lề/không tuân thủ quy chuẩn (clean code). Điểm mạnh: tư duy logic tốt, nắm vững cấu trúc giao diện và luồng hoạt động của hệ thống; có trách nhiệm cao và khả năng bao quát công việc nhóm. Điểm chưa tốt: đôi khi quá cầu toàn về mặt kỹ thuật khiến thời gian hoàn thiện các chi tiết nhỏ bị kéo dài. Là một người đam mê công nghệ và yêu thích việc giải quyết các bài toán logic, mình luôn hướng đến việc xây dựng những sản phẩm web có cấu trúc mạch lạc và chuẩn hóa. Với vai trò Driver trong nhóm, mình đảm nhận việc dựng khung giao diện chính, thiết lập quy trình làm việc trên Git và đảm bảo mã nguồn vận hành trơn tru. Khả năng tự học cùng sự tỉ mỉ giúp mình dễ dàng tiếp cận các công nghệ mới và hỗ trợ tốt cho các thành viên trong suốt dự án." },
  { id: 2, name: "Ngô Thuỳ Ngân", role: "Thành viên, Tester", year: 2, skills: ["HTML/CSS", "JavaScript", "Git"], bio: "Mình tên là Ngô Thuỳ Ngân. Ngày sinh: 27/11/2007 (19 tuổi). Quê quán: Quảng Ninh. Sinh viên ngành Sư phạm Tin học – Khóa K66. Sở thích: làm đồ thủ công mỹ nghệ (crochet/đan móc len), chụp ảnh lưu giữ kỷ niệm, thiết kế đồ họa với tone màu pastel nhẹ nhàng. Không thích: giao diện bị vỡ khung/lỗi responsive trên thiết bị di động, lỗi chính tả và các phần tử hiển thị lệch vị trí. Điểm mạnh: óc quan sát tinh tế, sự kiên nhẫn cao và độ nhạy bén với trải nghiệm người dùng (UI/UX); kiểm thử cẩn thận từng chi tiết nhỏ. Điểm chưa tốt: thường mất nhiều thời gian rà soát lặp đi lặp lại vì muốn sản phẩm đạt độ hoàn thiện cao nhất. Mình là người có xu hướng quan tâm sâu sắc đến trải nghiệm thị giác và cảm nhận của người dùng cuối. Đảm nhận vai trò Tester trong nhóm, mình chịu trách nhiệm rà soát lỗi giao diện, kiểm thử tính tương thích trên nhiều kích thước màn hình và tinh chỉnh nội dung sao cho hài hòa nhất. Khả năng nhận diện lỗi nhanh cùng sự kiên trì giúp mình hỗ trợ nhóm tạo ra một sản phẩm web hoàn chỉnh, thẩm mỹ và thân thiện với người dùng." },
  { id: 3, name: "Hoàng Hà Minh Đức", role: "Thành viên, Coordinator", year: 2, skills: ["HTML/CSS", "JavaScript", "Git"], bio: "Mình tên là Hoàng Hà Minh Đức. Ngày sinh: 26/12/2007 (19 tuổi). Quê quán: Quảng Ninh. Sinh viên ngành Sư phạm Tin học – Khóa K66. Sở thích: đi phượt khám phá thiên nhiên, tham gia các hoạt động ngoại khóa, kết nối bạn bè và đọc sách phát triển bản thân. Không thích: sự chậm trễ tiến độ mà không báo trước, quy trình làm việc thiếu rõ ràng hoặc không có kế hoạch cụ thể. Điểm mạnh: khả năng giao tiếp, gắn kết các thành viên và quản lý thời gian hiệu quả; có tinh thần tổ chức công việc khoa học. Điểm chưa tốt: dễ bị phân tán năng lượng khi phải cùng lúc xử lý quá nhiều đầu mối công việc khác nhau. Mình tin rằng sự phối hợp nhịp nhàng và tinh thần đồng đội chính là chìa khóa để hoàn thành tốt một dự án. Trong vai trò Coordinator, mình tập trung vào việc lập kế hoạch tiến độ, phân chia đầu việc rõ ràng và kết nối các thành viên để mọi khâu diễn ra đúng hạn. Năng lượng tích cực cùng khả năng điều phối linh hoạt giúp mình duy trì tiến độ chung của nhóm luôn ở trạng thái hiệu quả nhất." },
  { id: 4, name: "Hà Tuấn Hưng", role: "Thành viên, Navigator", year: 2, skills: ["HTML/CSS", "JavaScript", "Git"], bio: "Mình tên là Hà Tuấn Hưng. Năm sinh: 2007. Quê quán: Thanh Hóa. Sinh viên ngành Sư phạm Tin học. Sở thích: đọc sách, đá bóng cuối tuần, chạy bộ, tự học một ngôn ngữ mới. Không thích: môi trường làm việc quá ồn ào, việc bỏ dở kế hoạch giữa chừng. Điểm mạnh: khả năng tự học cao, chịu được áp lực công việc và có tinh thần trách nhiệm cao. Điểm chưa tốt: đôi khi quá cầu toàn dẫn đến tốn thời gian tối ưu những chi tiết nhỏ, kỹ năng giao tiếp trước đám đông vẫn đang trong quá trình hoàn thiện. Tôi là một sinh viên năm hai chuyên ngành SP Tin học với niềm đam mê mãnh liệt dành cho việc phát triển phần mềm và giải quyết các bài toán kỹ thuật phức tạp. Trong suốt quá trình học tập, tôi đã tự học và trang bị nền tảng về tư duy thuật toán, cấu trúc dữ liệu cũng như học và tìm hiểu các ngôn ngữ lập trình phổ biến như HTML và JavaScript. Năng lực nổi bật của tôi nằm ở khả năng phân tích vấn đề độc lập, tự nghiên cứu công nghệ mới và đưa ra các giải pháp tối ưu. Bên cạnh kỹ năng chuyên môn, tôi còn là một người có tinh thần kỷ luật cao, luôn chủ động phối hợp hiệu quả với đồng đội để hoàn thành dự án đúng hạn và đạt chất lượng tốt nhất." }
];

const PRODUCTS = [
  { id: 1, title: "Thiết kế dịch vụ chuyển đổi số cho doanh nghiệp Sơn La", type: "Dạy học", year: "2025-2026", skills: ["Soạn bài giảng", "Trình bày"], summary: "Khoá học hướng dẫn doanh nghiệp tiếp cận chuyển đổi số.", detail: "Dành cho những doanh nghiệp chưa tiếp cận được chuyển đổi số, giúp quảng bá sản phẩm tăng doanh thu." },
  { id: 2, title: "Phiếu bài tập cho thiết kế web", type: "Dạy học", year: "2025-2026", skills: ["Soạn câu hỏi", "HTML"], summary: "Bộ câu hỏi nhiều mức độ cho sinh viên học thiết kế web.", detail: "Có câu hỏi cơ bản, nâng cao và đáp án. Nhóm kiểm tra độ rõ của đề bằng cách cho bạn học làm thử.",link:"https://thietkeweb500cau.wasmer.app/" }, 
  { id: 3, title: "Trang web mô phỏng môi trường cho cây cà chua", type: "Lập trình", year: "2025-2026", skills: ["JavaScript", "HTML/CSS"], summary: "Ứng dụng web mô phỏng các điều kiện tự nhiên phức tạp.", detail: "Dữ liệu dựa trên các nguồn tham khảo trên mạng để xây dựng phòng thí nghiệm ảo. ",link:"https://phongthinghiemao2.wasmer.app/" },
  { id: 4, title: "Website hồ sơ năng lực sư phạm tin", type: "Lập trình", year: "2024-2025", skills: ["HTML/CSS", "Bootstrap", "Git"], summary: "Website tĩnh giới thiệu hồ sơ năng lực sinh viên sư phạm tin, có menu và bố cục responsive.", detail: "Là sản phẩm đầu tiên của nhóm khi học web. Dùng Bootstrap grid và quản lý phiên bản bằng Git." },
  { id: 5, title: "Poster trung thu", type: "Dạy học", year: "2024-2025", skills: ["Canva", "Thiết kế UI"], summary: "Áp phích chào mừng ngày trung thu.", detail: "Thiết kế khổ A0, chữ lớn, màu sắc xinh động làm poster tuyên truyền.",link:"https://canva.link/ibgbeepfawmmmuq" },
  { id: 6, title: "Trang web giới thiệu các thành viên trong nhóm 15 ", type: "Lập trình", year: "2026-2027", skills: ["HTML", "CSS"], summary: "Trang web giới thiệu chi tiết các thành viên cùng học môn thiết kế web", detail:"Không có gì đặc biệt",link:"https://stackblitz.com/edit/stackblitz-starters-8dgwdnml?file=package.json" }
];

const SKILLS = [
  { name: "HTML/CSS", level: 3, note: "Dùng ở mọi sản phẩm web của nhóm" },
  { name: "JavaScript", level: 3, note: "Xử lý dữ liệu, DOM, sự kiện" },
  { name: "Bootstrap", level: 3, note: "Grid, navbar, card, modal" },
  { name: "Git", level: 3, note: "Branch và Pull Request theo chức năng" },
  { name: "Python", level: 3, note: "Bài tập nhập môn" },
  { name: "Soạn bài giảng", level: 3, note: "Có mục tiêu, ví dụ và bài tập" },
  { name: "Soạn câu hỏi", level: 3, note: "Câu hỏi nhiều mức độ có đáp án" },
  { name: "Kiểm thử", level: 3, note: "Thử trường hợp rỗng, sai, không tìm thấy" }
];

const FAQS = [
  { q: "Hồ sơ này dùng để làm gì?", a: "Giúp nơi thực tập và nhà tuyển dụng xem nhanh năng lực và sản phẩm của nhóm." },
  { q: "Làm sao in hồ sơ cá nhân?", a: "Vào trang Tạo hồ sơ, nhập thông tin hoặc bấm Dùng thử, rồi bấm In hồ sơ. Chỉ phần hồ sơ được in." },
  { q: "Thông tin tôi nhập có bị lưu không?", a: "Không. Trang chạy hoàn toàn trên trình duyệt và dữ liệu mất khi bạn tải lại trang." },
  { q: "Tôi có nên nhập số điện thoại, địa chỉ thật?", a: "Không nên khi thử. Hãy dùng dữ liệu mẫu hoặc biệt danh." },
  { q: "Năm kinh nghiệm được tính thế nào?", a: "Bằng năm hiện tại trừ năm bắt đầu học lập trình, tối thiểu là 0." },
  { q: "Độ hoàn thiện hồ sơ nghĩa là gì?", a: "Là phần trăm số mục bạn đã điền trong tổng số bảy mục của form." },
  { q: "Sản phẩm của nhóm có dùng ảnh bên ngoài không?", a: "Chỉ dùng ảnh có quyền sử dụng và ghi nguồn trong SOURCES.md." },
  { q: "Liên hệ nhóm bằng cách nào?", a: "Dùng form ở trang Liên hệ. Lời nhắn chỉ xem trước trên trình duyệt." }
];

// ===== CẤU HÌNH ẢNH (thư mục image/, tên tệp liền không dấu gạch nối, đuôi .jpg) =====
const IMAGES = {
  hero: "image/herobg.jpg",         // ảnh nền tùy chọn cho phần đầu trang chủ; không có tệp thì bỏ qua
  member: (id) => "image/thanhvien" + id + ".jpg",     // thanhvien1, thanhvien2, ...
  product: (id) => "image/sanpham" + id + ".jpg",      // sanpham1 ... sanpham8
  placeholder: "image/placeholder.jpg"
};
// Quy ước: mọi ảnh trong image/ đều có đuôi .jpg, viết thẳng đường dẫn đầy đủ trong HTML hoặc dùng các hàm ở trên.
const MEMBER_ALT = {
  1: "Ảnh chân dung Khúc Trọng Nam",
  2: "Ảnh chân dung Ngô Thuỳ Ngân",
  3: "Ảnh chân dung Hoàng Hà Minh Đức",
  4: "Ảnh chân dung Hà Tuấn Hưng"
};
const PRODUCT_ALT = {
  1: "Ảnh chụp màn hình bài slide về chuyển đổi số cho doanh nghiệp Sơn La",
  2: "Ảnh chụp web quiz cho môn thiết kế web",
  3: "Ảnh chụp màn hình trang web mô phỏng cây cà chua",
  4: "Ảnh chụp màn hình website hồ sơ năng lực sư phạm tin",
  5: "Ảnh chụp poster trung thu",
  6: "Ảnh chụp trang web stackbliz"
};
const GALLERY = [
  { file: "image/hoatdong1.jpg", alt: "Ảnh nhóm họp bàn kế hoạch làm website quanh bàn có laptop", caption: "Giảng trước lớp" },
  { file: "image/hoatdong2.jpg", alt: "Ảnh sinh viên thực hành lập trình trong phòng máy", caption: "Thuyết trình trước lớp" },
  { file: "image/hoatdong3.jpg", alt: "Ảnh một bạn giảng thử bài trước lớp bên cạnh bảng", caption: "Coder chuyên nghiệp" }
];
