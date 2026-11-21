import Client from "./client";   // adjust path if needed

// simulateTrade
export const metadata = {
  metadataBase: new URL("https://sharecompare.net"),
  title: "Paper Trading Simulator | Backtest Stock Strategies Free (under development)",
  description: "Test stock trading strategies with historical market data. Free paper trading simulator - backtest strategies risk-free before trading with real money.",
  alternates: {
    canonical: "/tradeSimulator", // <- FIX THIS: was /contactUs
  },
  openGraph: {
    title: "Paper Trading Simulator | Backtest Stock Strategies Free (under development)",
    description: "Test stock trading strategies with historical market data. Free paper trading simulator - backtest risk-free.",
    url: "https://sharecompare.net/tradeSimulator", // <- FIX THIS
    siteName: "ShareCompare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paper Trading Simulator | Backtest Stock Strategies Free (under development)",
    description: "Test stock trading strategies with historical market data. Free paper trading simulator - backtest risk-free.",
  },
  keywords: ["paper trading simulator", "trade simulator", "stock trading simulator", "backtest stock strategies", "stock backtesting free", "paper trading"],
};

export default function SimulateTradePage() {

  return (
    <Client/>
  )   
}
