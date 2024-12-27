import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'
import "./globals.css";

export const metadata: Metadata = {
  title: "Narrow Websites Are Better",
  description: "A satirical manifesto about why narrow websites are superior",
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
