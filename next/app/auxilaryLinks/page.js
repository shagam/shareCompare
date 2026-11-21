import Client from "./client";

// auxilaryLinks
export const metadata = {
  metadataBase: new URL("https://sharecompare.net"),
  title: "Best Trading Tools & Stock Market Resources",
  description: "Best stock market resources and trading tools in one place. Free screeners, calculators, charts, news and educational links for traders and investors.",
  alternates: {
    canonical: "/auxilaryLinks", // <- keep this for now, see note below
  },
  openGraph: {
    title: "Best Trading Tools & Stock Market Resources",
    description: "Best stock market resources and trading tools in one place. Free screeners, calculators, charts and news for traders.",
    url: "https://sharecompare.net/auxilaryLinks",
    siteName: "ShareCompare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Trading Tools & Stock Market Resources",
    description: "Best stock market resources and trading tools in one place. Free screeners, calculators, charts and news for traders.",
  },
  keywords: ["best trading tools", "stock market resources", "free stock tools", "trading resources", "stock market links", "investing tools"],
};

export default function AuxilaryLinksPage() {
  return <Client />;
}
