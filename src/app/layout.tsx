import type { Metadata } from "next";
import { Raleway } from 'next/font/google'

import { Header } from "@/modules/header/header";
import { Footer } from "@/modules/footer/footer";

import "./globals.css";

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
