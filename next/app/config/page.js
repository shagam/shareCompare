import Client from "./client";   // adjust path if needed

// config
export const metadata = {
  metadataBase: new URL("https://sharecompare.net"),
  title: "Settings | ShareCompare",
  description: "Manage your ShareCompare account settings and preferences.",
  robots: { index: false, follow: false },
};
export default function ConfigPage() {

  return (<Client/>
  );
}
  