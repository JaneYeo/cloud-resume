import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Yeo Jia Hui - Full Stack Developer",
  description: "3+ years building scalable systems and collaborating with engineering teams. Portfolio showcasing technical expertise and project achievements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased dark:bg-gray-900 dark:text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
