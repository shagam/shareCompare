// stocksTable
export const metadata = {
  metadataBase: new URL("https://sharecompare.net"),
  title: "Compare Stocks Side by Side: Returns, P/E, Dividend & Market Cap",
  description: "Compare stocks and ETFs side by side. Sort and filter by 1-month, 3-month, 6-month and 1-year gain, P/E, dividend yield, market cap and price vs high.",
  alternates: {
    canonical: "/stocksTable",
  },
  openGraph: {
    title: "Compare Stocks Side by Side: Returns, P/E, Dividend & Market Cap",
    description: "Compare stocks and ETFs side by side. Sort by 1-month, 3-month, 6-month and 1-year gain, P/E, dividend yield and market cap.",
    url: "https://sharecompare.net/stocksTable",
    siteName: "ShareCompare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare Stocks Side by Side: Returns, P/E, Dividend & Market Cap",
    description: "Compare stocks and ETFs side by side. Sort by 1-month, 3-month, 6-month and 1-year gain, P/E, dividend yield and market cap.",
  },
  keywords: ["compare stocks", "compare stocks side by side", "stock comparison table", "stock returns comparison", "compare ETFs", "stock screener by P/E dividend"],
};

export default function StocksTablePage() {

  return (
    <main>
      <h1>Stocks Table</h1>
      <div>table for comparing selected stocks, launch pad for analysis</div>
    </main>
  );

}
