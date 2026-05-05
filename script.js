// Light/Dark Mode
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Update Button Text
function updateButtonText() {
  if (body.classList.contains("dark-mode")) {
    themeToggle.textContent = "Light Mode";
  } else {
    themeToggle.textContent = "Dark Mode";
  }
}

// Check theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  body.classList.add("dark-mode");
}

updateButtonText();

themeToggle.addEventListener("click", () => {
  // Switch Class
  body.classList.toggle("dark-mode");

  // Update Button Text
  updateButtonText();

  // Save Class
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
