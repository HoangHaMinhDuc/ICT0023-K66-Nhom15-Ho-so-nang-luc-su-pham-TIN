# KẾ HOẠCH KIỂM THỬ (TEST PLAN) - NHÓM 15
Chủ đề: Hồ sơ năng lực nhóm sinh viên Sư phạm Tin Học (Nhóm 15) /
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


# KẾ HOẠCH KIỂM THỬ (TEST PLAN) - GIAI ĐOẠN v0.1
Dự án: Hồ sơ năng lực nhóm sinh viên Sư phạm Tin Học (Nhóm 15)
Người lập: Tester

## 1. Chuẩn hóa dữ liệu tĩnh đầu vào
- **Tài nguyên ảnh đại diện:** 4 ảnh chân dung tỉ lệ vuông 1:1, lưu tại thư mục `images/`.
- **Trích ngang kỹ năng:** Đã chuẩn hóa danh sách kỹ năng chuyên môn và vai trò 4 thành viên để nạp vào `data.js` và `thanh-vien.html`.

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
  - Thao tác: Nhập email không chứa ký tự `@` hoặc không có tên miền (ví dụ: `nguyenvana`).
  - Kết quả mong đợi: Hiển thị thông báo yêu cầu nhập đúng định dạng email.
* **TC-06 (Biên 3 - Số điện thoại không hợp lệ):**
  - Thao tác: Nhập số điện thoại chứa ký tự chữ cái hoặc độ dài khác 10 số (ví dụ: `098abc`, `12345`).
  - Kết quả mong đợi: Hệ thống cảnh báo không hợp lệ.
* **TC-07 (Biên 4 - Chuỗi văn bản cực dài):**
  - Thao tác: Dán đoạn văn bản hơn 1.000 ký tự vào ô Kỹ năng hoặc Mục tiêu.
  - Kết quả mong đợi: Khung hiển thị hồ sơ tự động xuống dòng, không làm vỡ bố cục giao diện hay tràn viền trang web.

# KẾ HOẠCH KIỂM THỬ GIAI ĐOẠN v0.2:

## 1. Kết quả kiểm thử giao diện & Tiêu chuẩn mã (Accessibility & W3C)
- **Điều hướng bằng bàn phím:**
  - Sử dụng phím `Tab` và `Shift + Tab` di chuyển tuần tự qua toàn bộ thanh Navbar và các khối nội dung.
  - Trạng thái `:focus` hiển thị viền rõ ràng, không bị mất tiêu điểm.
  - Phím `Enter` kích hoạt chính xác các liên kết chuyển trang.
- **Kiểm tra chuẩn HTML (W3C Validator):**
  - Đã kiểm tra tệp `skills.html` qua validator.w3.org.
  - Kết quả: Đạt chuẩn cú pháp HTML5, không có lỗi thẻ (Error), đảm bảo đầy đủ thuộc tính `alt` cho ảnh và phân cấp tiêu đề `h1`, `h2` hợp lệ.

## 2. Báo cáo kiểm thử Responsive & Bố cục giao diện (F12 Device Toolbar)
- **Thiết bị & Kích thước kiểm thử:**
  - Mobile: 375px (iPhone 17e/14 ProMax/Xiao mi)
  - Tablet: 768px (iPad Mini/Air)
  - Desktop: >= 1200px
- **Kết quả rà soát:**
  - Đã kiểm tra tính co giãn của thanh điều hướng (Navbar Toggle), hệ thống lưới Bootstrap (Grid System) và thanh cuộn ngang.
  - Danh sách điểm cần tinh chỉnh đã được bàn giao cho Navigator xử lý theo bảng ghi nhận.

# KẾ HOẠCH KIỂM THỬ GIAI ĐOẠN v0.3:
## 1. Báo cáo kiểm thử tương thích trình duyệt & Tính khả đọc CSS
- **Môi trường thử nghiệm:**
  - Trình duyệt: Google Chrome, Microsoft Edge, Cốc Cốc.
  - Chế độ: Đã kiểm tra trên Chế độ ẩn danh (Incognito/InPrivate) để loại trừ cache và tiện ích mở rộng.
- **Kết quả kiểm tra CSS & Khả năng đọc (Readability):**
  - **Độ tương phản:** Màu chữ và nền đạt yêu cầu thị giác, không có hiện tượng chữ chìm vào nền.
  - **Bố cục văn bản:** Kích thước font chữ rõ ràng, khoảng cách dòng hợp lý, văn bản tự động xuống dòng không bị tràn khung viền thẻ card.
  - **Tương thích:** Toàn bộ thành phần Bootstrap và CSS tùy biến hiển thị đồng nhất, không phát sinh lỗi lệch giao diện giữa các trình duyệt.

