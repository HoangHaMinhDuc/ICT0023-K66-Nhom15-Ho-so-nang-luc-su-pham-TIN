"use strict";

const $id = (id) => document.getElementById(id);
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// tìm kiếm không dấu
function norm(s) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");
}

// Chống chèn mã HTML: dùng cho mọi chữ do NGƯỜI DÙNG gõ vào trước khi đưa vào chuỗi HTML
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Các nhãn kỹ năng: chips(["HTML", "Git"]) -> chuỗi HTML
function chips(arr) {
  return '<div class="d-flex flex-wrap gap-1 mb-3">' + arr.map((s) => '<span class="chip">' + esc(s) + "</span>").join("") + "</div>";
}

// Đánh dấu lỗi dưới một ô nhập; errs là mảng gom mọi lỗi để liệt kê ở đầu form
function markError(input, msg, errs) {
  input.classList.add("is-invalid");
  input.nextElementSibling.textContent = msg;
  errs.push({ id: input.id, msg: msg });
}

function clearErrors(form, box) {
  form.querySelectorAll(".is-invalid").forEach((i) => {
    i.classList.remove("is-invalid");
    i.nextElementSibling.textContent = "";
  });
  box.classList.add("d-none");
  box.innerHTML = "";
}

// Hộp "Có N lỗi cần sửa", mỗi lỗi là liên kết nhảy tới ô bị lỗi
function showErrors(box, errs) {
  box.innerHTML = "<strong>Có " + errs.length + " lỗi cần sửa:</strong><ul class='mb-0'>" +
    errs.map((x) => '<li><a href="#' + x.id + '">' + x.msg + "</a></li>").join("") + "</ul>";
  box.classList.remove("d-none");
  box.focus();
}

/* ---------- 2a. TRANG CHỦ ---------- */
// Ảnh nền hero: chỉ gắn khi tải được ảnh (chưa có herobg.jpg thì bỏ qua)
function initHero() {
  const hero = $id("hero");
  if (!hero) return;
  const pic = new Image();
  pic.onload = () => {
    hero.style.backgroundImage = "linear-gradient(rgba(255,255,255,.88), rgba(255,255,255,.88)), url(" + IMAGES.hero + ")";
    hero.classList.add("has-bg");
  };
  pic.src = IMAGES.hero;
}

function initGallery() {
  if (!$id("gallery")) return;
  $id("gallery").innerHTML = GALLERY.map((g) => `
    <div class="col-12 col-md-4 phongto">
      <figure class="gallery-item">
        <img class="thumb" src="${g.file}" alt="${g.alt}" loading="lazy">
        <figcaption>${g.caption}</figcaption>
      </figure>
    </div>`).join("");
}

function initStats() {
  if (!$id("stat-members")) return;
  $id("stat-members").textContent = MEMBERS.length;
  $id("stat-products").textContent = PRODUCTS.length;
  $id("stat-skills").textContent = SKILLS.length;
}

/* ---------- 2b. THÀNH VIÊN ---------- */
// Lọc theo từ khóa rồi vẽ lại danh sách thẻ
function showMembers() {
  const kw = norm($id("m-search").value.trim());
  const list = MEMBERS.filter((m) => norm([m.name, m.role, ...m.skills].join(" ")).includes(kw));

  $id("member-list").innerHTML = list.map((m) => `
    <div class="col-12 col-md-6 col-lg-4 phongto">
      <div class="card h-100"><div class="card-body">
        <div class="d-flex gap-3 align-items-center mb-2">
          <img class="avatar" src="${IMAGES.member(m.id)}" alt="${MEMBER_ALT[m.id]}" loading="lazy">
          <div>
            <h2 class="h5 mb-0">${m.name}</h2>
            <p class="small text-muted-fg mb-0">${m.role}, năm ${m.year}</p>
          </div>
        </div>
        <p>${m.bio}</p>
        ${chips(m.skills)}
          <button class="btn btn-outline-ink btn-sm" type="button" data-id="${m.id}">Phóng to</button>
      </div></div>
    </div>`).join("");

  $id("member-empty").classList.toggle("d-none", list.length > 0);
  $id("m-count").textContent = "Hiển thị " + list.length + "/" + MEMBERS.length + " thành viên";
}

