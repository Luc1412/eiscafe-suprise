import Image from "next/image";
import { CakeSlice, Clock3, MapPin, Navigation, Phone } from "lucide-react";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { ImageGallery } from "./components/image-gallery";
import { MapConsent } from "./components/map-consent";
import { OffersSection } from "./components/offers-section";

const carouselImages = [
  {
    src: "/images/carousel/eiscafe-carousel_1.webp",
    alt: "Innenansicht des Eis-Cafés Surprise",
  },
  {
    src: "/images/carousel/eiscafe-carousel_2.webp",
    alt: "Torten und Eis im Eis-Café Surprise",
  },
  {
    src: "/images/carousel/eiscafe-carousel_3.webp",
    alt: "Kaffeehausatmosphäre im Eis-Café Surprise",
  },
  {
    src: "/images/carousel/eiscafe-carousel_4.webp",
    alt: "Hausgemachte Spezialitäten im Eis-Café Surprise",
  },
  {
    src: "/images/carousel/eiscafe-carousel_0.webp",
    alt: "Eis-Café Surprise mit klassischer Kuchenauslage",
  },
];

const hours = [
  ["Montag bis Freitag", "12.00 - 18.00 Uhr"],
  ["Samstag", "13.00 - 18.00 Uhr"],
  ["Sonntag", "13.00 - 18.00 Uhr"],
  ["Feiertage", "13.00 - 18.00 Uhr"],
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["CafeOrCoffeeShop", "Bakery"],
  name: "Eis-Café Surprise",
  description:
    "Eis-Café in Berlin-Weißensee mit hausgemachtem Eis, Kuchen, individuellen Torten und Wiener Kaffeehausatmosphäre seit 1979.",
  url: "https://www.eiscafe-surprise.de/",
  telephone: "+49309251265",
  logo: "https://www.eiscafe-surprise.de/images/brand/logo.webp",
  image: [
    "https://www.eiscafe-surprise.de/images/carousel/eiscafe-carousel_1.webp",
    "https://www.eiscafe-surprise.de/images/carousel/eiscafe-carousel_2.webp",
    "https://www.eiscafe-surprise.de/images/carousel/eiscafe-carousel_4.webp",
  ],
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Langhansstraße 136",
    postalCode: "13086",
    addressLocality: "Berlin",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.5498716,
    longitude: 13.4459254,
  },
  sameAs: [
    "https://www.instagram.com/eiscafe_surprise/",
    "https://www.facebook.com/EiscafeSurprise/",
    "https://www.google.com/maps/place/Eiscaf%C3%A9+Surprise/@52.5498748,13.4410545,17z/data=!3m1!4b1!4m6!3m5!1s0x47a84de8bd3b870b:0xe41b190621e23a9b!8m2!3d52.5498716!4d13.4459254!16s%2Fg%2F1vzqr8py",
  ],
  servesCuisine: ["Eis", "Kuchen", "Torten", "Kaffee"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "12:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "PublicHolidays"],
      opens: "13:00",
      closes: "18:00",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <SiteHeader />

      <main id="main-content" tabIndex={-1}>
        <section
          id="start"
          className="relative isolate flex min-h-[86svh] items-end overflow-hidden pt-20"
        >
          <div className="absolute inset-0 -z-20" aria-hidden="true">
            {carouselImages.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt=""
                aria-hidden="true"
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
            <h1 className="max-w-4xl font-(family-name:--font-display) text-5xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl">
              Eis-Café Surprise
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/92 sm:text-xl">
              Seit 1979 Kaffeehausatmosphäre in Berlin-Weißensee: handgemachte
              Torten, Eis und süße Momente an der Langhansstraße.
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

        <ImageGallery images={carouselImages} />

        <section id="ueber-uns" className="scroll-mt-20 py-16 sm:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="section-kicker">Über uns</p>
              <h2 className="mt-3 hyphens-auto wrap-break-word text-balance font-(family-name:--font-display) text-4xl leading-[1.04] font-bold text-[#201513] sm:text-5xl">
                Kaffeehaus&shy;atmosphäre seit 1979.
              </h2>
            </div>
            <div className="grid gap-6 text-lg leading-8 text-[#4d3a35]">
              <p>
                Hier finden Sie ein Eis-Café mit sehr gemütlicher Atmosphäre, wo
                sich Menschen aller Altersgruppen wohlfühlen. Bei uns herrscht
                eine Kaffeehausatmosphäre im Stil eines Wiener Cafés und dies
                seit 1979.
              </p>
              <p>
                Unsere besondere Leistung ist es, die Torten und das Eis in
                hauseigener Herstellung zu produzieren. Wir verwenden
                hochwertige Zutaten und setzen auf Qualität und Geschmack, damit
                ein Stück Kuchen zum Kaffee genauso Freude macht wie eine große
                Festtagstorte.
              </p>
              <p>
                Lassen Sie sich verwöhnen. Wir nehmen gern Ihre Bestellung
                entgegen und freuen uns darauf, Ihren Tag mit einem Lächeln und
                einem leckeren Genuss zu versüßen.
              </p>
            </div>
          </div>
        </section>

        <OffersSection />

        <section id="oeffnungszeiten" className="scroll-mt-20 py-16 sm:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="section-kicker">Öffnungszeiten</p>
              <h2 className="mt-3 hyphens-auto wrap-break-word text-balance font-(family-name:--font-display) text-4xl leading-[1.04] font-bold text-[#201513] sm:text-5xl">
                Unsere Eis- und Kuchenzeiten.
              </h2>
            </div>
            <div className="rounded-lg border border-[#efd7dc] bg-white p-4 shadow-sm sm:p-6">
              <div className="mb-4 flex items-center gap-3 text-[#AE3460]">
                <Clock3 aria-hidden="true" className="size-6" />
                <h3 className="font-(family-name:--font-display) text-2xl font-bold">
                  Unsere Öffnungszeiten sind:
                </h3>
              </div>
              <dl className="divide-y divide-[#f0dde1]">
                {hours.map(([day, time]) => (
                  <div
                    key={day}
                    className="grid grid-cols-[1fr_auto] gap-4 py-4"
                  >
                    <dt className="font-bold text-[#201513]">{day}</dt>
                    <dd className="text-right font-black text-[#AE3460]">
                      <time>{time}</time>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section
          id="kontakt"
          className="scroll-mt-20 bg-[#F6E6EB] py-16 sm:py-24"
        >
          <div className="section-shell">
            <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
              <div>
                <p className="section-kicker">Kontakt</p>
                <h2 className="mt-3 hyphens-auto wrap-break-word text-balance font-(family-name:--font-display) text-4xl leading-[1.04] font-bold text-[#201513] sm:text-5xl">
                  Besuchen Sie uns in Weißensee.
                </h2>
                <div className="mt-8 space-y-5 text-lg text-[#3d302c]">
                  <address className="not-italic">
                    <strong>Eiscafe-Surprise</strong>
                    <br />
                    Inh. Michaela Greupner
                    <br />
                    Langhansstr. 136
                    <br />
                    13086 Berlin
                  </address>
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
                    Aus Süden kommend mit der Tram 4 bis Antonplatz, dort in die
                    Tram 12 bis Behaimstraße. Von Norden kommend mit der Tram 13
                    bis Behaimstraße.
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Eiscaf%C3%A9+Surprise/@52.5499049,13.4458813,19z/data=!4m6!3m5!1s0x47a84de8bd3b870b:0xe41b190621e23a9b!8m2!3d52.5498716!4d13.4459254!16s%2Fg%2F1vzqr8py?entry=ttu"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#201513] px-5 py-3 text-sm font-black text-white transition hover:bg-[#AE3460]"
                    aria-label="Route in Google Maps öffnen"
                  >
                    <Navigation aria-hidden="true" className="size-5" />
                    Route öffnen
                  </a>
                </div>
              </div>
              <MapConsent />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
