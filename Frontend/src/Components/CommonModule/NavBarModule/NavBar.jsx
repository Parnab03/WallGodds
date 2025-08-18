// import React from "react";
// import { NavLink } from "react-router-dom";
// import Search from "/SearchIcon.svg";
// import Profile from "/ProfileIcon.svg";
// import Style from "./NavBar.module.css";
// import ThemeToggle from "../../ThemeModule/ThemeToggle";
// import Logo from "./Logo";
// import { useLocation } from "react-router-dom";

// const NavBar = () => {
//     const location = useLocation();
//     const isAboutUsPage = location.pathname === "/aboutus";

//     return (
//         <div className={Style.navbarWrapper}>
//            <div className={`${Style.navbarWrapper} ${isAboutUsPage ? Style.navbarStatic : ""}`}>

//             {/* Logo Section */}
//             <Logo />

//             {/* Navigation Menu */}
//             <nav className={Style.navbar}>
//                 <div className={Style.MainContainer}>
//                     <div className={Style.navItems}>
//                         <ul className={Style.menu}>
//                             <li className={Style.menuItem}>
//                                 <NavLink
//                                     to="/"
//                                     className={({ isActive }) =>
//                                         isActive
//                                             ? `${Style.menuLink} ${Style.active} ${Style.hide}`
//                                             : `${Style.menuLink} ${Style.hide}`
//                                     }>
//                                     Home
//                                 </NavLink>
//                             </li>
//                             <li className={Style.menuItem}>
//                                 <NavLink
//                                     to="/gallery"
//                                     className={({ isActive }) =>
//                                         isActive
//                                             ? `${Style.menuLink} ${Style.active}`
//                                             : Style.menuLink
//                                     }>
//                                     Gallery
//                                 </NavLink>
//                             </li>
//                             <li className={Style.menuItem}>
//                                 <NavLink
//                                     to="/upload"
//                                     className={({ isActive }) =>
//                                         isActive
//                                             ? `${Style.menuLink} ${Style.active}`
//                                             : Style.menuLink
//                                     }>
//                                     Upload
//                                 </NavLink>
//                             </li>
//                             <li className={Style.menuItem}>
//                                 <NavLink
//                                     to="/aboutus"
//                                     className={({ isActive }) =>
//                                         isActive
//                                             ? `${Style.menuLink} ${Style.active}`
//                                             : Style.menuLink
//                                     }>
//                                     About Us
//                                 </NavLink>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className={Style.searchContainer}>
//                         <input
//                             className={`${Style.searchInput} ${Style.hide}`}
//                             type="text"
//                             placeholder="Search your wallpaper"
//                         />
//                         <button className={Style.searchButton}>
//                             <img src={Search} alt="Search" />
//                         </button>
//                     </div>
//                     <div className={Style.profileContainer}>
//                         <NavLink to="/profile">
//                             <button className={Style.profileButton}>
//                                 <img src={Profile} alt="Profile" />
//                             </button>
//                         </NavLink>
//                         <ThemeToggle />
//                     </div>
//                 </div>
//             </nav>
//         </div>
//         </div>
     
//     );
// };

// export default NavBar;

import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Search from "/SearchIcon.svg";
import Profile from "/ProfileIcon.svg";
import Style from "./NavBar.module.css";
import ThemeToggle from "../../ThemeModule/ThemeToggle";
import Logo from "./Logo";

const NavBar = () => {
    const location = useLocation();
    const isAboutUsPage = location.pathname === "/aboutus";

    return (
        <div className={`${Style.navbarWrapper} ${isAboutUsPage ? Style.navbarStatic : ""}`}>
            {/* Logo Section */}
            <Logo />

            {/* Navigation Menu */}
            <nav className={Style.navbar}>
                <div className={Style.MainContainer}>
                    <div className={Style.navItems}>
                        <ul className={Style.menu}>
                            <li className={Style.menuItem}>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? `${Style.menuLink} ${Style.active} ${Style.hide}`
                                            : `${Style.menuLink} ${Style.hide}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className={Style.menuItem}>
                                <NavLink
                                    to="/gallery"
                                    className={({ isActive }) =>
                                        isActive
                                            ? `${Style.menuLink} ${Style.active}`
                                            : Style.menuLink
                                    }
                                >
                                    Gallery
                                </NavLink>
                            </li>
                            <li className={Style.menuItem}>
                                <NavLink
                                    to="/upload"
                                    className={({ isActive }) =>
                                        isActive
                                            ? `${Style.menuLink} ${Style.active}`
                                            : Style.menuLink
                                    }
                                >
                                    Upload
                                </NavLink>
                            </li>
                            <li className={Style.menuItem}>
                                <NavLink
                                    to="/aboutus"
                                    className={({ isActive }) =>
                                        isActive
                                            ? `${Style.menuLink} ${Style.active}`
                                            : Style.menuLink
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
                <NavLink to="/profile" className={Style.profileButton}>
                <img src={Profile} alt="Profile" />
                 </NavLink>
               <ThemeToggle />
                </div>

                </div>
            </nav>
        </div>
    );
};

export default NavBar;
