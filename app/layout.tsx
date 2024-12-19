import type { Metadata } from "next";

import "./globals.css";
import { manrope } from "@/src/lib/fonts";

export const metadata: Metadata = {
  title: "netspaces",
  description: "A primeira assinatura de patrimônio imobiliário.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${manrope.className} antialiased`}>{children}</body>
    </html>
  );
}
