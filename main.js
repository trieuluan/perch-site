(() => {
  "use strict";

  const REPO = "trieuluan/perch-mac";

  // ---------- Translations ----------
  // English lives in index.html; only Vietnamese is listed here.
  // Vietnamese UI terms follow Apple's and the app's own strings.
  const VI = {
    "notch.now": "Chào, tôi là notch 👋",
    "notch.lyric": "♪ một trạm nhỏ nằm trong notch của bạn ♪",
    "nav.features": "Tính năng",
    "nav.install": "Cài đặt",
    "hero.tagline": "Một trạm nhỏ nằm ngay trong notch MacBook của bạn",
    "hero.lede": "Nhạc với hiệu ứng âm thanh và lời bài hát chạy theo bài, thông số hệ thống, nhắc lịch, các icon thanh menu bị notch che, và thông báo nhanh, tất cả quanh camera.",
    "hero.download": "Tải về cho macOS",
    "hero.req": "Miễn phí &amp; mã nguồn mở · macOS 14 Sonoma trở lên",
    "copy.label": "Sao chép",
    "copy.done": "Đã chép",
    "copy.aria": "Sao chép lệnh",
    "features.title": "Mọi thứ quanh camera",
    "viz.eyebrow": "Hiệu ứng âm thanh",
    "viz.title": "Hiệu ứng nghe được nhạc",
    "viz.body": "Perch phân tích âm thanh Mac đang phát ngay trên máy, theo dõi 24 dải tần, giai điệu chính, tiếng trống và độ sáng của âm thanh. Hiệu ứng hiện sau trình phát (7 kiểu), cạnh ảnh bìa khi notch đóng, và trên thanh menu (11 kiểu), với màu lấy từ ảnh bìa hoặc dải màu bạn tự chọn.",
    "lyrics.eyebrow": "Lời bài hát",
    "lyrics.title": "Hát theo ngay từ notch",
    "lyrics.body": "Câu đang hát hiện dưới notch khi đóng, câu dài sẽ trượt ngang để bạn đọc hết. Mở notch và vuốt hai ngón trên trình phát để xem cả bài kiểu karaoke: bấm vào một câu để tua tới đó, hoặc chỉnh lệch thời gian khi MV chạy sớm. Lời bài hát lấy từ LRCLIB, xử lý được tên bài tiếng Việt và tên kiểu YouTube.",
    "alerts.eyebrow": "Thông báo trong notch",
    "alerts.title": "Thông báo nhẹ nhàng cạnh camera",
    "alerts.body": "Tin nhắn ngắn khi có chuyện xảy ra: sự kiện sắp bắt đầu, lời nhắc đến hạn, Mac bị quá tải (và ứng dụng nào gây ra), tai nghe kết nối (kèm mức pin), đổi bộ gõ bàn phím, hoặc bật Caps Lock.",
    "meet.eyebrow": "Lịch",
    "meet.title": "Tham gia họp ngay từ notch",
    "meet.body": "Vài phút trước cuộc họp, notch khi mở hiện một nút nhỏ kèm thời gian còn lại. Bấm vào để tham gia Google Meet, Zoom, Microsoft Teams, Webex, Slack huddle hoặc FaceTime, mở bằng ứng dụng gốc nếu đã cài.",
    "sys.title": "Hệ thống trong một cái nhìn",
    "sys.body": "Tab <b>Hệ thống</b> hiện CPU, bộ nhớ, mạng và pin với biểu đồ trực tiếp.",
    "menubar.title": "Icon bị notch che",
    "menubar.body": "Khi thanh menu quá đông, macOS giấu icon sau notch. Tab <b>Thanh menu</b> liệt kê chúng, với icon thật, và mở được menu của từng cái.",
    "audio.title": "Chọn đầu ra âm thanh",
    "audio.body": "Chuyển giữa loa, AirPods và các đầu ra khác bằng một nút trong trình phát.",
    "also": "Perch vẫn giữ mọi thứ của Boring Notch: trình phát nhạc, lịch, kệ tệp, HUD hệ thống, pin và gương webcam. Ứng dụng có tiếng Anh và tiếng Việt, theo ngôn ngữ của Mac.",
    "install.title": "Cài đặt",
    "install.sub": "Cần macOS 14 Sonoma trở lên (hiệu ứng âm thanh cần 14.2+). Sau lần mở đầu tiên, Perch tự cập nhật.",
    "install.recommended": "Khuyên dùng",
    "install.brewTitle": "Bằng Homebrew",
    "install.brewNote": "Cask tự gỡ cờ cách ly (quarantine) cho bạn, nên Perch mở được ngay.",
    "install.dmgTitle": "Hoặc tải file DMG",
    "install.s1": "Tải <a href=\"https://github.com/trieuluan/perch-mac/releases/latest/download/Perch.dmg\">Perch.dmg</a> rồi kéo Perch vào thư mục Ứng dụng.",
    "install.s2": "Mở Perch. macOS báo không xác minh được nhà phát triển, vì Perch chưa được Apple công chứng (notarize). Bấm <b>Xong</b>.",
    "install.s3": "Vào <b>Cài đặt hệ thống › Quyền riêng tư &amp; Bảo mật</b>, cuộn xuống dòng thông báo về Perch, rồi bấm <b>Vẫn mở</b>.",
    "install.s4": "Xác nhận bằng mật khẩu hoặc Touch ID. Bạn chỉ cần làm một lần.",
    "install.xattr": "Thích dùng Terminal? Lệnh này làm điều tương tự:",
    "perms.title": "Các quyền Perch cần",
    "perms.audio": "Ghi âm thanh hệ thống",
    "perms.audioBody": "Cho hiệu ứng âm thanh. Âm thanh được phân tích ngay trên máy, không bao giờ được ghi lại hay gửi đi đâu. Nếu không cấp, hiệu ứng chuyển về hoạt ảnh đơn giản.",
    "perms.ax": "Trợ năng",
    "perms.axBody": "Hiện và mở các icon thanh menu bị notch che.",
    "perms.cal": "Lịch &amp; Lời nhắc",
    "perms.calBody": "Lịch, nhắc sự kiện và nút Tham gia.",
    "footer.credit": "Perch là bản fork của <a href=\"https://github.com/TheBoredTeam/boring.notch\" rel=\"noopener\">Boring Notch</a> do TheBoredTeam và cộng đồng phát triển, và cũng như bản gốc, đây là phần mềm tự do theo giấy phép <a href=\"https://github.com/trieuluan/perch-mac/blob/main/LICENSE\" rel=\"noopener\">GPL-3.0</a>.",
    "footer.source": "Mã nguồn trên GitHub",
    "footer.releases": "Ghi chú phát hành",
    "footer.issues": "Báo lỗi",
    "alt.tour": "Mở notch: trình phát với nền chạy theo nhạc, rồi tab Hệ thống và Thanh menu",
    "alt.menubar": "Hiệu ứng âm thanh trên thanh menu",
    "alt.lyricsClosed": "Câu hát hiện tại dưới notch khi đóng",
    "alt.lyricsPage": "Trang lời bài hát trong trình phát, chạy theo bài",
    "alt.alerts": "Nhắc sự kiện và cảnh báo CPU trong notch khi đóng",
    "alt.meet": "Nút Tham gia trong notch khi mở",
    "version": "Phiên bản",
    "title": "Perch — trạm nhỏ trong notch MacBook của bạn",
  };

  const EN = { "copy.done": "Copied", "version": "Version" };

  // Capture the English text from the page once, so switching back is lossless.
  const nodes = {
    html: [...document.querySelectorAll("[data-i18n]")],
    alt: [...document.querySelectorAll("[data-i18n-alt]")],
    aria: [...document.querySelectorAll("[data-i18n-aria]")],
  };
  nodes.html.forEach((el) => (EN[el.dataset.i18n] = el.innerHTML.trim()));
  nodes.alt.forEach((el) => (EN[el.dataset.i18nAlt] = el.getAttribute("alt")));
  nodes.aria.forEach((el) => (EN[el.dataset.i18nAria] = el.getAttribute("aria-label")));
  EN.title = document.title;

  let lang = "en";
  const t = (key) => (lang === "vi" ? VI[key] : undefined) ?? EN[key] ?? key;

  function setLang(next) {
    lang = next === "vi" ? "vi" : "en";
    document.documentElement.lang = lang;
    document.title = t("title");
    nodes.html.forEach((el) => (el.innerHTML = t(el.dataset.i18n)));
    nodes.alt.forEach((el) => el.setAttribute("alt", t(el.dataset.i18nAlt)));
    nodes.aria.forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
    document.querySelectorAll(".lang button").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang))
    );
    renderVersion();
  }

  function initialLang() {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (fromUrl === "vi" || fromUrl === "en") return fromUrl;
    try {
      const saved = localStorage.getItem("perch.lang");
      if (saved === "vi" || saved === "en") return saved;
    } catch (_) {}
    const prefs = navigator.languages || [navigator.language || "en"];
    return prefs.some((l) => /^vi\b/i.test(l)) ? "vi" : "en";
  }

  document.querySelectorAll(".lang button").forEach((b) =>
    b.addEventListener("click", () => {
      setLang(b.dataset.lang);
      try { localStorage.setItem("perch.lang", lang); } catch (_) {}
    })
  );

  // ---------- Copy buttons ----------
  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (_) {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;opacity:0;top:0;left:0";
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch (_) {}
      ta.remove();
      return ok;
    }
  }

  document.querySelectorAll(".cmd").forEach((box) => {
    const btn = box.querySelector(".copy");
    const label = btn.querySelector("span");
    let timer;
    btn.addEventListener("click", async () => {
      if (!(await copyText(box.dataset.copy))) return;
      btn.classList.add("is-done");
      label.textContent = t("copy.done");
      clearTimeout(timer);
      timer = setTimeout(() => {
        btn.classList.remove("is-done");
        label.innerHTML = t("copy.label");
      }, 1600);
    });
  });

  // ---------- Mock notch: tap to toggle on touch screens ----------
  const notch = document.getElementById("notch");
  notch.addEventListener("click", (e) => {
    e.stopPropagation();
    notch.classList.toggle("is-open");
  });
  document.addEventListener("click", () => notch.classList.remove("is-open"));

  // ---------- Latest version from GitHub ----------
  let release = null;
  const versionEl = document.getElementById("version");

  function renderVersion() {
    if (!release) return;
    const v = release.tag.replace(/^v/i, "");
    versionEl.textContent = `${t("version")} ${v}`;
    versionEl.hidden = false;
    if (release.date) {
      const d = new Date(release.date);
      versionEl.title = d.toLocaleDateString(lang === "vi" ? "vi-VN" : "en-US", {
        year: "numeric", month: "long", day: "numeric",
      });
    }
  }

  async function loadRelease() {
    const KEY = "perch.release";
    try {
      const cached = JSON.parse(sessionStorage.getItem(KEY) || "null");
      if (cached && Date.now() - cached.at < 10 * 60 * 1000) {
        release = cached.release;
        return renderVersion();
      }
    } catch (_) {}
    try {
      const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
        headers: { Accept: "application/vnd.github+json" },
      });
      if (!res.ok) return;
      const json = await res.json();
      if (!json.tag_name) return;
      release = { tag: json.tag_name, date: json.published_at };
      try { sessionStorage.setItem(KEY, JSON.stringify({ at: Date.now(), release })); } catch (_) {}
      renderVersion();
    } catch (_) {
      // Offline or rate-limited: the page works fine without a version number.
    }
  }

  setLang(initialLang());
  loadRelease();
})();
