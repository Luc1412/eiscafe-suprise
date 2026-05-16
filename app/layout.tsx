import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eiscafé Surprise | Eis und Torten in Berlin-Weißensee",
  description:
    "Eiscafé Surprise in Berlin-Weißensee: Eis, Torten, Fototorten und Kaffeehausatmosphäre seit 1979.",
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
