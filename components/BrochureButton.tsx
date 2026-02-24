"use client";
import { useState } from "react";
import { jsPDF } from "jspdf";
import styles from "./BrochureButton.module.css";

const COLORS = {
    red: [232, 35, 42] as [number, number, number],
    dark: [15, 15, 15] as [number, number, number],
    dark2: [26, 26, 26] as [number, number, number],
    dark3: [34, 34, 34] as [number, number, number],
    white: [255, 255, 255] as [number, number, number],
    gray: [156, 163, 175] as [number, number, number],
    orange: [249, 115, 22] as [number, number, number],
};

const services = [
    { title: "Fire Hydrant & Sprinklers System", desc: "Complete supply, installation & AMC for industrial, commercial and residential buildings." },
    { title: "Fire Alarm & PA System", desc: "Advanced fire detection, alarm panels & public address systems for rapid response." },
    { title: "Gas Suppression System", desc: "FM200, Novec 1230 & CO2 based clean agent systems for server rooms & data centers." },
    { title: "Water Mist & CO2 Suppression", desc: "High-pressure water mist and CO2 systems for specialized environments." },
    { title: "Kitchen Suppression System", desc: "Wet chemical hood suppression for commercial kitchens and restaurants." },
    { title: "Fire Extinguisher Supply & Refilling", desc: "All types — CO2, DCP, ABC, Water, Foam — supply, refilling & maintenance." },
    { title: "CCTV & Security Systems", desc: "Complete CCTV camera installation, DVR/NVR setups & surveillance solutions." },
    { title: "Fire Safety Training & Auditing", desc: "Professional training, mock drills, auditing & compliance documentation." },
];

const otherServices = [
    "Tubing Suppression System",
    "Pre-Action System",
    "AMC of all Fire Fighting Systems",
    "Issuing Form A & Form B via 3rd Party License Holder",
];

function drawRoundedRect(doc: jsPDF, x: number, y: number, w: number, h: number, r: number) {
    doc.roundedRect(x, y, w, h, r, r, "F");
}

