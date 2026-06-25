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

export const metadata: Metadata = {
  title: "KK Group — Mobile App & Website Design Studio",
  description:
    "KK Group is a digital product studio building secure, high-performance mobile apps and websites — KYC & biometric onboarding, fintech, e-commerce, and AI-powered experiences.",
  keywords: [
    "KK Group",
    "Mobile App Development",
    "Web Design",
    "UI/UX Design",
    "Android",
    "Flutter",
    "KYC",
    "Fintech",
    "Karachi",
  ],
  authors: [{ name: "KK Group" }],
  openGraph: {
    title: "KK Group — Mobile App & Website Design Studio",
    description:
      "We design & build secure, high-performance mobile apps and websites.",
    type: "website",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
