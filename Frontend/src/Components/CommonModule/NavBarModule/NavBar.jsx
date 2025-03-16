import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Search from "/SearchIcon.svg";
import Profile from "/ProfileIcon.svg";
import Style from "./NavBar.module.css";
import ThemeToggle from "../../ThemeModule/ThemeToggle";
import Logo from "./Logo";


const NavBar = () => {
    const [isOpen,setIsOpen] = useState(false);

    return (
        <div className={Style.navbarWrapper}>
             {/* Logo Section */}
             <Logo />

            {/* Navigation Menu */}
            <nav className={Style.navbar}>
                <div className={Style.MainContainer}>
                    <div className={`${Style.navItems} ${isOpen ? Style.active : ""}`}>
                        <ul className={`${Style.menu} ${isOpen ? Style.active : ""}`}>
                            <li className={Style.menuItem}>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? `${Style.menuLink} ${Style.active} ${Style.hide}` : `${Style.menuLink} ${Style.hide}`
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
                            className={`${Style.searchInput} ${Style.hide}`}
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
                        <ThemeToggle />
                    </div>
                    <div className={`${Style.menuToggle} ${isOpen ? Style.active : ""}`}  onClick={() => setIsOpen(!isOpen)}>
                            ☰
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;