const isDarkMode = localStorage.getItem("isDarkMode") === "true";

const toggleDarkMode = () => {
  isDarkMode = !isDarkMode;
  localStorage.setItem("isDarkMode", isDarkMode.toString());
  document.documentElement.style.setProperty("color-scheme", isDarkMode ? "dark" : "light");
};