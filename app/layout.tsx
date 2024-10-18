import type { Metadata } from "next";
import "./globals.css";
import Header from "./CommonComps/Header";

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
      </body>
    </html>
  );
}
