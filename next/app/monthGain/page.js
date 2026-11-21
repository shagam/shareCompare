
import Client from "./Client";

// monthGain
export const metadata = {
  metadataBase: new URL("https://sharecompare.net"),
  title: "Best Month to Buy Stocks? Monthly Average Gain by Month",
  description: "What is the average stock gain by month? Review monthly gains over many years, seasonal patterns and historical returns for stocks and ETFs. Find the best and worst months.",
  alternates: {
    canonical: "/monthGain",
  },
  openGraph: {
    title: "Best Month to Buy Stocks? Monthly Average Gain by Month",
    description: "Average stock gain by month over many years. See seasonal patterns and historical returns for stocks and ETFs.",
    url: "https://sharecompare.net/monthGain",
    siteName: "ShareCompare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Month to Buy Stocks? Monthly Average Gain by Month",
    description: "Average stock gain by month over many years. See seasonal patterns and historical returns for stocks and ETFs.",
  },
  keywords: ["monthly stock gain", "average monthly stock return", "best month to buy stocks", "seasonal stock performance", "stock seasonality", "monthly returns by month", "stock market seasonality"],
};
export default function MonthGainPage() {

  return (<Client />);

}