## 2. Thiết kế bộ ca kiểm thử đặc biệt cho Form (Edge Cases)
| STT | Tên ca kiểm thử | Loại dữ liệu | Dữ liệu thử nghiệm (Input) | Kết quả mong đợi (Expected Output) |
| :---: | :--- | :--- | :--- | :--- |
| **TC-EDGE-01** | Bỏ trống bắt buộc | Dữ liệu rỗng | Không nhập Họ tên, Email | Báo lỗi cảnh báo trường bắt buộc, không cho phép gửi dữ liệu. |
| **TC-EDGE-02** | Chuỗi ký tự cực dài | Độ dài biên (Boundary) | Nhập chuỗi 500 ký tự vào ô Tóm tắt bản thân / Mục tiêu | Khung preview tự động xuống dòng (word-wrap), không tràn vỡ thẻ card. |
| **TC-EDGE-03** | Chống mã độc XSS | Ký tự đặc biệt (Security) | `<script>alert('XSS')</script>`, `<b>Test</b>`, `@#$%^&*()` | Hiển thị dưới dạng chuỗi văn bản an toàn (escaped text), không thực thi mã lệnh HTML/JS. |
| **TC-EDGE-04** | Sai định dạng Email | Giá trị không hợp lệ | `abc@`, `abc.com`, `abc@gmail` (thiếu phần mở rộng domain) | Trình duyệt kích hoạt cảnh báo sai chuẩn email. |
| **TC-EDGE-05** | Số điện thoại chứa ký tự | Định dạng số | `0987abc123`, `098-765-432` | Báo lỗi định dạng chỉ chấp nhận đúng 10 chữ số tiêu chuẩn. |

# KẾ HOẠCH KIỂM THỬ GIAI ĐOẠN v0.4:
## 1. Bảng ca kiểm thử chi tiết (Test Matrix) & Minh chứng xử lý lỗi

### 1.1. Ma trận ca kiểm thử (Test Matrix)
| Mã ca (ID) | Chức năng kiểm thử | Loại kiểm thử | Dữ liệu đầu vào (Input) | Các bước thực hiện | Kết quả mong đợi (Expected Output) | Trạng thái |
| :---: | :--- | :--- | :--- | :--- | :--- | :---: |
| **TM-01** | Điền mẫu tự động | Chức năng chính | Bấm nút "Dùng thử" | 1. Mở trang tạo hồ sơ.<br>2. Bấm nút "Dùng thử". | Các ô nhập liệu tự động điền giá trị chuẩn; thanh tiến độ nhảy % tương ứng. | **Pass** |
| **TM-02** | Xóa sạch form | Chức năng chính | Bấm nút "Đặt lại" | 1. Form đang có thông tin.<br>2. Bấm nút "Đặt lại". | Toàn bộ các ô nhập liệu xóa trắng, khung xem trước quay về trạng thái rỗng ban đầu. | **Pass** |
| **TM-03** | In hồ sơ dạng in | Chức năng chính | Bấm nút "In hồ sơ" | 1. Điền đủ hồ sơ hợp lệ.<br>2. Bấm nút "In hồ sơ". | Hộp thoại in trình duyệt kích hoạt; ẩn thanh điều hướng, footer và cột nhập liệu (`no-print`). | **Pass** |
| **TM-EDGE-01** | Để trống trường bắt buộc | **Trường hợp biên 1** | Bỏ trống ô Họ tên hoặc Email | 1. Để trống thông tin.<br>2. Bấm "Tạo hồ sơ". | Hiển thị cảnh báo viền đỏ, chặn không cho tạo hồ sơ rỗng. | **Pass** |
| **TM-EDGE-02** | Chuỗi ký tự vượt giới hạn | **Trường hợp biên 2** | Nhập chuỗi 300 ký tự vào ô "Mục tiêu" | 1. Nhập văn bản rất dài.<br>2. Bấm tạo hồ sơ. | Tự động bẻ dòng hợp lý (word-wrap), không làm tràn hay vỡ khung thẻ in. | **Pass** |
| **TM-EDGE-03** | Chống mã độc kịch bản XSS | **Trường hợp biên 3** | Nhập `<script>alert('XSS')</script>` vào Họ tên | 1. Dán mã kịch bản vào form.<br>2. Bấm tạo hồ sơ. | Nội dung xử lý dạng chuỗi ký tự thuần túy, không kích hoạt hộp thoại script. | **Pass** |
| **TM-EDGE-04** | Giá trị số không hợp lệ | **Trường hợp biên 4** | Nhập số sản phẩm là `-3` hoặc năm `2099` | 1. Nhập số âm hoặc năm tương lai.<br>2. Bấm tạo hồ sơ. | Bắt lỗi dữ liệu, thông báo yêu cầu nhập số nguyên dương hợp lệ. | **Pass** |

