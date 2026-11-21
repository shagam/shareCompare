

import Client from "./client";   // adjust path if needed

// dropRecovery
export const metadata = {
  metadataBase: new URL("https://sharecompare.net"),
  title: "Drop Recovery Analysis | How Long After a Market Crash?",
  description: "How far did a stock drop and how long did it take to recover? Compare drop percentage, recovery time and historical performance after major market crashes.",
  alternates: {
    canonical: "/dropRecovery",
  },
  openGraph: {
    title: "Drop Recovery Analysis | How Long After a Market Crash?",
    description: "How far did a stock drop and how long did it take to recover? Compare drop percentage, recovery time and historical performance.",
    url: "https://sharecompare.net/dropRecovery",
    siteName: "ShareCompare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drop Recovery Analysis | How Long After a Market Crash?",
    description: "How far did a stock drop and how long did it take to recover?",
  },
  keywords: ["drop recovery", "stock rebound", "market correction", "price recovery", "stock analysis", "market crash recovery time"],
};

export default function DropRecoveryPage() {
  return (
    <Client/>
  );
}
    