import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://www.devshouse.in'),
  title: 'DevsHouse',
  description: 'Code. Connect. Create.',
  openGraph: {
    title: 'DevsHouse',
    description: 'Code. Connect. Create.',
    url: 'https://www.devshouse.in',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DevsHouse | A community of developers',
      },
    ],
  },
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
        <link rel="apple-touch-icon" href="/assets/gdsc-logo.png" />
        <meta property="og:title" content="DevsHouse" />
        <meta property="og:description" content="Code. Connect. Create." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.devshouse.in" />
      </head>
      <body className={inter.className}>

        {children}
      </body>
    </html>
  );
}