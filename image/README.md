# Thư mục ảnh (Nhóm 15)

**Quy ước:** mọi ảnh trong thư mục này đều đặt tên liền, không dấu, không gạch nối, đuôi .jpg; Đường dẫn được viết thẳng trong HTML. 

Hiện các ảnh minh họa của nhóm (bìa, sản phẩm, hoạt động, banner, icon) đã được xuất sang `.jpg`; ảnh thành viên 1–4 và `logo.jpg` là ảnh thật.

| Tên tệp | Chỗ dùng | Ảnh thật nên là | Tỉ lệ |
|---|---|---|---|
| `anhbia.jpg` | đầu trang chủ | Ảnh nhóm hoặc bàn làm việc của nhóm | 3:2 (720x480) |
| `herobg.jpg` (tùy chọn) | nền phần đầu trang chủ | Ảnh rộng, ít chi tiết bên trái; không có tệp thì trang bỏ qua | 16:9 (1920x1080) |
| `thanhvien1.jpg` … `thanhvien4.jpg` | trang Thành viên (khớp `id` trong `MEMBERS`) | Chân dung từng bạn (khi được đồng ý) | vuông |
| `sanpham1.jpg` … `sanpham8.jpg` | trang Sản phẩm (thẻ và cửa sổ chi tiết) | Ảnh chụp màn hình/ảnh sản phẩm tương ứng trong `PRODUCTS` | 16:9 |
| `hoatdong1.jpg` … `hoatdong3.jpg` | trang chủ, mục "Nhóm trong hoạt động" | Ảnh họp nhóm, thực hành, giảng thử | 16:9 |
| `bannerthanhvien.jpg`, `bannersanpham.jpg`, `bannerkynang.jpg`, `bannertaohoso.jpg`, `bannerlienhe.jpg` | đầu từng trang | Ảnh minh họa tương ứng | 8:5 (480x300) |
| `icondayhoc.jpg`, `iconlaptrinh.jpg`, `iconhoso.jpg` | ba thẻ "Nhóm làm gì?" ở trang chủ | Ảnh/biểu tượng đại diện cho từng mảng việc | hiển thị 56x56 |
| `cvtrong.jpg` | trạng thái trống của trang Tạo hồ sơ | Ảnh minh họa tờ hồ sơ mẫu | 3:2 (240x160) |
| `logo.jpg` | menu (trang chủ) và favicon | Logo nhóm (giữ tên tệp) | vuông |
| `placeholder.jpg` | nền chờ của khung ảnh sản phẩm (`css/style.css`) | Ảnh nền trung tính | 16:9 |

Chữ mô tả (`alt`) của từng ảnh nằm ở `MEMBER_ALT`, `PRODUCT_ALT`, `GALLERY` trong `js/data.js` và trong thuộc tính `alt` của thẻ `<img>` ở các trang HTML. Riêng `cvtrong` có `alt` ở **hai chỗ**: `congcu.html` và hằng `CV_EMPTY` trong `js/main.js` (hiện khi bấm Đặt lại), hãy sửa cả hai. Ba `icon*` có `alt` trong `index.html`. Khi đổi ảnh, hãy sửa `alt` cho đúng nội dung ảnh mới.

## Quy tắc
1. Chỉ dùng ảnh nhóm tự chụp/tự vẽ hoặc có giấy phép; ghi từng ảnh vào `SOURCES.md`. Không dùng ảnh người mẫu hay ảnh stock chưa kiểm tra giấy phép.
2. Ảnh có người phải được người đó đồng ý. Không dùng ảnh học sinh thật.
3. Mỗi ảnh dưới 300 KB. Nén và xóa vị trí GPS: `python tools/toi-uu-anh.py anh-goc image` (cần `pip install pillow`; công cụ phân loại kích thước theo thư mục con nên với cấu trúc phẳng này dùng chung một mức 1920px).
