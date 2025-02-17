import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/app/reduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Katie Jayne",
  description:
    "Explore Katie Jayne's exquisite collection of handmade glassware.",
  icons: "/logo.svg",
  keywords:
    "handmade glassware, luxury glassware, Katie Jayne, mouth-blown glassware, bespoke glassware, home bar accessories",
  authors: [{ name: "Katie Jayne", url: "https://katie-jayne.vercel.app" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrap children in the Redux provider */}
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
