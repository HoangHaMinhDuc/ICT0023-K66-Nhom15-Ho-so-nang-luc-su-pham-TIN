# Quy trình Git
  ## Quy tắc
- Repo Public `ICT0023-K66-Nhom15-HoSoNangLucSuPhamTin`; mỗi người dùng tài khoản GitHub riêng.
- Mỗi việc là một issue; làm trên branch riêng, ví dụ `feat/loc-san-pham`, `fix/menu-mobile`.
- Hợp nhất vào `main` bằng Pull Request, **có người khác review** (không tự duyệt PR của mình).
- Commit nhỏ, đúng nội dung: `feat: thêm bộ lọc sản phẩm`, `fix: sửa menu trên điện thoại`, `docs: bổ sung SOURCES`.
- Không commit rỗng, không chia vụn để tăng số lượng; không `push --force`, không viết lại lịch sử.
  ## Năm mốc phiên bản
| Tag | Mốc |
|---|---|
| `v0.1-y-tuong` | Ý tưởng, người dùng, cấu trúc trang |
| `v0.2-html` | 6 trang HTML có ngữ nghĩa, menu chung |
| `v0.3-giao-dien` | CSS ngoài, Bootstrap, responsive |
| `v0.4-tuong-tac` | Ba chức năng JS + jQuery |
| `v1.0-final` | Bản nộp: kiểm thử xong, tài liệu đủ |

git tag -a v0.1-y-tuong -m "Ý tưởng và cấu trúc"
git push origin main --tags
```
Đặt tag đúng lúc hoàn thành từng mốc, không đặt dồn một lần.

## GitHub Pages
Settings → Pages → Deploy from a branch → `main` / root. Dán URL vào About và README.md.

## Trước khi nộp
Mở repo, Pages và video ở cửa sổ ẩn danh; kiểm tra không có mật khẩu/token trong lịch sử commit.
