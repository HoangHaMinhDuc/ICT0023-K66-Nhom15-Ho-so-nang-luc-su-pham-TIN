# KẾ HOẠCH KIỂM THỬ (TEST PLAN) - NHÓM 15
Chủ đề: Hồ sơ năng lực nhóm sinh viên Sư phạm Tin Học
Người thực hiện: Tester

---

## 1. Mục tiêu kiểm thử
- Đảm bảo website hoạt động ổn định trên trình duyệt máy tính và điện thoại.
- Kiểm tra tính đúng đắn của công cụ sinh hồ sơ cá nhân (form validate, in/PDF, nút dùng thử, nút đặt lại).
- Đảm bảo không phát sinh lỗi trong Developer Console (0 console error) ở luồng sử dụng chính.
- Thử nghiệm đầy đủ ít nhất 3 trường hợp biên theo yêu cầu bài tập lớn.

---

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

---

## 3. Bảng thiết kế ca kiểm thử sơ bộ (Test Cases)

| Mã TC | Chức năng kiểm tra | Dữ liệu đầu vào | Kết quả mong đợi | Trạng thái |
| :---: | :--- | :--- | :--- | :---: |
| **TC01** | Bấm nút "Dùng thử" | Click chuột vào nút | Điền tự động thông tin mẫu vào tất cả các ô, sinh bản xem trước ngay lập tức | Chưa kiểm |
| **TC02** | Bấm nút "Đặt lại" | Form đang có dữ liệu | Form xóa trắng, bản xem trước trở về trạng thái thông báo mặc định | Chưa kiểm |
| **TC03** | Bỏ trống trường bắt buộc | Để trống Họ tên hoặc Email | Hiện thông báo cảnh báo rõ ràng, không sinh hồ sơ lỗi | Chưa kiểm |
| **TC04** | Nhập email sai chuẩn | `emailkhongdung` | Báo lỗi định dạng email không hợp lệ | Chưa kiểm |
| **TC05** | Nhấn nút "In / Xuất PDF" | Hồ sơ đã sinh hợp lệ | Hộp thoại in của trình duyệt hiện ra, ẩn toàn bộ menu, nút bấm và form nhập | Chưa kiểm |
| **TC06** | Bộ lọc sản phẩm | Chọn năm học "2025-2026" | Chỉ hiển thị các sản phẩm thuộc năm học đã chọn | Chưa kiểm |
| **TC07** | Tìm kiếm không có kết quả | Từ khóa "xyz123" | Hiển thị thông báo "Không tìm thấy kết quả phù hợp", không bị crash | Chưa kiểm |
| **TC08** | Kiểm tra Console | Thao tác toàn bộ luồng chính | Không có thông báo lỗi đỏ (Error) trong tab Console | Chưa kiểm |

# KẾ HOẠCH KIỂM THỬ (TEST PLAN) - GIAI ĐOẠN v0.1
Dự án: Hồ sơ năng lực nhóm sinh viên Sư phạm Tin Học (Nhóm 15)
Người lập: Tester

---

## 1. Chuẩn hóa dữ liệu tĩnh đầu vào
- **Tài nguyên ảnh đại diện:** 4 ảnh chân dung tỉ lệ vuông 1:1, lưu tại thư mục `images/`.
- **Trích ngang kỹ năng:** Đã chuẩn hóa danh sách kỹ năng chuyên môn và vai trò 4 thành viên để nạp vào `data.js` và `thanh-vien.html`.

---

## 2. Danh mục các trường dữ liệu Form tạo hồ sơ cá nhân (`cong-cu.html`)
| STT | Tên trường | Thuộc tính ID | Kiểu dữ liệu | Bắt buộc | Tiêu chí hợp lệ |
| :---: | :--- | :--- | :---: | :---: | :--- |
| 1 | Họ và tên | `input-hoten` | Text | Có | Độ dài 2 - 50 ký tự, không chứa số/kỳ tự lạ |
| 2 | Vị trí / Chức danh | `input-chucdanh` | Text | Có | Độ dài 5 - 50 ký tự (Gợi ý: Sinh viên Sư phạm Tin) |
| 3 | Email | `input-email` | Email | Có | Định dạng chuẩn name@gmail.com |
| 4 | Số điện thoại | `input-sdt` | Tel | Có | 10 số, bắt đầu bằng chữ số 0 |
| 5 | Quê quán / Địa chỉ | `input-diachi` | Text | Không | Cho phép để trống |
| 6 | Mục tiêu nghề nghiệp | `input-muctieu` | Textarea | Có | Đoạn văn ngắn 20 - 200 từ |
| 7 | Kỹ năng nổi bật | `input-kynang` | Textarea | Có | Ngăn cách bằng dấu phẩy |
| 8 | Quá trình học tập | `input-hocvan` | Textarea | Có | Tối thiểu ghi thông tin lớp, ngành, trường |

