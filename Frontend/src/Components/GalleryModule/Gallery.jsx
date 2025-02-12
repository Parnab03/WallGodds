import { useRef, useEffect, useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Styles from "./Gallery.module.css"
import NavBar from "../CommonModule/NavBarModule/NavBar"
import Mobile from "./MobileSection/Mobile"
import Tablet from "./TabletSection/Tablet"
import Desktop from "./DesktopSection/Desktop"
import SideBar from "./SideBarModule/SideBar"

const Gallery = () => {
    const galleryContentRef = useRef(null)
    const [showBlend, setShowBlend] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (galleryContentRef.current) {
                const scrollTop = galleryContentRef.current.scrollTop
                setShowBlend(scrollTop > 0)
            }
        }

        const galleryContent = galleryContentRef.current
        if (galleryContent) {
            galleryContent.addEventListener("scroll", handleScroll)
        }

        return () => {
            if (galleryContent) {
                galleryContent.removeEventListener("scroll", handleScroll)
            }
        }
    }, [])

    return (
        <div className={Styles.container}>
            <NavBar />
            <div className={Styles.mainContent}>
                <SideBar />
                <div className={Styles.galleryContent} ref={galleryContentRef}>
                    <div className={Styles.blendOverlay} style={{ opacity: showBlend ? 1 : 0 }} />
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
