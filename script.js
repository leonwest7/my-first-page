const themeToggle = document.querySelector("#theme-toggle");
const currentYear = document.querySelector("#current-year");

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

const initialTheme =
  savedTheme || (prefersDark ? "dark" : "light");

applyTheme(initialTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.dataset.theme;

    const nextTheme =
      currentTheme === "dark" ? "light" : "dark";

    applyTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  });
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  if (!themeToggle) {
    return;
  }

  const isDark = theme === "dark";

  themeToggle.textContent = isDark ? "☀️" : "🌙";

  themeToggle.setAttribute(
    "aria-label",
    isDark ? "切换到浅色模式" : "切换到深色模式"
  );
}