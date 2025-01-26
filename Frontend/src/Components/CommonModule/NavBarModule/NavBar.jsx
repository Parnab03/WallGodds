import Search from "/SearchIcon.svg";
import Profile from "/ProfileIcon.svg";
import Style from "./NavBar.module.css";
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();
    
    
    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === path;
        }
        
        return location.pathname.startsWith(path);
    };

    return (
        <nav className={Style.navbar}>
            <div className={Style.MainContainer}>
                <div className={Style.navItems}>
                    <ul className={Style.menu}>
                        <li className={`${Style.menuItem} ${isActive("/") ? Style.active : ""}`}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={`${Style.menuItem} ${isActive("/gallery") ? Style.active : ""}`}>
                            <Link to="/gallery">Gallery</Link>
                        </li>
                        <li className={`${Style.menuItem} ${isActive("/upload") ? Style.active : ""}`}>
                            <Link to="/upload">Upload</Link>
                        </li>
                        <li className={`${Style.menuItem} ${isActive("/about") ? Style.active : ""}`}>
                            <Link to="/about">About Us</Link>
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
    );
};

export default NavBar;
