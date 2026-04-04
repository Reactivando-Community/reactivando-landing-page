import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reactivando",
  description: "O motor da inovação na sociedade",
};

import Navbar from "@/components/ui/Navbar";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pt");

  return (
    <html lang={lang} className={`${inter.variable} ${manrope.variable} dark`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on_surface font-sans antialiased selection:bg-primary selection:text-on_primary">
        <Navbar lang={lang} dict={dict.landing || {}} />
        {children}
      </body>
    </html>
  );
}
