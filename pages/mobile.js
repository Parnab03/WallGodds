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
    

    
