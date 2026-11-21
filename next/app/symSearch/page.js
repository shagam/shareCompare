
import Client from "./client";  

// symSearch
export const metadata = {
  metadataBase: new URL("https://sharecompare.net"),
  title: "Stock Symbol Lookup: Find Ticker by Company Name",
  description: "Search stocks, ETFs and companies by ticker symbol or company name. Find AAPL, MSFT, NVDA and any stock symbol fast - lookup ticker, name and exchange.",
  alternates: {
    canonical: "/symSearch",
  },
  openGraph: {
    title: "Stock Symbol Lookup: Find Ticker by Company Name",
    description: "Search stocks, ETFs and companies by ticker symbol or company name. Find any stock symbol fast.",
    url: "https://sharecompare.net/symSearch",
    siteName: "ShareCompare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stock Symbol Lookup: Find Ticker by Company Name",
    description: "Search stocks, ETFs and companies by ticker symbol or company name. Find any stock symbol fast.",
  },
  keywords: ["stock symbol lookup", "ticker lookup", "find stock ticker", "stock symbol search", "ticker symbol finder", "company to ticker", "stock ticker search"],
};

export default function SymSearchPage() {
  return <Client />;
}
