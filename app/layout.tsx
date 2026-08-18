import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Muehehe — Portfolio",
  description: "Digital Illustrator · UI/UX Designer · Frontend Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${caveat.variable} bg-[#FAF6EF] font-sans text-[#2B2622] antialiased`}>
        {children}
      </body>
    </html>
  );
}