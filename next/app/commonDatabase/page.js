import Client from "./client";

// commonDatabase
export const metadata = {
  metadataBase: new URL("https://sharecompare.net"),
  title: "Find Stocks Beating QQQ | Stock Screener - 2X in 1-2 Years",
  description: "Filter stocks with gains better than QQQ. Find stocks up 2X or more since 1 or 2 years ago, based on historical prices. Screen winners by return vs QQQ.",
  alternates: {
    canonical: "/commonDatabase",
  },
  openGraph: {
    title: "Find Stocks Beating QQQ | Stock Screener - 2X in 1-2 Years",
    description: "Filter stocks with gains better than QQQ. Find stocks up 2X or more since 1 or 2 years ago.",
    url: "https://sharecompare.net/commonDatabase",
    siteName: "ShareCompare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Stocks Beating QQQ | Stock Screener - 2X in 1-2 Years",
    description: "Filter stocks with gains better than QQQ. Find stocks up 2X or more since 1 or 2 years ago.",
  },
  keywords: ["stocks beating QQQ", "stock screener", "stocks up 2X", "best performing stocks", "stocks outperforming QQQ", "find winning stocks", "stock database filter"],
};


export default function CommonDatabasePage() {

  return (<Client/>

  );
}
