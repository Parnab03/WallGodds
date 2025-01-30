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
}

// Toggle like state
function toggleLike(id) {
    // Find wallpaper across all categories
    for (const category in wallpapersByCategory) {
        const wallpaper = wallpapersByCategory[category].find(w => w.id === id);
        if (wallpaper) {
            wallpaper.isLiked = !wallpaper.isLiked;
            const button = document.getElementById(`like-${id}`);
            button.classList.toggle('active');
            break;
        }
    }
}

// Toggle bookmark state
function toggleBookmark(id) {
    // Find wallpaper across all categories
    for (const category in wallpapersByCategory) {
        const wallpaper = wallpapersByCategory[category].find(w => w.id === id);
        if (wallpaper) {
            wallpaper.isBookmarked = !wallpaper.isBookmarked;
            const button = document.getElementById(`bookmark-${id}`);
            button.classList.toggle('active');
            break;
        }
    }
}

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
