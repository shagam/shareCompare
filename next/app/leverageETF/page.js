import Client from "./client";   // adjust path if needed


// leverageETF
export const metadata = {
  metadataBase: new URL("https://sharecompare.net"),
  title: "Leveraged ETF Analysis: 2x & 3x ETF Risk, Decay & Returns",
  description: "Analyze leveraged ETFs. Compare 2x and 3x ETFs, see volatility decay, risk exposure, holdings and historical performance for TQQQ, SQQQ, SPXL and more.",
  alternates: {
    canonical: "/leveragedETF", // <- CHECK THIS: you had no URL, is this the real route?
  },
  openGraph: {
    title: "Leveraged ETF Analysis: 2x & 3x ETF Risk, Decay & Returns",
    description: "Analyze leveraged ETFs. Compare 2x and 3x ETFs, see volatility decay, risk exposure and historical performance for TQQQ, SQQQ, SPXL and more.",
    url: "https://sharecompare.net/leveragedETF", // <- CHECK THIS
    siteName: "ShareCompare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leveraged ETF Analysis: 2x & 3x ETF Risk, Decay & Returns",
    description: "Analyze leveraged ETFs. Compare 2x and 3x ETFs, see volatility decay, risk exposure and historical performance.",
  },
  keywords: ["leveraged ETF", "leveraged ETFs list", "3x leveraged ETF", "TQQQ vs QQQ", "leveraged ETF decay", "best leveraged ETFs", "what is a leveraged ETF"],
};

export default function LeverageETFPage() {

  return (
    <Client/>
  );
}
