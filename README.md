# Hồ sơ năng lực nhóm sinh viên sư phạm Tin (Nhóm 15)

Bài tập lớn học phần ICT0023 – Thiết kế Web, lớp K66 ĐHSP Tin học, Trường Đại học Tây Bắc. Giảng viên hướng dẫn: Nguyễn Duy Hiếu.
Website tĩnh dùng HTML, CSS, Bootstrap 5.3, JavaScript, jQuery 3.7; chạy hoàn toàn trên trình duyệt, không backend.

- **Repository:** https://hoanghaminhduc.github.io/ICT0023-K66-Nhom15-Ho-so-nang-luc-su-pham-TIN/
- **Website (GitHub Pages):** https://hoanghaminhduc.github.io/ICT0023-K66-Nhom15-Ho-so-nang-luc-su-pham-TIN/
- **Người dùng:** sinh viên sư phạm Tin chuẩn bị thực tập và nơi tuyển dụng/thực tập xem nhanh năng lực của nhóm.
- **Nhu cầu nhỏ công cụ giải quyết:** nhập thông tin cá nhân, xem trước và in hồ sơ một trang A4 ngay trên trình duyệt.

## Thành viên
| Họ tên | GitHub | Vai trò | Nhiệm vụ chính |
|---|---|---|---|
| Khúc Trọng Nam | namkt.k66sptin@utb.edu.vn | Nhóm trưởng, Driver | Dựng khung giao diện, thiết lập quy trình Git, đảm bảo mã chạy ổn định |
| Ngô Thuỳ Ngân | ngannt.k66sptin@utb.edu.vn | Tester | Kiểm thử giao diện, responsive, chính tả; rà soát nội dung |
| Hoàng Hà Minh Đức | HoangHaMinhDuc | Coodinator | Lập kế hoạch tiến độ, chia việc, kết nối thành viên |
| Hà Tuấn Hưng | hunght.k66sptin@utb.edu.vn | Navigator | Chỉ dẫn, cảnh báo rủi ro, kiểm định chất lượng |

Chi tiết từng người, issue/PR: xem `CONTRIBUTIONS.md`.

## Cấu trúc website (6 trang dùng chung menu và chân trang)
| Trang | Nội dung |
|---|---|
| `index.html` | Trang chủ: giới thiệu nhóm, 3 thẻ "Nhóm làm gì?", số liệu, ảnh hoạt động |
| `thanhvien.html` | Hồ sơ 6 thành viên mẫu: tìm kiếm, lọc, cửa sổ chi tiết (modal) |
| `sanpham.html` | 6 sản phẩm: tìm kiếm, lọc theo loại/kỹ năng, sắp xếp, modal chi tiết |
| `kynang.html` | Bảng 8 kỹ năng (bấm tiêu đề cột để sắp xếp) và 8 câu hỏi đáp (accordion, tìm bằng jQuery) |
| `congcu.html` | **Công cụ tương tác:** Tạo hồ sơ nhanh, xem trước tức thời, in |
| `lienhe.html` | Form liên hệ, kiểm tra dữ liệu, xem trước lời nhắn (không gửi đi đâu) |

Thư mục: `css/style.css` · `js/data.js` (dữ liệu mẫu) · `js/main.js` (xử lý) · `image/` (ảnh, đuôi `.jpg`).

## Ba chức năng bắt buộc
1. **Render từ mảng đối tượng:** `MEMBERS`, `PRODUCTS`, `SKILLS`, `FAQS`, `GALLERY` trong `js/data.js`; vẽ ra trang bằng `showMembers`, `showProducts`, `showSkills`, `showFaqs`, `initGallery`.
2. **Tìm kiếm, lọc, sắp xếp:** `initMembers`, `initProducts` (tìm + lọc + sắp xếp), `sortSkills`, `filterFaq` (jQuery).
3. **Kiểm tra form và kết quả tức thời:** `validateCv`, `renderCv` (số năm kinh nghiệm = năm hiện tại − năm bắt đầu, độ hoàn thiện hồ sơ %, hồ sơ xem trước, in) và `submitContact`.

**Dùng thử / Đặt lại:** `fillCvSample`, `resetCv`, `fillContactSample`, `resetContact`.
**Trường hợp biên đã xử lý:** để trống; năm sai định dạng hoặc ngoài khoảng 2000–năm hiện tại; quá 8 kỹ năng; không tìm thấy kết quả (thông báo rỗng); lời nhắn quá ngắn.

## jQuery dùng ở đâu
- `filterFaq` (`kynang.html`): `$(".faq-item").each` + `.toggle(hit)` lọc hỏi đáp; `$("#faq-search").on("input")`.
- `updateProgress` (`congcu.html`): `.css`, `.text`, `.attr` cập nhật thanh tiến độ.

## Ràng buộc đã tuân thủ
Không backend, không đăng nhập/thanh toán, không `localStorage`/cookie; dữ liệu nhập chỉ nằm trong phiên đang mở và mất khi tải lại. Ảnh có `alt`, form có `label`, có liên kết "Bỏ qua điều hướng" và dùng được bằng bàn phím.

## Phiên bản (tag)
`v0.1-y-tuong` · `v0.2-html` · `v0.3-giao-dien` · `v0.4-tuong-tac` · `v1.0-final` (không viết lại lịch sử).

## Hạn chế
- Không lưu dữ liệu nên hồ sơ phải in/lưu PDF ngay.
- Chưa có chế độ tối; ảnh một số trang còn nặng (xem `SOURCES.md`).
- Nhập CSV không làm (phần mở rộng tự chọn).

## Tài liệu liên quan
`SOURCES.md` (nguồn, AI) · `CONTRIBUTIONS.md` (đóng góp).
