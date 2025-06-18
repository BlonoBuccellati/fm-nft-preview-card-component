import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@/app/_styles/globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | NFT preview card component",
  description: "NFT preview card component",
  icons: "favicon-32x32.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
