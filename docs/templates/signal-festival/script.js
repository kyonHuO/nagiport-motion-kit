"use strict";
// This demo has no network submission, checkout, storage, or analytics.
const menu = document.querySelector(".menu"),
  nav = document.querySelector("nav");
function closeMenu() {
  nav.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
}
menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});
nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("open")) {
    closeMenu();
    menu.focus();
  }
});
matchMedia("(min-width:621px)").addEventListener("change", closeMenu);
const dialog = document.querySelector("dialog");
let opener;
document.querySelectorAll("[data-demo]").forEach((b) =>
  b.addEventListener("click", () => {
    opener = b;
    document.querySelector(".dialog-title").textContent = b.dataset.demo;
    dialog.querySelector(".status").hidden = true;
    dialog.showModal();
  }),
);
function closeDialog() {
  dialog.close();
  opener?.focus();
}
dialog.querySelector(".close").addEventListener("click", closeDialog);
dialog.addEventListener("cancel", (e) => {
  e.preventDefault();
  closeDialog();
});
// closeDialog restores focus synchronously for click, backdrop and Escape.
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      closeDialog();
  }
});
dialog.querySelector("[data-confirm]").addEventListener("click", () => {
  const s = dialog.querySelector(".status");
  s.hidden = false;
  s.textContent =
    "デモ操作が完了しました。送信・予約・注文・決済は行われていません。";
});
document.querySelectorAll("[data-filter]").forEach((b) =>
  b.addEventListener("click", () => {
    const group = b.closest("[data-filter-group]");
    group
      .querySelectorAll("[data-filter]")
      .forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    document.querySelectorAll("[data-category]").forEach((c) => {
      c.hidden =
        b.dataset.filter !== "all" && c.dataset.category !== b.dataset.filter;
    });
  }),
);
document.querySelectorAll("[data-billing]").forEach((b) =>
  b.addEventListener("click", () => {
    document
      .querySelectorAll("[data-billing]")
      .forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    document
      .querySelectorAll("[data-month]")
      .forEach(
        (p) =>
          (p.textContent =
            b.dataset.billing === "year" ? p.dataset.year : p.dataset.month),
      );
    document.querySelector("#billing-note").textContent =
      b.dataset.billing === "year"
        ? "年払い・月額換算。税込サンプル価格です。"
        : "月払い。税込サンプル価格です。";
  }),
);
document.querySelectorAll("[data-color]").forEach((b) =>
  b.addEventListener("click", () => {
    document
      .querySelectorAll("[data-color]")
      .forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    document.querySelector(".product-art").style.filter =
      b.dataset.color === "clay" ? "hue-rotate(295deg) saturate(.75)" : "none";
    document.querySelector("#color-name").textContent =
      b.dataset.color === "clay" ? "Clay / クレイ" : "Sage / セージ";
  }),
);
document.querySelectorAll("[data-quantity]").forEach((b) =>
  b.addEventListener("click", () => {
    const o = document.querySelector("#quantity");
    o.textContent = String(
      Math.max(
        1,
        Math.min(9, Number(o.textContent) + Number(b.dataset.quantity)),
      ),
    );
  }),
);
document.querySelectorAll("[data-plan]").forEach((b) =>
  b.addEventListener("click", () => {
    document
      .querySelectorAll("[data-plan]")
      .forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    document.querySelector("#plan-output").textContent =
      b.dataset.plan === "intro"
        ? "はじめの4週間：観察 → 構図 → 色 → 作品講評"
        : "次の8週間：編集 → 表現 → 連作 → ポートフォリオ";
  }),
);
const reduce = matchMedia("(prefers-reduced-motion:reduce)");
if ("IntersectionObserver" in window && !reduce.matches) {
  document.documentElement.classList.add("js");
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.remove("pending");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.06 },
  );
  document.querySelectorAll("[data-reveal]").forEach((el) => {
    el.classList.add("pending");
    io.observe(el);
  });
  reduce.addEventListener("change", () => {
    if (reduce.matches) {
      document
        .querySelectorAll(".pending")
        .forEach((el) => el.classList.remove("pending"));
      io.disconnect();
    }
  });
}