export default function BrochureButton({ variant = "primary" }: { variant?: "primary" | "outline" }) {
    const [loading, setLoading] = useState(false);

    const generateBrochure = async () => {
        setLoading(true);
        try {
            const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
            const W = 210;
            const H = 297;
            const margin = 15;
            const contentW = W - margin * 2;

            // ===== PAGE 1: COVER =====
            doc.setFillColor(...COLORS.dark);
            doc.rect(0, 0, W, H, "F");

            // Red accent bar top
            doc.setFillColor(...COLORS.red);
            doc.rect(0, 0, W, 4, "F");

            // Company name
            doc.setTextColor(...COLORS.white);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(14);
            doc.text("🔥 PRIME MECH", margin, 30);
            doc.setFontSize(9);
            doc.setTextColor(...COLORS.red);
            doc.text("ENGINEERS", margin + 43, 30);

            // Divider line
            doc.setDrawColor(...COLORS.red);
            doc.setLineWidth(0.5);
            doc.line(margin, 36, W - margin, 36);

            // Main Title
            doc.setTextColor(...COLORS.white);
            doc.setFontSize(32);
            doc.setFont("helvetica", "bold");
            doc.text("Protecting", margin, 70);
            doc.text("Lives &", margin, 85);
            doc.setTextColor(...COLORS.red);
            doc.text("Infrastructure", margin, 100);

            // Subtitle
            doc.setTextColor(...COLORS.gray);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(11);
            const subText = "Experts in all types of Fire Fighting Systems — Fire Extinguishers, Fire Hydrant Systems, Sprinklers, Fire Alarm and more.";
            const subLines = doc.splitTextToSize(subText, contentW * 0.7);
            doc.text(subLines, margin, 115);

            // Stats boxes
            const stats = [
                { num: "500+", label: "Projects" },
                { num: "15+", label: "Years Exp." },
                { num: "200+", label: "Clients" },
                { num: "24/7", label: "Support" },
            ];
            const boxW = (contentW - 15) / 4;
            stats.forEach((s, i) => {
                const x = margin + i * (boxW + 5);
                doc.setFillColor(...COLORS.dark2);
                drawRoundedRect(doc, x, 145, boxW, 30, 3);
                doc.setTextColor(...COLORS.red);
                doc.setFont("helvetica", "bold");
                doc.setFontSize(18);
                doc.text(s.num, x + boxW / 2, 160, { align: "center" });
                doc.setTextColor(...COLORS.gray);
                doc.setFont("helvetica", "normal");
                doc.setFontSize(7);
                doc.text(s.label, x + boxW / 2, 168, { align: "center" });
            });

            // Contact info on cover
            doc.setFillColor(...COLORS.dark2);
            drawRoundedRect(doc, margin, 195, contentW, 40, 4);
            doc.setTextColor(...COLORS.white);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(10);
            doc.text("CONTACT US", margin + 8, 207);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(9);
            doc.setTextColor(...COLORS.gray);
            doc.text("📞  9967765728", margin + 8, 215);
            doc.text("✉️  primemechengineers@gmail.com", margin + 8, 222);
            doc.text("📍  SG Barve Marg, Chembur, Mumbai 400071", margin + 8, 229);

            // Footer badge
            doc.setFillColor(...COLORS.red);
            doc.rect(0, H - 8, W, 8, "F");
            doc.setTextColor(...COLORS.white);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(7);
            doc.text("SUPPLY  •  INSTALLATION  •  AMC  •  TRAINING  •  AUDITING", W / 2, H - 2.5, { align: "center" });

            // ===== PAGE 2: SERVICES =====
            doc.addPage();
            doc.setFillColor(...COLORS.dark);
            doc.rect(0, 0, W, H, "F");

            // Red bar
            doc.setFillColor(...COLORS.red);
            doc.rect(0, 0, W, 4, "F");

            // Section header
            doc.setTextColor(...COLORS.red);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(8);
            doc.text("OUR EXPERTISE", margin, 18);

            doc.setTextColor(...COLORS.white);
            doc.setFontSize(22);
            doc.text("Supply, Installation & AMC", margin, 30);

            // Service cards grid (2 columns)
            const cardW = (contentW - 8) / 2;
            const cardH = 28;
            let yPos = 40;

            services.forEach((s, i) => {
                const col = i % 2;
                const row = Math.floor(i / 2);
                const x = margin + col * (cardW + 8);
                const y = yPos + row * (cardH + 6);

                doc.setFillColor(...COLORS.dark2);
                drawRoundedRect(doc, x, y, cardW, cardH, 3);

                // Red accent line on left
                doc.setFillColor(...COLORS.red);
                doc.rect(x, y + 3, 1.5, cardH - 6, "F");

                doc.setTextColor(...COLORS.white);
                doc.setFont("helvetica", "bold");
                doc.setFontSize(9);
                doc.text(s.title, x + 6, y + 9);

                doc.setTextColor(...COLORS.gray);
                doc.setFont("helvetica", "normal");
                doc.setFontSize(7);
                const descLines = doc.splitTextToSize(s.desc, cardW - 10);
                doc.text(descLines, x + 6, y + 15);
            });

            // Other services section
            const otherY = yPos + 4 * (cardH + 6) + 10;
            doc.setFillColor(...COLORS.dark3);
            drawRoundedRect(doc, margin, otherY, contentW, 40, 4);

            doc.setTextColor(...COLORS.white);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(10);
            doc.text("Other Services", margin + 8, otherY + 10);

            doc.setTextColor(...COLORS.gray);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(8);
            otherServices.forEach((s, i) => {
                const col = i % 2;
                const row = Math.floor(i / 2);
                const x = margin + 8 + col * (contentW / 2);
                doc.setTextColor(...COLORS.red);
                doc.text("✓", x, otherY + 18 + row * 9);
                doc.setTextColor(...COLORS.gray);
                doc.text(s, x + 5, otherY + 18 + row * 9);
            });

            // Why choose us
            const whyY = otherY + 50;
            doc.setTextColor(...COLORS.red);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(8);
            doc.text("WHY CHOOSE US", margin, whyY);

            doc.setTextColor(...COLORS.white);
            doc.setFontSize(16);
            doc.text("Your Trusted Partner in Fire Safety", margin, whyY + 12);

            const features = [
                "Licensed & Certified Professionals",
                "IS, NBC & NFPA Compliant Systems",
                "End-to-End Fire Safety Solutions",
                "24/7 Emergency Support Available",
                "Competitive Pricing & Premium Quality",
                "On-Time Project Delivery Guaranteed",
            ];

            features.forEach((f, i) => {
                const col = i % 2;
                const row = Math.floor(i / 2);
                const x = margin + col * (contentW / 2);
                const y = whyY + 22 + row * 8;
                doc.setFillColor(...COLORS.red);
                doc.circle(x + 2, y - 1.5, 1.5, "F");
                doc.setTextColor(...COLORS.white);
                doc.setFont("helvetica", "normal");
                doc.setFontSize(8);
                doc.text(f, x + 7, y);
            });

            // Footer
            doc.setFillColor(...COLORS.red);
            doc.rect(0, H - 8, W, 8, "F");
            doc.setTextColor(...COLORS.white);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(7);
            doc.text("www.primemechengineers.com  |  📞 9967765728  |  ✉️ primemechengineers@gmail.com", W / 2, H - 2.5, { align: "center" });

            // Save
            doc.save("Prime_Mech_Engineers_Brochure.pdf");
        } catch (err) {
            console.error("Error generating brochure:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={generateBrochure}
            disabled={loading}
            className={variant === "primary" ? `btn-primary ${styles.btn}` : `btn-outline ${styles.btn}`}
            id="download-brochure-btn"
        >
            {loading ? (
                <>
                    <span className={styles.spinner} />
                    Generating...
                </>
            ) : (
                <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download Brochure
                </>
            )}
        </button>
    );
}
