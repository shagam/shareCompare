import Client from "./client";

// candleStick
export const metadata = {
  metadataBase: new URL("https://sharecompare.net"),
  title: "Candlestick Chart: Patterns, Support & Resistance Explained (triggers not ready yet)",
  description: "Explore candlestick charts, patterns and price action. Learn support and resistance levels, bullish and bearish patterns for any stock or ETF.",
  alternates: {
    canonical: "/candleStick",
  },
  openGraph: {
    title: "Candlestick Chart: Patterns, Support & Resistance Explained",
    description: "Explore candlestick charts, patterns and price action. Learn support and resistance and bullish and bearish patterns.",
    url: "https://sharecompare.net/candleStick",
    siteName: "ShareCompare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Candlestick Chart: Patterns, Support & Resistance Explained",
    description: "Explore candlestick charts, patterns and price action. Learn support and resistance and bullish and bearish patterns.",
  },
  keywords: ["candlestick chart", "candlestick patterns", "candlestick chart patterns", "support and resistance", "price action trading", "bullish candlestick patterns", "how to read candlestick charts"],
}

export default function CandlestickPage() {

  return (
    <Client  />
  );
}
