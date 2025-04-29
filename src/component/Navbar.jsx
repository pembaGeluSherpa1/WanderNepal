import "../assets/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const profileRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        setDropdownOpen(false);
        navigate("/");
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">WanderNepal</Link>
            </div>

            <div className="burger" onClick={toggleMenu}>
                {menuOpen ? <FaTimes/> : <FaBars size={15} />}
            </div>

            <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
                <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                <li><Link to="/BookNow" onClick={() => setMenuOpen(false)}>Book Now</Link></li>
                <li><Link to="/About" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            </ul>

            <div className="navbar-search">
                <input type="text" id="search" placeholder="Search heritage..." />
            </div>

            <div className="navbar-buttons">
                <div 
                    className="profile-menu" 
                    ref={profileRef}
                >
                    <FaUserCircle size={30} className="profile-icon" onClick={toggleDropdown} />
                    {dropdownOpen && (
                        <div className="dropdown">
                            <Link to="/history">History</Link>
                            <Link to="/visitlist">Visit List</Link>
                            <Link to="/profile">Profile</Link>
                            <button onClick={handleLogout} className="signin-btn">Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}