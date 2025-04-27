import "../assets/Navbar.css"
// import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span to="/">Logo</span>
            </div>
            <ul className="navbar-links">
                <li><span to="/">Home</span></li>
                <li><span to="/BookNow">Book Now</span></li>
            </ul>
            <div className="navbar-search">
                <input type="text" id="search" placeholder="Search..." />
            </div>
            <div className="navbar-buttons">
                <span to="/signIn">
                    <button className="signin-btn">Sign-in</button>
                </span>
                <span to="/signUp">
                    <button className="signup-btn">Sign-up</button>
                </span>
            </div>
        </nav>
    );
}