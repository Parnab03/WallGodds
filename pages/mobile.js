// Initialize Lucide icons
lucide.createIcons();


let currentCategory = 'desktop';

// DOM elements
const wallpaperGrid = document.querySelector('.wallpaper-grid');
const categoryButtons = document.querySelectorAll('.category-btn');

document.querySelectorAll('.wallpaper-like').forEach(icon => {
            icon.addEventListener('click', () => {
                icon.classList.toggle('liked');
                icon.textContent = icon.classList.contains('liked') ? '❤️' : '🤍';
            });
        });

        document.querySelectorAll('.wallpaper-save').forEach(icon => {
            icon.addEventListener('click', () => {
                icon.classList.toggle('saved');
                icon.textContent = icon.classList.contains('saved') ? '📌' : '🔖';
            });
        });

        document.querySelectorAll('.wallpaper-download').forEach(button => {
            button.addEventListener('click', () => {
                alert('Download started!');
            });
        });
    

    // Download Button Functionality
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
