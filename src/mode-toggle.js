//toggle between dark and light mode

const modeToggle = document.querySelector(".mode-toggle");
const body = document.querySelector("body");

const sunMode = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke=currentColor
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

const darkMode = `
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke=currentColor
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

//Load saved mode on loading page
const savedMode = localStorage.getItem("theme");

if (savedMode) {
  body.classList.toggle("dark-mode", savedMode === "dark");
} else {
  const prefersDark = window.matchMedia("prefers-color-scheme:dark").matches;
  body.classList.toggle("dark-mode", prefersDark);
}

//set icon according to current mode
modeToggle.innerHTML = body.classList.contains("dark-mode")
  ? sunMode
  : darkMode;

//Toggle on click
modeToggle.addEventListener("click", (e) => {
  handleClick();
});

function handleClick() {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    modeToggle.innerHTML = sunMode;
    localStorage.setItem("theme", "dark");
  } else {
    modeToggle.innerHTML = darkMode;
    localStorage.setItem("theme", "light");
  }

  // inform other modules that theme changed so they can reapply visual state
  document.dispatchEvent(new Event("themechange"));
}
