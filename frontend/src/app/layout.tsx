import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import PinriseBanner from '@/components/PinriseBanner';

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "No.36 Cafe Restaurant Ankara — Çankaya'nın Lezzet Durağı",
  description:
    "Çankaya'nın kalbinde, 100. Yıl'da samimi bir mutfak. Mevsimine göre hazırlanan tabaklar, taze kahveler ve sıcak bir atmosfer No.36 Cafe Restaurant'ta sizi bekliyor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}        <PinriseBanner />
              
{/* Pinrise Sales Banner */}
<script src="https://portal.pinrise.io/api/portal/banner.js?id=018fbd26-a72a-44d9-aa9d-de2ec4851242" defer></script>
      </body>
    </html>
  );
}
