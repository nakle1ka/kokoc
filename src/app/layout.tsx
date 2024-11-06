import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import { Header } from "@/modules/header/header";
import { Footer } from "@/modules/footer/footer";

import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Kokoc Group',
  description: 'Официальный сайт футбольной команды "Кокос групп"',
  icons: {
    icon: {
      url: '/assets/logo.png',
      href: '/assets/logo.png',
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
