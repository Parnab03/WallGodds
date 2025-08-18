


import React, { useState } from "react";
import NavBar from "../CommonModule/NavBarModule/NavBar";
import styles from "./Profile.module.css";

import img1 from "./img_1.png";
import img2 from "./img_2.png";
import img3 from "./img_3.png";
import img4 from "./img_4.png";
import m1 from "./mobile_wallpaper1.png";
import m2 from "./mobile_wallpaper2.png";
import m3 from "./mobile_wallpaper3.png";
import m4 from "./mobile_wallpaper4.png";
import m5 from "./mobile_wallpaper5.png";
import m6 from "./mobile_wallpaper6.png";
import m7 from "./mobile_wallpaper7.png";
import m8 from "./mobile_wallpaper8.png";
import m9 from "./mobile_wallpaper9.png";
import m10 from "./mobile_wallpaper10.png";

const Profile = () => {
  const [favorites, setFavorites] = useState([]);

  const wallpapers = [
    { id: 1, src: img1, title: "Wallpaper 1" },
    { id: 2, src: img2, title: "Wallpaper 2" },
    { id: 3, src: img3, title: "Wallpaper 3" },
    { id: 4, src: img4, title: "Wallpaper 4" },
    { id: 5, src: m1, title: "Mobile Wallpaper 1" },
    { id: 6, src: m2, title: "Mobile Wallpaper 2" },
    { id: 7, src: m3, title: "Mobile Wallpaper 3" },
    { id: 8, src: m4, title: "Mobile Wallpaper 4" },
    { id: 9, src: m5, title: "Mobile Wallpaper 5" },
    { id: 10, src: m6, title: "Mobile Wallpaper 6" },
    { id: 11, src: m7, title: "Mobile Wallpaper 7" },
    { id: 12, src: m8, title: "Mobile Wallpaper 8" },
    { id: 13, src: m9, title: "Mobile Wallpaper 9" },
    { id: 14, src: m10, title: "Mobile Wallpaper 10" },
  ];

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <div className={styles.dev}>
      <NavBar />

      {/* All Wallpapers */}
      {/* <h2>All Wallpapers</h2> */}
      <div className={styles.wallpaperGrid}>
        {wallpapers.map((wall) => (
          <div className={styles.wallpaperCard} key={wall.id}>
            <img src={wall.src} alt={wall.title} />
            <p className={styles.user}>{wall.title}</p>
            <button
              className={`${styles.favBtn} ${
                favorites.includes(wall.id) ? styles.active : ""
              }`}
              onClick={() => toggleFavorite(wall.id)}
            >
              {favorites.includes(wall.id) ? "♥ Added" : "♡ Add to Favourites"}
            </button>
          </div>
        ))}
      </div>

      {/* Favourite Wallpapers */}
      <h2>My Favourites</h2>
      {favorites.length === 0 ? (
        <p>No favourites yet.</p>
      ) : (
        <div className={styles.wallpaperGrid}>
          {wallpapers
            .filter((w) => favorites.includes(w.id))
            .map((wall) => (
              <div className={styles.wallpaperCard} key={wall.id}>
                <img src={wall.src} alt={wall.title} />
                <p className={styles.user}>{wall.title}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
