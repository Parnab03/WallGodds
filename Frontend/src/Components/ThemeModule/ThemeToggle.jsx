import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ThemeToggle.module.css';
import DarkIcon from '/DarkIcon.svg';
import LightIcon from '/LightIcon.svg';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });
    const location = useLocation();

    useEffect(() => {
        const initialTheme = localStorage.getItem('theme');
        if (initialTheme === 'dark') {
            applyDarkTheme();
        }
    }, []);

    // Re-apply theme on route change
    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            applyDarkTheme();
        }
    }, [location]);

    const applyDarkTheme = () => {
        document.body.style.backgroundImage = "url('/BACKGROUND-DARK.svg')";
        document.body.classList.add('dark-theme');
        document.body.style.color = 'white';
        updateImages(true);
    };

    const applyLightTheme = () => {
        document.body.style.backgroundImage = "url('/BACKGROUND.svg')";
        document.body.classList.remove('dark-theme');
        document.body.style.color = 'black';
        updateImages(false);
    };

    const updateImages = (isDarkMode) => {
        setTimeout(() => {
            //Logo
            document.querySelectorAll('img[src*="Logo"]').forEach(logo => {
                logo.src = isDarkMode ? '/Logo-white.svg' : '/Logo.svg';
            });

            //Download button
            document.querySelectorAll('img[src*="DownloadButton"]').forEach(download => {
                download.src = isDarkMode ? '/DownloadButton-white.svg' : '/DownloadButton.svg';
            });
        }, 0);
    };

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
        
        if (newTheme) {
            applyDarkTheme();
        } else {
            applyLightTheme();
        }
    };

    return (
        <button 
            className={styles.themeToggle} 
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
            <img 
                src={isDark ? LightIcon : DarkIcon} 
                alt={isDark ? "Light Mode" : "Dark Mode"}
                className={styles.toggleIcon}
            />
        </button>
    );
};

export default ThemeToggle;