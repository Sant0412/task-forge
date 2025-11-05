const sidebar = document.querySelector(".sidebar");
const body = document.querySelector("body");
const modeToggle = document.querySelector(".mode-toggle");
const sidebarToggle = document.querySelector(".sidebar-toggle");

// SVG icons
const sun = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
    width="30"
    height="30"
  ><path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 3v2m0 14v2m9-9h-2M5 12H3
         m15.364-6.364l-1.414 1.414M7.05 16.95
         l-1.414 1.414M16.95 16.95l1.414 1.414
         M7.05 7.05L5.636 5.636M12 8a4 4 0 100 8 
         4 4 0 000-8z"
    />
  </svg>
`;

const moon = `
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
    width="30"
    height="30"
  ><path 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75
         c-5.385 0-9.75-4.365-9.75-9.75 
         0-1.33.266-2.597.748-3.752A9.753 9.753 
         0 0 0 3 11.25C3 16.635 7.365 21 
         12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" 
    />
  </svg>
`;

// ========== THEME SETUP ==========
const savedMode = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
const currentTheme = savedMode || (prefersDark ? "dark" : "light");

body.classList.toggle("dark-mode", currentTheme === "dark");
modeToggle.innerHTML = currentTheme === "dark" ? sun : moon;

modeToggle.addEventListener("click", handleClick);

function handleClick() {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  modeToggle.innerHTML = isDark ? sun : moon;
  localStorage.setItem("theme", isDark ? "dark" : "light");
  document.dispatchEvent(new Event("themechange"));
}

// ========== SIDEBAR TOGGLE ==========
if (sidebar && sidebarToggle) {
  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
  });
}

// ========== DATE UPDATE ==========
const dateText = document.querySelector("#dateText");
if (dateText) dateText.textContent = new Date().getDate();

// ========== ACTIVE SECTION ==========
if (sidebar) {
  sidebar.addEventListener("click", (e) => {
    const li = e.target.closest(".sidebar-item");
    if (!li) return;

    document
      .querySelectorAll(".sidebar-item.active")
      .forEach((item) => item.classList.remove("active"));

    li.classList.add("active");

    const activeSection = li.dataset.section;
    const activeDiv = document.getElementById(`${activeSection}_section`);

    document
      .querySelectorAll(".section.selected")
      .forEach((section) => section.classList.remove("selected"));

    if (activeDiv) activeDiv.classList.add("selected");

    if (activeSection === "add") {
      console.log(activeSection);
    } else {
      console.log("else case");
      console.log(activeSection);
    }
  });
}

// toggle b/w set & remove disabled attribute to action buttons of form
const taskInput = document.getElementById("task-title");
const formBtns = document.querySelectorAll(".task-form-btns button");

taskInput.addEventListener("input", (e) => {
  if (e.target.value !== "") {
    formBtns.forEach((btn) => btn.removeAttribute("disabled"));
  } else {
    formBtns.forEach((btn) => btn.setAttribute("disabled", "disabled"));
  }
});

// const actionBtn = document.querySelector(".actions");
// const dateInput = document.getElementById("date");
// const datePicker = document.getElementById("myDatePicker");

// const date = flatpickr("#myDatePicker", {
//   dateFormat: "Y-m-d",
//   onChange: function (selectedDates, dateStr) {
//     dateInput.innerHTML = `<p>${dateStr}</p>`;
//   },
// });

// dateInput.addEventListener("click", (e) => {
//   date.open();
// });
