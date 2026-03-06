"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const services = [
    "Fire Hydrant & Sprinklers",
    "Fire Alarm & PA System",
    "Gas Suppression System",
    "Water Mist Suppression",
    "Kitchen Suppression",
    "CCTV & Security",
    "HVAC Solutions",
];

const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Clients", href: "#clients" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
];

export default function Footer() {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className={styles.footer}>
            <div className="glow-line" />
            <div className={`container ${styles.grid}`}>
                <div className={styles.brand}>
                    <Link href="/" className={styles.logo}>
                        <div className={styles.logoIconWrap}>
                            <Image
                                src="/images/logo.png"
                                alt="PME"
                                width={80}
                                height={60}
                                className={styles.logoIcon}
                            />
                        </div>
                        <div>
                            <span className={styles.logoMain}>Prime Mech</span>
                            <span className={styles.logoSub}>Engineers</span>
                        </div>
                    </Link>
                    <p className={styles.tagline}>MEP, Fire & HVAC Solutions</p>
                    <p className={styles.brandDesc}>
                        Experts in all types of Fire Fighting & MEP Systems. Delivering
                        safety solutions you can trust across Mumbai and Maharashtra since 2024.
                    </p>
                    <div className={styles.socials}>
                        {["facebook", "instagram", "linkedin"].map((s) => (
                            <a key={s} href="#" className={styles.socialLink} aria-label={s}>
                                {s === "facebook" && (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                                )}
                                {s === "instagram" && (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                                )}
                                {s === "linkedin" && (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" /></svg>
                                )}
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className={styles.colTitle}>Quick Links</h4>
                    <ul className={styles.linkList}>
                        {quickLinks.map((l) => (
                            <li key={l.label}>
                                <a href={l.href} onClick={(e) => handleClick(e, l.href)} className={styles.link}>{l.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className={styles.colTitle}>Our Services</h4>
                    <ul className={styles.linkList}>
                        {services.map((s) => (
                            <li key={s}>
                                <a href="#services" onClick={(e) => handleClick(e, "#services")} className={styles.link}>{s}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className={styles.colTitle}>Contact Info</h4>
                    <div className={styles.contactList}>
                        <a href="tel:9967765728" className={styles.contactItem}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.9 13.5 19.79 19.79 0 01.87 4.88a2 2 0 012-2.18h3a2 2 0 012 1.72c.13 1 .37 1.97.72 2.9a2 2 0 01-.45 2.11L7.09 10.91a16 16 0 006 6l1-1" /></svg>
                            9967765728
                        </a>
                        <a href="mailto:primemechengineers@gmail.com" className={styles.contactItem}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            primemechengineers@gmail.com
                        </a>
                        <div className={styles.contactItem}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            <span>SG Barve Marg, Chembur, Mumbai 400071</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className="container">
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Prime Mech Engineers. All rights
                        reserved. | MEP, Fire & HVAC Solutions
                    </p>
                </div>
            </div>
        </footer>
    );
}
