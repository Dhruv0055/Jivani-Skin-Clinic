import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#5A9E91",
};
import { LanguageProvider } from "@/components/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { clinicData } from "@/data/clinic";

const headingFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jivaniskinclinic.com"),
  title: `${clinicData.clinicName} | Dr. Ruchi Goti - Dermatologist in Varachha, Surat`,
  description: `Best skin clinic in Varachha, Surat led by Dr. Ruchi Goti (MD Dermatology). Specializing in Acne Scars, Laser Hair Removal, Melasma, PRP Hair Regrowth, and Medi-Facials.`,
  keywords: [
    "skin clinic in Varachha Surat",
    "Dr Ruchi Goti Surat",
    "dermatologist in Surat",
    "dermatologist in Varachha",
    "acne treatment Surat",
    "laser hair removal Varachha",
    "PRP hair treatment Surat",
    "melasma treatment Surat",
    "Jivani Skin Clinic",
  ],
  authors: [{ name: "Dr. Ruchi Goti" }],
  creator: clinicData.clinicName,
  icons: {
    icon: "/images/jivani-logo.svg",
    shortcut: "/images/jivani-logo.png",
    apple: "/images/jivani-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jivaniskinclinic.com",
    title: `${clinicData.clinicName} - Dr. Ruchi Goti | Varachha, Surat`,
    description: `Leading skin and hair clinic in Varachha, Surat. Personalized treatments for acne scars, pigmentation, hair fall, and laser hair removal by Dr. Ruchi Goti.`,
    siteName: clinicData.clinicName,
    images: [
      {
        url: "/images/dr-ruchi-goti.webp",
        width: 800,
        height: 1000,
        alt: `Dr. Ruchi Goti - Jivani Skin Clinic`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinicData.clinicName} | Dr. Ruchi Goti Varachha Surat`,
    description: "Expert dermatology and skin care in Varachha, Surat.",
    images: ["/images/dr-ruchi-goti.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinicData.clinicName,
    description: clinicData.subTagline,
    url: "https://jivaniskinclinic.com",
    telephone: clinicData.phone,
    medicalSpecialty: ["Dermatology", "Trichology", "CosmeticDermatology"],
    physician: {
      "@type": "Physician",
      name: "Dr. Ruchi Goti",
      medicalSpecialty: "Dermatologist",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: clinicData.address,
      addressLocality: "Varachha, Surat",
      addressRegion: "Gujarat",
      postalCode: "395006",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.2185,
      longitude: 72.8222,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "13:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "17:00",
        closes: "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "10:30",
        closes: "13:00",
      },
    ],
    sameAs: [clinicData.instagramUrl, clinicData.googleMapsUrl],
    priceRange: "$$",
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-slate-deep bg-background min-h-screen flex flex-col selection:bg-primary-light selection:text-primary-dark">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <MobileStickyBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
