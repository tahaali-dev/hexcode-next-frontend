import type { Metadata } from "next";
import "./globals.css";
import Header from "./CommonComps/Header";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Hexcode",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header />
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
