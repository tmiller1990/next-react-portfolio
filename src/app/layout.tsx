import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'; // 1. Import the font loader

// 2. Configure the font (e.g., using 'Inter' as the site font)
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter', // 3. Assign a CSS variable name
});


export const metadata: Metadata = {
  title: "Tyler Miller | Developer Portfolio",
  description: "A portfolio of software projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"inter.variable bg-theme-base antialiased"}
      >
      <div className="max-w-3xl mx-auto">
        {children}
      </div>
      </body>
    </html>
  );
}
