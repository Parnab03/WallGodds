import ImgCard from "./ImgCardsMobile/ImgCard";
import img1 from "./MobileAssets/mobile_wallpaper1.png";
import img2 from "./MobileAssets/mobile_wallpaper2.png";
import img3 from "./MobileAssets/mobile_wallpaper3.png";
import img4 from "./MobileAssets/mobile_wallpaper4.png";
import img5 from "./MobileAssets/mobile_wallpaper5.png";
import img6 from "./MobileAssets/mobile_wallpaper6.png";
import img7 from "./MobileAssets/mobile_wallpaper7.png";
import img8 from "./MobileAssets/mobile_wallpaper8.png";
import img9 from "./MobileAssets/mobile_wallpaper9.png";
import img10 from "./MobileAssets/mobile_wallpaper10.png";
import Styles from "./Mobile.module.css";

const Mobile = () => {
    return (
        <div className={Styles.MobileGrid}>
            <div className={Styles.imgCards}>
                <ImgCard imageSrc={img1} />
                <ImgCard imageSrc={img2} />
                <ImgCard imageSrc={img3} />
                <ImgCard imageSrc={img4} />
                <ImgCard imageSrc={img5} />
            </div>
            <div className={Styles.imgCards}>
                <ImgCard imageSrc={img6} />
                <ImgCard imageSrc={img7} />
                <ImgCard imageSrc={img8} />
                <ImgCard imageSrc={img9} />
                <ImgCard imageSrc={img10} />
            </div>
            
        </div>

    );
};
export default Mobile;