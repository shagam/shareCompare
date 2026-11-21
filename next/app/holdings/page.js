import Client from "./client";   // adjust path if needed

// holdings
export const metadata = {
  metadataBase: new URL("https://sharecompare.net"),
  title: "Compare ETF Holdings Side by Side | QQQ vs SPY vs VOO",
  description: "Compare ETF holdings side by side in one table. See overlap, top holdings, weights and differences between QQQ, SPY, VOO and any ETFs you choose.",
  alternates: {
    canonical: "/holdings",
  },
  openGraph: {
    title: "Compare ETF Holdings Side by Side | QQQ vs SPY vs VOO",
    description: "Compare ETF holdings side by side. See overlap, top holdings and weights for QQQ, SPY, VOO and more.",
    url: "https://sharecompare.net/holdings",
    siteName: "ShareCompare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare ETF Holdings Side by Side | QQQ vs SPY vs VOO",
    description: "Compare ETF holdings side by side. See overlap, top holdings and weights for QQQ, SPY, VOO and more.",
  },
  keywords: ["compare ETF holdings", "ETF holdings comparison", "QQQ vs SPY holdings", "QQQ vs VOO", "ETF overlap", "ETF holdings tracker", "compare ETFs side by side"],
};

export default function HoldingsPage() {

  return (
    <Client />
  );
}

    