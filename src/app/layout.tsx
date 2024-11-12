import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevsHouse",
  description: "Code. Connect. Create.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SEO Metadata */}
        <title>{String(metadata.title) ?? "Default Title"}</title>
        <meta name="description" content={metadata.description ?? "Default description"} />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="DevsHouse" />
        <meta property="og:description" content="Code. Connect. Create." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.devshouse.in" />
        <meta property="og:image" content="/devshouse_banner-cropped.png" />
        <meta property="og:image:width" content="826" />
        <meta property="og:image:height" content="826" />
        <meta property="og:image:alt" content="DevsHouse Logo Banner" />

        {/* Twitter Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DevsHouse" />
        <meta name="twitter:description" content="Code. Connect. Create." />
        <meta name="twitter:image" content="/devshouse_banner-cropped.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