function openMember(m) {
  $id("memberModalTitle").textContent = m.name;
  $id("memberModalBody").innerHTML = `
    <img  src="${IMAGES.member(m.id)}" alt="${MEMBER_ALT[m.id]}"
         onerror="this.src='${IMAGES.placeholder}'">
    <p class="small text-muted-fg mb-2">${m.role}, năm ${m.year}</p>
    <p>${m.bio}</p>
    <h3 class="h6">Kỹ năng</h3>
    ${chips(m.skills)}`;
  bootstrap.Modal.getOrCreateInstance($id("memberModal")).show();
}
// vẽ lại nút
function clickMemberList(e) {
  const btn = e.target.closest("button[data-id]");
  if (btn) openMember(MEMBERS.find((m) => m.id === Number(btn.dataset.id)));
}

function initMembers() {
  if (!$id("member-list")) return;
  $id("m-search").addEventListener("input", showMembers);
  $id("member-list").addEventListener("click", clickMemberList);
  showMembers();
}

/* ---------- 2c. SẢN PHẨM ---------- */
// Dòng "Dạy học  Năm học 2025-2026", dùng cho cả thẻ và cửa sổ chi tiết
function productMeta(p) {
  return '<p class="small text-muted-fg mb-2"><span class="type-badge">' + p.type + "</span>Năm học " + p.year + "</p>";
}

// Lọc + sắp xếp rồi vẽ lại danh sách thẻ
function showProducts() {
  const kw = norm($id("p-search").value.trim());
  const skill = $id("p-skill").value;
  const year = $id("p-year").value;
  const list = PRODUCTS.filter((p) =>
    (skill === "" || p.skills.includes(skill)) &&
    (year === "" || p.year === year) &&
    norm(p.title + " " + p.summary).includes(kw));

  if ($id("p-sort").value === "az") list.sort((a, b) => a.title.localeCompare(b.title, "vi"));
  else list.sort((a, b) => b.year.localeCompare(a.year) || b.id - a.id);

  $id("product-list").innerHTML = list.map((p) => `
    <div class="col-12 col-md-6 col-lg-4 phongto">
      <div class="card h-100">
        <img class="thumb" src="${IMAGES.product(p.id)}" alt="${PRODUCT_ALT[p.id]}" loading="lazy">
        <div class="card-body d-flex flex-column ">
          ${productMeta(p)}
          <h2 class="h5">${p.title}</h2>
          <p>${p.summary}</p>
          ${chips(p.skills)}
          <button class="btn btn-outline-ink btn-sm mt-auto align-self-start phongto " type="button" data-id="${p.id}">Xem chi tiết</button>
        </div>
      </div>
    </div>`).join("");

  $id("product-empty").classList.toggle("d-none", list.length > 0);
  $id("p-count").textContent = "Hiển thị " + list.length + "/" + PRODUCTS.length + " sản phẩm";
}

// Mở cửa sổ (modal) chi tiết của một sản phẩm
function openProduct(p) {
  const link = p.link ? '<p><a href="' + p.link + '" target="_blank" rel="noopener noreferrer">Xem sản phẩm</a></p>' : "";
  $id("productModalTitle").textContent = p.title;
  $id("productModalBody").innerHTML = `
    <img class="thumb" src="${IMAGES.product(p.id)}" alt="${PRODUCT_ALT[p.id]}">
    ${productMeta(p)}
    <p>${p.detail}</p>
    ${link}
    ${chips(p.skills)}`;
  bootstrap.Modal.getOrCreateInstance($id("productModal")).show();
}

// Các nút "Xem chi tiết" được vẽ lại mỗi lần lọc, nên lắng nghe ở khung cha rồi tìm nút nào được bấm
function clickProductList(e) {
  const btn = e.target.closest("button[data-id]");
  if (btn) openProduct(PRODUCTS.find((p) => p.id === Number(btn.dataset.id)));
}

function resetProducts() {
  ["p-search", "p-skill", "p-year"].forEach((id) => { $id(id).value = ""; });
  $id("p-sort").value = "new";
  showProducts();
}

// Điền lựa chọn cho ô <select>; dòng đầu là "Tất cả ..."
function fillSelect(id, first, values) {
  $id(id).innerHTML = '<option value="">' + first + "</option>" + values.map((v) => '<option value="' + v + '">' + v + "</option>").join("");
}

