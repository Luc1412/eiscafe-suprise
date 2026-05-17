import type { Metadata } from "next";
import "./globals.css";

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
        url: "/images/eiscafe-carousel_1.jpg",
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
    images: ["/images/eiscafe-carousel_1.jpg"],
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
      <body>{children}</body>
    </html>
  );
}
