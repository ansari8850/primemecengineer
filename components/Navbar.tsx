"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Clients", href: "#clients" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
        setOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={`container ${styles.inner}`}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoIcon}>🔥</span>
                    <div>
                        <span className={styles.logoMain}>Prime Mech</span>
                        <span className={styles.logoSub}>Engineers</span>
                    </div>
                </Link>

                <ul className={styles.desktopNav}>
                    {navLinks.map((l) => (
                        <li key={l.label}>
                            <a
                                href={l.href}
                                className={styles.navLink}
                                onClick={(e) => handleNavClick(e, l.href)}
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <a href="tel:9967765728" className={`btn-primary ${styles.ctaBtn}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.9 13.5 19.79 19.79 0 01.87 4.88a2 2 0 012-2.18h3a2 2 0 012 1.72c.13 1 .37 1.97.72 2.9a2 2 0 01-.45 2.11L7.09 10.91a16 16 0 006 6l1-1a2 2 0 012.11-.45c.93.35 1.9.59 2.9.72a2 2 0 011.72 2z" />
                    </svg>
                    Call Us
                </a>

                <button
                    className={styles.hamburger}
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                    id="hamburger-btn"
                >
                    <span className={`${styles.line} ${open ? styles.line1Open : ""}`} />
                    <span className={`${styles.line} ${open ? styles.line2Open : ""}`} />
                    <span className={`${styles.line} ${open ? styles.line3Open : ""}`} />
                </button>
            </div>

            <div className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ""}`}>
                {navLinks.map((l) => (
                    <a
                        key={l.label}
                        href={l.href}
                        className={styles.mobileLink}
                        onClick={(e) => handleNavClick(e, l.href)}
                    >
                        {l.label}
                    </a>
                ))}
                <a href="tel:9967765728" className={`btn-primary ${styles.mobileCta}`}>
                    📞 9967765728
                </a>
            </div>
        </nav>
    );
}
