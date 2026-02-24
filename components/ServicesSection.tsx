"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import styles from "./ServicesSection.module.css";

const services = [
    {
        title: "Fire Hydrant & Sprinklers System",
        desc: "Complete supply, installation & AMC of fire hydrant and sprinkler systems for industrial, commercial and residential buildings.",
        img: "/images/fire_hydrant_sprinkler.png",
        icon: "🚒",
    },
    {
        title: "Fire Alarm & PA System",
        desc: "Advanced fire detection, alarm panels & public address systems to ensure rapid response and evacuation.",
        img: "/images/fire_alarm_pa_system.png",
        icon: "🔔",
    },
    {
        title: "Gas Suppression System",
        desc: "FM200, Novec 1230 & CO2 based clean agent gas suppression systems for server rooms, data centers & critical facilities.",
        img: "/images/gas_suppression_system.png",
        icon: "🧯",
    },
    {
        title: "Water Mist & CO2 Suppression",
        desc: "High-pressure water mist and CO2 suppression systems for specialized environments requiring efficient fire control.",
        img: "/images/water_mist_system.png",
        icon: "💧",
    },
    {
        title: "Kitchen Suppression System",
        desc: "Wet chemical kitchen hood suppression systems specifically designed for commercial kitchens and restaurants.",
        img: "/images/fire_hydrant_sprinkler.png",
        icon: "🍽️",
    },
    {
        title: "Fire Extinguisher Supply & Refilling",
        desc: "All types of fire extinguishers — CO2, DCP, ABC, Water, Foam — supply, refilling, and annual maintenance.",
        img: "/images/fire_alarm_pa_system.png",
        icon: "🧯",
    },
    {
        title: "CCTV & Security Systems",
        desc: "Complete CCTV camera installation, DVR/NVR setups, and integrated security surveillance solutions.",
        img: "/images/gas_suppression_system.png",
        icon: "📹",
    },
    {
        title: "Fire Safety Training & Auditing",
        desc: "Professional fire safety training, mock drills, auditing services, and compliance documentation.",
        img: "/images/hero_fire_safety.png",
        icon: "📋",
    },
];

const otherServices = [
    "Tubing Suppression System",
    "Pre-Action System",
    "AMC of all Fire Fighting Systems",
    "Issuing Form A and Form B via 3rd Party License Holder",
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
};

export default function ServicesSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section className={styles.section} id="services" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <span className="section-tag">Our Expertise</span>
                    <h2 className="section-title">
                        Supply, Installation &amp;{" "}
                        <span className="gradient-text">AMC</span>
                    </h2>
                    <p className="section-subtitle">
                        Comprehensive fire safety solutions tailored to your needs. From
                        design to installation, maintenance, and compliance — we cover it
                        all.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {services.map((s, i) => (
                        <motion.div
                            key={s.title}
                            className={`card ${styles.card}`}
                            custom={i}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={cardVariants}
                        >
                            <div className={styles.cardImage}>
                                <Image
                                    src={s.img}
                                    alt={s.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    style={{ objectFit: "cover" }}
                                />
                                <div className={styles.cardOverlay}>
                                    <span className={styles.cardIcon}>{s.icon}</span>
                                </div>
                            </div>
                            <div className={styles.cardBody}>
                                <h3 className={styles.cardTitle}>{s.title}</h3>
                                <p className={styles.cardDesc}>{s.desc}</p>
                                <a href="#contact" className={styles.cardLink}>
                                    Get Quote
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className={styles.otherServices}
                >
                    <h3 className={styles.otherTitle}>Other Services</h3>
                    <div className={styles.otherGrid}>
                        {otherServices.map((s) => (
                            <div key={s} className={styles.otherItem}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8232A" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                                <span>{s}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
