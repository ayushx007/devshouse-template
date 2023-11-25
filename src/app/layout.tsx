import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevsHouse",
  description: "A community of developers",
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
        <meta rel="og:image" content="/gdsc.svg" />
        <meta property="og:title" content="DevsHouse" />
        <meta property="og:description" content="A community of developers" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://devshouse.vercel.app" />
      </head>
      <body className={inter.className}>

        {children}
        </body>
    </html>
  );
}
