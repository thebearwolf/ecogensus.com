import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Ecogensus | Advanced Materials Science & Technology Platform",
    template: "%s | Ecogensus",
  },
  description:
    "Pioneering constructive thermochemistry, an entirely new branch of materials science. Patented DOR process transforms waste into high-value engineered materials.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecogensus.com"),
  openGraph: {
    title: "Ecogensus | Advanced Materials Science & Technology Platform",
    description:
      "Pioneering constructive thermochemistry. 100+ patents. Validated by Fortune 500 companies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecogensus | Advanced Materials Science & Technology Platform",
    description: "Pioneering constructive thermochemistry. 100+ patents.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-[#050505] text-zinc-100">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
