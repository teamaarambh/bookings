fetch("header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("site-header").innerHTML = html;

    const btn = document.querySelector(".nav-toggle");
    const nav = document.querySelector("header nav");

    if (!btn || !nav) return;

    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.addEventListener("click", e => {
      if (e.target.tagName === "A" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 720) {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  });
