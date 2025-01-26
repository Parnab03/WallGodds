import React from "react";
import ImgCard from "./ImgCards/ImgCard";
import img1 from "./DesktopAssets/img_1.png";
import img2 from "./DesktopAssets/img_2.png";
import img3 from "./DesktopAssets/img_3.png";
import img4 from "./DesktopAssets/img_4.png";
import Styles from "./Desktop.module.css";

const Desktop = () => {
    const images = [img1, img2, img3, img4];

    return (
        <div className={Styles.gallery}>
            <div className={Styles.imgCards}>
                {images.map((image, index) => (
                    <ImgCard imageSrc={image} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Desktop;