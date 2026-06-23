// ---------- Starfield ----------
(function () {
  const canvas = document.getElementById("starfield");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let stars = [];
  let w, h, dpr;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = innerWidth * dpr;
    h = canvas.height = innerHeight * dpr;
    canvas.style.width = innerWidth + "px";
    canvas.style.height = innerHeight + "px";
    const count = Math.round((innerWidth * innerHeight) / 6000);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: (Math.random() * 1.3 + 0.3) * dpr,
      a: Math.random(),
      tw: Math.random() * 0.02 + 0.004,
      dir: Math.random() > 0.5 ? 1 : -1,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      if (!reduceMotion) {
        s.a += s.tw * s.dir;
        if (s.a <= 0.1 || s.a >= 1) s.dir *= -1;
      }
      ctx.globalAlpha = s.a;
      ctx.fillStyle = "#eaf0ff";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (!reduceMotion) requestAnimationFrame(draw);
  }

  addEventListener("resize", resize);
  resize();
  draw();
})();

// ---------- Scroll reveal ----------
(function () {
  const els = document.querySelectorAll(".section, .strip");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));
})();

// ---------- Live frame counter (mockup flavor) ----------
(function () {
  const el = document.getElementById("frameCount");
  if (!el) return;
  let n = 128;
  setInterval(() => {
    n += 1;
    el.textContent = n;
  }, 2500);
})();

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();
