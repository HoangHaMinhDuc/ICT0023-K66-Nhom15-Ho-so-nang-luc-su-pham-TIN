# Nguồn tham khảo và nhật ký tài nguyên
## 1. Tài liệu
- **Bootstrap 5.3.3:** https://getbootstrap.com/docs/5.3/ (truy cập: 15/10/2026)
- **jQuery 3.7.1:** https://api.jquery.com/ (truy cập: 15/10/2026)
- **MDN Web Docs (DOM, `addEventListener`, `window.print`):** https://developer.mozilla.org/
## 2. Mã tham khảo
Không sử dụng mã nguồn bên ngoài. Mã HTML/CSS/JS do nhóm tự viết; Bootstrap và jQuery nạp trực tiếp từ CDN (jsDelivr, cdnjs).

 ## 3. Ảnh & Dữ liệu
- **Phông chữ:** Be Vietnam Pro (Google Fonts), giấy phép SIL Open Font License.
- **Dữ liệu:** Thành viên, sản phẩm, kỹ năng, hỏi đáp do nhóm tự biên soạn. Dữ liệu thành viên là thông tin thực tế của các bạn trong nhóm và đã được đồng ý công bố.

 ### 3.1 Ảnh lấy từ mạng
| Tệp | Chỗ dùng | Nguồn | Tìm bằng | Giấy phép |
|---|---|---|---|---|
| `anhbia.jpg` | Ảnh bìa trang chủ (toàn cảnh Trường ĐH Tây Bắc, 1900×1124) | Ảnh "Điểm chuẩn Trường Đại học Tây Bắc 2026" trên trang Xây Dựng Chính Sách, Pháp Luật | Google Hình ảnh: "đại học tây bắc" | Minh họa học tập, phi thương mại |
| `bannerlienhe.jpg` | Đầu trang Liên hệ (biểu tượng thư, 736×736) | "Apple Mail icon" đăng trên Pinterest | Google Hình ảnh: "mail icon" | Minh họa học tập, phi thương mại |
| `bannertaohoso.jpg` | Đầu trang Tạo hồ sơ (mẫu CV, 375×272) | "Mẫu CV xin việc quán cafe – File Word & PDF" của Mauvanban.vn | Google Hình ảnh: "hồ sơ cv mẫu" | Mẫu CV chỉ chứa chữ giả (placeholder), không có thông tin cá nhân thực |

 ### 3.2 Ảnh nhóm tự chụp / tự thiết kế
| Tệp | Nội dung | Tác giả | Người trong ảnh đồng ý |
|---|---|---|---|
| `thanhvien1.jpg` … `thanhvien4.jpg` | Chân dung 4 thành viên | Nhóm tự chụp | Có (chính chủ) |
| `hoatdong1.jpg`, `hoatdong2.jpg`, `hoatdong3.jpg` | Giảng thử, thuyết trình, lập trình | Nhóm tự chụp | Có |
| `bannerthanhvien.jpg`, `bannerkynang.jpg` | Ảnh thành viên ở đầu trang Thành viên, Kỹ năng | Nhóm tự chụp | Có |
| `bannersanpham.jpg` | Ảnh tập thể ở đầu trang Sản phẩm | Nhóm tự chụp | Có |
| `sanpham1.jpg`, `sanpham5.jpg` | Poster/banner thiết kế | Nhóm | Có |
| `sanpham2.jpg`, `sanpham3.jpg`, `sanpham4.jpg`, `sanpham6.jpg` | Ảnh chụp màn hình sản phẩm web | Nhóm | Không có mặt người |
| `logo.jpg` | Logo "Thiết kế Web – Nhóm 15" | Nhóm (thiết kế qua Canva) | Không có mặt người |
| `placeholder.jpg` | Nền chờ khung ảnh | Nhóm tự vẽ SVG | Không có mặt người |
| `icondayhoc.jpg`, `iconlaptrinh.jpg`, `iconhoso.jpg`, `cvtrong.jpg` | Biểu tượng & ảnh minh họa | Nhóm tạo bằng AI (xem mục 4) & chỉnh màu | Không có mặt người |

## 4. Công cụ AI
| Công cụ | Ngày | Prompt chính | Tiếp nhận / loại bỏ | Cách kiểm chứng |
|---|---|---|---|---|
| ChatGPT / Gemini | Tạo biểu tượng sách–bút, hồ sơ, mã code theo màu xanh phấn/vàng | Nhận 4 ảnh minh họa `icondayhoc`, `iconlaptrinh`, `iconhoso`, `cvtrong`; loại bản không khớp bảng màu | Kiểm tra hiển thị thực tế 56×56 và thẻ `alt` |
| Claude (Anthropic) | Rà soát yêu cầu đề bài và viết lại `README.md`, `SOURCES.md`, `CONTRIBUTIONS.md` | Nhận khung và câu chữ tài liệu; loại các mô tả không có trong mã nguồn | Nhóm đối chiếu từng mục với mã nguồn và ảnh chụp màn hình |
| Notebooklm | Dà soát tài liệu
*Mã nguồn website do nhóm tự viết và hoàn thiện, AI chỉ hỗ trợ rà soát cấu trúc tài liệu và gợi ý giải pháp.*
