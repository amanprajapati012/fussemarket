import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Company | Technology & Digital Solutions",
  description:
    "We build modern digital solutions, software products and technology experiences that help businesses grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}