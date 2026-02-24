"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import toast from "react-hot-toast";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
    const [sending, setSending] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        // Simulate sending
        await new Promise((r) => setTimeout(r, 1500));
        toast.success("Message sent successfully! We'll get back to you soon.");
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
        setSending(false);
    };

    return (
        <section className={styles.section} id="contact" ref={ref}>
            <div className={`container ${styles.grid}`}>
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className={styles.info}
                >
                    <span className="section-tag">Get In Touch</span>
                    <h2 className="section-title">
                        Let&apos;s Discuss Your{" "}
                        <span className="gradient-text">Fire Safety</span> Needs
                    </h2>
                    <p className={styles.desc}>
                        Reach out to us for a free consultation. Our team of experts will
                        assess your requirements and provide a tailored fire safety solution.
                    </p>

                    <div className={styles.contactCards}>
                        <a href="tel:9967765728" className={styles.contactCard}>
                            <div className={styles.contactIcon}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.9 13.5 19.79 19.79 0 01.87 4.88a2 2 0 012-2.18h3a2 2 0 012 1.72c.13 1 .37 1.97.72 2.9a2 2 0 01-.45 2.11L7.09 10.91a16 16 0 006 6l1-1a2 2 0 012.11-.45c.93.35 1.9.59 2.9.72a2 2 0 011.72 2z" /></svg>
                            </div>
                            <div>
                                <span className={styles.contactLabel}>Phone</span>
                                <span className={styles.contactValue}>9967765728</span>
                            </div>
                        </a>

                        <a href="mailto:primemechengineers@gmail.com" className={styles.contactCard}>
                            <div className={styles.contactIcon}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            </div>
                            <div>
                                <span className={styles.contactLabel}>Email</span>
                                <span className={styles.contactValue}>primemechengineers@gmail.com</span>
                            </div>
                        </a>

                        <div className={styles.contactCard}>
                            <div className={styles.contactIcon}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <div>
                                <span className={styles.contactLabel}>Office</span>
                                <span className={styles.contactValue}>SG Barve Marg, Near Sunni Raza Jama Masjid, Vatsalabai Naik Nagar, Chembur, Mumbai 400071</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mapWrap}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3!2d72.9!3d19.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzAwLjAiTiA3MsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000"
                            width="100%"
                            height="200"
                            style={{ border: 0, borderRadius: "12px", opacity: 0.8 }}
                            allowFullScreen
                            loading="lazy"
                            title="Prime Mech Engineers Location"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form className={styles.form} onSubmit={handleSubmit} id="contact-form">
                        <h3 className={styles.formTitle}>Send Us a Message</h3>

                        <div className={styles.formRow}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">Full Name *</label>
                                <input className="form-input" id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="phone">Phone Number *</label>
                                <input className="form-input" id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email Address *</label>
                            <input className="form-input" id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="service">Service Required</label>
                            <select className="form-select" id="service" name="service" value={form.service} onChange={handleChange}>
                                <option value="">Select a service</option>
                                <option value="hydrant">Fire Hydrant & Sprinklers</option>
                                <option value="alarm">Fire Alarm & PA System</option>
                                <option value="gas">Gas Suppression System</option>
                                <option value="watermist">Water Mist & CO2 Suppression</option>
                                <option value="kitchen">Kitchen Suppression System</option>
                                <option value="extinguisher">Fire Extinguisher Supply</option>
                                <option value="cctv">CCTV & Security Systems</option>
                                <option value="training">Fire Safety Training</option>
                                <option value="amc">AMC Services</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="message">Message *</label>
                            <textarea className="form-textarea" id="message" name="message" placeholder="Tell us about your requirements..." value={form.message} onChange={handleChange} required />
                        </div>

                        <button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={sending} id="submit-btn">
                            {sending ? (
                                <>
                                    <span className={styles.spinner} />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
