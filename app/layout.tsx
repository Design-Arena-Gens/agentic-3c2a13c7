import clsx from "clsx";
import type { Metadata } from "next";
import { EB_Garamond, Great_Vibes, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script"
});

export const metadata: Metadata = {
  title: "Мир, свет и глубина Писания",
  description: "Лёгкое, вдохновляющее пространство для чтения и размышления над Священным Писанием."
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="ru" className={clsx(inter.variable, garamond.variable, script.variable)}>
    <body>{children}</body>
  </html>
);

export default RootLayout;
