import React, { useState } from "react";
import Save from "/Save.svg";
import Heart from "/Heart.svg";
import DownloadBtn from "/DownloadButton.svg";
import Style from "./ImgCard.module.css";
import Popup from "../../../CommonModule/PopupModule/Popup.jsx";

const ImgCard = ({ imageSrc }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleDownloadClick = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className={Style.imgCard}>
            <div className={Style.icons}>
                <img src={Save} alt="Save" className={Style.icon} />
                <img src={Heart} alt="Heart" className={Style.icon} />
            </div>
            <div className={Style.imageContainer}>
                <img src={imageSrc} alt="img" className={Style.image} />
            </div>
            <div className={Style.bottomBar}>
                <div className={Style.userInfo}>
                    <span className={Style.username}>@Img User1</span>
                    <img
                        src={DownloadBtn}
                        alt="DownloadBtn"
                        className={Style.downloadBtn}
                        onClick={handleDownloadClick}
                    />
                </div>
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

export default ImgCard
