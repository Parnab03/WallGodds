import { useState } from "react";
import Style from "./ImgCard.module.css";
import { LiaDownloadSolid } from "react-icons/lia";
import Download from "/Vector.svg";

const ImgCard = ({ imageSrc, username = "@ImgUser1" }) => {

    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    const [showPopup, setShowPopup] = useState(false);

    const handleDownloadClick = () => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
    };

    return (
        <div className={Style.imgCard}>
            {/* Image Container with Overlay Icons */}
            <div className={Style.imageContainer}>
                <img src={imageSrc} alt="Wallpaper" className={Style.image} />

                <div className={Style.icons}>
                <svg
                    onClick={() => setSaved(!saved)}
                    className={`${Style.icon} ${Style.saveIcon}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M6 4C5.44772 4 5 4.44772 5 5V21L12 17L19 21V5C19 4.44772 18.5523 4 18 4H6Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill={saved ? "hsla(0, 45%, 98%, 0.932)" : "none"}
                    />
                </svg>

               
                <svg
                    onClick={() => setLiked(!liked)}
                    className={`${Style.icon} ${Style.heartIcon}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 
                            5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
                            4.5 2.09C13.09 3.81 14.76 3 
                            16.5 3 19.58 3 22 5.42 
                            22 8.5c0 3.78-3.4 6.86-8.55 
                            11.54L12 21.35z"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill={liked ? "red" : "none"}
                    />
                </svg>
                </div>

                {/* Username (Always Visible on Large Screens) */}
                <span className={Style.username}>{username}</span>

                {/* Username + Download Button in Bottom Overlay (ONLY for Mobile) */}
                 <div className={Style.bottomOverlay}>
                    <span>{username}</span>
                    <div className={Style.downloadContainer}>
                        <button onClick={handleDownloadClick} className={Style.downloadBtn}>
                            Download <LiaDownloadSolid className={Style.downloadIcon} />
                        </button>
                        {showPopup && (
                            <div className={Style.popup}>
                                Download not available right now. <br />
                                Stay tuned! For backend updates, follow our Discord and check the GitHub repo.
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Download Button BELOW image (ONLY for Large Screens) */}
            <div className={Style.downloadBar}>
               
                    <button onClick={handleDownloadClick} className={Style.downloadBtn}>
                        Download <LiaDownloadSolid className={Style.downloadIcon} />
                    </button>
                    {showPopup && (
                        <div className={`${Style.popup} ${Style.showPopup}`}>
                            Download not available right now. <br />
                            Stay tuned! For backend updates, follow our Discord and check the GitHub repo.
                        </div>
                    )}
              
            </div>
        </div>
    );
};

export default ImgCard;