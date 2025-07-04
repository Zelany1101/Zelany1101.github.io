document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const target = item.getAttribute("data-target");
      if (target) {
        window.location.href = target;
      }
    });
  });
});
