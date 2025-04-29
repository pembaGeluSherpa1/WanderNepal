import { FaFacebook,FaLinkedin,FaInstagram,FaMapMarkerAlt,FaPhoneVolume } from "react-icons/fa";
import { MdEmail,MdCopyright } from "react-icons/md";

import "../assets/Footer.css"

function Footer(){
    return(
        <>
        <footer>

         <div className="footer-container">
            <div className="footer-about">
                <h2 className="footerh2">About</h2>
                <ul>
                    <li><a href="#">Introduction</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Video Gallery</a></li>   
                </ul>

            <div className="footersocialmedia">
                <ul>
                    <li><a href="#"><FaFacebook/></a></li>
                    <li><a href="#"><FaLinkedin/></a></li>
                    <li><a href="#"><FaInstagram/></a></li>
                </ul>
            </div>
        </div>


            <div className="footer-link">
                <h2 className="footerh2" >Quick Link</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Book Us</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>

            <div className="footer-contact">
                <h2 className="footerh2">Contact</h2>
                <ul>
                    <li>
                       <span className="footerlocationicon"><FaMapMarkerAlt /></span>
                        <p>Kathamndu</p>
    
                    </li>
                    <li>
                        <a href="#">wandernepal@gmail.com</a>
                    </li>
                    <li>
                        <span className="footerphoneicon"><FaPhoneVolume /></span>
                        <a href="#">0000 000 000</a>
                    </li>
                </ul>

            </div>

            <div className="footercopyright">
                <p><span><MdCopyright/></span> 2024 Brand, Inc . Privacy . Terms.Sitemap </p>
            </div>
         </div>
            </footer>
        </>
    )
}
export default Footer;