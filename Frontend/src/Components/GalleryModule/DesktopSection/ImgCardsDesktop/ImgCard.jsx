import { useState } from "react";
import DownloadBtn from "/DownloadButton.svg";
import Style from "./ImgCard.module.css";

const ImgCard = ({ imageSrc }) => {
    const [liked, setLiked] = useState(false); 

    
    const [saved, setSaved] = useState(false);

    
    const [showPopup, setShowPopup] = useState(false);

    const handleDownloadClick = () => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
    };

    return (
        <div className={Style.imgCard}>
            <div className={Style.imageContainer}>
                <img src={imageSrc} alt="img" className={Style.image} />
            </div>
            <div className={Style.bottomBar}>
                <div className={Style.icons}>

                    <svg
                        onClick={() => setSaved(!saved)}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={saved ? "#808080" : "none"}
                        stroke="black"
                        strokeWidth="2"
                        className={Style.saveIcon}
                        
                    >
                        <path
                            d="M6 4C5.44772 4 5 4.44772 5 5V21L12 17L19 21V5C19 4.44772 18.5523 4 18 4H6Z"
                            stroke={saved ? "#808080" : "#808080"}        
                        />
                    </svg>


                    <svg
                        onClick={() => setLiked(!liked)}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={liked ? "red" : "none"}
                        stroke="red"
                        strokeWidth="2"
                        className={Style.heartIcon}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 
                            5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
                            4.5 2.09C13.09 3.81 14.76 3 
                            16.5 3 19.58 3 22 5.42 
                            22 8.5c0 3.78-3.4 6.86-8.55 
                            11.54L12 21.35z"
                        />
                    </svg>


                </div>
                <div className={Style.userInfo}>
                    <span className={Style.username}>@user_123</span>
                    <div className={Style.downloadContainer}>
                    <img
                        src={DownloadBtn}
                        alt="DownloadBtn"
                        className={Style.downloadBtn}
                        onClick={handleDownloadClick}
                    />
                
            

             {showPopup && (
                <div className={Style.popup}>
                    Download not available right now. Stay tuned!<br />
                    For backend updates, follow our Discord and check the GitHub repo.
                </div>
            )}
            </div>
            </div>
            </div>
        </div>
    );
};

export default ImgCard;