function initProducts() {
  if (!$id("product-list")) return;
  fillSelect("p-skill", "Tất cả kỹ năng", [...new Set(PRODUCTS.flatMap((p) => p.skills))].sort());
  fillSelect("p-year", "Tất cả năm", [...new Set(PRODUCTS.map((p) => p.year))].sort().reverse());
  $id("p-search").addEventListener("input", showProducts);
  ["p-skill", "p-year", "p-sort"].forEach((id) => $id(id).addEventListener("change", showProducts));
  $id("p-reset").addEventListener("click", resetProducts);
  $id("product-list").addEventListener("click", clickProductList);
  showProducts();
}

/* ---------- 2d. KỸ NĂNG + HỎI ĐÁP ---------- */
let skillKey = "level";   // cột đang sắp xếp
let skillDir = -1;        // -1: giảm dần, 1: tăng dần

function showSkills() {
  const rows = [...SKILLS].sort((a, b) => {
    const x = a[skillKey], y = b[skillKey];
    return (typeof x === "number" ? x - y : x.localeCompare(y, "vi")) * skillDir;
  });
  $id("skill-body").innerHTML = rows.map((s) => `
    <tr>
      <td>${s.name}</td>
      <td><span class="meter"><i style="width:${s.level * 20}%"></i></span>${s.level}/5</td>
      <td>${s.note}</td>
    </tr>`).join("");
}

// Bấm cùng một cột thì đảo chiều, bấm cột khác thì sắp tăng dần
function sortSkills(key) {
  skillDir = key === skillKey ? -skillDir : 1;
  skillKey = key;
  showSkills();
}

// Mỗi câu hỏi là một mục accordion của Bootstrap (nút bấm + vùng trả lời xổ ra)
function showFaqs() {
  $id("faq-list").innerHTML = FAQS.map((f, i) => `
    <div class="accordion-item faq-item">
      <h3 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq${i}">${f.q}</button>
      </h3>
      <div id="faq${i}" class="accordion-collapse collapse" data-bs-parent="#faq-list">
        <div class="accordion-body">${f.a}</div>
      </div>
    </div>`).join("");
}

/* jQuery: ô tìm kiếm hỏi đáp.
   $(".faq-item").each(...) duyệt từng câu hỏi; .toggle(hit) ẩn/hiện theo kết quả khớp
   ($(this).text() lấy cả câu hỏi lẫn câu trả lời); biến n đếm số câu còn hiện. */
function filterFaq() {
  const kw = norm($("#faq-search").val().trim());
  let n = 0;
  $(".faq-item").each(function () {
    const hit = norm($(this).text()).includes(kw);
    $(this).toggle(hit);
    if (hit) n++;
  });
  $("#faq-empty").toggleClass("d-none", n > 0);
  $("#faq-count").text("Có " + n + "/" + FAQS.length + " câu hỏi");
}

function initSkills() {
  if (!$id("skill-body")) return;
  document.querySelectorAll(".sort-btn").forEach((b) => b.addEventListener("click", () => sortSkills(b.dataset.key)));
  showSkills();
  showFaqs();
  $("#faq-search").on("input", filterFaq);
  filterFaq();
}

/* ---------- 2e. TẠO HỒ SƠ ---------- */
const CV_IDS = ["t-name", "t-class", "t-email", "t-start", "t-projects", "t-skills", "t-goal"];
const YEAR = new Date().getFullYear();
let photoUrl = "";    // đường dẫn tạm tới ảnh đại diện đang chọn
let cvEmpty = "";     // nội dung "chưa có dữ liệu" ban đầu của khung hồ sơ, để khôi phục khi Đặt lại

// Gom giá trị các ô nhập thành một đối tượng {id: giá trị}
function readCv() {
  const v = {};
  CV_IDS.forEach((id) => { v[id] = $id(id).value.trim(); });
  return v;
}

// "a, b, a" -> ["a", "b"] (bỏ ô trống và trùng)
function parseSkills(s) {
  return [...new Set(s.split(",").map((x) => x.trim()).filter((x) => x !== ""))];
}

/* jQuery: cập nhật thanh tiến độ. $("#id").css/.text/.attr ngắn hơn getElementById + style/textContent/setAttribute */
function updateProgress() {
  const v = readCv();
  const pct = Math.round((CV_IDS.filter((id) => v[id] !== "").length / CV_IDS.length) * 100);
  $("#cv-progress").css("width", pct + "%");
  $("#cv-progress-pct").text(pct + "%");
  $("#cv-progress-wrap").attr("aria-valuenow", pct);
}

