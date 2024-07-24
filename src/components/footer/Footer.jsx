// Import React Library
import React from 'react'

// Import CSS StyleSheet
import './footer.css'

// Import React Icons
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

export const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>
                KAYDEN
            </a>

            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experiences">Experiences</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/" target='_blank'>
                    <FaLinkedin />
                </a>
                <a href="https://facebook.com" target='_blank'>
                    <FaFacebookSquare />
                </a>
                <a href="https://instagram.com" target='_blank'>
                    <FaSquareInstagram />
                </a>
                <a href="https://x.com/" target='_blank'>
                    <FaSquareXTwitter />
                </a>
                <a href="https://www.threads.net" target='_blank'>
                    <FaSquareThreads />
                </a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Kayden Kingsley. All Rights Reserved.</small>
            </div>
        </footer>
    )
}
