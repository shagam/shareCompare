
import Client from "./client";   // adjust path if needed

// priceAlert
export const metadata = {
  metadataBase: new URL("https://sharecompare.net"),
  title: "Stock Price Alerts: Get Notified When Stocks Hit Your Price",
  description: "Set free stock price alerts. Get notified when AAPL, TSLA, NVDA or any stock hits your target price, breaks support or spikes in real time.",
  alternates: {
    canonical: "/priceAlert", // <- CHECK THIS: you had no URL, is this the real route?
  },
  openGraph: {
    title: "Stock Price Alerts: Get Notified When Stocks Hit Your Price",
    description: "Set free stock price alerts. Get notified when any stock hits your target price, breaks support or spikes.",
    url: "https://sharecompare.net/priceAlert", // <- CHECK THIS
    siteName: "ShareCompare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stock Price Alerts: Get Notified When Stocks Hit Your Price",
    description: "Set free stock price alerts. Get notified when any stock hits your target price.",
  },
  keywords: ["stock price alerts", "stock alert app", "free stock alerts", "price alert for stocks", "stock notifications", "how to set stock price alert"],
};

export default function PriceAlertPage() {


  return (
    <Client />
  )
}
