import Client from "./client";   // adjust path if needed



// options
export const metadata = {
  metadataBase: new URL("https://sharecompare.net"),
  title: "Options Calculator: Potential Gain, IV & Greeks | Options Analytics",
  description: "Analyze options contracts expected gain, using expected yearly gain and drop from highest price. Check implied volatility, Greeks, leverage factor and potential gain before you trade.",
  alternates: {
    canonical: "/options",
  },
  openGraph: {
    title: "Options Calculator: Potential Gain, IV & Greeks | Options Analytics",
    description: "Analyze options contracts by expected yearly gain and drop from highest price. Check implied volatility, Greeks and leverage.",
    url: "https://sharecompare.net/options",
    siteName: "ShareCompare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Options Calculator: Potential Gain, IV & Greeks | Options Analytics",
    description: "Analyze options contracts by expected yearly gain and drop from highest price. Check implied volatility, Greeks and leverage.",
  },
  keywords: ["options calculator", "options trading analytics", "options potential gain", "implied volatility", "options Greeks", "options leverage factor", "stock options analysis", "options contracts"],
};

export default function OptionsPage() {
  return (
    <Client/>
  );
}

     