
import Client from "./client";   // adjust path if needed

// dropsCount
export const metadata = {
  metadataBase: new URL("https://sharecompare.bet"),
  title: "How Often Do Stocks Drop? Stock Drop Statistics & Counts",
  description: "How often do stocks drop 5%, 10%, 20% or more? Count stock drops by your criteria, see bear market frequency and how common sharp declines really are.",
  alternates: {
    canonical: "/dropsCount",
  },
  openGraph: {
    title: "How Often Do Stocks Drop? Stock Drop Statistics & Counts",
    description: "Count stock drops by size and criteria. See how often 5%, 10% and 20% declines happen.",
    url: "https://sharecompare.net/dropsCount",
    siteName: "ShareCompare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Often Do Stocks Drop? Stock Drop Statistics & Counts",
    description: "Count stock drops by size and criteria. See how often 5%, 10% and 20% declines happen.",
  },
  keywords: ["stock drop statistics", "how often do stocks drop", "stock drops count", "market decline frequency", "stock market correction frequency", "bear market statistics"],
};

export default function DropsCountPage() {

  return (
    <Client/>
   
  );
}
