"use client";

import Image from "next/image";
import Link from "next/link";
import "../../../style/components/header.scss";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const isActive = (href) => {
        if (href === "/") {
            return pathname === "/" || pathname.startsWith("/listings");
        }
        return pathname.startsWith(href);
    }

    return (
        <header className="header">
            <Image src="/Logo.svg" alt="SwapHub Logo" width={135} height={40} />
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-list-item">
                        <Link href="/" className={isActive("/") ? "header__link--active" : ""}>Listings</Link>
                    </li>
                    <li className="header__nav-list-item">
                        <Link href="/community" className={isActive("/community") ? "header__link--active" : ""}>Community</Link>
                    </li>
                    <li className="header__nav-list-item">
                        <Link href="/contact" className={isActive("/contact") ? "header__link--active" : ""} >Contact</Link>
                    </li>
                    <button className="header__sign-in">Sign in</button>
                    <button className="header__register">Register</button>
                </ul>
            </nav>
        </header>
    )
}