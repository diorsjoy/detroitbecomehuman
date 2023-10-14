const themeButton = document.getElementById('theme-button');
const body = document.body;
let darkMode = false;

themeButton.addEventListener('click', () => {
    darkMode = !darkMode;
    if (darkMode) {
        body.classList.add('dark-mode');
        themeButton.classList.remove('fa-moon'); // Remove moon icon
        themeButton.classList.add('fa-sun'); // Add sun icon
    } else {
        body.classList.remove('dark-mode');
        themeButton.classList.remove('fa-sun'); // Remove sun icon
        themeButton.classList.add('fa-moon'); // Add moon icon
    }
});

    // Get the current page's URL
    const currentPageUrl = window.location.href;

    // Add 'active' class to the corresponding navigation link
    if (currentPageUrl.includes("index.html")) {
    document.getElementById("home-link").classList.add("active");
} else if (currentPageUrl.includes("about.html")) {
    document.getElementById("about-link").classList.add("active");
} else if (currentPageUrl.includes("contact.html")) {
    document.getElementById("contact-link").classList.add("active");
}



const userPrefersDarkMode = true;
if (userPrefersDarkMode) {
    body.classList.add('dark-mode');
    themeButton.classList.remove('fa-moon'); // Remove moon icon
    themeButton.classList.add('fa-sun'); // Add sun icon
}
