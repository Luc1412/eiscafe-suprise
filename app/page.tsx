import Image from "next/image";
import {
  CakeSlice,
  Clock3,
  Coffee,
  IceCreamBowl,
  MapPin,
  Navigation,
  Phone,
  Sparkles,
} from "lucide-react";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

const carouselImages = [
  {
    src: "/images/eiscafe-carousel_1.jpg",
    alt: "Innenansicht des Eiscafés Surprise",
  },
  {
    src: "/images/eiscafe-carousel_2.jpg",
    alt: "Torten und Eis im Eiscafé Surprise",
  },
  {
    src: "/images/eiscafe-carousel_3.jpg",
    alt: "Kaffeehausatmosphäre im Eiscafé Surprise",
  },
  {
    src: "/images/eiscafe-carousel_4.jpg",
    alt: "Hausgemachte Spezialitäten im Eiscafé Surprise",
  },
  {
    src: "/images/eiscafe-carousel_0.jpg",
    alt: "Eiscafé Surprise mit klassischer Kuchenauslage",
  },
];

const offers = [
  {
    title: "Hausgemachtes Eis",
    text: "Klassische und saisonale Eisspezialitäten aus eigener Herstellung.",
    icon: IceCreamBowl,
  },
  {
    title: "Torten & Kuchen",
    text: "Hausgemachte Sahne-, Creme-, Eis- und gebackene Torten für die Kuchentheke und zum Bestellen.",
    icon: CakeSlice,
  },
  {
    title: "Kaffee & Getränke",
    text: "Kaffeehausmomente mit Heißgetränken und kleinen Angeboten für zwischendurch.",
    icon: Coffee,
  },
  {
    title: "Besondere Anlässe",
    text: "Fototorten, Hochzeitstorten und persönliche Überraschungen für Geburtstag, Einschulung und Feiern.",
    icon: Sparkles,
  },
];

