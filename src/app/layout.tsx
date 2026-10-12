import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Hosanna School of Catering & Fashion Design",
    template: "%s | Hosanna School of Catering & Fashion Design",
  },
  description:
    "Practical training in catering, culinary and fashion skills in Aba, Abia State, Nigeria.",
  keywords: [
    "Hosanna School",
    "Catering School",
    "Fashion Design School",
    "Culinary Training",
    "Fashion Training",
    "Aba",
    "Abia State",
    "Nigeria",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} data-scroll-behavior="smooth">
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
