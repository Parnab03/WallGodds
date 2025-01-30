import Save from "/Save.svg";
import Heart from "/Heart.svg";
import DownloadBtn from "/DownloadButton.svg";
import Style from "./ImgCard.module.css";

const ImgCard = ({ imageSrc }) => {
    return (
        <div className={Style.imgCard}>
            <div className={Style.imageContainer}>
                <img src={imageSrc} alt="img" className={Style.image} />
            </div>
            <div className={Style.bottomBar}>
                <div className={Style.icons}>
                    <img src={Save} alt="Save" className={Style.icon} />
                    <img src={Heart} alt="Heart" className={Style.icon} />
                </div>
                <div className={Style.userInfo}>
                    <span className={Style.username}>@user_123</span>
                    <img
                        src={DownloadBtn}
                        alt="DownloadBtn"
                        className={Style.downloadBtn}
                    />
                </div>
            </div>
        </div>
    );
};

export default ImgCard;
