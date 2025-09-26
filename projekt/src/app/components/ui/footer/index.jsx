"use client";

import Image from "next/image";
import { FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import "../../../style/components/footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <section className="footer__info">
                <div className="footer__socials">
                    <Image className="footer__logo" src="/Logo.svg" alt="SwapHub Logo" width={135} height={40} />
                    <div className="footer__socials-icons">
                        <FaXTwitter className="footer__socials-icons-item" />
                        <FaInstagram className="footer__socials-icons-item" />
                        <FaYoutube className="footer__socials-icons-item" />
                        <FaLinkedin className="footer__socials-icons-item" />
                    </div>
                </div>
                <div className="footer__about">
                    <p className="footer__about-title">About SwapHub</p>
                    <li className="footer__about-item">How it works</li>
                    <li className="footer__about-item">Community guidelines</li>
                    <li className="footer__about-item">Our mission</li>
                    <li className="footer__about-item">Contact us</li>
                </div>
                <div className="footer__discover">
                    <p className="footer__about-title">Discover</p>
                    <li className="footer__about-item">Browse categories</li>
                    <li className="footer__about-item">Popular swaps</li>
                    <li className="footer__about-item">Successful stories</li>
                    <li className="footer__about-item">Upcoming events</li>
                </div>
                <div className="footer__support">
                    <p className="footer__about-title">Support</p>
                    <li className="footer__about-item">Help center</li>
                    <li className="footer__about-item">FAQs</li>
                    <li className="footer__about-item">Safety tips</li>
                    <li className="footer__about-item">Report an issue</li>
                </div>
            </section>
        </footer>
    )
}