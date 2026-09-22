const themeButton = document.getElementById("themeButton");


const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    themeButton.textContent = "☀️ Light Mode";
} else {
    document.documentElement.classList.remove("dark");
    themeButton.textContent = "🌙 Dark Mode";
}



themeButton.addEventListener("click", () => {

    document.documentElement.classList.toggle("dark");

  
    const isDark = document.documentElement.classList.contains("dark");

    if (isDark) {

       
        localStorage.setItem("theme", "dark");

        
        themeButton.textContent = "☀️ Light Mode";

    } else {

      
        localStorage.setItem("theme", "light");

       
        themeButton.textContent = "🌙 Dark Mode";
    }
});