import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Mobile from "./img/Mobile.svg";
import Tablet from "./img/Tablet.svg";
import Desktop from "./img/Desktop.svg";
import styles from "./SideBar.module.css";

const SideBar = () => {
    const location = useLocation();
    const [activeItem, setActiveItem] = useState(location.pathname.split("/").pop() || "desktop");

    // Sync activeItem with URL path
    useEffect(() => {
        const currentPath = location.pathname.split("/").pop() || "desktop";
        setActiveItem(currentPath);
    }, [location]);

    const handleItemClick = (item) => {
        setActiveItem(item); // Update active state
    };

    return (
        <div className={styles.sidebar}>
            <div className={styles.mainContainer}>
                <div className={styles.listContainer}>
                    <ul className={styles.verticalList}>
                        <li
                            className={`${styles.listItem} ${activeItem === "mobile" ? styles.active : ""}`}
                            onClick={() => handleItemClick("mobile")}
                        >
                            <Link to="/gallery/mobile">
                                <img src={Mobile || "/placeholder.svg"} alt="Mobile" />
                            </Link>
                        </li>
                        <li
                            className={`${styles.listItem} ${activeItem === "tablet" ? styles.active : ""}`}
                            onClick={() => handleItemClick("tablet")}
                        >
                            <Link to="/gallery/tablet">
                                <img src={Tablet || "/placeholder.svg"} alt="Tablet" />
                            </Link>
                        </li>
                        <li
                            className={`${styles.listItem} ${activeItem === "desktop" ? styles.active : ""}`}
                            onClick={() => handleItemClick("desktop")}
                        >
                            <Link to="/gallery/desktop">
                                <img src={Desktop || "/placeholder.svg"} alt="Desktop" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.copyright}>
                    <p>@CopyRight</p>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
