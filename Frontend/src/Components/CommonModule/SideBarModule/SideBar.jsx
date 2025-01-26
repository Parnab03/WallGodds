import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Logo from "/Logo.svg";
import Mobile from "./img/Mobile.svg";
import Tablet from "./img/Tablet.svg";
import Desktop from "./img/Desktop.svg";
import NavBar from "../NavBarModule/NavBar";
import styles from "./SideBar.module.css";

const SideBar = () => {
    const [activeDevice, setActiveDevice] = useState("Desktop");
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        setActiveDevice("Desktop");
    }, []);

    const handleSelection = (device) => {
        setActiveDevice(device);
        // Navigate to the respective route based on the selected device
        if (device === "Mobile") {
            navigate("/gallery/mobile");
        } else if (device === "Tablet") {
            navigate("/gallery/tablet");
        } else {
            navigate("/gallery/desktop");
        }
    };

    return (
        <div className={styles.sidebar}>
            <div className={styles.navWithLogo}>
                <img className={styles.logo} src={Logo} alt="Logo" />
                <NavBar />
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.listContainer}>
                    <ul className={styles.verticalList}>
                        <li
                            className={`${styles.listItem} ${
                                activeDevice === "Mobile" ? styles.active : ""
                            }`}
                            onClick={() => handleSelection("Mobile")}
                        >
                            <img src={Mobile} alt="Mobile" />
                        </li>
                        <li
                            className={`${styles.listItem} ${
                                activeDevice === "Tablet" ? styles.active : ""
                            }`}
                            onClick={() => handleSelection("Tablet")}
                        >
                            <img src={Tablet} alt="Tablet" />
                        </li>
                        <li
                            className={`${styles.listItem} ${
                                activeDevice === "Desktop" ? styles.active : ""
                            }`}
                            onClick={() => handleSelection("Desktop")}
                        >
                            <img src={Desktop} alt="Desktop" />
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
