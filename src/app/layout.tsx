import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BaeSWOT - Smart Dating Analysis Tool",
  description: "Make smarter dating decisions with BaeSWOT. Analyze potential partners, relationships, and dating prospects using our intuitive SWOT analysis tool. No signup required.",
  keywords: "dating analysis, relationship tool, SWOT analysis, dating app, relationship compatibility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <br/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
