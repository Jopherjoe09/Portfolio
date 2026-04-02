import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jopherjoeribo.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jopher Joe Ribo - Web Developer Portfolio",
    template: "%s | Jopher Joe Ribo",
  },
  description:
    "Web Developer crafting responsive websites with heart and logic. Showcasing projects in React, Next.js, JavaScript, and modern web technologies.",
  keywords: [
    "web developer",
    "frontend developer",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "portfolio",
    "full-stack",
  ],
  authors: [{ name: "Jopher Joe Ribo", url: siteUrl }],
  creator: "Jopher Joe Ribo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Jopher Joe Ribo - Portfolio",
    title: "Jopher Joe Ribo - Web Developer Portfolio",
    description:
      "Web Developer crafting responsive websites with heart and logic. Showcasing projects in React, Next.js, and modern web technologies.",
    images: [
      {
        url: "/images/jopher-profile.png",
        width: 800,
        height: 600,
        alt: "Jopher Joe Ribo - Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jopher Joe Ribo - Web Developer Portfolio",
    description:
      "Web Developer crafting responsive websites with heart and logic. Showcasing projects in React, Next.js, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
