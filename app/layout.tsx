import type { Metadata } from "next";
import "./globals.css";
import Header from "./CommonComps/Header";
import CustomCursor from "./CommonComps/CustomCursor"; // Import the new client comp
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Hexcode – UI/UX Design Studio & Development Agency",
  description:
    "Hexcode is a creative UI/UX design studio offering intuitive, user-focused interfaces along with full-stack development services. Let's build your next digital product together.",
  keywords: [
    "UI/UX Design",
    "Product Design",
    "Web Development",
    "Frontend Development",
    "Creative Studio",
    "Design Agency",
    "Mobile App Design",
    "Hexcode",
    "hexcode.design",
    "User Experience",
    "Interface Design",
  ],
  metadataBase: new URL("https://hexcode.design"),
  openGraph: {
    title: "Hexcode – UI/UX Design Studio & Development Agency",
    description:
      "We craft intuitive digital experiences with standout UI/UX and robust development. Partner with Hexcode to bring your product vision to life.",
    url: "https://hexcode.design",
    siteName: "Hexcode",
    images: [
      {
        url: "https://i.ibb.co/PvC2CS6S/OG.png",
        width: 1200,
        height: 630,
        alt: "Hexcode – UI/UX Design & Development",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hexcode – UI/UX Design Studio & Development Agency",
    description:
      "Hexcode is a UI/UX design and development studio helping brands build beautiful and functional digital products.",
    images: ["https://i.ibb.co/PvC2CS6S/OG.png"],
  },
  icons: {
    icon: "https://i.ibb.co/JwSfnSHt/favicon.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="main-body">
        <Header />
        {children}
        <Analytics />
        <CustomCursor />
      </body>
    </html>
  );
}


