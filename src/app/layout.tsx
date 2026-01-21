import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'; // Import the font loader

// Configure the font
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter', // Assign a CSS variable name
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
    <html lang="en" className="scroll-pt-[72px] scroll-smooth">
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
