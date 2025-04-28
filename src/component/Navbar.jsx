import "../assets/Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa"; 

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [dropdown, setDropdown] = useState(false);

    

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">WanderNepal</Link>
            </div>

            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/BookNow">Book Now</Link></li>
                <li><Link to="/About">About Us</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>

            <div className="navbar-search">
                <input type="text" id="search" placeholder="Search heritage..." />
            </div>

            <div className="navbar-buttons">
                {isLoggedIn ? (
                    <div className="profile-menu">
                        <FaUserCircle size={30} className="profile-icon" onClick={toggleDropdown} />
                        {dropdown && (
                            <div className="dropdown">
                                <Link to="/history">History</Link>
                                <Link to="/visitlist">Visit List</Link>
                                <Link to="/profile">Profile</Link>
                                <Link to="/privacy">Privacy Settings</Link>
                                <Link to="/logout">Logout</Link>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <Link to="/signIn">
                            <button className="signin-btn">Sign In</button>
                        </Link>
                        <Link to="/signUp">
                            <button className="signup-btn">Sign Up</button>
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}