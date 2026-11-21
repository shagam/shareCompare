import Client from "./client";   // adjust path if needed

// movingAverage
export const metadata = {
  metadataBase: new URL("https://sharecompare.net"),
  title: "Moving Average Chart: SMA & EMA Stock Trend Indicator",
  description: "Analyze stock trends with moving average charts. Compare SMA and EMA indicators, spot crossovers and trends for any stock or ETF.",
  alternates: {
    canonical: "/movingAverage", // <- FIX THIS: was /contactUs - use your real route
  },
  openGraph: {
    title: "Moving Average Chart: SMA & EMA Stock Trend Indicator",
    description: "Analyze stock trends with moving average charts. Compare SMA and EMA indicators and spot crossovers for any stock or ETF.",
    url: "https://sharecompare.net/movingAverage", // <- FIX THIS
    siteName: "ShareCompare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moving Average Chart: SMA & EMA Stock Trend Indicator",
    description: "Analyze stock trends with moving average charts. Compare SMA and EMA indicators and spot crossovers.",
  },
  keywords: ["moving average chart", "SMA vs EMA", "moving average indicator", "EMA crossover", "stock trend indicator", "50 day moving average", "200 day moving average"],
};

export default function MovingAveragePage() {


  return (
    <Client />
  );
}

    