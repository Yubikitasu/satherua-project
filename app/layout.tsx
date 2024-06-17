import type { Metadata } from "next";
//import { Inter } from "next/font/google";
//const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
export const metadata: Metadata = {
  title: "Stay connected, be productive | Satherua",
  description: "Powerful management platform. Built for productivity. Trusted by multiple companies and customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className + " overflow-x-hidden"}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
