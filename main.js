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
    "nav.faq": "Hỏi đáp",
    "news.title": "Có gì mới",
    "news.sub": "Lấy trực tiếp từ GitHub mỗi khi có bản mới.",
    "news.note": "Tóm tắt từ lịch sử thay đổi trên GitHub (tiếng Anh).",
    "news.all": "Xem trên GitHub",
    "news.earlier": "Các bản trước",
    "faq.title": "Hỏi đáp",
    "faq.q1": "Perch có miễn phí không?",
    "faq.a1": "Có. Perch miễn phí và là mã nguồn mở theo giấy phép GPL-3.0, toàn bộ mã nguồn có trên <a href=\"https://github.com/trieuluan/perch-mac\" rel=\"noopener\">GitHub</a>.",
    "faq.q2": "Vì sao macOS chặn Perch ở lần mở đầu?",
    "faq.a2": "Perch chưa được Apple công chứng (notarize), nên macOS không xác minh được nhà phát triển và chặn bản tải về cho tới khi bạn cho phép một lần trong <b>Cài đặt hệ thống › Quyền riêng tư &amp; Bảo mật</b>. Cài bằng Homebrew thì không cần bước này. Ký Developer ID và công chứng đã nằm trong kế hoạch.",
    "faq.q3": "Perch có ghi âm không?",
    "faq.a3": "Không. Hiệu ứng âm thanh cần quyền Ghi âm thanh hệ thống, nhưng âm thanh chỉ được phân tích ngay trên Mac, không bao giờ được ghi lại hay gửi đi đâu. Nếu không cấp quyền, hiệu ứng chuyển về hoạt ảnh đơn giản.",
    "faq.q4": "Perch chạy trên macOS nào?",
    "faq.a4": "macOS 14 Sonoma trở lên. Hiệu ứng âm thanh cần macOS 14.2 trở lên.",
    "faq.q5": "Perch cập nhật thế nào?",
    "faq.a5": "Sau lần mở đầu tiên, Perch tự kiểm tra phiên bản mới và tự cập nhật.",
    "faq.q6": "Perch khác Boring Notch ở điểm nào?",
    "faq.a6": "Perch là bản fork của Boring Notch và giữ nguyên mọi thứ của bản gốc: trình phát nhạc, lịch, kệ tệp, HUD hệ thống, pin và gương webcam. Perch thêm hiệu ứng chạy theo nhạc, lời bài hát, thông báo trong notch, tham gia họp bằng một cú bấm, tab Hệ thống và Thanh menu, chọn đầu ra âm thanh, và bản tiếng Việt.",
    "faq.q7": "Mình gặp lỗi, báo ở đâu?",
    "faq.a7": "Bạn mở một issue trên <a href=\"https://github.com/trieuluan/perch-mac/issues\" rel=\"noopener\">GitHub</a> nhé, kèm phiên bản macOS và bạn đang làm gì khi lỗi xảy ra.",
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

  // ---------- Latest version and what's new, from GitHub ----------
  // One call lists recent releases. If the newest release has bullet notes they
  // are shown; otherwise the commit titles since the previous release are used.
  let release = null;
  const versionEl = document.getElementById("version");
  const newsEl = document.getElementById("whats-new");

  const fmtDate = (iso) =>
    new Date(iso).toLocaleDateString(lang === "vi" ? "vi-VN" : "en-US", {
      year: "numeric", month: "long", day: "numeric",
    });
  const bare = (tag) => tag.replace(/^v/i, "");

  function renderVersion() {
    if (!release) return;
    versionEl.textContent = `${t("version")} ${bare(release.tag)}`;
    versionEl.hidden = false;
    if (release.date) versionEl.title = fmtDate(release.date);
    renderNews();
  }

  function renderNews() {
    if (!release || !release.notes.length) return;
    newsEl.querySelector(".news-version").textContent = `${t("version")} ${bare(release.tag)}`;
    newsEl.querySelector(".news-date").textContent = release.date ? fmtDate(release.date) : "";
    newsEl.querySelector(".news-link").href = release.url;
    const list = newsEl.querySelector(".news-list");
    list.replaceChildren(...release.notes.map((n) => {
      const li = document.createElement("li");
      li.textContent = n;
      return li;
    }));
    const earlier = newsEl.querySelector(".news-earlier");
    earlier.replaceChildren(...release.earlier.map((r) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = r.url;
      a.textContent = bare(r.tag);
      const span = document.createElement("span");
      span.textContent = fmtDate(r.date);
      li.append(a, span);
      return li;
    }));
    newsEl.querySelector(".news-earlier-wrap").hidden = !release.earlier.length;
    newsEl.querySelector(".news-note").hidden = release.notesFrom !== "commits";
    newsEl.hidden = false;
  }

  // Bullet lines from a release body, with simple markdown removed.
  function notesFromBody(body) {
    return (body || "").split(/\r?\n/)
      .filter((l) => /^\s*[-*+]\s+/.test(l) && !/full changelog/i.test(l))
      .map((l) => l.replace(/^\s*[-*+]\s+/, "")
        .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
        .replace(/[*_`]/g, "")
        .trim())
      .filter(Boolean)
      .slice(0, 8);
  }

  function notesFromCommits(commits) {
    return commits
      .filter((c) => (c.parents || []).length === 1)
      .map((c) => c.commit.message.split("\n")[0].trim())
      .filter((m) => m && !/^(version\s+v?\d|merge\b|bump\b)/i.test(m) && !/\breadme\b/i.test(m))
      .slice(0, 8);
  }

  async function loadRelease() {
    const KEY = "perch.release.v2";
    try {
      const cached = JSON.parse(sessionStorage.getItem(KEY) || "null");
      if (cached && Date.now() - cached.at < 10 * 60 * 1000) {
        release = cached.release;
        return renderVersion();
      }
    } catch (_) {}
    const api = (path) =>
      fetch(`https://api.github.com/repos/${REPO}${path}`, {
        headers: { Accept: "application/vnd.github+json" },
      }).then((r) => (r.ok ? r.json() : Promise.reject(r.status)));
    try {
      const list = (await api("/releases?per_page=6")).filter((r) => !r.draft && !r.prerelease);
      if (!list.length) return;
      const [latest, previous] = list;
      release = {
        tag: latest.tag_name,
        date: latest.published_at,
        url: latest.html_url,
        notes: notesFromBody(latest.body),
        notesFrom: "release",
        earlier: list.slice(1, 5).map((r) => ({ tag: r.tag_name, date: r.published_at, url: r.html_url })),
      };
      renderVersion();
      if (!release.notes.length && previous) {
        try {
          const cmp = await api(`/compare/${encodeURIComponent(previous.tag_name)}...${encodeURIComponent(latest.tag_name)}`);
          release.notes = notesFromCommits(cmp.commits || []);
          release.notesFrom = "commits";
        } catch (_) {}
      }
      try { sessionStorage.setItem(KEY, JSON.stringify({ at: Date.now(), release })); } catch (_) {}
      renderVersion();
    } catch (_) {
      // Offline or rate-limited: the page works fine without these.
    }
  }

  // ---------- Demo videos ----------
  // Load each clip only when it nears the screen, play it while visible,
  // and pause it off-screen. With reduced motion, show controls instead of autoplaying.
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const videos = [...document.querySelectorAll("video.demo")];

  function fallBackToGif(v) {
    const img = document.createElement("img");
    img.src = v.dataset.gif;
    img.alt = v.getAttribute("aria-label") || "";
    img.width = v.width;
    img.height = v.height;
    img.className = v.className.replace("demo", "").trim();
    v.replaceWith(img);
  }

  function load(v) {
    if (v.src) return;
    v.addEventListener("error", () => fallBackToGif(v), { once: true });
    v.src = v.dataset.src;
  }

  if (reduceMotion) videos.forEach((v) => (v.controls = true));

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(({ target: v, isIntersecting }) => {
        if (!v.isConnected) return io.unobserve(v);
        if (isIntersecting) {
          load(v);
          if (!reduceMotion) v.play().catch(() => {});
        } else if (!v.paused) {
          v.pause();
        }
      });
    }, { rootMargin: "200px 0px" });
    videos.forEach((v) => io.observe(v));
  } else {
    videos.forEach((v) => { load(v); if (!reduceMotion) v.autoplay = true; });
  }

  setLang(initialLang());
  loadRelease();
})();
