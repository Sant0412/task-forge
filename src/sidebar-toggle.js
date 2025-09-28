//toggle between sidebar open and close

const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".sidebar-toggle");

const openIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="sidebar-toggle-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height="30" width="30">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>`;

const closeIcon = `<svg class="sidebar-toggle-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" height="30" width="30">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>`;

sidebarToggle.innerHTML = closeIcon;

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("closed");
  if (sidebar.classList.contains("closed")) {
    sidebarToggle.innerHTML = openIcon;
  } else {
    sidebarToggle.innerHTML = closeIcon;
  }
});

//Update Date in svg icon

const today = new Date();
const formatted = today.getDate();

document.querySelector("#dateText").textContent = formatted;
