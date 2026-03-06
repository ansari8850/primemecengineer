"use client";
import { useState } from "react";
import { jsPDF } from "jspdf";
import styles from "./BrochureButton.module.css";

const COLORS = {
    red: [194, 58, 34] as [number, number, number],
    redDark: [155, 45, 26] as [number, number, number],
    orange: [232, 107, 58] as [number, number, number],
    dark: [11, 13, 14] as [number, number, number],
    dark2: [16, 18, 20] as [number, number, number],
    dark3: [24, 27, 30] as [number, number, number],
    dark4: [34, 38, 42] as [number, number, number],
    white: [255, 255, 255] as [number, number, number],
    gray: [156, 163, 175] as [number, number, number],
    grayDark: [107, 114, 128] as [number, number, number],
    green: [74, 222, 128] as [number, number, number],
};

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

const coreServices = [
    { title: "Fire Hydrant & Sprinklers System", desc: "Complete supply, installation & AMC for industrial, commercial and residential buildings with IS/NBC compliance." },
    { title: "Fire Alarm & PA System", desc: "Advanced fire detection, alarm panels & public address systems for rapid response and mass evacuation." },
    { title: "Gas Suppression System", desc: "FM200, Novec 1230 & CO2 based clean agent systems for server rooms, data centers & critical facilities." },
    { title: "Water Mist & CO2 Suppression", desc: "High-pressure water mist and CO2 systems for specialized environments requiring efficient fire control." },
    { title: "Kitchen Suppression System", desc: "Wet chemical kitchen hood suppression for commercial kitchens, restaurants and food courts." },
    { title: "Fire Extinguisher Supply & Refilling", desc: "All types — CO2, DCP, ABC, Water, Foam — supply, refilling & annual maintenance." },
    { title: "CCTV & Security Systems", desc: "Complete CCTV camera installation, DVR/NVR setups & integrated security surveillance." },
    { title: "Fire Safety Training & Auditing", desc: "Professional training, mock drills, auditing services & compliance documentation." },
];

const mepServices = [
    "MEP Consultation & Design",
    "HVAC System Installation & AMC",
    "Plumbing & Sanitation Systems",
    "Electrical Systems & Wiring",
    "Building Management Systems (BMS)",
];

const otherServices = [
    "Tubing Suppression System",
    "Pre-Action System",
    "AMC of all Fire Fighting Systems",
    "Issuing Form A & Form B via 3rd Party License Holder",
];

