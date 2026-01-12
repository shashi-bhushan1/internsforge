import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import FloatingButtons from "@/components/common/FloatingButtons";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://internsforge.com'), // Update with your actual domain
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  title: {
    default: "InternsForge - Your Learning Partner for Career Success",
    template: "%s | InternsForge"
  },
  description: "InternsForge is an innovative educational technology platform bridging the gap between classroom theory and real-world industry needs. From internships to personalized career guidance and mentorship, we help students navigate professional development.",
  keywords: [
    "internships",
    "online courses",
    "career guidance",
    "mentorship",
    "professional development",
    "ed-tech",
    "training programs",
    "placement support",
    "skill development",
    "education technology"
  ],
  authors: [{ name: "InternsForge" }],
  creator: "InternsForge Edutech LLP",
  publisher: "InternsForge Edutech LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://internsforge.com",
    siteName: "InternsForge",
    title: "InternsForge - Your Learning Partner for Career Success",
    description: "InternsForge is an innovative educational technology platform bridging the gap between classroom theory and real-world industry needs.",
    images: [
      {
        url: "/og-image.jpg", // You should add this image later
        width: 1200,
        height: 630,
        alt: "InternsForge - Educational Technology Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InternsForge - Your Learning Partner for Career Success",
    description: "InternsForge is an innovative educational technology platform bridging the gap between classroom theory and real-world industry needs.",
    images: ["/og-image.jpg"], // You should add this image later
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased overflow-x-hidden`}
      >
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
