import Client from "./client";



export const metadata = {
  metadataBase: new URL("https://sharecompare.net"),
  title: "Investor Relations Links: Apple, Microsoft, Nvidia & More",
  description: "Direct links to investor relations pages for major tech companies. Find earnings, SEC filings, quarterly reports, dividends and shareholder info for Apple, Microsoft, Nvidia, Google and more.",
  alternates: {
    canonical: "/investorRelations",
  },
  openGraph: {
    title: "Investor Relations Links: Apple, Microsoft, Nvidia & More",
    description: "Direct links to investor relations pages for major tech companies. Find earnings, SEC filings, quarterly reports and dividends.",
    url: "https://sharecompare.net/investorRelations",
    siteName: "ShareCompare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Investor Relations Links: Apple, Microsoft, Nvidia & More",
    description: "Direct links to investor relations pages for major tech companies. Find earnings, SEC filings and quarterly reports.",
  },
  keywords: ["investor relations", "investor relations links", "Apple investor relations", "Microsoft investor relations", "Nvidia investor relations", "tech company earnings", "SEC filings tech stocks"],
};


export default function InvestorRelationsPage() {

  return (
    // <div>InvestorRelations</div>
    <Client/>
  );
}
