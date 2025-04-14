import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="foot">

            <div className="logo-sb">
                <div>S</div>
                <div>K</div>
                <div>Y</div>
                <div>T</div>
                <div>U</div>
                <div>P</div>
            </div>
            <div className="hfoot">
                <ul>
                    <li className="tl">About</li>
                    <li><a href="/skytup/privacy/about/">Contact</a></li>
                    <li><a href="/skytup/privacy">Privacy </a></li>
                    <li><a href="/skytup/privacy/terms_and_conditions.php">T & C</a></li>
                </ul>
                <ul>
                    <li className="tl">More</li>
                    <li><a href="#">store</a></li>
                    <li><a href="/asset/app/index.php">Download App</a></li>
                    <li><a href="#">business</a></li>
                </ul>

                <ul id="dv">
                    <li className="tl">Devloper</li>
                    <li><a href="#">Api</a></li>
                    <li><a href="#">User-chat</a></li>
                    <li><a href="/asset/fonts/font.php" target="_blank">Fonts</a></li>
                </ul>
                <ul>
                    <li className="tl">Help</li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/#advertise">Advertise</a></li>
                    <li><a href="/sitemap.html">Sitemap</a></li>
                </ul>
            </div>

            <center>
                <div className="social_links">
                    <a href="https://www.facebook.com/profile.php?id=100030124935456" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.youtube.com/c/TSCrown?sub_confirmation=1" target="_blank"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.instagram.com/developer_akash/" target="_blank"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/skytup" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://www.twitter.com/skythecoder" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                </div>
            </center>
            <hr />
            <div className="copyright" >
                <li>Created by Akash</li>
                <li>Copyright © 2024 Skytup.com </li>
            </div>
        </footer>
    )
}
export default Footer;