import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wordy",
  description: "A game to see how wordy you are",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
