import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Himel Roy | Digital Marketer & Creative Designer",
  description: "AI-Powered Digital Marketing Solutions. Helping brands grow with data-driven marketing strategies, eye-catching designs, and persuasive copy that converts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#0F0F23] text-white font-[family-name:var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}
