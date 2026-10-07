import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/playfair-display";
import "./globals.css";

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
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}