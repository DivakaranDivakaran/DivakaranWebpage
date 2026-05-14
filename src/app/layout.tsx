import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Divakaran D | Academic Profile",
  description: "Personal website of Divakaran D, Assistant Professor at Azim Premji University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#fcfaf5] text-stone-800 antialiased`}>
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 py-16">
          {children}
        </main>
        <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-stone-200 text-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Divakaran D.</p>
        </footer>
      </body>
    </html>
  );
}
