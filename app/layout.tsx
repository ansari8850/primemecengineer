import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Prime Mech Engineers | Fire Fighting Systems Mumbai",
  description:
    "Prime Mech Engineers – Experts in Fire Hydrant Systems, Sprinklers, Fire Alarms, Gas Suppression, CCTV & more. Supply, Installation & AMC across Mumbai. Call 9967765728.",
  keywords:
    "fire fighting systems Mumbai, fire hydrant, sprinkler system, fire alarm, gas suppression, kitchen suppression, fire extinguisher, CCTV Mumbai, fire safety training, AMC fire systems Chembur",
  openGraph: {
    title: "Prime Mech Engineers | Fire Fighting Systems Mumbai",
    description:
      "Expert fire safety solutions – Supply, Installation & AMC of Fire Hydrant, Sprinklers, Fire Alarm, Gas Suppression, CCTV & more across Mumbai.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#1A1A1A",
              color: "#fff",
              border: "1px solid rgba(232,35,42,0.3)",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