### 1.2. Minh chứng hình ảnh lỗi trước và sau khi xử lý
- **Trước khi xử lý:** Form không kiểm tra dữ liệu rỗng, bấm tạo hồ sơ không có bất kỳ thông báo lỗi nào.
![Lỗi trước khi xử lý](loi-form-truoc-khi-validate.jpg)
- **Sau khi xử lý:** Hệ thống đã bắt lỗi tính hợp lệ (Validation), xuất hiện viền đỏ và thông báo nhắc nhở người dùng nhập liệu.
![Đã xử lý lỗi](form-da-xu-ly-validate.jpg).

# TỔNG KẾT KIỂM THỬ CHẤT LƯỢNG & ĐÁNH GIÁ ĐỘ ỔN ĐỊNH HỆ THỐNG
## I. TỔNG HỢP TOÀN BỘ KẾT QUẢ KIỂM THỬ (TEST MATRIX)

Hệ thống đã trải qua kiểm thử toàn diện từ giai đoạn xây dựng khung tĩnh đến tích hợp chức năng tương tác trên trang `congcu.html` và các trang vệ tinh (`index.html`, `thanhvien.html`, `kynang.html`, `sanpham.html`, `lienhe.html`):

| Mã ca (ID) | Hạng mục kiểm thử | Kịch bản kiểm thử | Dữ liệu đầu vào (Input) | Kết quả mong đợi (Expected Output) | Trạng thái |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **TC-01** | Điều hướng bàn phím | Kiểm thử phím Tab, Shift + Tab, Enter | Phím điều hướng tiêu chuẩn | Tiêu điểm (:focus) hiển thị rõ ràng, di chuyển tuần tự qua menu, không bị kẹt phím | **ĐẠT (PASS)** |
| **TC-02** | Cú pháp HTML5 (W3C) | Kiểm tra qua validator.w3.org | Toàn bộ mã nguồn các trang | 0 lỗi Error, phân cấp tiêu đề h1-h3 hợp lý, 100% thẻ img có thuộc tính alt | **ĐẠT (PASS)** |
| **TC-03** | Co giãn Responsive | F12 Device Toolbar (375px, 768px, 1200px) | Kích thước Mobile, Tablet, PC | Navbar thu gọn nút 3 gạch mượt mà, lưới Bootstrap chia cột chuẩn, không tràn ngang | **ĐẠT (PASS)** |
| **TC-04** | Tương thích trình duyệt | Chrome, Edge, Cốc Cốc & Ẩn danh | Cache trống (Incognito) | CSS tải đầy đủ, độ tương phản màu tốt, font chữ chuẩn, không gián đoạn trải nghiệm | **ĐẠT (PASS)** |
| **TC-05** | Nút "Dùng thử" | Điền mẫu tự động vào Form | Bấm nút `#cv-sample` | Tự động điền đầy đủ 8 trường dữ liệu mẫu hợp lệ, thanh tiến độ cập nhật tức thì | **ĐẠT (PASS)** |
| **TC-06** | Nút "Đặt lại" | Xóa trắng form hồ sơ | Bấm nút `#cv-reset` | Xóa sạch các trường nhập liệu, khung xem trước (preview) quay về trạng thái rỗng ban đầu | **ĐẠT (PASS)** |
| **TC-07** | Nút "In hồ sơ" | Chức năng in ấn dạng bản cứng | Bấm nút `#cv-print` | Bật hộp thoại `window.print()`, CSS `@media print` ẩn navbar/footer/form (`no-print`) | **ĐẠT (PASS)** |
| **TC-EDGE-01** | Ngoại lệ: Dữ liệu rỗng | Bỏ trống các trường bắt buộc | Nhấn "Tạo hồ sơ" khi form trống | Cảnh báo viền đỏ (`is-invalid`), hiển thị hộp thoại thông báo lỗi, chặn tạo hồ sơ rỗng | **ĐẠT (PASS)** |
| **TC-EDGE-02** | Ngoại lệ: Chuỗi quá dài | Kiểm tra độ dài biên văn bản | Nhập > 300 ký tự vào ô Mục tiêu | Tự động ngắt dòng hợp lý (`word-wrap`), không làm tràn vỡ khung viền thẻ in A4 | **ĐẠT (PASS)** |
| **TC-EDGE-03** | Ngoại lệ: Mã độc XSS | Kiểm tra an toàn ký tự đặc biệt | Nhập `<script>alert('XSS')</script>` | Hiển thị chuỗi văn bản thuần (plain text), mã độc không bị kích hoạt thực thi | **ĐẠT (PASS)** |
| **TC-EDGE-04** | Ngoại lệ: Số âm / Phi lý | Kiểm tra miền giá trị số | Nhập số sản phẩm là -5, năm 1800 | Bắt lỗi định dạng số nguyên dương hợp lệ, yêu cầu người dùng chỉnh sửa | **ĐẠT (PASS)** |

