"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./ClientsSection.module.css";

const clients = [
    "Tata Group", "Reliance Industries", "Godrej Properties", "L&T Construction",
    "Hiranandani", "Oberoi Realty", "Lodha Group", "Adani Group",
    "Shapoorji Pallonji", "Mahindra Lifespace", "Raymond Realty", "Piramal Group",
];

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
                        Trusted by <span className="gradient-text">Leading Brands</span>
                    </h2>
                    <p className="section-subtitle" style={{ textAlign: "center" }}>
                        We are proud to have partnered with some of India&apos;s most
                        prestigious organizations across diverse industries.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {clients.map((c, i) => (
                        <motion.div
                            key={c}
                            className={styles.card}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: i * 0.06 }}
                        >
                            <div className={styles.cardInner}>
                                <span className={styles.initial}>
                                    {c.split(" ").map((w) => w[0]).join("")}
                                </span>
                                <span className={styles.name}>{c}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
