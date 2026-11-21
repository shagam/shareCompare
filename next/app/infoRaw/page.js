import Client from "./client";


// infoRaw
export const metadata = {
  metadataBase: new URL("https://sharecompare.net"),
  title: "Stock Info: Price, Company Data & Key Statistics",
  description: "Get stock info for any ticker. See price, market cap, P/E, dividend, company profile and key statistics for stocks and ETFs.",
  alternates: {
    canonical: "/infoRaw",
  },
  openGraph: {
    title: "Stock Info: Price, Company Data & Key Statistics",
    description: "Get stock info for any ticker. See price, market cap, P/E, dividend, and company profile.",
    url: "https://sharecompare.net/infoRaw",
    siteName: "ShareCompare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stock Info: Price, Company Data & Key Statistics",
    description: "Get stock info for any ticker. See price, market cap, P/E, dividend, and company profile.",
  },
  keywords: ["stock info", "stock quote", "stock statistics", "company stock information", "stock price today", "AAPL stock info"],
};


export default function InfoRawPage() {

  return (
    <Client/>
  );
}
