import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "../globals.css"; // Adjusted path
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RiskWarningModal from "@/components/RiskWarningModal";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Mirror Trades",
  description: "Bilingual Copy Trading Platform",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang}>
      <body className={`${inter.variable} ${roboto_mono.variable} font-sans bg-background-dark text-text-primary antialiased`}>
        <Header lang={params.lang} />
        {children}
        <Footer />
        <RiskWarningModal />
      </body>
    </html>
  );
}
