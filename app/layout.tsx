// app/layout.tsx or app/layout.js
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agency Template",
  description: "The Description of your brand",
  openGraph: {
    title: "BrandName",
    description: "The Description of your brand",
    siteName: "BrandName",
    images: [
      {
        url: "https://res.cloudinary.com/dl2adjye7/image/upload/v1716922972/DynaUI_rfzbgc.png",
        width: 800,
        height: 600,
        alt: "Share Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agency Template",
    description: "The Description of your brand",
    images:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1716922972/DynaUI_rfzbgc.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
