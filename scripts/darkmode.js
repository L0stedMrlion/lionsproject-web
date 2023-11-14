var isDarkMode = localStorage.getItem("isDarkMode") === "true";
var toggleDarkMode = function () {
    isDarkMode = !isDarkMode;
    localStorage.setItem("isDarkMode", isDarkMode.toString());
    document.documentElement.style.setProperty("color-scheme", isDarkMode ? "dark" : "light");
};
