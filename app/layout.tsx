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
  title: "Fazl Abbas Rizvi | Expert Video Editor & System Engineer",
  description: "Fazl Abbas Rizvi - A professional video editor and system engineer specializing in cinematic post-production, motion graphics, and scalable digital solutions. Transforming vision into high-impact visual narratives.",
  keywords: ["Fazl Abbas Rizvi", "Video Editor", "System Engineer", "Post Production", "Motion Graphics", "Cinematic Editing", "Mysore Video Editor", "Fazal Abbas"],
  authors: [{ name: "Fazl Abbas Rizvi" }],
  creator: "Fazl Abbas Rizvi",
  publisher: "Fazl Abbas Rizvi",
  openGraph: {
    title: "Fazl Abbas Rizvi | Video Editor & System Engineer",
    description: "Cinematic post-production and digital system engineering. Explore the portfolio of Fazl Abbas Rizvi.",
    url: "https://fazlabbas.me", // Replace with actual URL if known
    siteName: "Fazl Abbas Rizvi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fazl Abbas Rizvi | Video Editor & System Engineer",
    description: "Expert video editing and system engineering solutions.",
    creator: "@yourhandle", // Update with user's actual handle if known
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
