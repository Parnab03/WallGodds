import React from "react";
import LogoImage from "/Logo.svg";
import Style from "./NavBar.module.css";

const Logo = () => {
    return (
        <div className={Style.logoContainer}>
            <img className={Style.logo} src={LogoImage} alt="Logo" />
        </div>
    );
};

export default Logo;
