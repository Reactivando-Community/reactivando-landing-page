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
  metadataBase: new URL('https://reactivando.io'),
  title: {
    template: '%s | Reactivando',
    default: 'Reactivando | O motor da inovação na sociedade',
  },
  description: 'Descubra como a Reactivando fura a bolha da tecnologia, criando ecossistemas de inovação integrados com inteligência artificial e metodologias disruptivas.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://reactivando.io',
    siteName: 'Reactivando',
    images: [{
      url: '/reactivando-horizontal.svg', // Assuming a logo or default OG image
      width: 1200,
      height: 630,
      alt: 'Reactivando',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reactivando | O motor da inovação na sociedade',
    description: 'Descubra como a Reactivando fura a bolha da tecnologia, criando ecossistemas de inovação.',
  },
  robots: {
    index: true,
    follow: true,
  },
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
