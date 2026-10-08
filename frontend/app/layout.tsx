
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Fusse Market | Technology & Digital Solutions",
    template: "%s | Fusse Market",
  },
  description:
    "Fusse Market delivers modern software development, cloud infrastructure, digital transformation, automation and technology solutions that help businesses grow.",
  keywords: [
    "Fusse Market",
    "software development",
    "web development",
    "mobile app development",
    "cloud solutions",
    "digital transformation",
    "automation",
    "enterprise software",
    "IT solutions",
  ],
  authors: [
    {
      name: "Fusse Market",
    },
  ],
  creator: "Fusse Market",
  publisher: "Fusse Market",
  metadataBase: new URL("https://www.fusemarket.in"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
