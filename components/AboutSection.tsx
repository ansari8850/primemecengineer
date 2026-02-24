"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className={styles.section} id="about" ref={ref}>
            <div className={`container ${styles.grid}`}>
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className={styles.imageWrap}
                >
                    <div className={styles.imageBox}>
                        <Image
                            src="/images/fire_hydrant_sprinkler.png"
                            alt="About Prime Mech Engineers"
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="(max-width:768px) 100vw, 50vw"
                        />
                    </div>
                    <div className={styles.badge}>
                        <span className={styles.badgeNum}>15+</span>
                        <span className={styles.badgeText}>Years of Excellence</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className={styles.textBlock}
                >
                    <span className="section-tag">Who We Are</span>
                    <h2 className="section-title">
                        Your Trusted Partner in{" "}
                        <span className="gradient-text">Fire Safety</span>
                    </h2>
                    <p className={styles.desc}>
                        <strong>Prime Mech Engineers</strong> is a leading fire safety
                        solutions provider based in Mumbai, Maharashtra. We specialize in
                        the design, supply, installation, testing &amp; commissioning, and
                        annual maintenance of all types of fire fighting systems.
                    </p>
                    <p className={styles.desc}>
                        Our team of certified professionals ensures that every project is
                        executed with precision, adhering to IS, NBC, and NFPA standards.
                        From high-rise buildings to industrial complexes and commercial
                        establishments, we deliver comprehensive fire protection solutions
                        that save lives and protect assets.
                    </p>

                    <div className={styles.features}>
                        {[
                            "Licensed & Certified Professionals",
                            "IS, NBC & NFPA Compliant",
                            "End-to-End Fire Safety Solutions",
                            "24/7 Emergency Support",
                            "Competitive Pricing &  Quality",
                            "On-Time Project Delivery",
                        ].map((f) => (
                            <div key={f} className={styles.feature}>
                                <div className={styles.featureIcon}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                                </div>
                                <span>{f}</span>
                            </div>
                        ))}
                    </div>

                    <a href="#contact" className="btn-primary" style={{ marginTop: "1.5rem" }}>
                        Talk to Our Experts
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
