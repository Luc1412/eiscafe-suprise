"use client";

import Image from "next/image";
import { X } from "lucide-react";
import {
  ImageNavigationButtons,
  useImageDialogControls,
  useImageNavigation,
} from "./image-navigation";

type GalleryImage = {
  src: string;
  alt: string;
};

type ImageGalleryProps = {
  images: GalleryImage[];
};

export function ImageGallery({ images }: ImageGalleryProps) {
  const {
    clearSelection,
    selectedItem: selectedImage,
    selectIndex,
    showNext,
    showPrevious,
  } = useImageNavigation(images);

  useImageDialogControls({
    isOpen: Boolean(selectedImage),
    onClose: clearSelection,
    onNext: showNext,
    onPrevious: showPrevious,
  });

  return (
    <>
      <section
        className="section-shell py-5"
        aria-label="Bilder aus dem Eis-Café Surprise"
      >
        <ul className="grid grid-cols-5 gap-2 sm:gap-4">
          {images.map((image, index) => (
            <li
              key={image.src}
              className="relative aspect-square overflow-hidden rounded-[0.45rem] border-2 border-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => selectIndex(index)}
                className="relative block h-full w-full cursor-zoom-in overflow-hidden"
                aria-label={`${image.alt} vergrößern`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="eager"
                  sizes="(min-width: 1180px) 220px, 20vw"
                  className="object-cover transition duration-300 hover:scale-105"
                />
              </button>
            </li>
          ))}
        </ul>
      </section>

      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          className="fixed inset-0 z-70 grid place-items-center bg-[#201513]/88 p-4"
          onClick={clearSelection}
        >
          <div
            className="relative h-[min(76svh,720px)] w-full max-w-5xl overflow-hidden rounded-lg border border-white/20 bg-[#201513] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="(min-width: 1024px) 960px, 92vw"
              className="object-contain"
              priority
            />
            <ImageNavigationButtons
              onNext={showNext}
              onPrevious={showPrevious}
            />
            <button
              type="button"
              onClick={clearSelection}
              className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-white text-[#201513] shadow-sm transition hover:bg-[#F6E6EB]"
              aria-label="Bild schließen"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
