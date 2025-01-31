// Initialize Lucide icons
lucide.createIcons();


let currentCategory = 'desktop';

// DOM elements
const wallpaperGrid = document.querySelector('.wallpaper-grid');
const categoryButtons = document.querySelectorAll('.category-btn');


    

document.addEventListener("DOMContentLoaded", function () {
    // Like Button Functionality
    document.querySelectorAll(".like-btn").forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("liked");
            this.innerHTML = this.classList.contains("liked") ? "❤️" : "🤍";
        });
    });

    // Save Button Functionality
    document.querySelectorAll(".save-btn").forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("saved");
            this.innerHTML = this.classList.contains("saved") ? "📌" : "🔖";
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
