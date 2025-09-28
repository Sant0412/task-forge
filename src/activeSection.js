const sections = document.querySelectorAll(".container-item");

function activateSectionById(id) {
  if (!id) return;
  document
    .querySelectorAll(".sidebar-item")
    .forEach((item) => item.classList.remove("active"));
  sections.forEach((sec) => sec.classList.remove("selected"));

  const link = document.querySelector(`.sidebar-link[href="#${id}"]`);
  if (link && link.closest(".sidebar-item"))
    link.closest(".sidebar-item").classList.add("active");

  const sec = document.getElementById(id);
  if (sec) sec.classList.add("selected");
}

// click handler (event delegation)
sidebar.addEventListener("click", (e) => {
  const li = e.target.closest(".sidebar-item");
  if (!li) return;

  const href = li.querySelector(".sidebar-link")?.getAttribute("href");
  if (!href) return;

  const targetId = href.replace("#", "");
  activateSectionById(targetId);
  localStorage.setItem("activeSection", targetId);
});

// restore on load
const saved =
  localStorage.getItem("activeSection") ||
  document
    .querySelector(".sidebar-item.active .sidebar-link")
    ?.getAttribute("href")
    ?.substring(1) ||
  "add_task";
activateSectionById(saved);

// reapply when theme changes (mode-toggle dispatches 'themechange')
document.addEventListener("themechange", () => {
  const current = localStorage.getItem("activeSection") || saved;
  activateSectionById(current);
});
