// stocksTable
export const metadata = {
  title: "Table view of selected stocks for analysis.  Stock Analytics Platform",
  description: "Gain compare columns: [1mon, 3mom, 6mon, 1year, p/e, dividend yield, market cap, price/high... ]" +
  " column-select, sort-on a column, filter.  Compare stocks and ETFs with ease.",
  keywords: ["1month returns", "6 month returns", "stock gains",  "investment analysis"],
  url: "https://shareCompare.org/stocksTable",
};

export default function StocksTablePage() {

  return (
    <main>
      <h1>Stocks Table</h1>
      <div>table for comparing selected stocks, launch pad for analysis</div>
    </main>
  );

}