// Trả về mảng lỗi (rỗng nếu hợp lệ) và đánh dấu đỏ các ô sai
function validateCv(v) {
  const errs = [];
  const year = Number(v["t-start"]);
  const skills = parseSkills(v["t-skills"]);
  if (v["t-name"].length < 2) markError($id("t-name"), "Họ tên cần ít nhất 2 ký tự.", errs);
  if (v["t-class"] === "") markError($id("t-class"), "Hãy nhập lớp hoặc ngành.", errs);
  if (!EMAIL.test(v["t-email"])) markError($id("t-email"), "Email chưa đúng định dạng, ví dụ ten@email.com.", errs);
  if (!/^\d{4}$/.test(v["t-start"]) || year < 2000 || year > YEAR) markError($id("t-start"), "Nhập năm có 4 chữ số từ 2000 đến " + YEAR + ".", errs);
  if (!/^\d{1,3}$/.test(v["t-projects"])) markError($id("t-projects"), "Số sản phẩm phải là số nguyên từ 0 đến 999.", errs);
  if (skills.length === 0) markError($id("t-skills"), "Nhập ít nhất một kỹ năng.", errs);
  else if (skills.length > 8) markError($id("t-skills"), "Tối đa 8 kỹ năng, bạn đã nhập " + skills.length + ".", errs);
  if (v["t-goal"].length > 200) markError($id("t-goal"), "Mục tiêu dài " + v["t-goal"].length + "/200 ký tự.", errs);
  return errs;
}

// Vẽ tờ hồ sơ. Chữ người dùng nhập đều qua esc() cho an toàn
function renderCv(v) {
  const years = Math.max(0, YEAR - Number(v["t-start"]));
  const photo = photoUrl ? '<img class="cv-photo" src="' + photoUrl + '" alt="Ảnh đại diện" width="96" height="96">' : "";
  $id("cv").innerHTML = `
    ${photo}
    <h2 class="h3 mb-0">${esc(v["t-name"])}</h2>
    <p class="mb-2">${esc(v["t-class"])}  |  ${esc(v["t-email"])}</p>
    <h3>Tóm tắt</h3>
    <p>${years} năm học lập trình, ${Number(v["t-projects"])} sản phẩm đã hoàn thành.</p>
    <h3>Kỹ năng</h3>
    ${chips(parseSkills(v["t-skills"]))}
    <h3>Mục tiêu nghề nghiệp</h3>
    <p>${esc(v["t-goal"]) || "Chưa nhập mục tiêu."}</p>`;
  $id("cv-print").disabled = false;
}

function submitCv(e) {
  e.preventDefault();
  clearErrors($id("cv-form"), $id("cv-errors"));
  const v = readCv();
  const errs = validateCv(v);
  updateProgress();
  if (errs.length > 0) showErrors($id("cv-errors"), errs);
  else renderCv(v);
}

// Kiểm tra ảnh đại diện (đúng loại, tối đa 2 MB) rồi tạo đường dẫn tạm để xem trước
function choosePhoto() {
  const input = $id("t-photo");
  const file = input.files[0];
  let msg = "";
  if (file && !["image/jpeg", "image/png", "image/webp"].includes(file.type)) msg = "Chỉ nhận ảnh JPG, PNG hoặc WebP.";
  else if (file && file.size > 2 * 1024 * 1024) msg = "Ảnh nặng " + (file.size / 1048576).toFixed(1) + " MB, tối đa 2 MB.";

  input.classList.toggle("is-invalid", msg !== "");
  input.nextElementSibling.textContent = msg;
  if (photoUrl) URL.revokeObjectURL(photoUrl);
  photoUrl = "";
  if (msg !== "") input.value = "";
  else if (file) photoUrl = URL.createObjectURL(file);
  if ($id("cv").querySelector("h2")) renderCv(readCv());
}

function fillCvSample() {
  const sample = {
    "t-name": "Nguyễn Văn Mẫu", "t-class": "ĐHSP Tin K66", "t-email": "mau@example.com",
    "t-start": String(YEAR - 3), "t-projects": "5", "t-skills": "HTML/CSS, JavaScript, Git, Soạn bài giảng",
    "t-goal": "Trở thành giáo viên Tin học biết dùng sản phẩm số để dạy học."
  };
  CV_IDS.forEach((id) => { $id(id).value = sample[id]; });
  $id("cv-form").requestSubmit();
}