const whyChooseUs = [
    "Licensed & Certified Professionals",
    "IS, NBC & NFPA Compliant Systems",
    "End-to-End MEP & Fire Safety Solutions",
    "24/7 Emergency Support Available",
    "Competitive Pricing & Premium Quality",
    "On-Time Project Delivery Guaranteed",
    "9+ Years of Industry Expertise",
    "Serving Mumbai & Maharashtra",
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

            // ======= PAGE 1: COVER =======
            doc.setFillColor(...COLORS.dark);
            doc.rect(0, 0, W, H, "F");

            // Top red accent bar
            doc.setFillColor(...COLORS.red);
            doc.rect(0, 0, W, 5, "F");

            // Company logo area
            doc.setFillColor(...COLORS.dark2);
            drawRoundedRect(doc, margin, 15, contentW, 25, 4);
            doc.setTextColor(...COLORS.white);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(16);
            doc.text("PME", margin + 8, 30);
            doc.setFontSize(10);
            doc.setTextColor(...COLORS.red);
            doc.text("PRIME MECH ENGINEERS", margin + 26, 26);
            doc.setTextColor(...COLORS.gray);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(7);
            doc.text("MEP, Fire & HVAC Solutions", margin + 26, 33);

            // Divider
            doc.setDrawColor(...COLORS.red);
            doc.setLineWidth(1);
            doc.line(margin, 48, W - margin, 48);

            // Main Title
            doc.setTextColor(...COLORS.white);
            doc.setFontSize(36);
            doc.setFont("helvetica", "bold");
            doc.text("Protecting", margin, 75);
            doc.text("Lives &", margin, 92);
            doc.setTextColor(...COLORS.red);
            doc.text("Infrastructure", margin, 109);

            // Subtitle
            doc.setTextColor(...COLORS.gray);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(11);
            const subText = "Your one-stop destination for MEP, Fire Fighting & HVAC Solutions. From design to installation, maintenance and compliance — we deliver complete fire protection and building services across Mumbai.";
            const subLines = doc.splitTextToSize(subText, contentW * 0.75);
            doc.text(subLines, margin, 125);

            // Stats boxes
            const stats = [
                { num: "12+", label: "Projects" },
                { num: "9+", label: "Years Exp." },
                { num: "12+", label: "Clients" },
                { num: "24/7", label: "Support" },
            ];
            const boxW = (contentW - 15) / 4;
            stats.forEach((s, i) => {
                const x = margin + i * (boxW + 5);
                doc.setFillColor(...COLORS.dark2);
                drawRoundedRect(doc, x, 155, boxW, 32, 3);
                doc.setTextColor(...COLORS.red);
                doc.setFont("helvetica", "bold");
                doc.setFontSize(20);
                doc.text(s.num, x + boxW / 2, 172, { align: "center" });
                doc.setTextColor(...COLORS.gray);
                doc.setFont("helvetica", "normal");
                doc.setFontSize(7);
                doc.text(s.label, x + boxW / 2, 180, { align: "center" });
            });

            // Company info banner
            doc.setFillColor(...COLORS.dark3);
            drawRoundedRect(doc, margin, 200, contentW, 12, 3);
            doc.setTextColor(...COLORS.red);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(8);
            doc.text("EST. JANUARY 2024  |  MUMBAI, MAHARASHTRA  |  9+ YEARS PERSONAL EXPERTISE", W / 2, 208, { align: "center" });

            // Contact info on cover
            doc.setFillColor(...COLORS.dark2);
            drawRoundedRect(doc, margin, 222, contentW, 48, 4);
            doc.setTextColor(...COLORS.white);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(11);
            doc.text("GET IN TOUCH", margin + 8, 235);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(9);
            doc.setTextColor(...COLORS.gray);
            doc.text("Phone:  9967765728", margin + 8, 244);
            doc.text("Email:   primemechengineers@gmail.com", margin + 8, 252);
            doc.text("Address: SG Barve Marg, Chembur, Mumbai 400071", margin + 8, 260);

            // Footer bar
            doc.setFillColor(...COLORS.red);
            doc.rect(0, H - 9, W, 9, "F");
            doc.setTextColor(...COLORS.white);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(7);
            doc.text("SUPPLY  •  INSTALLATION  •  AMC  •  TRAINING  •  AUDITING  •  MEP  •  HVAC", W / 2, H - 3, { align: "center" });

            // ======= PAGE 2: CORE SERVICES =======
            doc.addPage();
            doc.setFillColor(...COLORS.dark);
            doc.rect(0, 0, W, H, "F");
            doc.setFillColor(...COLORS.red);
            doc.rect(0, 0, W, 5, "F");

            // Header
            doc.setTextColor(...COLORS.red);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(8);
            doc.text("OUR EXPERTISE", margin, 18);
            doc.setTextColor(...COLORS.white);
            doc.setFontSize(24);
            doc.text("Core Fire Safety Services", margin, 32);
            doc.setFontSize(9);
            doc.setTextColor(...COLORS.gray);
            doc.setFont("helvetica", "normal");
            doc.text("Complete range of fire protection solutions with IS, NBC & NFPA compliance.", margin, 40);

            // Service cards (2 columns)
            const cardW = (contentW - 8) / 2;
            const cardH = 30;
            let yPos = 48;

            coreServices.forEach((s, i) => {
                const col = i % 2;
                const row = Math.floor(i / 2);
                const x = margin + col * (cardW + 8);
                const y = yPos + row * (cardH + 6);

                doc.setFillColor(...COLORS.dark2);
                drawRoundedRect(doc, x, y, cardW, cardH, 3);

                // Red accent
                doc.setFillColor(...COLORS.red);
                doc.rect(x, y + 4, 1.5, cardH - 8, "F");

                // Number badge
                doc.setFillColor(...COLORS.red);
                doc.circle(x + cardW - 8, y + 6, 4, "F");
                doc.setTextColor(...COLORS.white);
                doc.setFont("helvetica", "bold");
                doc.setFontSize(6);
                doc.text(String(i + 1).padStart(2, "0"), x + cardW - 8, y + 7.5, { align: "center" });

                doc.setTextColor(...COLORS.white);
                doc.setFont("helvetica", "bold");
                doc.setFontSize(8.5);
                doc.text(s.title, x + 6, y + 10);
                doc.setTextColor(...COLORS.gray);
                doc.setFont("helvetica", "normal");
                doc.setFontSize(7);
                const descLines = doc.splitTextToSize(s.desc, cardW - 12);
                doc.text(descLines, x + 6, y + 17);
            });

            // MEP & HVAC section
            const mepY = yPos + 4 * (cardH + 6) + 8;
            doc.setFillColor(...COLORS.dark3);
            drawRoundedRect(doc, margin, mepY, contentW, 42, 4);
            doc.setTextColor(...COLORS.red);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(10);
            doc.text("MEP & HVAC Solutions", margin + 8, mepY + 10);
            doc.setTextColor(...COLORS.gray);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(8);
            mepServices.forEach((s, i) => {
                const col = i < 3 ? 0 : 1;
                const row = i < 3 ? i : i - 3;
                const x = margin + 8 + col * (contentW / 2);
                doc.setTextColor(...COLORS.green);
                doc.text("●", x, mepY + 18 + row * 8);
                doc.setTextColor(...COLORS.gray);
                doc.text(s, x + 5, mepY + 18 + row * 8);
            });

            // Other services
            const otherY = mepY + 50;
            doc.setTextColor(...COLORS.red);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(8);
            doc.text("ADDITIONAL SERVICES", margin, otherY);
            doc.setTextColor(...COLORS.gray);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(8);
            otherServices.forEach((s, i) => {
                const col = i % 2;
                const row = Math.floor(i / 2);
                const x = margin + col * (contentW / 2);
                doc.setTextColor(...COLORS.red);
                doc.text("✓", x, otherY + 8 + row * 8);
                doc.setTextColor(...COLORS.gray);
                doc.text(s, x + 5, otherY + 8 + row * 8);
            });

            // Page footer
            doc.setFillColor(...COLORS.red);
            doc.rect(0, H - 9, W, 9, "F");
            doc.setTextColor(...COLORS.white);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(7);
            doc.text("Prime Mech Engineers  |  9967765728  |  primemechengineers@gmail.com", W / 2, H - 3, { align: "center" });

            // ======= PAGE 3: OUR PROJECTS / CLIENTS =======
            doc.addPage();
            doc.setFillColor(...COLORS.dark);
            doc.rect(0, 0, W, H, "F");
            doc.setFillColor(...COLORS.red);
            doc.rect(0, 0, W, 5, "F");

            // Header
            doc.setTextColor(...COLORS.red);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(8);
            doc.text("OUR PROJECTS", margin, 18);
            doc.setTextColor(...COLORS.white);
            doc.setFontSize(24);
            doc.text("Trusted by Industry Leaders", margin, 32);
            doc.setTextColor(...COLORS.gray);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(9);
            doc.text("Delivering excellence across residential, commercial, hospitality, educational & corporate sectors.", margin, 40);

            // Client cards (3 columns)
            const cCardW = (contentW - 16) / 3;
            const cCardH = 28;
            let cyPos = 50;

            clients.forEach((c, i) => {
                const col = i % 3;
                const row = Math.floor(i / 3);
                const x = margin + col * (cCardW + 8);
                const y = cyPos + row * (cCardH + 6);

                doc.setFillColor(...COLORS.dark2);
                drawRoundedRect(doc, x, y, cCardW, cCardH, 3);

                // Initial badge
                const initials = c.name.split(" ").slice(0, 2).map((w) => w[0]).join("");
                doc.setFillColor(...COLORS.dark3);
                drawRoundedRect(doc, x + 4, y + 4, 16, 12, 2);
                doc.setTextColor(...COLORS.red);
                doc.setFont("helvetica", "bold");
                doc.setFontSize(7);
                doc.text(initials, x + 12, y + 12, { align: "center" });

                // Name
                doc.setTextColor(...COLORS.white);
                doc.setFont("helvetica", "bold");
                doc.setFontSize(7.5);
                const nameLines = doc.splitTextToSize(c.name, cCardW - 26);
                doc.text(nameLines, x + 23, y + 9);

                // Location + type
                doc.setTextColor(...COLORS.grayDark);
                doc.setFont("helvetica", "normal");
                doc.setFontSize(6);
                const locText = c.location ? `${c.location} • ${c.type}` : c.type;
                doc.text(locText, x + 23, y + 21);
            });

            // Sector summary
            const sectorY = cyPos + 4 * (cCardH + 6) + 12;
            doc.setFillColor(...COLORS.dark3);
            drawRoundedRect(doc, margin, sectorY, contentW, 30, 4);
            doc.setTextColor(...COLORS.white);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(10);
            doc.text("Sectors We Serve", margin + 8, sectorY + 10);

            const sectors = ["Residential", "Commercial", "Premium Living", "Educational", "Hospitality", "Corporate", "Pharma", "Banking"];
            doc.setFont("helvetica", "normal");
            doc.setFontSize(7);
            sectors.forEach((s, i) => {
                const col = i % 4;
                const row = Math.floor(i / 4);
                const x = margin + 8 + col * (contentW / 4);
                doc.setTextColor(...COLORS.red);
                doc.text("◆", x, sectorY + 18 + row * 8);
                doc.setTextColor(...COLORS.gray);
                doc.text(s, x + 5, sectorY + 18 + row * 8);
            });

            // ======= PAGE 4: WHY CHOOSE US & CTA =======
            doc.addPage();
            doc.setFillColor(...COLORS.dark);
            doc.rect(0, 0, W, H, "F");
            doc.setFillColor(...COLORS.red);
            doc.rect(0, 0, W, 5, "F");

            // Why choose us header
            doc.setTextColor(...COLORS.red);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(8);
            doc.text("WHY CHOOSE US", margin, 18);
            doc.setTextColor(...COLORS.white);
            doc.setFontSize(24);
            doc.text("Your Trusted Partner", margin, 32);

            // Features
            whyChooseUs.forEach((f, i) => {
                const col = i % 2;
                const row = Math.floor(i / 2);
                const x = margin + col * (contentW / 2);
                const y = 46 + row * 12;

                doc.setFillColor(...COLORS.dark2);
                drawRoundedRect(doc, x, y - 4, contentW / 2 - 4, 10, 2);

                doc.setFillColor(...COLORS.red);
                doc.circle(x + 5, y + 1, 2, "F");
                doc.setTextColor(...COLORS.white);
                doc.setFont("helvetica", "normal");
                doc.setFontSize(8);
                doc.text(f, x + 11, y + 2);
            });

            // Company journey
            const journeyY = 102;
            doc.setTextColor(...COLORS.red);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(8);
            doc.text("OUR JOURNEY", margin, journeyY);
            doc.setTextColor(...COLORS.white);
            doc.setFontSize(18);
            doc.text("Experience & Excellence", margin, journeyY + 14);

            doc.setFillColor(...COLORS.dark2);
            drawRoundedRect(doc, margin, journeyY + 20, contentW, 55, 4);

            // Timeline items
            const timeline = [
                { year: "2015", desc: "Founder started career in MEP & Fire Safety industry with hands-on experience in major projects." },
                { year: "2020", desc: "Led and managed multiple high-profile fire safety projects across Mumbai's premium properties." },
                { year: "2024", desc: "Founded Prime Mech Engineers (Jan 2024) — bringing 9+ years of expertise under one banner." },
                { year: "Now", desc: "Serving 12+ clients including Oberoi Exquisite, The Fern Hotel, Ajanta Pharma & more." },
            ];

            timeline.forEach((t, i) => {
                const y = journeyY + 30 + i * 12;
                // Year badge
                doc.setFillColor(...COLORS.red);
                drawRoundedRect(doc, margin + 6, y - 3, 18, 8, 2);
                doc.setTextColor(...COLORS.white);
                doc.setFont("helvetica", "bold");
                doc.setFontSize(6);
                doc.text(t.year, margin + 15, y + 2, { align: "center" });

                // Description
                doc.setTextColor(...COLORS.gray);
                doc.setFont("helvetica", "normal");
                doc.setFontSize(7);
                const tLines = doc.splitTextToSize(t.desc, contentW - 36);
                doc.text(tLines, margin + 28, y + 1);
            });

            // CTA Section
            const ctaY = journeyY + 85;
            doc.setFillColor(...COLORS.red);
            drawRoundedRect(doc, margin, ctaY, contentW, 50, 6);

            doc.setTextColor(...COLORS.white);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(20);
            doc.text("Ready to Secure Your", margin + 12, ctaY + 16);
            doc.text("Property?", margin + 12, ctaY + 28);

            doc.setFont("helvetica", "normal");
            doc.setFontSize(9);
            doc.setTextColor(255, 255, 255);
            doc.text("Contact us today for a free consultation and site survey.", margin + 12, ctaY + 38);

            // Contact details at bottom
            const contactY = ctaY + 60;
            doc.setFillColor(...COLORS.dark2);
            drawRoundedRect(doc, margin, contactY, contentW, 45, 4);

            doc.setTextColor(...COLORS.white);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(11);
            doc.text("Contact Us", margin + 8, contactY + 12);

            doc.setFont("helvetica", "normal");
            doc.setFontSize(9);
            doc.setTextColor(...COLORS.gray);
            doc.text("Phone:     9967765728", margin + 8, contactY + 22);
            doc.text("Email:      primemechengineers@gmail.com", margin + 8, contactY + 30);
            doc.text("Address:  SG Barve Marg, Chembur, Mumbai 400071", margin + 8, contactY + 38);

            // Final footer
            doc.setFillColor(...COLORS.red);
            doc.rect(0, H - 9, W, 9, "F");
            doc.setTextColor(...COLORS.white);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(7);
            doc.text("PRIME MECH ENGINEERS  •  MEP, Fire & HVAC Solutions  •  EST. 2024  •  Mumbai", W / 2, H - 3, { align: "center" });

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
