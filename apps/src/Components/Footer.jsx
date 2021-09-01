import React from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram , FaGithub , FaTwitter , FaLinkedin } from "react-icons/fa";
import './Style.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-container">
                    <div className="footer-container__title">  راه های ارتباطی :</div>
                    <div className="footer-container__social">
                        <Link to="/" className="footer-container__social-icon">
                            <FaInstagram/>
                        </Link>
                        <Link to="/" className="footer-container__social-icon">
                            <FaGithub/>
                        </Link>
                        <Link to="/" className="footer-container__social-icon">
                            <FaLinkedin/>
                        </Link>
                        <Link to="/" className="footer-container__social-icon">
                            <FaTwitter/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;