## II. HÌNH ẢNH MINH CHỨNG XỬ LÝ LỖI (TRƯỚC & SAU KHI CAN THIỆP)

### 1. Minh chứng xử lý lỗi kiểm tra tính hợp lệ dữ liệu (Form Validation)
- **Trước khi xử lý (Lỗi):** Người dùng bấm nút "Tạo hồ sơ" khi chưa điền dữ liệu, form không đưa ra phản hồi hay viền đỏ cảnh báo nào, dẫn tới khung xem trước bị rỗng.  
  *(Chèn ảnh: `loi-form-truoc-khi-validate.jpg` minh họa form trống không có phản hồi)*
- **Sau khi xử lý (Khắc phục hoàn toàn):** Đã tích hợp kiểm tra dữ liệu qua Bootstrap (`novalidate`, `invalid-feedback`, `is-invalid`). Khi để trống, các ô viền đỏ rực và thông báo lỗi hiển thị rõ ràng.  
  *(Chèn ảnh: `form-da-xu-ly-validate.jpg` minh họa viền đỏ và thông báo lỗi)*

### 2. Minh chứng kiểm thử Responsive & Chế độ in (Print Preview)
- **Minh chứng giao diện co giãn:** Ảnh chụp chế độ giả lập điện thoại (375px) hiển thị menu hamburger và bố cục dọc không bị vỡ.
- **Minh chứng chế độ in:** Ảnh chụp hộp thoại Print Preview thể hiện tờ hồ sơ ngay ngắn, các thành phần thừa trên website đã được ẩn gọn gàng bằng lớp CSS `.no-print`.

## III. ĐÁNH GIÁ ĐỘ ỔN ĐỊNH VÀ CÁC TRƯỜNG HỢP NGOẠI LỆ ĐÃ XỬ LÝ

### 1. Đánh giá độ ổn định của hệ thống (System Stability)
- **Hoạt động hoàn toàn Client-Side:** Website không sử dụng cơ sở dữ liệu hay lưu trữ cục bộ ngoài quy định (`localStorage`/`sessionStorage`), đảm bảo tính bảo mật và độc lập cao; mỗi phiên mở trang đều khởi tạo dữ liệu mới sạch sẽ.
- **Tốc độ phản hồi & Tương tác DOM:** Thao tác cập nhật khung xem trước và thanh tiến độ hoàn thành ngay tức thì (< 0.1 giây), không xuất hiện hiện tượng giật lag hay treo trang.
- **Độ tin cậy của mã nguồn (Clean Console):** Kiểm tra toàn diện trên Developer Console (F12) qua tất cả các trang, không ghi nhận bất kỳ cảnh báo đỏ nào (0 JavaScript Errors / Uncaught Exceptions).

### 2. Các trường hợp ngoại lệ (Edge Cases & Exceptions) đã xử lý thành công
1. **Ngoại lệ dữ liệu trống (Empty Input Handling):** Cơ chế xác thực chặn ngay lập tức hành vi gửi form rỗng, hướng dẫn người dùng nhập đúng các trường thông tin bắt buộc.
2. **Ngoại lệ xung đột giao diện in ấn (Print Media Queries):** Xử lý triệt để tình trạng tiêu đề trang web, thanh menu và các nút bấm bị in ra giấy làm mất thẩm mỹ tờ hồ sơ cá nhân nhờ cơ chế `.no-print`.
3. **Ngoại lệ ký tự đặc biệt & Bảo mật (XSS Prevention):** Dữ liệu chuỗi nhập từ form khi truyền sang khung xem trước được gán qua cơ chế an toàn (`textContent`), vô hiệu hóa hoàn toàn nguy cơ chèn mã kịch bản gây hại.
4. **Ngoại lệ ảnh tải lên (File Handling):** Thuộc tính `accept="image/*"` giới hạn đúng định dạng ảnh; cơ chế đọc file cục bộ qua `FileReader` hiển thị ảnh xem trước an toàn mà không cần đẩy lên máy chủ.
