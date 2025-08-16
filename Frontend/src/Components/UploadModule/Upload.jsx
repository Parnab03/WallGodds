import React, { useState } from "react";
import NavBar from "../CommonModule/NavBarModule/NavBar";
import styles from "./Upload.module.css";

const Upload = () => {
  const [active, setActive] = useState("Tablet");

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <button
            className={`${styles.sideBtn} ${
              active === "Mobile" ? styles.active : ""
            }`}
            onClick={() => setActive("Mobile")}
          >
            Mobile
          </button>
          <button
            className={`${styles.sideBtn} ${
              active === "Tablet" ? styles.active : ""
            }`}
            onClick={() => setActive("Tablet")}
          >
            Tablet
          </button>
          <button
            className={`${styles.sideBtn} ${
              active === "Desktop" ? styles.active : ""
            }`}
            onClick={() => setActive("Desktop")}
          >
            Desktop
          </button>

          <p className={styles.footer}>© WallGodds 2025</p>
        </div>

        {/* Upload Box */}
        <div className={styles.uploadBox}>
          <div className={styles.iconWrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V3.75m0 0L8.25 7.5M12 3.75l3.75 3.75M6.75 12a4.5 4.5 0 01-.878-8.898 4.5 4.5 0 018.367-1.347A4.501 4.501 0 0117.25 12H6.75z"
              />
            </svg>
          </div>
          <p>Upload Your Wallpaper</p>
        </div>

        {/* Instructions */}
        <div className={styles.instructions}>
          <h2>How To Upload Your Wallpaper</h2>
          <ul>
            <li>
              Select Device Type from the side tab:{" "}
              <span className={styles.inlineBtns}>
                <span
                  className={`${styles.inlineBtn} ${
                    active === "Desktop" ? styles.activeInline : ""
                  }`}
                >
                  Desktop
                </span>
                <span
                  className={`${styles.inlineBtn} ${
                    active === "Tablet" ? styles.activeInline : ""
                  }`}
                >
                  Tablet
                </span>
                <span
                  className={`${styles.inlineBtn} ${
                    active === "Mobile" ? styles.activeInline : ""
                  }`}
                >
                  Mobile
                </span>
              </span>
            </li>
            <li>Click “Upload Your Wallpaper”.</li>
            <li>Check Recommended Sizes for best quality.</li>
            <li>Make sure your file is JPEG or SVG, max 25 MB.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Upload;
