import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact"; // Using Contact as Footer area for now

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CelsysTech | Professional IT Solutions",
  description: "Innovative tech solutions for modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased selection:bg-blue-500/30`}>
        <Navbar />
        <main className="min-h-screen flex flex-col items-center justify-between">
          {children}
        </main>
        <Contact />
      </body>
    </html>
  );
}
