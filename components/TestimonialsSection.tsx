"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
    {
        name: "Rajesh Sharma",
        role: "Facility Manager, Tata Group",
        text: "Prime Mech Engineers delivered an exceptional fire hydrant system for our facility. Their professionalism, attention to detail, and adherence to safety standards were outstanding. Highly recommended!",
        rating: 5,
    },
    {
        name: "Priya Mehta",
        role: "Project Director, Hiranandani",
        text: "We have been partnering with Prime Mech Engineers for over 5 years for all our fire safety needs. Their AMC services are prompt and reliable, ensuring our buildings remain compliant and safe at all times.",
        rating: 5,
    },
    {
        name: "Ankit Desai",
        role: "Operations Head, Godrej Properties",
        text: "The fire alarm and PA system installation was seamless. The team was knowledgeable and completed the project ahead of schedule. Their post-installation support is excellent.",
        rating: 5,
    },
    {
        name: "Sneha Kulkarni",
        role: "Safety Officer, Reliance Industries",
        text: "Outstanding work on the gas suppression system for our data center. Prime Mech Engineers understands the criticality of IT infrastructure protection. Zero downtime during installation.",
        rating: 5,
    },
    {
        name: "Mohammed Khan",
        role: "Restaurant Owner, Chembur",
        text: "They installed a kitchen suppression system for my restaurant chain. Very professional team. The fire safety training they provided to my staff was incredibly valuable.",
        rating: 5,
    },
];

export default function TestimonialsSection() {
    const [active, setActive] = useState(0);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const next = () => setActive((a) => (a + 1) % testimonials.length);
    const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

    return (
        <section className={styles.section} id="testimonials" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <span className="section-tag">Testimonials</span>
                    <h2 className="section-title">
                        What Our <span className="gradient-text">Clients Say</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className={styles.carousel}
                >
                    <div className={styles.quoteIcon}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="rgba(232,35,42,0.2)"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" /></svg>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.35 }}
                            className={styles.cardContent}
                        >
                            <div className={styles.stars}>
                                {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#F97316"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                ))}
                            </div>
                            <p className={styles.text}>&ldquo;{testimonials[active].text}&rdquo;</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    {testimonials[active].name.split(" ").map((w) => w[0]).join("")}
                                </div>
                                <div>
                                    <span className={styles.authorName}>{testimonials[active].name}</span>
                                    <span className={styles.authorRole}>{testimonials[active].role}</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className={styles.controls}>
                        <button onClick={prev} className={styles.arrowBtn} aria-label="Previous">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>
                        <div className={styles.dots}>
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                                    onClick={() => setActive(i)}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>
                        <button onClick={next} className={styles.arrowBtn} aria-label="Next">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
