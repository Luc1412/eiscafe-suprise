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
  images: OfferImage[];
};

const offers: Offer[] = [
  {
    title: "Torten & Kuchen",
    text: "Frische Kuchen und hausgemachte Torten aus eigener Herstellung.",
    detail:
      "Ob ein Stück Kuchen zum Kaffee oder eine Torte für die Kaffeetafel: Unsere Backwaren entstehen mit sorgfältig ausgewählten Zutaten und viel Erfahrung im Haus.",
    icon: CakeSlice,
    images: [
      {
        src: "/images/carousel/eiscafe-carousel_2.webp",
        alt: "Torten und Eis im Eis-Café Surprise",
        title: "Hausgemachte Kuchenauswahl",
        description:
          "Frische Kuchen und Torten für die gemütliche Kaffeezeit im Café oder zum Mitnehmen.",
      },
      {
        src: "/images/carousel/eiscafe-carousel_0.webp",
        alt: "Klassische Kuchenauslage im Eis-Café Surprise",
        title: "Klassische Auslage",
        description:
          "Die Auswahl wechselt je nach Saison, Anlass und handwerklicher Vorbereitung.",
      },
      {
        src: "/images/carousel/eiscafe-carousel_4.webp",
        alt: "Hausgemachte Spezialitäten im Eis-Café Surprise",
        title: "Süße Spezialitäten",
        description:
          "Von vertrauten Klassikern bis zu kleinen Überraschungen aus der hauseigenen Herstellung.",
      },
    ],
  },
  {
    title: "Hausgemachtes Eis",
    text: "Klassische und saisonale Eisspezialitäten aus eigener Herstellung.",
    detail:
      "Unser Eis wird im Café selbst hergestellt. Neben beliebten Klassikern gibt es saisonale Sorten und Eisbecher für kleine Pausen oder den Besuch mit Familie und Freunden.",
    icon: IceCreamBowl,
    images: [
      {
        src: "/images/carousel/eiscafe-carousel_2.webp",
        alt: "Eisspezialitäten und Torten im Eis-Café Surprise",
        title: "Eis aus eigener Herstellung",
        description:
          "Cremige Sorten, Fruchteis und saisonale Ideen direkt aus der hauseigenen Produktion.",
      },
      {
        src: "/images/carousel/eiscafe-carousel_4.webp",
        alt: "Hausgemachte Eiscafé-Spezialitäten",
        title: "Eisbecher und Extras",
        description:
          "Für den spontanen Besuch, den Sonntagnachmittag oder als süßer Abschluss.",
      },
      {
        src: "/images/carousel/eiscafe-carousel_1.webp",
        alt: "Innenansicht des Eis-Cafés Surprise",
        title: "Genießen im Café",
        description:
          "Eis und Kaffeehausatmosphäre gehören bei uns seit vielen Jahren zusammen.",
      },
    ],
  },
  {
    title: "Kaffee & Getränke",
    text: "Kaffeehausmomente mit Heißgetränken und kleinen Angeboten für zwischendurch.",
    detail:
      "In unserer Kaffeehausatmosphäre servieren wir Kaffee, Heißgetränke und passende Begleiter für eine ruhige Pause an der Langhansstraße.",
    icon: Coffee,
    images: [
      {
        src: "/images/carousel/eiscafe-carousel_3.webp",
        alt: "Kaffeehausatmosphäre im Eis-Café Surprise",
        title: "Kaffeehausgefühl",
        description:
          "Ein Platz für Gespräche, Pausen und süße Begleitung im Stil eines Wiener Cafés.",
      },
      {
        src: "/images/carousel/eiscafe-carousel_1.webp",
        alt: "Gemütliche Innenansicht des Eis-Cafés Surprise",
        title: "Gemütliche Plätze",
        description:
          "Warme Atmosphäre für Gäste aller Altersgruppen mitten in Berlin-Weißensee.",
      },
      {
        src: "/images/carousel/eiscafe-carousel_0.webp",
        alt: "Kuchenauslage im Eis-Café Surprise",
        title: "Dazu ein Stück Kuchen",
        description:
          "Kaffee und hausgemachte Kuchen verbinden sich zu einem klassischen Cafébesuch.",
      },
    ],
  },
  {
    title: "Individuelle Torten",
    text: "Fototorten, Geburtstagstorten, Hochzeitstorten und Einschulungstorten nach Wunsch.",
    detail:
      "Für persönliche Anlässe fertigen wir individuelle Torten nach Absprache. Besonders gefragt sind Fototorten, Bildertorten und festliche Torten für Familienfeiern.",
    icon: CakeSlice,
    images: [
      {
        src: "/images/carousel/eiscafe-carousel_4.webp",
        alt: "Hausgemachte Spezialitäten und Torten im Eis-Café Surprise",
        title: "Torten nach Wunsch",
        description:
          "Für Geburtstage, Hochzeiten, Einschulungen und persönliche Überraschungen.",
      },
      {
        src: "/images/carousel/eiscafe-carousel_2.webp",
        alt: "Torten und Eis im Eis-Café Surprise",
        title: "Fototorten und Bildertorten",
        description:
          "Persönliche Motive machen die Torte zu einem individuellen Mittelpunkt.",
      },
      {
        src: "/images/carousel/eiscafe-carousel_0.webp",
        alt: "Klassische Kuchenauslage im Eis-Café Surprise",
        title: "Vorbestellung empfohlen",
        description:
          "Wir stimmen Größe, Anlass und Gestaltung gern direkt mit Ihnen ab.",
      },
    ],
  },
  {
    title: "Besondere Anlässe",
    text: "Geburtstage, Hochzeiten, Familienfeiern und Trauerfeiern bis 25 Personen.",
    detail:
      "Für kleine Runden bis etwa 25 Personen bieten wir einen gemütlichen Rahmen im Café. Sprechen Sie uns für Geburtstage, Hochzeiten, Familienfeiern oder Trauerfeiern gern an.",
    icon: Sparkles,
    images: [
      {
        src: "/images/carousel/eiscafe-carousel_1.webp",
        alt: "Innenansicht des Eis-Cafés Surprise",
        title: "Feiern im Café",
        description:
          "Ein persönlicher Rahmen für kleinere Gruppen in vertrauter Kaffeehausatmosphäre.",
      },
      {
        src: "/images/carousel/eiscafe-carousel_3.webp",
        alt: "Kaffeehausatmosphäre im Eis-Café Surprise",
        title: "Ruhige Atmosphäre",
        description:
          "Geeignet für Familienfeiern, Geburtstage und gemeinsame Kaffeetafeln.",
      },
      {
        src: "/images/carousel/eiscafe-carousel_4.webp",
        alt: "Hausgemachte Spezialitäten im Eis-Café Surprise",
        title: "Süße Begleitung",
        description:
          "Torten, Kuchen und Getränke lassen sich passend zum Anlass abstimmen.",
      },
    ],
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
  const {
    clearSelection: clearImageSelection,
    selectedIndex: selectedImageIndex,
    selectedItem: selectedImage,
    selectIndex: selectImage,
    showNext,
    showPrevious,
  } = useImageNavigation(selectedOffer?.images ?? []);

  function openOffer(index: number) {
    setSelectedOfferIndex(index);
    selectImage(0);
  }

  const closeOffer = useCallback(
    function closeOffer() {
      setSelectedOfferIndex(null);
      clearImageSelection();
    },
    [clearImageSelection],
  );

  useImageDialogControls({
    isOpen: Boolean(selectedOffer && selectedImage),
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

            return (
              <button
                key={offer.title}
                type="button"
                onClick={() => openOffer(index)}
                className="group flex w-full cursor-pointer flex-col rounded-lg border border-[#efd7dc] bg-[#fffafc] p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#AE3460]/55 hover:bg-white hover:shadow-lg focus-visible:-translate-y-1 sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
                aria-label={`${offer.title}: Details und Galerie öffnen`}
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
                  Galerie und Beschreibung ansehen
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
            className="relative grid max-h-[92svh] w-full max-w-6xl overflow-y-auto rounded-lg border border-white/25 bg-[#fffafc] shadow-2xl lg:grid-cols-[1.12fr_0.88fr] lg:overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-75 bg-[#201513] sm:min-h-105 lg:min-h-155">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="(min-width: 1024px) 640px, 94vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#201513]/88 to-transparent p-5 text-white sm:p-7">
                <p className="text-sm font-black uppercase tracking-[0.14em] text-white/80">
                  Galerie
                </p>
                <h3 className="mt-2 font-(family-name:--font-display) text-3xl font-bold leading-tight">
                  {selectedImage.title}
                </h3>
                <p className="mt-2 max-w-2xl leading-7 text-white/90">
                  {selectedImage.description}
                </p>
              </div>
              <ImageNavigationButtons
                onNext={showNext}
                onPrevious={showPrevious}
              />
            </div>

            <div className="flex min-h-0 flex-col overflow-y-auto p-5 sm:p-7">
              <button
                type="button"
                onClick={closeOffer}
                className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-white text-[#201513] shadow-sm ring-1 ring-[#efd7dc] transition hover:bg-[#F6E6EB]"
                aria-label="Details schließen"
              >
                <X aria-hidden="true" className="size-5" />
              </button>

              <div className="pr-10">
                <p className="section-kicker">Angebot im Detail</p>
                <h2
                  id={modalTitleId}
                  className="mt-3 font-(family-name:--font-display) text-4xl font-bold leading-tight text-[#201513]"
                >
                  {selectedOffer.title}
                </h2>
                <p
                  id={modalDescriptionId}
                  className="mt-4 text-lg leading-8 text-[#4d3a35]"
                >
                  {selectedOffer.detail}
                </p>
              </div>

              <div className="mt-7 grid gap-3">
                {selectedOffer.images.map((image, imageIndex) => (
                  <button
                    key={`${selectedOffer.title}-${image.src}-${image.title}`}
                    type="button"
                    onClick={() => selectImage(imageIndex)}
                    className="grid grid-cols-[5.75rem_1fr] gap-3 rounded-lg border border-[#efd7dc] bg-white p-2 text-left transition hover:border-[#AE3460]/60 hover:bg-[#fff6f8] data-[active=true]:border-[#AE3460] data-[active=true]:bg-[#F6E6EB]"
                    data-active={selectedImageIndex === imageIndex}
                    aria-pressed={selectedImageIndex === imageIndex}
                  >
                    <span className="relative aspect-4/3 overflow-hidden rounded-md bg-[#F6E6EB]">
                      <Image
                        src={image.src}
                        alt=""
                        fill
                        sizes="92px"
                        className="object-cover"
                      />
                    </span>
                    <span className="self-center">
                      <span className="block text-sm font-black text-[#201513]">
                        {image.title}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-[#5c4944]">
                        {image.description}
                      </span>
                    </span>
                  </button>
                ))}
              </div>

              <a
                href="tel:+49309251265"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#AE3460] px-5 py-3 text-sm font-black text-white transition hover:bg-[#8f294e]"
              >
                Kategorie telefonisch anfragen
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
