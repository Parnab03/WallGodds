import React from "react";
 import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.semicircle}></div>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <p>© WallGodds Community 2025. All rights reserved.</p>
          <div className={styles.knowMoreContainer}>
            <p>Know more</p>
            <img src="./Arrow-know-more.png" alt="Arrow Icon" />
          </div>
          <div className={styles.githubIcon}>
            <a href="https://github.com/Parnab03/WallGodds" target="_blank">
              <img src="./github-icon.png" alt="GitHub Icon" />
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.letsWorkTogether}>
            <img src="./letsworktogether.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
