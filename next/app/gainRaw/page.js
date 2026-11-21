
import Client from "./client";

// gainRaw
export const metadata = {
  metadataBase: new URL("https://sharecompare.net"),
  title: "Stock Gains & Historical Returns Data",
  description: "View raw stock gain data and historical returns. See 1-month, 3-month, 6-month, 1-year and 5-year gains for any stock or ETF, sorted and filterable.",
  alternates: {
    canonical: "/rawGainData", // <- CHECK THIS: you had no URL, is this the real route?
  },
  openGraph: {
    title: "Stock Gains & Historical Returns Data",
    description: "View raw stock gain data and historical returns. See 1-month, 3-month, 6-month, 1-year and 5-year gains for any stock or ETF.",
    url: "https://sharecompare.net/rawGainData", // <- CHECK THIS
    siteName: "ShareCompare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stock Gains & Historical Returns Data",
    description: "View raw stock gain data and historical returns. See 1-month, 3-month, 6-month, 1-year and 5-year gains.",
  },
  keywords: ["stock gains", "historical stock returns", "stock performance data", "stock gain calculator", "best performing stocks 1 year", "stock returns by year"],
};

export default function GainRawPage() {

  return (
    <Client/>
  );
}
      