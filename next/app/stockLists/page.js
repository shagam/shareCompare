import Client from "./client";   // adjust path if needed

// stockList
export const metadata = {
  metadataBase: new URL("https://sharecompare.net"),
  title: "Stock Lists: Best Stocks to Watch, Shared Watchlists",
  description: "Browse and share stock lists. Create custom watchlists, bundle stocks into lists, and explore curated lists by sector, theme and performance.",
  alternates: {
    canonical: "/stockLists",
  },
  openGraph: {
    title: "Stock Lists: Best Stocks to Watch, Shared Watchlists",
    description: "Browse and share stock lists. Create custom watchlists and explore curated lists by sector, theme and performance.",
    url: "https://sharecompare.net/stockLists",
    siteName: "ShareCompare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stock Lists: Best Stocks to Watch, Shared Watchlists",
    description: "Browse and share stock lists. Create custom watchlists and explore curated lists by sector, theme and performance.",
  },
  keywords: ["stock lists", "stock watchlist", "best stocks to watch", "shared stock lists", "custom stock lists", "stock lists by sector"],
};

export default function StockListsPage() {

  return (
    <Client/>
  )
}
