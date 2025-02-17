// Initialize Lucide icons
lucide.createIcons();

let currentCategory = 'desktop';

// DOM elements
const wallpaperGrid = document.querySelector('.wallpaper-grid');
const categoryButtons = document.querySelectorAll('.category-btn');
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const logo = document.querySelector('._logo_9pmj5_35'); // Select the logo element

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    updateLogo(savedTheme); // Update logo based on saved theme
} else {
    body.setAttribute('data-theme', 'light'); // Default to light mode
    updateLogo('light'); // Set default logo for light mode
}

// Theme toggle functionality
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    updateLogo(newTheme); // Update logo when theme changes
});

// Function to update the theme toggle button icon
function updateThemeIcon(theme) {
    const iconPath = theme === 'light' ? 'Frontend/public/DarkIcon.svg' : 'Frontend/public/LightIcon.svg';
    themeToggleBtn.querySelector('img').src = iconPath;
}

// Function to update the logo based on the theme
function updateLogo(theme) {
    const logoPath = theme === 'light' ? 'Frontend/public/Logo.svg' : 'Frontend/public/Logo-white.svg';
    logo.src = logoPath;
}

// Existing functionality for like, save, and download buttons
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".like-btn").forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("liked");
            this.innerHTML = this.classList.contains("liked") ? "❤️" : "🤍";
        });
    });

// Save Button Animation
var btn = document.querySelector(".btn");
var t = new TimelineMax({ paused: true });

t.to(".icon-container.second-icon", 0.8, {
    transform: "rotateX(0deg)",
    ease: Bounce.easeOut
});

function bookmark() {
    // Toggle the active class
    btn.classList.toggle("active");

    // Play or reverse the animation
    t.reversed(!t.reversed());
    if (t.reversed()) {
        t.reverse();
    } else {
        t.play();
    }
}



// Function to update the download button icon based on the theme
function updateDownloadButtonIcon(theme) {
    const downloadButtons = document.querySelectorAll('.download-btn .download-icon');
    downloadButtons.forEach(button => {
        const iconPath = theme === 'light' ? 'Frontend/public/DownloadButton.svg' : 'Frontend/public/DownloadButton-white.svg';
        button.src = iconPath;
    });
}

// Update download button icons when the theme changes
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    updateDownloadButtonIcon(newTheme); // Update download button icons
});

// Initial setup for download button icons
const savedTheme = localStorage.getItem('theme') || 'light';
updateDownloadButtonIcon(savedTheme);

// Download functionality
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".download-btn").forEach(button => {
        button.addEventListener("click", function () {
            const imageUrl = this.getAttribute("data-img");
            const link = document.createElement("a");
            link.href = imageUrl;
            link.download = imageUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
});

