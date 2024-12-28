import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'
import "./globals.css";

export const metadata: Metadata = {
  title: "Motherfucking Narrow",
  description: "Why narrow websites are better",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  );
}
