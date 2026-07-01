"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type UseImageDialogControlsOptions = {
  isOpen: boolean;
  lockBodyScroll?: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

type ImageNavigationButtonsProps = {
  nextLabel?: string;
  onNext: () => void;
  onPrevious: () => void;
  previousLabel?: string;
};

export function useImageNavigation<T>(items: readonly T[]) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const itemCount = items.length;
  const selectedItem =
    selectedIndex === null || selectedIndex >= itemCount
      ? null
      : (items[selectedIndex] ?? null);

  const selectIndex = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null || itemCount === 0) {
        return currentIndex;
      }

      return (currentIndex - 1 + itemCount) % itemCount;
    });
  }, [itemCount]);

  const showNext = useCallback(() => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null || itemCount === 0) {
        return currentIndex;
      }

      return (currentIndex + 1) % itemCount;
    });
  }, [itemCount]);

  return {
    clearSelection,
    selectedIndex,
    selectedItem,
    selectIndex,
    showNext,
    showPrevious,
  };
}

export function useImageDialogControls({
  isOpen,
  lockBodyScroll = false,
  onClose,
  onNext,
  onPrevious,
}: UseImageDialogControlsOptions) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    }

    const previousOverflow = document.body.style.overflow;

    if (lockBodyScroll) {
      document.body.style.overflow = "hidden";
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
      if (lockBodyScroll) {
        document.body.style.overflow = previousOverflow;
      }

      window.removeEventListener("keydown", handleKeydown);
    };
  }, [isOpen, lockBodyScroll, onClose, onNext, onPrevious]);
}

export function ImageNavigationButtons({
  nextLabel = "Nächstes Bild anzeigen",
  onNext,
  onPrevious,
  previousLabel = "Vorheriges Bild anzeigen",
}: ImageNavigationButtonsProps) {
  const buttonClassName =
    "absolute top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white text-[#201513] shadow-sm transition hover:bg-[#F6E6EB]";

  return (
    <>
      <button
        type="button"
        onClick={onPrevious}
        className={`${buttonClassName} left-3`}
        aria-label={previousLabel}
      >
        <ChevronLeft aria-hidden="true" className="size-6" />
      </button>
      <button
        type="button"
        onClick={onNext}
        className={`${buttonClassName} right-3`}
        aria-label={nextLabel}
      >
        <ChevronRight aria-hidden="true" className="size-6" />
      </button>
    </>
  );
}
