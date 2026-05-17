"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { useState } from "react";

const mapUrl =
  "https://www.google.com/maps?q=Eiscaf%C3%A9%20Surprise%2C%20Langhansstr.%20136%2C%2013086%20Berlin&z=15&hl=de&output=embed";

export function MapConsent() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  if (isMapLoaded) {
    return (
      <div className="self-start overflow-hidden rounded-lg border-4 border-white bg-white shadow-sm">
        <iframe
          title="Karte zum Eis-Café Surprise"
          src={mapUrl}
          className="block h-105 w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div className="self-start rounded-lg border-4 border-white bg-white p-6 shadow-sm">
      <div className="grid min-h-105 place-items-center rounded bg-[#fffafc] p-6 text-center">
        <div className="max-w-md">
          <div className="mx-auto mb-5 grid size-12 place-items-center rounded-full bg-[#F6E6EB] text-[#AE3460]">
            <MapPin aria-hidden="true" className="size-6" />
          </div>
          <h3 className="font-display text-2xl font-bold text-[#201513]">
            Google Maps laden?
          </h3>
          <p className="mt-4 leading-7 text-[#4d3a35]">
            Die Karte wird erst nach Ihrer Zustimmung geladen. Dabei können
            personenbezogene Daten an Google übertragen werden.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setIsMapLoaded(true)}
              className="inline-flex items-center gap-2 rounded-full bg-[#201513] px-5 py-3 text-sm font-black text-white transition hover:bg-[#AE3460]"
            >
              Karte laden
            </button>
            <Link
              href="/datenschutz"
              className="inline-flex items-center rounded-full border border-[#AE3460]/30 px-5 py-3 text-sm font-black text-[#AE3460] transition hover:border-[#AE3460] hover:text-[#201513]"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
