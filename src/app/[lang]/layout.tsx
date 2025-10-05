import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "../globals.css"; // Adjusted path
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingGoldParticles from "@/components/FloatingGoldParticles";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Mirror Trades",
  description: "Bilingual Copy Trading Platform",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body className={`${inter.variable} ${roboto_mono.variable} font-sans bg-background-dark text-text-primary antialiased`}>
        <FloatingGoldParticles />
        <ScrollToTop />
        <Header lang={lang} />
        {children}
      </body>
    </html>
  );
}