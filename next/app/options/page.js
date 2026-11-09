import Client from "./client";   // adjust path if needed



// options
export const metadata = {
  title: "Options Trading Analytics | Stock Analytics Platform",
  description: "Analyze options contracts. Evaluate potential gain based on expected yearly gain and the drop from higest price." +
   "implied volatility, Greeks.",
  keywords: ["options trading", "stock options", "implied volatility", "options analytics", "Greeks", "potential gain", "leverage factor",
     "options contracts", "financial analysis", "investment strategies", "options market trends", "stock market insights"],
  url: "https://sharecompare.org/options",
  siteName: "ShareCompare",
  type: "website"
};

export default function OptionsPage() {
  return (
    <Client/>
  );
}

     