import Save from "/Save.svg";
import Heart from "/Heart.svg";
import DownloadBtn from "/DownloadButton.svg";
import Style from "./ImgCard.module.css";

const ImgCard = ({ imageSrc }) => {
    return (
        <div className={Style.imgCard}>
            <div className={Style.icons}>
                <img src={Save} alt="Save" className={Style.save} />
                <img src={Heart} alt="Heart" className={Style.heart} />
            </div>

            <div className={Style.imageContainer}>
                <img src={imageSrc} alt="img" className={Style.image} />

                <span className={Style.username}>@Img User1</span>

                <div className={Style.bottomBar2}>
                    <img
                        src={DownloadBtn}
                        alt="Download Button"
                        className={Style.downloadBtn}
                    />
                </div>
            </div>

            <div className={Style.bottomBar}>
                <img
                    src={DownloadBtn}
                    alt="Download Button"
                    className={Style.downloadBtn}
                />
            </div>
        </div>
    );
};

export default ImgCard;