const hours = [
  ["Montag bis Freitag", "12.00 - 18.00 Uhr"],
  ["Samstag", "13.00 - 18.00 Uhr"],
  ["Sonntag", "13.00 - 18.00 Uhr"],
  ["Feiertage", "13.00 - 18.00 Uhr"],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section id="start" className="relative isolate flex min-h-[86svh] items-end overflow-hidden pt-20">
        <div className="absolute inset-0 -z-20">
          {carouselImages.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              loading="eager"
              sizes="100vw"
              className="hero-slide object-cover object-[center_68%]"
            />
          ))}
        </div>
        <div className="absolute inset-0 -z-10 bg-[#201513]/40" />
        <div className="section-shell w-full pb-12 text-white sm:pb-16">
          <p className="mb-4 inline-flex rounded-full border border-white/45 bg-white/12 px-4 py-2 text-sm font-bold backdrop-blur-sm">
            Eis und Torten in eigener Herstellung
          </p>
          <h1 className="font-display max-w-4xl text-5xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl">
            Eiscafé Surprise
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/92 sm:text-xl">
            Seit 1979 Kaffeehausatmosphäre in Berlin-Weißensee: handgemachte Torten,
            Fototorten, Eis und süße Momente an der Langhansstraße.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#angebote"
              className="inline-flex items-center gap-2 rounded-full bg-[#AE3460] px-5 py-3 text-sm font-black text-white shadow-lg transition hover:bg-[#8f294e]"
            >
              <CakeSlice aria-hidden="true" className="size-5" />
              Angebote ansehen
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/12 px-5 py-3 text-sm font-black text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              <MapPin aria-hidden="true" className="size-5" />
              Anfahrt planen
            </a>
          </div>
        </div>
      </section>

      <section className="section-shell py-5">
        <div className="grid grid-cols-5 gap-2 sm:gap-4">
          {carouselImages.map((image) => (
            <div
              key={image.src}
              className="relative aspect-square overflow-hidden rounded-[0.45rem] border-2 border-white shadow-sm"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="ueber-uns" className="scroll-mt-20 py-16 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">Über uns</p>
            <h2 className="font-display mt-3 text-4xl font-bold text-[#201513] sm:text-5xl">
              Gemütlich wie früher, frisch für heute.
            </h2>
          </div>
          <div className="grid gap-6 text-lg leading-8 text-[#4d3a35]">
            <p>
              Hier finden Sie ein Eiscafé mit sehr gemütlicher Atmosphäre, wo sich Menschen
              aller Altersgruppen wohlfühlen. Bei uns herrscht eine Kaffeehausatmosphäre im
              Stil eines Wiener Cafés und dies seit 1979.
            </p>
            <p>
              Unsere besondere Leistung ist es, die Torten und das Eis in hauseigener
              Herstellung zu produzieren. Wir verwenden hochwertige Zutaten und setzen auf
              Qualität und Geschmack, damit ein Stück Kuchen zum Kaffee genauso Freude macht
              wie eine große Festtagstorte.
            </p>
            <p>
              Lassen Sie sich verwöhnen. Wir nehmen gern Ihre Bestellung entgegen und freuen
              uns darauf, Ihren Tag mit einem Lächeln und einem leckeren Genuss zu versüßen.
            </p>
          </div>
        </div>
      </section>

      <section id="angebote" className="scroll-mt-20 bg-white/62 py-16 sm:py-24">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="section-kicker">Unsere Angebote</p>
            <h2 className="font-display mt-3 text-4xl font-bold text-[#201513] sm:text-5xl">
              Torten, Eis und kleine Überraschungen.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#4d3a35]">
              Besonderes Augenmerk gilt unseren Fototorten und Bildertorten, die für Hochzeit,
              Einschulung, runde Geburtstage und andere Anlässe eine persönliche Überraschung
              darstellen.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {offers.map((offer) => {
              const Icon = offer.icon;
              return (
                <article
                  key={offer.title}
                  className="rounded-lg border border-[#efd7dc] bg-[#fffafc] p-6 shadow-sm"
                >
                  <div className="mb-5 grid size-11 place-items-center rounded-full bg-[#F6E6EB] text-[#AE3460]">
                    <Icon aria-hidden="true" className="size-5" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#201513]">
                    {offer.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#5c4944]">{offer.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="oeffnungszeiten" className="scroll-mt-20 py-16 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-kicker">Öffnungszeiten</p>
            <h2 className="font-display mt-3 text-4xl font-bold text-[#201513] sm:text-5xl">
              Willkommen zum Kaffee, Eis und Kuchen.
            </h2>
          </div>
          <div className="rounded-lg border border-[#efd7dc] bg-white p-4 shadow-sm sm:p-6">
            <div className="mb-4 flex items-center gap-3 text-[#AE3460]">
              <Clock3 aria-hidden="true" className="size-6" />
              <h3 className="font-display text-2xl font-bold">Unsere Öffnungszeiten sind:</h3>
            </div>
            <div className="divide-y divide-[#f0dde1]">
              {hours.map(([day, time]) => (
                <div key={day} className="grid grid-cols-[1fr_auto] gap-4 py-4">
                  <span className="font-bold text-[#201513]">{day}</span>
                  <span className="text-right font-black text-[#AE3460]">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="scroll-mt-20 bg-[#F6E6EB] py-16 sm:py-24">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <p className="section-kicker">Kontakt</p>
              <h2 className="font-display mt-3 text-4xl font-bold text-[#201513] sm:text-5xl">
                Besuchen Sie uns in Weißensee.
              </h2>
              <div className="mt-8 space-y-5 text-lg text-[#3d302c]">
                <p>
                  <strong>Eiscafe-Surprise</strong>
                  <br />
                  Inh. Michaela Greupner
                  <br />
                  Langhansstr. 136
                  <br />
                  13086 Berlin
                </p>
                <p>
                  <a
                    href="tel:+49309251265"
                    className="inline-flex items-center gap-2 font-black text-[#AE3460] hover:text-[#201513]"
                  >
                    <Phone aria-hidden="true" className="size-5" />
                    +49 30 9251265
                  </a>
                </p>
                <p className="leading-8">
                  Aus Süden kommend mit der Tram 4 bis Antonplatz, dort in die Tram 12 bis
                  Behaimstraße. Von Norden kommend mit der Tram 13 bis Behaimstraße.
                </p>
                <a
                  href="https://www.google.com/maps/place/Eiscaf%C3%A9+Surprise/@52.5499049,13.4458813,19z/data=!4m6!3m5!1s0x47a84de8bd3b870b:0xe41b190621e23a9b!8m2!3d52.5498716!4d13.4459254!16s%2Fg%2F1vzqr8py?entry=ttu"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#201513] px-5 py-3 text-sm font-black text-white transition hover:bg-[#AE3460]"
                >
                  <Navigation aria-hidden="true" className="size-5" />
                  Route öffnen
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border-4 border-white bg-white shadow-sm">
              <iframe
                title="Karte zum Eiscafé Surprise"
                src="https://www.google.com/maps?q=Eiscaf%C3%A9%20Surprise%2C%20Langhansstr.%20136%2C%2013086%20Berlin&z=15&hl=de&output=embed"
                className="h-105 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
