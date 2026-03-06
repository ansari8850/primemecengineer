"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import BrochureButton from "./BrochureButton";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.bgOverlay} />
            <Image
                src="/images/hero_fire_safety.png"
                alt="Fire safety systems"
                fill
                priority
                className={styles.bgImage}
                style={{ objectFit: "cover" }}
            />
            <div className={`container ${styles.content}`}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={styles.textBlock}
                >
                    <span className="section-tag">🔥 Trusted MEP & Fire Safety Partner</span>
                    <h1 className={styles.heading}>
                        Protecting Lives &amp;{" "}
                        <span className="gradient-text">Infrastructure</span> with Expert
                        MEP, Fire & HVAC Solutions
                    </h1>
                    <p className={styles.sub}>
                        Prime Mech Engineers — Your complete MEP, Fire Fighting &
                        HVAC solutions provider. Fire Hydrant, Sprinklers, Fire Alarm,
                        Gas Suppression, CCTV & more. Serving Mumbai since 2024 with 9+ years of expertise.
                    </p>
                    <div className={styles.buttons}>
                        <a href="#contact" className="btn-primary">
                            Get Free Consultation
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </a>
                        <a href="#services" className="btn-outline">
                            Our Services
                        </a>
                        <BrochureButton variant="outline" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className={styles.stats}
                >
                    {[
                        { num: "12+", label: "Projects Completed" },
                        { num: "9+", label: "Years Experience" },
                        { num: "12+", label: "Happy Clients" },
                        { num: "24/7", label: "Support Available" },
                    ].map((s) => (
                        <div key={s.label} className={styles.statItem}>
                            <span className="stat-number" style={{ fontSize: "clamp(1.5rem,3vw,2.25rem)" }}>{s.num}</span>
                            <span className={styles.statLabel}>{s.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className={styles.scrollDown}>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><path d="M7 13l5 5 5-5M7 6l5 5 5-5" /></svg>
                </motion.div>
            </div>
        </section>
    );
}
