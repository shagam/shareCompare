
import Client from "./client";   // adjust path if needed

// tutorials
export const metadata = {
  metadataBase: new URL("https://sharecompare.net"),
  title: "Learn Stock Trading: Tutorials, Guides & How-To Videos",
  description: "Learn stock investing, technical analysis and trading strategies with step-by-step tutorials. Beginner to advanced guides on portfolio management and using ShareCompare.",
  alternates: {
    canonical: "/tutorials",
  },
  openGraph: {
    title: "Learn Stock Trading: Tutorials, Guides & How-To Videos",
    description: "Learn stock investing, technical analysis and trading strategies with step-by-step tutorials for beginners and advanced traders.",
    url: "https://sharecompare.net/tutorials",
    siteName: "ShareCompare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Stock Trading: Tutorials, Guides & How-To Videos",
    description: "Learn stock investing, technical analysis and trading strategies with step-by-step tutorials.",
  },
  keywords: ["learn stock trading", "stock trading tutorials", "how to trade stocks", "technical analysis tutorial", "stock investing for beginners", "trading strategies guide"],
  category: "Education",
};


export default function TutorialsPage() {
  return <Client />;
}
