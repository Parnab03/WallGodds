import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Styles from "./Gallery.module.css"
import NavBar from "../CommonModule/NavBarModule/NavBar"
import Mobile from "./MobileSection/Mobile"
import Tablet from "./TabletSection/Tablet"
import Desktop from "./DesktopSection/Desktop"
import SideBar from "./SideBarModule/SideBar"

const Gallery = () => {
    return (
        <div className={Styles.container}>
            <NavBar />
            <div className={Styles.mainContent}>
                <SideBar />
                <div className={Styles.galleryContent}>
                    <Routes>
                        <Route path="mobile" element={<Mobile />} />
                        <Route path="tablet" element={<Tablet />} />
                        <Route path="desktop" element={<Desktop />} />
                        <Route path="" element={<Navigate to="desktop" replace />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Gallery

