import Client from "./client";

// bubbleLine
export const metadata = {
  metadataBase: new URL("https://sharecompare.net"),
  title: "Bubble Line: Are Stocks in a Bubble? 2008 vs 2021 Chart",
  description: "BubbleLine draws an exponential line connecting the last 2 major bubbles in 2008 and 2021. See where today's price sits vs the bubble line and if the market is overheated.",
  alternates: {
    canonical: "/bubbleLine",
  },
  openGraph: {
    title: "Bubble Line: Are Stocks in a Bubble? 2008 vs 2021 Chart",
    description: "Exponential line connecting the 2008 and 2021 bubbles. See where today's price sits vs the bubble line.",
    url: "https://sharecompare.net/bubbleLine",
    siteName: "ShareCompare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bubble Line: Are Stocks in a Bubble? 2008 vs 2021 Chart",
    description: "Exponential line connecting the 2008 and 2021 bubbles. See where today's price sits.",
  },
  keywords: ["bubble line", "stock bubble chart", "are stocks in a bubble", "market bubble 2008 2021", "stock market bubble indicator", "exponential trend line stocks"],
};

export default function BubbleLinePage() {
  
  return (
    <Client />
  );
}
