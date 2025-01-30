import ImgCard from "../DesktopSection/ImgCardsDesktop/ImgCard";
import img1 from "./TabletAssets/tablet_wallpaper1.png"
import img2 from "./TabletAssets/tablet_wallpaper2.png"
import img3 from "./TabletAssets/tablet_wallpaper3.png"
import img4 from "./TabletAssets/tablet_wallpaper4.png"
import Styles from "./Tablet.module.css";

const Tablet = () => {
    return (
        <div className={Styles.gallery}>
            <h2>Tablet Devices</h2>
            {/* <div className={Styles.imgCards}>
                <ImgCard imageSrc={img1} />
                <ImgCard imageSrc={img2} />
            </div> */}
            {/* <div className={Styles.imgCards}>
                <ImgCard imageSrc={img3} />
                <ImgCard imageSrc={img4} />
            </div> */}
        </div>
    );
};
export default Tablet;