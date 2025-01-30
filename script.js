// Initialize Lucide icons
lucide.createIcons();

// Wallpaper data organized by categories
const wallpapersByCategory = {
    desktop: [
        {
            id: 1,
            imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
            username: "user_123",
            isLiked: false,
            isBookmarked: false,
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
            username: "user_123",
            isLiked: false,
            isBookmarked: false,
        }
    ],

let currentCategory = 'desktop';

// DOM elements
const wallpaperGrid = document.querySelector('.wallpaper-grid');
const categoryButtons = document.querySelectorAll('.category-btn');

// Render wallpapers for current category
function renderWallpapers() {
    const wallpapers = wallpapersByCategory[currentCategory];
    wallpaperGrid.innerHTML = wallpapers.map(wallpaper => `
        <div class="wallpaper-card">
            <img src="${wallpaper.imageUrl}" alt="Wallpaper">
            <div class="wallpaper-overlay">
                <div class="overlay-content">
                    <div class="overlay-actions">
                        <button onclick="toggleBookmark(${wallpaper.id})" id="bookmark-${wallpaper.id}">
                            <i data-lucide="bookmark"></i>
                        </button>
                        <button onclick="toggleLike(${wallpaper.id})" id="like-${wallpaper.id}">
                            <i data-lucide="heart"></i>
                        </button>
                    </div>
                    <div class="user-actions">
                        <span>@${wallpaper.username}</span>
                        <button class="download-btn">
                            <i data-lucide="download" style="width: 16px; height: 16px;"></i>
                            <span>Download</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Reinitialize icons for the new content
    lucide.createIcons();

// Handle category selection
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Update current category and render
        currentCategory = button.dataset.category;
        renderWallpapers();
    });
});

// Initial render
renderWallpapers();

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

