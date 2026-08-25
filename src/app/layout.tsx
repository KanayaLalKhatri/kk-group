import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE = "https://kanayalalkhatri.github.io/kk-group";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "KK Group — Mobile App & Website Development Company in Karachi",
    template: "%s | KK Group",
  },
  description:
    "KK Group is a mobile app & website development studio in Karachi, Pakistan. We build secure, high-performance Android, Flutter & web apps — KYC, fintech, e-commerce & AI-powered products. Hire expert developers.",
  keywords: [
    "mobile app development company Karachi",
    "website development Pakistan",
    "Android app developer Karachi",
    "Flutter developer Pakistan",
    "app development company Karachi",
    "web design Karachi",
    "hire mobile app developer",
    "KYC app development",
    "fintech app development",
    "UI/UX design Pakistan",
    "KK Group",
  ],
  authors: [{ name: "KK Group" }],
  creator: "KK Group",
  publisher: "KK Group",
  alternates: { canonical: SITE },
  openGraph: {
    title: "KK Group — Mobile App & Website Development Company in Karachi",
    description:
      "We design & build secure, high-performance mobile apps and websites — Android, Flutter, Web, UI/UX, KYC & AI.",
    url: SITE,
    siteName: "KK Group",
    type: "website",
    locale: "en_US",
    images: [
      { url: `${SITE}/og.png`, width: 1200, height: 630, alt: "KK Group — Mobile App & Website Studio" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KK Group — Mobile App & Website Development Company",
    description: "We design & build secure, high-performance mobile apps and websites.",
    images: [`${SITE}/og.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    google: "JzPLCXD_pttuFgYLHthoeSM8DjsLiBKSwVP69PIWnlE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "KK Group",
  description:
    "Mobile app & website development studio building secure, high-performance Android, Flutter and web apps — KYC, fintech, e-commerce and AI-powered products.",
  url: SITE,
  logo: `${SITE}/og.png`,
  image: `${SITE}/og.png`,
  email: "kanayalal.khatri7@gmail.com",
  telephone: "+92-336-3762106",
  priceRange: "$$",
  areaServed: ["Pakistan", "United Arab Emirates", "Worldwide"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  founder: { "@type": "Person", name: "Kanaya Lal Khatri" },
  knowsAbout: [
    "Mobile App Development",
    "Android",
    "Kotlin",
    "Flutter",
    "Web Development",
    "UI/UX Design",
    "KYC",
    "Biometric Authentication",
    "AI/ML",
  ],
  sameAs: [
    "https://facebook.com/studio.kkgroup",
    "https://www.linkedin.com/in/kanayalalkhatri-mobile-app-developer/",
    "https://github.com/KanayaLalKhatri",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
