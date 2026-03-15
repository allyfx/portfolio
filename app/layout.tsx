import type { Metadata } from "next";
import { Geist, Space_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: "400",
  variable: "--font-space-mono"
});

export const metadata: Metadata = {
  title: "Alícia Foureaux | Potfólio",
  description: "Senior Software Engineer Contractor, building amazing products that solves your problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} ${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
