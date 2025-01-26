// JavaScript for WallGodds

// Search functionality
document.querySelector('header .search-profile input').addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();
    const wallpapers = document.querySelectorAll('.wallpaper-card');

    wallpapers.forEach(wallpaper => {
        const username = wallpaper.querySelector('.wallpaper-info span').textContent.toLowerCase();
        if (username.includes(query)) {
            wallpaper.style.display = 'block';
        } else {
            wallpaper.style.display = 'none';
        }
    });
});

// Like and Bookmark actions
document.querySelectorAll('.actions button').forEach(button => {
    button.addEventListener('click', function() {
        const icon = this.querySelector('img');
        const isActive = this.classList.toggle('active');

        if (isActive) {
            icon.src = icon.src.replace('icon.png', 'icon-active.png');
        } else {
            icon.src = icon.src.replace('icon-active.png', 'icon.png');
        }
    });
});