---

## 3. Bộ ca kiểm thử (Test Cases) cho giai đoạn nhập liệu Form

### Nhóm 1: Kiểm thử các nút tính năng tương tác
* **TC-01 (Nút "Dùng thử"):**
  - Thao tác: Bấm nút "Dùng thử" khi form đang rỗng.
  - Kết quả mong đợi: Toàn bộ 8 trường dữ liệu được tự động điền giá trị mẫu từ `data.js`; khung xem trước cập nhật ngay lập tức; Console không báo lỗi.
* **TC-02 (Nút "Đặt lại"):**
  - Thao tác: Bấm nút "Đặt lại" khi form đang có dữ liệu.
  - Kết quả mong đợi: Toàn bộ ô nhập liệu xóa sạch về chuỗi rỗng; khung xem trước trở về trạng thái placeholder ban đầu; Console không báo lỗi.
* **TC-03 (Nút "In / Xuất PDF"):**
  - Thao tác: Bấm nút "In hồ sơ".
  - Kết quả mong đợi: Cửa sổ `window.print()` mở ra; CSS `@media print` ẩn menu, chân trang và form nhập liệu; chỉ hiển thị vùng hồ sơ.

### Nhóm 2: Kiểm thử các trường hợp biên & Ràng buộc dữ liệu
* **TC-04 (Biên 1 - Bỏ trống trường bắt buộc):**
  - Thao tác: Để trống các trường bắt buộc (ví dụ Họ tên hoặc Email) và bấm tạo hồ sơ.
  - Kết quả mong đợi: Trình duyệt kích hoạt cảnh báo hợp lệ HTML5/JS (báo đỏ ô trống), không cho phép sinh hồ sơ rỗng.
* **TC-05 (Biên 2 - Định dạng Email sai):**
  - Thao tác: Nhập email không chứa ký tự `@` hoặc không có tên miền (ví dụ: `ngannguyen`).
  - Kết quả mong đợi: Hiển thị thông báo yêu cầu nhập đúng định dạng email.
* **TC-06 (Biên 3 - Số điện thoại không hợp lệ):**
  - Thao tác: Nhập số điện thoại chứa ký tự chữ cái hoặc độ dài khác 10 số (ví dụ: `098abc`, `12345`).
  - Kết quả mong đợi: Hệ thống cảnh báo không hợp lệ.
* **TC-07 (Biên 4 - Chuỗi văn bản cực dài):**
  - Thao tác: Dán đoạn văn bản hơn 1.000 ký tự vào ô Kỹ năng hoặc Mục tiêu.
  - Kết quả mong đợi: Khung hiển thị hồ sơ tự động xuống dòng, không làm vỡ bố cục giao diện hay tràn viền trang web.
---

## 4. Kết quả kiểm thử giao diện & Tiêu chuẩn mã (Accessibility & W3C)
- **Điều hướng bằng bàn phím:**
  - Sử dụng phím `Tab` và `Shift + Tab` di chuyển tuần tự qua toàn bộ thanh Navbar và các khối nội dung.
  - Trạng thái `:focus` hiển thị viền rõ ràng, không bị mất tiêu điểm.
  - Phím `Enter` kích hoạt chính xác các liên kết chuyển trang.
- **Kiểm tra chuẩn HTML (W3C Validator):**
  - Đã kiểm tra tệp `skills.html` qua validator.w3.org.
  - Kết quả: Đạt chuẩn cú pháp HTML5, không có lỗi thẻ (Error), đảm bảo đầy đủ thuộc tính `alt` cho ảnh và phân cấp tiêu đề `h1`, `h2` hợp lệ.
