import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "/Logo.svg";
import Search from "/SearchIcon.svg";
import Profile from "/ProfileIcon.svg";
import Style from "./NavBar.module.css";

const NavBar = () => {
    return (
        <div className={Style.navbarWrapper}>
            {/* Logo Section */}
            <div className={Style.logoContainer}>
                <img className={Style.logo} src={Logo} alt="Logo" />
            </div>
            {/* Navigation Menu */}
            <nav className={Style.navbar}>
                <div className={Style.MainContainer}>
                    <div className={Style.navItems}>
                        <ul className={Style.menu}>
                            <li className={Style.menuItem}>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? `${Style.menuLink} ${Style.active}` : Style.menuLink
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className={Style.menuItem}>
                                <NavLink
                                    to="/gallery"
                                    className={({ isActive }) =>
                                        isActive ? `${Style.menuLink} ${Style.active}` : Style.menuLink
                                    }
                                >
                                    Gallery
                                </NavLink>
                            </li>
                            <li className={Style.menuItem}>
                                <NavLink
                                    to="/upload"
                                    className={({ isActive }) =>
                                        isActive ? `${Style.menuLink} ${Style.active}` : Style.menuLink
                                    }
                                >
                                    Upload
                                </NavLink>
                            </li>
                            <li className={Style.menuItem}>
                                <NavLink
                                    to="/aboutus"
                                    className={({ isActive }) =>
                                        isActive ? `${Style.menuLink} ${Style.active}` : Style.menuLink
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={Style.searchContainer}>
                        <input
                            className={Style.searchInput}
                            type="text"
                            placeholder="Search your wallpaper"
                        />
                        <button className={Style.searchButton}>
                            <img src={Search} alt="Search" />
                        </button>
                    </div>
                    <div className={Style.profileContainer}>
                        <button className={Style.profileButton}>
                            <img src={Profile} alt="Profile" />
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
