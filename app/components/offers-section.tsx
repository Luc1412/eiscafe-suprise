"use client";

import Image from "next/image";
import { useCallback, useId, useState } from "react";
import {
  ArrowRight,
  CakeSlice,
  Coffee,
  IceCreamBowl,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import {
  ImageNavigationButtons,
  useImageDialogControls,
  useImageNavigation,
} from "./image-navigation";

type OfferImage = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

type Offer = {
  title: string;
  text: string;
  detail: string;
  icon: LucideIcon;
  images?: OfferImage[];
};

const specialOccasionImages: OfferImage[] = [
  {
    src: "/images/offers/besondere-anlaesse/besondere-anlaesse-01.webp",
    alt: "Festlich gedeckte Kaffeetafel im Eis-Café Surprise",
    title: "Festlich gedeckte Kaffeetafel",
    description:
      "Eine vorbereitete Tafel mit Blumen, Kerzen und kleinen herzhaften Häppchen für eine gemeinsame Runde.",
  },
  {
    src: "/images/offers/besondere-anlaesse/besondere-anlaesse-02.webp",
    alt: "Gedeckter Tisch für eine Feier im Eis-Café Surprise",
    title: "Tischdekoration im Café",
    description:
      "Eingedeckte Plätze mit Servietten, Gläsern und Dekoration für kleine Feiern im Café.",
  },
  {
    src: "/images/offers/besondere-anlaesse/besondere-anlaesse-03.webp",
    alt: "Vorbereitete Kaffeetafel für einen besonderen Anlass",
    title: "Vorbereitete Plätze",
    description:
      "Liebevoll eingedeckte Tische schaffen einen persönlichen Rahmen für Familie und Gäste.",
  },
  {
    src: "/images/offers/besondere-anlaesse/besondere-anlaesse-04.webp",
    alt: "Platte mit herzhaften Häppchen für eine Feier",
    title: "Herzhafte Häppchen",
    description:
      "Kleine belegte Häppchen ergänzen Kaffee, Kuchen und Torten bei ausgewählten Anlässen.",
  },
  {
    src: "/images/offers/besondere-anlaesse/besondere-anlaesse-05.webp",
    alt: "Feierlich gedeckter Tisch im Kaffeehausstil",
    title: "Feier im Kaffeehausstil",
    description:
      "Klassische Caféatmosphäre mit gedeckten Tischen für ruhige, persönliche Zusammenkünfte.",
  },
  {
    src: "/images/offers/besondere-anlaesse/besondere-anlaesse-06.webp",
    alt: "Gedeckte Tafel für eine kleine Veranstaltung",
    title: "Kleine Veranstaltung",
    description:
      "Ein kompakter Rahmen für Geburtstage, Familienfeiern oder ein gemeinsames Gedenken.",
  },
  {
    src: "/images/offers/besondere-anlaesse/besondere-anlaesse-07.webp",
    alt: "Anlassgedeck mit Blumen und Getränken",
    title: "Details am Platz",
    description:
      "Blumen, Getränke und gedeckte Plätze werden passend zur Runde vorbereitet.",
  },
  {
    src: "/images/offers/besondere-anlaesse/besondere-anlaesse-08.webp",
    alt: "Gedeckter Cafébereich für besondere Anlässe",
    title: "Persönlicher Cafébereich",
    description:
      "Der Cafébereich lässt sich für kleinere Gruppen gemütlich und übersichtlich herrichten.",
  },
  {
    src: "/images/offers/besondere-anlaesse/besondere-anlaesse-09.webp",
    alt: "Gedeckter Platz mit kleinen Häppchen im Eis-Café Surprise",
    title: "Häppchen am Platz",
    description:
      "Auf Wunsch ergänzen kleine herzhafte Teller die gedeckte Kaffeetafel.",
  },
];

const individualCakeImages: OfferImage[] = [
  {
    src: "/images/offers/individuelle-torten/individuelle-torten-10.webp",
    alt: "Fototorte mit König-der-Löwen-Motiv",
    title: "Fototorte mit Motiv",
    description:
      "Ein persönliches Bildmotiv wird mit farbiger Verzierung und passendem Rand kombiniert.",
  },
  {
    src: "/images/offers/individuelle-torten/individuelle-torten-11.webp",
    alt: "Fototorte mit Eiskönigin-Motiv und Name",
    title: "Fototorte mit Name",
    description:
      "Fotomotiv, Name und Randdekoration machen die Torte zu einer persönlichen Überraschung.",
  },
  {
    src: "/images/offers/individuelle-torten/individuelle-torten-14.webp",
    alt: "Fototorte mit mehreren Familienbildern",
    title: "Bildertorte mit Collage",
    description:
      "Mehrere Bilder und persönliche Texte können zu einer großen Fototorte kombiniert werden.",
  },
  {
    src: "/images/offers/individuelle-torten/individuelle-torten-02.webp",
    alt: "Geburtstagstorte zum 60. Geburtstag mit Rosen",
    title: "Geburtstagstorte zum 60.",
    description:
      "Zahlen, Rosen und farbige Dekoration werden passend zum Geburtstag abgestimmt.",
  },
  {
    src: "/images/offers/individuelle-torten/individuelle-torten-13.webp",
    alt: "Geburtstagstorte mit Zahl Drei und Beeren",
    title: "Geburtstagstorte mit Zahl",
    description:
      "Zahlen, kleine Sahnetupfen und Früchte setzen das Alter sichtbar in Szene.",
  },
  {
    src: "/images/offers/individuelle-torten/individuelle-torten-15.webp",
    alt: "Zweistöckige Geburtstagstorte mit Beeren und Schrift",
    title: "Zweistöckige Geburtstagstorte",
    description:
      "Zwei Lagen, Beeren und Schrift machen die Geburtstagstorte festlich und persönlich.",
  },
  {
    src: "/images/offers/individuelle-torten/individuelle-torten-01.webp",
    alt: "Herztorte mit Rosen, Ringen und Datum",
    title: "Herztorte zum Anlass",
    description:
      "Herzform, Rosen, Ringe und Datum eignen sich für Hochzeitstage und persönliche Jubiläen.",
  },
  {
    src: "/images/offers/individuelle-torten/individuelle-torten-09.webp",
    alt: "Mehrstöckige Hochzeitstorte mit Beeren",
    title: "Hochzeitstorte mit Beeren",
    description:
      "Früchte, Creme und eine höhere Form ergeben eine festliche Hochzeitstorte.",
  },
  {
    src: "/images/offers/individuelle-torten/individuelle-torten-03.webp",
    alt: "Zweistufige Hochzeitstorte mit Rosen",
    title: "Zweistufige Hochzeitstorte",
    description:
      "Mehrstöckige Torten mit Rosen und Cremeverzierung schaffen einen festlichen Mittelpunkt.",
  },
  {
    src: "/images/offers/individuelle-torten/individuelle-torten-04.webp",
    alt: "Zweistöckige Hochzeitstorte mit frischen Blumen",
    title: "Hochzeitstorte mit frischen Blumen",
    description:
      "Zwei Lagen, frische Blumen und feine Oberflächenstruktur ergeben eine festliche Hochzeitstorte.",
  },
  {
    src: "/images/offers/individuelle-torten/individuelle-torten-12.webp",
    alt: "Festliche Torte mit Drip-Dekor und Rosen",
    title: "Festliche Rosentorte",
    description:
      "Drip-Dekor, Rosen und Früchte passen zu Hochzeiten, Jubiläen und festlichen Feiern.",
  },
  {
    src: "/images/offers/individuelle-torten/individuelle-torten-05.webp",
    alt: "Schokoladige Einschulungstorte mit Namen",
    title: "Einschulungstorte mit Name",
    description:
      "Name, Kerzen und bunte Dekoration machen die Torte passend zum Schulstart.",
  },
  {
    src: "/images/offers/individuelle-torten/individuelle-torten-06.webp",
    alt: "Einschulungstorte mit Name, Stift und bunter Dekoration",
    title: "Einschulungstorte mit Stift",
    description:
      "Name, Stiftmotiv und bunte Dekoration machen die Torte passend zum Schulstart.",
  },
  {
    src: "/images/offers/individuelle-torten/individuelle-torten-07.webp",
    alt: "Einschulungstorte mit ABC, Stift und Erdbeeren",
    title: "Einschulungstorte mit ABC",
    description:
      "ABC, Stift und frische Dekoration greifen den Schulanfang spielerisch auf.",
  },
  {
    src: "/images/offers/individuelle-torten/individuelle-torten-08.webp",
    alt: "Einschulungstorte mit Unterwasser-Motiv, Zahlen und Stiften",
    title: "Einschulungstorte mit Motiv",
    description:
      "Motivbild, Zahlen, Buchstaben und Stifte verbinden Einschulung und Lieblingsthema.",
  },
];

const offers: Offer[] = [
  {
    title: "Torten & Kuchen",
    text: "Frische Kuchen und hausgemachte Torten aus eigener Herstellung.",
    detail:
      "Ob ein Stück Kuchen zum Kaffee oder eine Torte für die Kaffeetafel: Unsere Backwaren entstehen mit sorgfältig ausgewählten Zutaten und viel Erfahrung im Haus.",
    icon: CakeSlice,
  },
  {
    title: "Hausgemachtes Eis",
    text: "Klassische und saisonale Eisspezialitäten aus eigener Herstellung.",
    detail:
      "Unser Eis wird im Café selbst hergestellt. Neben beliebten Klassikern gibt es saisonale Sorten und Eisbecher für kleine Pausen oder den Besuch mit Familie und Freunden.",
    icon: IceCreamBowl,
  },
  {
    title: "Kaffee & Getränke",
    text: "Kaffeehausmomente mit Heißgetränken und kleinen Angeboten für zwischendurch.",
    detail:
      "In unserer Kaffeehausatmosphäre servieren wir Kaffee, Heißgetränke und passende Begleiter für eine ruhige Pause an der Langhansstraße.",
    icon: Coffee,
  },
  {
    title: "Individuelle Torten",
    text: "Fototorten, Geburtstagstorten, Hochzeitstorten und Einschulungstorten nach Wunsch.",
    detail:
      "Für persönliche Anlässe fertigen wir individuelle Torten nach Absprache. Besonders gefragt sind Fototorten, Bildertorten und festliche Torten für Familienfeiern.",
    icon: CakeSlice,
    images: individualCakeImages,
  },
  {
    title: "Besondere Anlässe",
    text: "Geburtstage, Hochzeiten, Familienfeiern und Trauerfeiern bis 25 Personen.",
    detail:
      "Für kleine Runden bis etwa 25 Personen bieten wir einen gemütlichen Rahmen im Café. Sprechen Sie uns für Geburtstage, Hochzeiten, Familienfeiern oder Trauerfeiern gern an.",
    icon: Sparkles,
    images: specialOccasionImages,
  },
];

export function OffersSection() {
  const [selectedOfferIndex, setSelectedOfferIndex] = useState<number | null>(
    null,
  );
  const modalTitleId = useId();
  const modalDescriptionId = useId();

  const selectedOffer =
    selectedOfferIndex === null ? null : (offers[selectedOfferIndex] ?? null);
  const selectedOfferImages = selectedOffer?.images ?? [];
  const selectedOfferHasImages = selectedOfferImages.length > 0;
  const SelectedOfferIcon = selectedOffer?.icon;
  const {
    clearSelection: clearImageSelection,
    selectedIndex: selectedImageIndex,
    selectedItem: selectedImage,
    selectIndex: selectImage,
    showNext,
    showPrevious,
  } = useImageNavigation(selectedOfferImages);

  function openOffer(index: number) {
    setSelectedOfferIndex(index);
    if ((offers[index]?.images?.length ?? 0) > 0) {
      selectImage(0);
    } else {
      clearImageSelection();
    }
  }

  const closeOffer = useCallback(
    function closeOffer() {
      setSelectedOfferIndex(null);
      clearImageSelection();
    },
    [clearImageSelection],
  );

  useImageDialogControls({
    isOpen: Boolean(selectedOffer),
    lockBodyScroll: true,
    onClose: closeOffer,
    onNext: showNext,
    onPrevious: showPrevious,
  });

  return (
    <section id="angebote" className="scroll-mt-20 bg-white/62 py-16 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="section-kicker">Unsere Angebote</p>
          <h2 className="mt-3 hyphens-auto wrap-break-word text-balance font-(family-name:--font-display) text-4xl leading-[1.04] font-bold text-[#201513] sm:text-5xl">
            Torten, Eis und kleine Überraschungen.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#4d3a35]">
            Besonderes Augenmerk gilt unseren Fototorten und Bildertorten, die
            für Hochzeit, Einschulung, runde Geburtstage und andere Anlässe eine
            persönliche Überraschung darstellen.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            const hasGallery = (offer.images?.length ?? 0) > 0;

            return (
              <button
                key={offer.title}
                type="button"
                onClick={() => openOffer(index)}
                className="group flex w-full cursor-pointer flex-col rounded-lg border border-[#efd7dc] bg-[#fffafc] p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#AE3460]/55 hover:bg-white hover:shadow-lg focus-visible:-translate-y-1 sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
                aria-label={`${offer.title}: ${hasGallery ? "Details und Galerie" : "Details"} öffnen`}
              >
                <span className="mb-5 flex items-start justify-between gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#F6E6EB] text-[#AE3460] transition group-hover:bg-[#AE3460] group-hover:text-white">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#F6E6EB] px-3 py-1 text-xs font-black text-[#AE3460] transition group-hover:bg-[#201513] group-hover:text-white">
                    Details
                    <ArrowRight
                      aria-hidden="true"
                      className="size-3.5 transition group-hover:translate-x-0.5"
                    />
                  </span>
                </span>
                <span className="font-(family-name:--font-display) text-2xl font-bold text-[#201513]">
                  {offer.title}
                </span>
                <span className="mt-3 leading-7 text-[#5c4944]">
                  {offer.text}
                </span>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#AE3460]">
                  {hasGallery
                    ? "Galerie und Beschreibung ansehen"
                    : "Details ansehen"}
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition group-hover:translate-x-1"
                  />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {selectedOffer && !selectedOfferHasImages && SelectedOfferIcon && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={modalTitleId}
          aria-describedby={modalDescriptionId}
          className="fixed inset-0 z-70 grid place-items-center bg-[#201513]/82 p-3 backdrop-blur-sm sm:p-5"
          onClick={closeOffer}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-lg border border-white/25 bg-[#fffafc] p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeOffer}
              className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-white text-[#201513] shadow-sm ring-1 ring-[#efd7dc] transition hover:bg-[#F6E6EB]"
              aria-label="Details schließen"
            >
              <X aria-hidden="true" className="size-5" />
            </button>

            <div className="grid size-14 place-items-center rounded-full bg-[#F6E6EB] text-[#AE3460]">
              <SelectedOfferIcon aria-hidden="true" className="size-7" />
            </div>
            <div className="mt-6 pr-10">
              <p className="section-kicker">Angebot im Detail</p>
              <h2
                id={modalTitleId}
                className="mt-3 font-(family-name:--font-display) text-4xl leading-tight font-bold text-[#201513] sm:text-5xl"
              >
                {selectedOffer.title}
              </h2>
              <p
                id={modalDescriptionId}
                className="mt-5 text-lg leading-8 text-[#4d3a35]"
              >
                {selectedOffer.detail}
              </p>
            </div>
          </div>
        </div>
      )}

      {selectedOffer && selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={modalTitleId}
          aria-describedby={modalDescriptionId}
          className="fixed inset-0 z-70 grid place-items-center bg-[#201513]/82 p-3 backdrop-blur-sm sm:p-5"
          onClick={closeOffer}
        >
          <div
            className="relative grid h-[94svh] w-full max-w-352 grid-rows-[42svh_minmax(0,1fr)] overflow-hidden rounded-lg border border-white/25 bg-[#fffafc] shadow-2xl sm:grid-rows-[50svh_minmax(0,1fr)] lg:h-auto lg:max-h-[94svh] lg:grid-cols-[1.75fr_0.75fr] lg:grid-rows-none"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeOffer}
              className="absolute right-3 top-3 z-20 grid size-10 place-items-center rounded-full bg-white text-[#201513] shadow-sm ring-1 ring-[#efd7dc] transition hover:bg-[#F6E6EB]"
              aria-label="Details schließen"
            >
              <X aria-hidden="true" className="size-5" />
            </button>

            <div className="relative min-h-0 bg-[#201513] lg:min-h-[82svh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="(min-width: 1024px) 960px, 94vw"
                className="object-contain"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#201513]/90 to-transparent p-4 pr-16 text-white sm:p-7">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-white/80 sm:text-sm">
                  Galerie
                </p>
                <h3 className="mt-1 font-(family-name:--font-display) text-2xl leading-tight font-bold sm:mt-2 sm:text-3xl">
                  {selectedImage.title}
                </h3>
                <p className="mt-2 hidden max-w-2xl leading-7 text-white/90 sm:block">
                  {selectedImage.description}
                </p>
              </div>
              <ImageNavigationButtons
                onNext={showNext}
                onPrevious={showPrevious}
              />
            </div>

            <div className="flex min-h-0 flex-col overflow-y-auto p-4 sm:p-6 lg:max-h-[94svh] lg:p-7">
              <div className="order-1 shrink-0 lg:order-2 lg:mt-7">
                <div className="flex items-end justify-between gap-4">
                  <h3 className="text-sm font-black uppercase tracking-[0.14em] text-[#AE3460]">
                    Bilder
                  </h3>
                  <p className="text-sm font-bold text-[#5c4944]">
                    {(selectedImageIndex ?? 0) + 1} /{" "}
                    {selectedOfferImages.length}
                  </p>
                </div>

                <div className="-mx-4 mt-3 flex h-24 items-center gap-2 overflow-x-auto overflow-y-hidden px-4 sm:-mx-6 sm:h-28 sm:px-6 lg:mx-0 lg:grid lg:h-auto lg:grid-cols-3 lg:items-stretch lg:overflow-visible lg:px-0">
                  {selectedOfferImages.map((image, imageIndex) => (
                    <button
                      key={`${selectedOffer.title}-${image.src}-${image.title}`}
                      type="button"
                      onClick={() => selectImage(imageIndex)}
                      className="group relative size-20 shrink-0 overflow-hidden rounded-md border-2 border-white bg-[#F6E6EB] text-left shadow-sm transition hover:border-[#AE3460]/60 data-[active=true]:border-[#AE3460] sm:size-24 lg:size-auto lg:aspect-square"
                      data-active={selectedImageIndex === imageIndex}
                      aria-pressed={selectedImageIndex === imageIndex}
                      aria-label={`${image.title} anzeigen`}
                    >
                      <Image
                        src={image.src}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 96px, 30vw"
                        className="object-cover transition duration-200 group-hover:scale-105"
                      />
                      <span
                        className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#201513]/80 to-transparent p-2 text-xs font-black leading-tight text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100"
                        aria-hidden="true"
                      >
                        {image.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="order-2 mt-5 pr-10 lg:order-1 lg:mt-0">
                <p className="section-kicker">Angebot im Detail</p>
                <h2
                  id={modalTitleId}
                  className="mt-2 font-(family-name:--font-display) text-3xl leading-tight font-bold text-[#201513] sm:mt-3 sm:text-4xl"
                >
                  {selectedOffer.title}
                </h2>
                <p
                  id={modalDescriptionId}
                  className="mt-3 leading-7 text-[#4d3a35] sm:mt-4 sm:text-lg sm:leading-8"
                >
                  {selectedOffer.detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
