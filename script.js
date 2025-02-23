// Initialize Lucide icons
lucide.createIcons();

// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const logo = document.querySelector('._logo_9pmj5_35');

// Check saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);
updateLogo(savedTheme);
updateDownloadButtonIcon(savedTheme);

// Theme toggle event
themeToggleBtn.addEventListener('click', () => {
    const newTheme = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    updateLogo(newTheme);
    updateDownloadButtonIcon(newTheme);
});

// Update theme icon
function updateThemeIcon(theme) {
    const iconPath = theme === 'light' ? 'Frontend/public/DarkIcon.svg' : 'Frontend/public/LightIcon.svg';
    themeToggleBtn.querySelector('img').src = iconPath;
}

// Update logo
function updateLogo(theme) {
    logo.src = theme === 'light' ? 'Frontend/public/Logo.svg' : 'Frontend/public/Logo-white.svg';
}

// Update download button icons
function updateDownloadButtonIcon(theme) {
    document.querySelectorAll('.download-icon').forEach(icon => {
        icon.src = theme === 'light' ? 'Frontend/public/DownloadButton.svg' : 'Frontend/public/DownloadButton-white.svg';
    });
}

// Like Button Functionality
document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('liked');
        this.innerHTML = this.classList.contains('liked') ? '❤️' : '🤍';
    });
});
