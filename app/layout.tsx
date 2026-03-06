import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Prime Mech Engineers | MEP, Fire & HVAC Solutions – Mumbai",
  description:
    "Prime Mech Engineers – Your trusted partner for MEP, Fire Fighting & HVAC Solutions in Mumbai. Supply, Installation & AMC of Fire Hydrant, Sprinklers, Fire Alarm, Gas Suppression, CCTV & more. Call 9967765728.",
  keywords:
    "MEP solutions Mumbai, fire fighting systems Mumbai, HVAC solutions, fire hydrant, sprinkler system, fire alarm, gas suppression, kitchen suppression, fire extinguisher, CCTV Mumbai, Prime Mech Engineers",
  openGraph: {
    title: "Prime Mech Engineers | MEP, Fire & HVAC Solutions",
    description:
      "Expert MEP, fire safety & HVAC solutions – Supply, Installation & AMC of Fire Hydrant, Sprinklers, Fire Alarm, Gas Suppression, CCTV & more across Mumbai.",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('pme-theme');
                  if (t === 'light' || t === 'dark') {
                    document.documentElement.setAttribute('data-theme', t);
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
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
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body>
        <ThemeProvider>
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "var(--bg-card)",
                color: "var(--text-primary)",
                border: "1px solid rgba(194,58,34,0.3)",
              },
            }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
