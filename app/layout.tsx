import type { Metadata } from "next";
import { Bebas_Neue, Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://athena-control.com"),
  title: {
    default: "Athena Control — Industrial Engineering Excellence",
    template: "%s | Athena Control",
  },
  description:
    "Athena Control is the official Turkish distributor for Motortronics soft starters and SHINKAWA Electric vibration monitoring systems. Based in İzmir, Turkey.",
  keywords: [
    "soft starters",
    "Motortronics",
    "SHINKAWA Electric",
    "vibration monitoring",
    "vibration motors",
    "vibration sensors",
    "industrial valves",
    "Athena Group",
    "Turkey",
    "İzmir",
    "engineering",
    "motor control",
    "valve",
    "automation",
  ],
  authors: [{ name: "Athena Control" }],
  creator: "Athena Control",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://athena-control.com",
    siteName: "Athena Control",
    title: "Athena Control — Industrial Engineering Excellence",
    description:
      "Official Turkish distributor for Motortronics & SHINKAWA Electric. World-class industrial engineering from İzmir, Turkey.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athena Control — Industrial Engineering Excellence",
    description:
      "Official Turkish distributor for Motortronics & SHINKAWA Electric.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${barlowCondensed.variable} ${ibmPlexSans.variable} bg-background text-foreground antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
