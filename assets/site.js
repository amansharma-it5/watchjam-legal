(function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");

  function closeMenu() {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });
    document.addEventListener("click", function (event) {
      if (
        !nav.classList.contains("is-open") ||
        nav.contains(event.target) ||
        toggle.contains(event.target)
      )
        return;
      closeMenu();
    });
  }

  const page = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach(function (link) {
    if (link.dataset.nav === page) {
      link.setAttribute("aria-current", "page");
      link.classList.add("active");
    }
  });
  document.querySelectorAll("[data-year]").forEach(function (node) {
    node.textContent = new Date().getFullYear();
  });
})();
