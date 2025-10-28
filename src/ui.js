// Toggle between dark and light mode

const modeToggle = document.querySelector(".mode-toggle");
const body = document.querySelector("body");

// SVG icons for sun and moon
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

// Load saved theme (if any) or system preference
const savedMode = localStorage.getItem("theme");

if (savedMode) {
  // apply saved theme (dark if savedMode is 'moon')
  body.classList.toggle("dark-mode", savedMode === "dark");
} else {
  // apply system preference (dark or light)
  const prefersDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
  body.classList.toggle("dark-mode", prefersDark);
}

// Set icon based on current theme
modeToggle.innerHTML = body.classList.contains("dark-mode") ? sun : moon;

// Toggle theme on button click
modeToggle.addEventListener("click", (e) => {
  handleClick();
});

function handleClick() {
  body.classList.toggle("dark-mode");

  // Update icon and save current theme
  if (body.classList.contains("dark-mode")) {
    modeToggle.innerHTML = sun;
    localStorage.setItem("theme", "dark");
  } else {
    modeToggle.innerHTML = moon;
    localStorage.setItem("theme", "light");
  }

  // Notify other components that theme has changed
  document.dispatchEvent(new Event("themechange"));
}

// Toggle between sidebar open and closed states

const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".sidebar-toggle");

if (sidebarToggle) {
  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
  });
}

//Update Date in svg icon

const today = new Date();
const formatted = today.getDate();

document.querySelector("#dateText").textContent = formatted;
