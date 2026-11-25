// "use client";

import type { ReactNode } from "react";
import { BasicTable } from "../table/BasicTable";
import { AuthProvider } from "../contexts/AuthContext";
import { SharedProvider } from "../contexts/SharedContext";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sharecompare.net"),
  title: {
    default: "ShareCompare - Essential Share Info to Trade Smarter",
    template: "%s | ShareCompare",
  },
  description:
    "Get essential share info to trade with confidence. prices, charts, fundamentals, dividends and comparisons for US stocks, shares and ETFs.",
  keywords: [
    "sharecompare",
    "share prices",
    "stock prices",
    "share info",
    "stock info",
    "trading",
    "compare shares",
    "compare stocks",
    "US stocks",
    "dividends",
    "stock news",
  ],
  authors: [{ name: "ShareCompare" }],
  creator: "ShareCompare",
  publisher: "ShareCompare",
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
  alternates: {
    canonical: "https://sharecompare.net/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sharecompare.net/",
    siteName: "ShareCompare",
    title: "ShareCompare - Essential Share Info to Trade Smarter",
    description:
      "Live prices, charts, news, fundamentals and dividends. Essential share info to help you trade with confidence.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ShareCompare - Essential Share Info for Trading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShareCompare - Essential Share Info to Trade Smarter",
    description:
      "Live prices, charts, news, fundamentals and dividends for US stocks, shares and ETFs.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{margin: '3px'}}>
        <AuthProvider>
          <SharedProvider>
            <BasicTable />
            <div
              style={{
                border: "2px solid blue",
                background: "#f0f0e0",
                paddingTop: "6px",
              }}
            >
              {children}
            </div>
          </SharedProvider>
        </AuthProvider>
      </body>
    </html>
  );
}