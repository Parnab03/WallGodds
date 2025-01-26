import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Desktop from "./DesktopSection/Desktop";
import Mobile from "./MobileSection/mobileAssets/Mobile.jsx";
import Tablet from "./TabletSection/TabletAssets/Tablet.jsx";
import Styles from "./Gallery.module.css";
import SideBarWithNav from "../CommonModule/SideBarModule/SideBar";

const Gallery = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.sidebar} >
               <SideBarWithNav/>
            </div>
            <div className={Styles.content}>
                <Routes>
                    <Route path="/" element={<Navigate to="/gallery/desktop" />} />
                    <Route path="/desktop" element={<Desktop />} />
                    <Route path="/mobile" element={<Mobile />} />
                    <Route path="/tablet" element={<Tablet />} />
                </Routes>
            </div>
        </div>
    );
};

export default Gallery;
