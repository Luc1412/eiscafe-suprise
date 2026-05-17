import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bodoniModa = localFont({
  src: [
    {
      path: "../public/fonts/bodoni-moda-600.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/bodoni-moda-700.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/bodoni-moda-800.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/bodoni-moda-900.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eiscafe-surprise.de"),
  title: {
    default: "Eis-Café Surprise | Eis, Torten und Kaffee in Berlin-Weißensee",
    template: "%s | Eis-Café Surprise",
  },
  description:
    "Eis-Café Surprise in Berlin-Weißensee: hausgemachtes Eis, Kuchen, individuelle Torten und Wiener Kaffeehausatmosphäre seit 1979.",
  applicationName: "Eis-Café Surprise",
  keywords: [
    "Eis-Café Surprise",
    "Eiscafé Berlin Weißensee",
    "hausgemachtes Eis Berlin",
    "Torten Berlin Weißensee",
    "Fototorten Berlin",
    "Geburtstagstorten Berlin",
    "Hochzeitstorten Berlin",
    "Kaffeehaus Berlin Weißensee",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: "/favicons/favicon.ico",
    apple: {
      url: "/favicons/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
  manifest: "/favicons/site.webmanifest",
  openGraph: {
    title: "Eis-Café Surprise | Eis, Torten und Kaffee in Berlin-Weißensee",
    description:
      "Hausgemachtes Eis, Kuchen, Fototorten und Kaffeehausatmosphäre im Stil eines Wiener Cafés an der Langhansstraße.",
    url: "/",
    siteName: "Eis-Café Surprise",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/carousel/eiscafe-carousel_1.jpg",
        width: 1200,
        height: 900,
        alt: "Innenansicht des Eis-Cafés Surprise in Berlin-Weißensee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eis-Café Surprise | Berlin-Weißensee",
    description:
      "Hausgemachtes Eis, Kuchen und individuelle Torten in Wiener Kaffeehausatmosphäre.",
    images: ["/images/carousel/eiscafe-carousel_1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={bodoniModa.variable}>{children}</body>
    </html>
  );
}
