import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import PaddingWrapper from "@/app/components/PaddingWrapper";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "House of Goods | Curated Home Decor",
  description:
    "Discover beautifully curated home decor and furniture. Timeless designs, sustainable materials, and artisanal craftsmanship for your perfect space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${lato.variable} antialiased`}
      >
        <Navbar />
        <PaddingWrapper>{children}</PaddingWrapper>
      </body>
    </html>
  );
}