function resetCv() {
  clearErrors($id("cv-form"), $id("cv-errors"));
  if (photoUrl) URL.revokeObjectURL(photoUrl);
  photoUrl = "";
  $id("cv").innerHTML = cvEmpty;
  $id("cv-print").disabled = true;
  setTimeout(updateProgress, 0);   // đợi form xóa xong giá trị rồi mới tính lại
}

function initCv() {
  const form = $id("cv-form");
  if (!form) return;
  cvEmpty = $id("cv").innerHTML;
  form.addEventListener("submit", submitCv);
  form.addEventListener("input", updateProgress);
  form.addEventListener("reset", resetCv);
  $id("t-photo").addEventListener("change", choosePhoto);
  $id("cv-sample").addEventListener("click", fillCvSample);
  $id("cv-print").addEventListener("click", () => window.print());
}

/* ---------- 2f. LIÊN HỆ ---------- */
const MSG_MIN = 10;
const MSG_MAX = 300;

function updateMsgCount() {
  const n = $id("f-msg").value.trim().length;
  let text = "Đã nhập " + n + "/" + MSG_MAX + " ký tự.";
  if (n < MSG_MIN) text = "Đã nhập " + n + "/" + MSG_MAX + " ký tự — cần thêm " + (MSG_MIN - n) + " ký tự.";
  $id("f-count").textContent = text;
}

// Cửa sổ xem trước lời nhắn: rows là danh sách [tên mục, nội dung]
function showPreview(rows) {
  $id("previewBody").innerHTML = rows.map(([k, v]) => "<p><strong>" + k + ": </strong>" + esc(v) + "</p>").join("") +
    '<p class="small">Đây chỉ là bản xem trước, chưa có dữ liệu nào được gửi đi.</p>';
  bootstrap.Modal.getOrCreateInstance($id("previewModal")).show();
}

function submitContact(e) {
  e.preventDefault();
  clearErrors($id("contact-form"), $id("form-errors"));
  const errs = [];
  const name = $id("f-name"), email = $id("f-email"), topic = $id("f-topic"), msg = $id("f-msg");
  const len = msg.value.trim().length;

  if (name.value.trim().length < 2) markError(name, "Họ tên cần ít nhất 2 ký tự.", errs);
  if (!EMAIL.test(email.value.trim())) markError(email, "Email chưa đúng định dạng, ví dụ ten@email.com.", errs);
  if (topic.value === "") markError(topic, "Hãy chọn bạn là ai.", errs);
  if (len < MSG_MIN) markError(msg, "Lời nhắn quá ngắn (" + len + "/" + MSG_MIN + " ký tự).", errs);
  else if (len > MSG_MAX) markError(msg, "Lời nhắn quá dài (" + len + "/" + MSG_MAX + " ký tự).", errs);

  if (errs.length > 0) showErrors($id("form-errors"), errs);
  else showPreview([["Họ tên", name.value.trim()], ["Email", email.value.trim()], ["Bạn là", topic.value], ["Lời nhắn", msg.value.trim()]]);
}

function fillContactSample() {
  $id("f-name").value = "Người xem mẫu";
  $id("f-email").value = "mau@example.com";
  $id("f-topic").value = "Giảng viên";
  $id("f-msg").value = "Em muốn xem thêm bài giảng thuật toán của nhóm.";
  updateMsgCount();
}

function resetContact() {
  clearErrors($id("contact-form"), $id("form-errors"));
  setTimeout(updateMsgCount, 0);
}

function initContact() {
  const form = $id("contact-form");
  if (!form) return;
  form.addEventListener("submit", submitContact);
  form.addEventListener("reset", resetContact);
  $id("f-msg").addEventListener("input", updateMsgCount);
  $id("f-sample").addEventListener("click", fillContactSample);
}

/* ---------- 3. KHỞI ĐỘNG ---------- */
// Mỗi hàm init tự kiểm tra trang hiện tại có phần tử của nó không, không có thì bỏ qua
document.addEventListener("DOMContentLoaded", () => {
  initHero(); initGallery(); initStats(); initMembers(); initProducts(); initSkills(); initCv(); initContact();
});
