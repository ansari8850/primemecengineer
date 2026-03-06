"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./ClientsSection.module.css";

const clients = [
    { name: "Balmukund Heritage", location: "Chembur", type: "Residential" },
    { name: "Light Hall", location: "Sakinaka", type: "Commercial" },
    { name: "Akasa", location: "Worli", type: "Premium" },
    { name: "Happy Homes", location: "Matunga", type: "Residential" },
    { name: "Mount Literia School", location: "BKC", type: "Educational" },
    { name: "Oberoi Exquisite", location: "Goregaon (E)", type: "Premium" },
    { name: "The Fern Hotel", location: "Goregaon (E)", type: "Hospitality" },
    { name: "Aira Matrix", location: "Thane", type: "Corporate" },
    { name: "Ajanta Pharma", location: "Andheri", type: "Pharma" },
    { name: "Avalon United India Pvt Ltd", location: "", type: "Corporate" },
    { name: "Gulraj Tower", location: "Kurla (E)", type: "Commercial" },
    { name: "Hana Bank", location: "", type: "Banking" },
];

const typeColors: Record<string, string> = {
    Residential: "#4ADE80",
    Commercial: "#60A5FA",
    Premium: "#F59E0B",
    Educational: "#A78BFA",
    Hospitality: "#F472B6",
    Corporate: "#38BDF8",
    Pharma: "#34D399",
    Banking: "#FBBF24",
};

export default function ClientsSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className={styles.section} id="clients" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <span className="section-tag">Our Clientele</span>
                    <h2 className="section-title">
                        Trusted by <span className="gradient-text">Industry Leaders</span>
                    </h2>
                    <p className="section-subtitle" style={{ textAlign: "center" }}>
                        We are proud to have delivered MEP, Fire & HVAC solutions to some of
                        Mumbai&apos;s most prestigious residential, commercial, and institutional projects.
                    </p>
                </motion.div>

                {/* Company tagline */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={styles.tagline}
                >
                    <span className={styles.taglineBrand}>Prime MECH Engineering</span>
                    <span className={styles.taglineSep}>—</span>
                    <span className={styles.taglineDesc}>MEP, Fire & HVAC Solutions</span>
                </motion.div>

                <div className={styles.grid}>
                    {clients.map((c, i) => (
                        <motion.div
                            key={c.name}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: i * 0.06 }}
                        >
                            <div className={styles.cardInner}>
                                <div className={styles.initialWrap}>
                                    <span
                                        className={styles.initial}
                                        style={{
                                            background: `linear-gradient(135deg, ${typeColors[c.type] || "#C23A22"}22, ${typeColors[c.type] || "#C23A22"}11)`,
                                            borderColor: `${typeColors[c.type] || "#C23A22"}44`,
                                            color: typeColors[c.type] || "#C23A22",
                                        }}
                                    >
                                        {c.name.split(" ").slice(0, 2).map((w) => w[0]).join("")}
                                    </span>
                                </div>
                                <span className={styles.name}>{c.name}</span>
                                {c.location && (
                                    <span className={styles.location}>
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        {c.location}
                                    </span>
                                )}
                                <span
                                    className={styles.typeBadge}
                                    style={{
                                        background: `${typeColors[c.type] || "#C23A22"}15`,
                                        color: typeColors[c.type] || "#C23A22",
                                        borderColor: `${typeColors[c.type] || "#C23A22"}33`,
                                    }}
                                >
                                    {c.type}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
