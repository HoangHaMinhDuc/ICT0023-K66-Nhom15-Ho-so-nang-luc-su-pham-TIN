# Ma trận kiến thức 

Tên hàm/biến lấy từ `js/main.js` và `js/data.js`.

| Kiến thức | Vị trí |
|---|---|
| Biến, `const`/`let` | `main.js`: `YEAR`, `EMAIL`, `CV_IDS`, `MSG_MIN`, `MSG_MAX` (const); `skillKey`, `skillDir` (let) |
| Kiểu dữ liệu | Số (`Number(v["t-start"])`, `skillDir`), chuỗi (`kw`), boolean (`hit`), mảng (`MEMBERS`), đối tượng (từng phần tử `PRODUCTS`), regex (`EMAIL`) |
| Toán tử | `validateCv`: `\|\|`, `!`, `<`, `>`; `renderCv`: `Math.max(0, YEAR - Number(...))`; `updateProgress`: `/`, `*`, `Math.round`; `showProducts`: `&&` |
| Cấu trúc điều khiển | `if/else` trong `validateCv`, `submitContact`, `choosePhoto`; toán tử `? :` trong `sortSkills` |
| Vòng lặp | `forEach` (`CV_IDS`, `clearErrors`), `.map`, `.filter`, `.each` (jQuery trong `filterFaq`) |
| Hàm | `norm`, `esc`, `chips`, `markError`, `showErrors`, `parseSkills`, `validateCv`, `renderCv`, `updateProgress` |
| Xâu | `trim`, `split(",")`, `includes`, `replace`, `normalize("NFD")`, `toLowerCase`, `toFixed` |
| Mảng/đối tượng | `data.js`; `filter`, `sort`, `flatMap`, `new Set`, `localeCompare`, spread `[...]` |
| DOM | `getElementById` (`$id`), `querySelectorAll`, `innerHTML`, `classList`, `createObjectURL` |
| Sự kiện | `addEventListener` trong `initProducts`, `initSkills`, `initCv`, `initContact` |
| jQuery | `filterFaq` (`.each`, `.toggle`, `.toggleClass`, `.text`, `.val`); `updateProgress` (`.css`, `.text`, `.attr`); `initSkills` (`.on("input")`) |
| Bootstrap | grid, navbar, card, modal (`thanhvien`, `sanpham`, `lienhe`), accordion (`kynang`), alert, form, progress |
| Trường hợp biên | Để trống; email sai; năm sai/ngoài 2000–`YEAR`; số sản phẩm không phải số; quá 8 kỹ năng; ảnh sai loại hoặc > 2 MB; lời nhắn < 10 hoặc > 300 ký tự; không tìm thấy kết quả |
