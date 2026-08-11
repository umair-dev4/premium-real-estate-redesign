import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans, Montserrat } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display-loaded",
  weight: ["400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans-loaded",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hellenichomes.example"),
  title: {
    default: "Hellenic Homes — Property Developer in Chania, Crete",
    template: "%s · Hellenic Homes",
  },
  description:
    "For over 20 years, Hellenic Homes has designed and constructed villas, residences, boutique hotels and mixed-use buildings across West Crete — with clarity, craft and long-term value.",
  keywords: [
    "property developer Chania",
    "real estate Crete",
    "luxury villas Greece",
    "construction Chania",
    "boutique hotel development Crete",
  ],
  openGraph: {
    title: "Hellenic Homes — Property Developer in Chania, Crete",
    description:
      "Villas, residences and boutique hotels across West Crete, designed and built with clarity and long-term value.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${montserrat.variable}`}>
      <head>
        <style>{`
          :root {
            --font-display: var(--font-display-loaded, "Plus Jakarta Sans"), ui-sans-serif, system-ui, sans-serif;
            --font-sans: var(--font-sans-loaded, "Montserrat"), ui-sans-serif, system-ui, sans-serif;
          }
        `}</style>
      </head>
      <body className="bg-paper text-ink antialiased">
        <Header />
        <main id="top">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
