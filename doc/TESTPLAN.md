# KẾ HOẠCH KIỂM THỬ (TEST PLAN) - NHÓM 15
Chủ đề: Hồ sơ năng lực nhóm sinh viên Sư phạm Tin Học
Người thực hiện: Tester

## 1. Mục tiêu kiểm thử
- Đảm bảo website hoạt động ổn định trên trình duyệt máy tính và điện thoại.
- Kiểm tra tính đúng đắn của công cụ sinh hồ sơ cá nhân (form validate, in/PDF, nút dùng thử, nút đặt lại).
- Đảm bảo không phát sinh lỗi trong Developer Console (0 console error) ở luồng sử dụng chính.
- Thử nghiệm đầy đủ ít nhất 3 trường hợp biên theo yêu cầu bài tập lớn.

## 2. Phạm vi kiểm thử
1. **Kiểm thử giao diện (UI/UX & Responsive):**
   - Kiểm tra menu Navbar, tính tương thích trên màn hình điện thoại (không tràn ngang).
   - Kiểm tra khả năng tương tác phím (Tab, Enter) và nhãn label, thẻ alt ảnh.
2. **Kiểm thử chức năng (Functional Testing):**
   - Danh sách và bộ lọc sản phẩm (tìm kiếm, lọc theo kỹ năng/năm học).
   - Modal hiển thị chi tiết sản phẩm / thành viên.
   - Form liên hệ và kiểm tra dữ liệu gửi đi.
   - Công cụ tạo hồ sơ cá nhân dạng in (Print/PDF).
3. **Kiểm thử trường hợp biên & Xử lý ngoại lệ:**
   - Biên 1: Bấm "Tạo hồ sơ" khi toàn bộ ô nhập liệu để trống (Xử lý dữ liệu rỗng).
   - Biên 2: Nhập dữ liệu sai định dạng (Email thiếu @, số điện thoại chứa chữ, chuỗi ký tự quá dài > 1000 ký tự).
   - Biên 3: Bấm nút "Đặt lại" sau khi đã tạo hồ sơ -> giao diện phải làm sạch hoàn toàn về trạng thái ban đầu.
   - Nút "Dùng thử" -> nạp đầy đủ dữ liệu mẫu chuẩn và hiển thị ngay bản xem trước.

## 3. Bảng thiết kế ca kiểm thử sơ bộ (Test Cases)

| Mã TC | Chức năng kiểm tra | Dữ liệu đầu vào | Kết quả mong đợi | Trạng thái |
| :---: | :--- | :--- | :--- | :---: |
| **TC01** | Bấm nút "Dùng thử" | Click chuột vào nút | Điền tự động thông tin mẫu vào tất cả các ô, sinh bản xem trước ngay lập tức | Đã kiểm |
| **TC02** | Bấm nút "Đặt lại" | Form đang có dữ liệu | Form xóa trắng, bản xem trước trở về trạng thái thông báo mặc định | Đã kiểm |
| **TC03** | Bỏ trống trường bắt buộc | Để trống Họ tên hoặc Email | Hiện thông báo cảnh báo rõ ràng, không sinh hồ sơ lỗi | Đã kiểm |
| **TC04** | Nhập email sai chuẩn | `emailkhongdung` | Báo lỗi định dạng email không hợp lệ | Đã kiểm |
| **TC05** | Nhấn nút "In / Xuất PDF" | Hồ sơ đã sinh hợp lệ | Hộp thoại in của trình duyệt hiện ra, ẩn toàn bộ menu, nút bấm và form nhập | Đã kiểm |
| **TC06** | Bộ lọc sản phẩm | Chọn năm học "2025-2026" | Chỉ hiển thị các sản phẩm thuộc năm học đã chọn | Đã kiểm |
| **TC07** | Tìm kiếm không có kết quả | Từ khóa "xyz123" | Hiển thị thông báo "Không tìm thấy kết quả phù hợp", không bị crash | Đã kiểm |
| **TC08** | Kiểm tra Console | Thao tác toàn bộ luồng chính | Không có thông báo lỗi đỏ (Error) trong tab Console | Đã kiểm |

