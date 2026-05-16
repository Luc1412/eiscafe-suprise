import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Impressum | Eiscafé Surprise",
  description: "Impressum des Eiscafé Surprise in Berlin-Weißensee.",
};

export default function ImpressumPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-shell min-h-[70svh] pt-28 pb-16 sm:pt-32 sm:pb-24">
        <p className="section-kicker">Rechtliches</p>
        <h1 className="font-display mt-3 text-4xl font-bold text-[#201513] sm:text-6xl">
          Impressum
        </h1>

        <div className="legal-copy mt-10 max-w-3xl rounded-[0.5rem] border border-[#efd7dc] bg-white p-6 shadow-sm sm:p-8">
          <p>
            <strong>Eiscafé Surprise</strong>
            <br />
            Langhansstr. 136
            <br />
            13086 Berlin
            <br />
            Tel.: 030 / 9251265
            <br />
            Internet: www.eiscafe-surprise.de
          </p>
          <p>Umsatzsteuer-Identifikationsnummer gem. § 27a UStG:</p>
          <p>DE 35/316/01026</p>
          <p>Inhaltlich Verantwortlicher gem. § 6 MDStV: Michaela Greupner</p>
          <h3>Haftungshinweis</h3>
          <p>
            Trotz sorgfältiger inhaltlicher Prüfung übernehmen wir keine Haftung
            für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
            sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
