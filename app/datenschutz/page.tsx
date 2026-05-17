import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Datenschutz | Eis-Café Surprise",
  description:
    "Datenschutzerklärung des Eis-Café Surprise in Berlin-Weißensee.",
};

export default function DatenschutzPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section className="section-shell pt-28 pb-16 sm:pt-32 sm:pb-24">
          <p className="section-kicker">Rechtliches</p>
          <h1 className="font-display mt-3 text-4xl font-bold text-[#201513] sm:text-6xl">
            Datenschutz
          </h1>

          <div className="legal-copy mt-10 max-w-4xl rounded-lg border border-[#efd7dc] bg-white p-6 shadow-sm sm:p-8">
            <h2>Datenschutzerklärung</h2>
            <p>
              Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen.
              Datenschutz hat einen besonders hohen Stellenwert für die
              Geschäftsleitung der Eiscafe Surprise. Eine Nutzung der
              Internetseiten der Eiscafe Surprise ist grundsätzlich ohne jede
              Angabe personenbezogener Daten möglich. Sofern eine betroffene
              Person besondere Services unseres Unternehmens über unsere
              Internetseite in Anspruch nehmen möchte, könnte jedoch eine
              Verarbeitung personenbezogener Daten erforderlich werden.
            </p>
            <p>
              Die Verarbeitung personenbezogener Daten, beispielsweise des
              Namens, der Anschrift, E-Mail-Adresse oder Telefonnummer einer
              betroffenen Person, erfolgt stets im Einklang mit der
              Datenschutz-Grundverordnung und in Übereinstimmung mit den für die
              Eiscafe Surprise geltenden landesspezifischen
              Datenschutzbestimmungen.
            </p>
            <p>
              Die Eiscafe Surprise hat als für die Verarbeitung Verantwortlicher
              zahlreiche technische und organisatorische Maßnahmen umgesetzt, um
              einen möglichst lückenlosen Schutz der über diese Internetseite
              verarbeiteten personenbezogenen Daten sicherzustellen. Dennoch
              können internetbasierte Datenübertragungen grundsätzlich
              Sicherheitslücken aufweisen.
            </p>

            <h2>
              Name und Anschrift des für die Verarbeitung Verantwortlichen
            </h2>
            <p>
              Eiscafe Surprise
              <br />
              Langhansstraße 136
              <br />
              13086 Berlin
              <br />
              Deutschland
              <br />
              Tel.: 0309251265
              <br />
              Website: www.eiscafe-surprise.de
            </p>

            <h2>Cookies</h2>
            <p>
              Die Internetseiten der Eiscafe Surprise können Cookies verwenden.
              Cookies sind Textdateien, welche über einen Internetbrowser auf
              einem Computersystem abgelegt und gespeichert werden. Durch den
              Einsatz von Cookies können nutzerfreundlichere Services
              bereitgestellt werden.
            </p>
            <p>
              Die betroffene Person kann die Setzung von Cookies durch unsere
              Internetseite jederzeit mittels einer entsprechenden Einstellung
              des genutzten Internetbrowsers verhindern und damit der Setzung
              von Cookies dauerhaft widersprechen. Ferner können bereits
              gesetzte Cookies jederzeit über einen Internetbrowser oder andere
              Softwareprogramme gelöscht werden.
            </p>

            <h2>Erfassung von allgemeinen Daten und Informationen</h2>
            <p>
              Die Internetseite der Eiscafe Surprise erfasst mit jedem Aufruf
              der Internetseite durch eine betroffene Person oder ein
              automatisiertes System eine Reihe von allgemeinen Daten und
              Informationen. Erfasst werden können Browsertypen und Versionen,
              das verwendete Betriebssystem, Referrer, aufgerufene Unterseiten,
              Datum und Uhrzeit des Zugriffs, IP-Adresse,
              Internet-Service-Provider und ähnliche Daten zur Gefahrenabwehr.
            </p>
            <p>
              Bei der Nutzung dieser allgemeinen Daten und Informationen zieht
              die Eiscafe Surprise keine Rückschlüsse auf die betroffene Person.
              Die Informationen werden benötigt, um die Inhalte der
              Internetseite korrekt auszuliefern, die dauerhafte
              Funktionsfähigkeit der Systeme zu gewährleisten und im Falle eines
              Cyberangriffes notwendige Informationen bereitzustellen.
            </p>

            <h2>Routinemäßige Löschung und Sperrung personenbezogener Daten</h2>
            <p>
              Der für die Verarbeitung Verantwortliche verarbeitet und speichert
              personenbezogene Daten der betroffenen Person nur für den
              Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich
              ist oder sofern dies durch gesetzliche Vorschriften vorgesehen
              wurde.
            </p>

            <h2>Rechte der betroffenen Person</h2>
            <p>
              Jede betroffene Person hat das Recht auf Bestätigung, Auskunft,
              Berichtigung, Löschung, Einschränkung der Verarbeitung,
              Datenübertragbarkeit, Widerspruch sowie Widerruf einer
              datenschutzrechtlichen Einwilligung. Zur Ausübung dieser Rechte
              kann sich die betroffene Person jederzeit an einen Mitarbeiter des
              für die Verarbeitung Verantwortlichen wenden.
            </p>

            <h2>Google Maps</h2>
            <p>
              Diese Seite bindet zur Darstellung der Anfahrt eine Karte von
              Google Maps ein. Beim Aufruf der Karte können Daten an Google
              übertragen werden. Weitere Informationen zur Verarbeitung durch
              Google finden Sie in den Datenschutzhinweisen von Google.
            </p>

            <h2>Rechtsgrundlage der Verarbeitung</h2>
            <p>
              Art. 6 I lit. a DS-GVO dient unserem Unternehmen als
              Rechtsgrundlage für Verarbeitungsvorgänge, bei denen wir eine
              Einwilligung einholen. Ist die Verarbeitung personenbezogener
              Daten zur Erfüllung eines Vertrags oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich, beruht die Verarbeitung
              auf Art. 6 I lit. b DS-GVO. Unterliegt unser Unternehmen einer
              rechtlichen Verpflichtung, erfolgt die Verarbeitung auf Grundlage
              von Art. 6 I lit. c DS-GVO. Zur Wahrung berechtigter Interessen
              kann Art. 6 I lit. f DS-GVO Grundlage der Verarbeitung sein.
            </p>
            <p>
              Diese Datenschutzerklärung wurde aus dem Bestandstext der
              bisherigen Website übernommen und für die separate
              Datenschutzseite gegliedert.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
