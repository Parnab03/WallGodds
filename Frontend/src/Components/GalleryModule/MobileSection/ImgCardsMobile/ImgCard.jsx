import React, { useState } from "react";
import Style from "./ImgCard.module.css";
import { LiaDownloadSolid } from "react-icons/lia";
import Save from "/Save.svg";
import Heart from "/Heart.svg";
import Download from "/Vector.svg";
import Popup from "../../../CommonModule/PopupModule/Popup.jsx";

const ImgCard = ({ imageSrc, username = "@ImgUser1" }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleDownloadClick = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className={Style.imgCard}>
            {/* Image Container with Overlay Icons */}
            <div className={Style.imageContainer}>
                <img src={imageSrc} alt="Wallpaper" className={Style.image} />

                {/* Left (Bookmark) & Right (Heart) Overlay Icons */}
                <img src={Save} alt="Save" className={`${Style.icon} ${Style.bookmarkIcon}`} />
                <img src={Heart} alt="Heart" className={`${Style.icon} ${Style.heartIcon}`} />

                {/* Username (Always Visible on Large Screens) */}
                <span className={Style.username}>{username}</span>

                {/* Username + Download Button in Bottom Overlay (ONLY for Mobile) */}
                <div className={Style.bottomOverlay}>
                    <span>{username}</span>
                    <button className={Style.downloadBtn} onClick={handleDownloadClick}>
                        Download <LiaDownloadSolid className={Style.downloadIcon} />
                    </button>
                </div>
            </div>

            {/* Download Button BELOW image (ONLY for Large Screens) */}
            <div className={Style.downloadBar}>
                <button className={Style.downloadBtn} onClick={handleDownloadClick}>
                    Download <LiaDownloadSolid className={Style.downloadIcon} />
                </button>
            </div>
            
            <Popup
                isOpen={isPopupOpen}
                onClose={closePopup}
                message="Download not available right now. Stay tuned! For backend updates, follow our Discord and check the GitHub repo."
                title="Download Status"
            />
        </div>
    );
};

export default ImgCard;