"use client";

import Image from "next/image";
import { type TouchEvent, useEffect, useMemo, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  featured?: boolean;
  tags?: string[];
};

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const onChange = () => setMatches(mediaQueryList.matches);

    onChange();
    mediaQueryList.addEventListener("change", onChange);
    return () => mediaQueryList.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

function wrapIndex(index: number, length: number) {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
}

function uniq<T>(values: T[]) {
  return Array.from(new Set(values));
}

export function VisualDiaryGallery({ images }: { images: GalleryImage[] }) {
  const isSm = useMediaQuery("(max-width: 640px)");
  const isMd = useMediaQuery("(max-width: 1024px)");

  const categories = useMemo(() => {
    const tags = images.flatMap((image) => image.tags ?? []);
    const ordered = ["Featured", "Office", "Meetings", "Ceremony", "Field", "Portraits"];
    const unique = uniq(tags);
    const sorted = [
      ...ordered.filter((tag) => unique.includes(tag)),
      ...unique.filter((tag) => !ordered.includes(tag)).sort()
    ];
    return ["All", ...sorted];
  }, [images]);

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [zoomedImage, setZoomedImage] = useState<GalleryImage | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return images;
    return images.filter((image) => (image.tags ?? []).includes(activeCategory));
  }, [activeCategory, images]);

  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  useEffect(() => {
    if (activeIndex >= filteredImages.length) setActiveIndex(0);
  }, [activeIndex, filteredImages.length]);

  const spread = isSm ? 120 : isMd ? 170 : 230;

  const visibleOffsets = useMemo(() => {
    if (filteredImages.length <= 1) return [0];
    if (filteredImages.length === 2) return [-1, 0];
    if (filteredImages.length === 3) return [-1, 0, 1];
    return [-2, -1, 0, 1, 2];
  }, [filteredImages.length]);

  const goToIndex = (nextIndex: number) => {
    setDirection(nextIndex >= activeIndex ? 1 : -1);
    setActiveIndex(wrapIndex(nextIndex, filteredImages.length));
  };

  const goNext = () => {
    setDirection(1);
    setActiveIndex((current) => wrapIndex(current + 1, filteredImages.length));
  };

  const goPrev = () => {
    setDirection(-1);
    setActiveIndex((current) => wrapIndex(current - 1, filteredImages.length));
  };

  const closeZoom = () => setZoomedImage(null);

  const handleCardClick = (offset: number, index: number, image: GalleryImage) => {
    if (offset === 0) {
      setZoomedImage(image);
      return;
    }
    goToIndex(index);
  };

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0]?.clientX ?? null);
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const deltaX = touchStartX - touchEndX;
    setTouchStartX(null);

    if (Math.abs(deltaX) < 42 || filteredImages.length <= 1) return;
    if (deltaX > 0) goNext();
    else goPrev();
  };

  useEffect(() => {
    if (!zoomedImage) return;

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeZoom();
    };

    window.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [zoomedImage]);

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl rounded-[2.75rem] bg-gradient-to-br from-[#7f8dff]/30 via-[#6fc2ff]/15 to-[#c08cff]/30 p-[1.5px] shadow-soft">
        <div className="rounded-[2.7rem] border border-white/70 bg-white/95 px-5 py-10 backdrop-blur sm:px-10 sm:py-12 lg:px-14">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-navy/65">Gallery</p>
            <h1
              className="mt-3 text-3xl font-semibold text-navy sm:text-4xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              My Visual Diary
            </h1>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-navy/70 sm:text-base">
              See the world through my lens, adventures, emotions and stories.
            </p>
          </header>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5">
            <div className="flex max-w-full flex-wrap justify-center gap-2.5">
              {categories.map((category) => {
                const selected = category === activeCategory;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={[
                      "rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition sm:text-[11px]",
                      selected
                        ? "border-navy bg-navy text-white shadow-sm"
                        : "border-navy/20 bg-white text-navy/70 hover:border-navy/35"
                    ].join(" ")}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="rounded-full border border-navy/20 bg-white px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-navy/75 transition hover:border-navy/35 sm:text-[11px]"
              aria-pressed={showAll}
            >
              {showAll ? "View Slider" : "View More"}
            </button>
          </div>

          <div className="mt-10">
            <div
              className="relative mx-auto h-[270px] max-w-5xl touch-pan-y sm:h-[320px] lg:h-[360px]"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "ArrowLeft") goPrev();
                if (event.key === "ArrowRight") goNext();
              }}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              aria-label="Interactive gallery slider"
            >
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-white via-white/80 to-white" />

              {visibleOffsets.map((offset) => {
                const index = wrapIndex(activeIndex + offset, filteredImages.length);
                const image = filteredImages[index];
                if (!image) return null;

                const depth = Math.abs(offset);
                const directionalShift = depth === 0 ? 0 : direction * 16;
                const translateX = offset * spread + directionalShift;
                const translateY = depth * 13;
                const rotate = offset * 2.4;
                const scale = 1 - depth * 0.08;
                const opacity = 1 - depth * 0.16;
                const blur = depth === 0 ? 0 : depth * 1.8;
                const zIndex = 40 - depth;

                return (
                  <button
                    key={`${image.src}-${offset}`}
                    type="button"
                    className="absolute left-1/2 top-1/2 block w-[82%] max-w-[360px] cursor-pointer select-none rounded-[1.5rem] border border-black/10 bg-white shadow-soft outline-none transition focus-visible:ring-2 focus-visible:ring-navy/40 sm:w-[72%] sm:max-w-[430px] lg:w-[58%] lg:max-w-[490px]"
                    style={{
                      zIndex,
                      opacity,
                      filter: `blur(${blur}px)`,
                      transform: `translate(-50%, -50%) translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
                      transitionProperty: "transform, opacity, filter",
                      transitionDuration: "560ms",
                      transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)"
                    }}
                    onClick={() => handleCardClick(offset, index, image)}
                    aria-label={offset === 0 ? `Active image: ${image.alt}` : `View image: ${image.alt}`}
                  >
                    <div
                      className="relative h-[210px] overflow-hidden rounded-[1.45rem] sm:h-[250px] lg:h-[285px]"
                      style={{
                        animation: depth === 0 ? "galleryFocus 420ms ease-out" : undefined
                      }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        quality={76}
                        sizes="(max-width: 640px) 82vw, (max-width: 1024px) 60vw, 490px"
                        className="object-cover"
                        priority={offset === 0}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              {filteredImages.slice(0, 8).map((_, index) => {
                  const selected = index === wrapIndex(activeIndex, filteredImages.length);
                  return (
                    <button
                      key={`dot-${index}`}
                      type="button"
                      onClick={() => goToIndex(index)}
                      className={[
                        "h-3 w-3 rounded-full border transition",
                        selected
                          ? "border-navy/75 bg-white ring-2 ring-navy/65"
                          : "border-navy/30 bg-white hover:border-navy/50"
                      ].join(" ")}
                      aria-label={`Go to image ${index + 1}`}
                      aria-current={selected ? "true" : undefined}
                    />
                  );
                })}
            </div>

            {showAll ? (
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredImages.map((image) => (
                  <figure
                    key={`grid-${image.src}`}
                    className="group relative cursor-zoom-in overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-soft"
                    onClick={() => setZoomedImage(image)}
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 94vw, (max-width: 1024px) 45vw, 30vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-navy/10 to-transparent opacity-80" />
                      <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white">
                        <p
                          className="line-clamp-2 text-sm leading-snug sm:text-base"
                          style={{ fontFamily: "var(--font-serif)" }}
                        >
                          {image.alt}
                        </p>
                      </figcaption>
                    </div>
                  </figure>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {zoomedImage ? (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Zoomed gallery image"
          onClick={closeZoom}
        >
          <button
            type="button"
            onClick={closeZoom}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/35 bg-black/25 text-xl leading-none text-white transition hover:bg-black/45 sm:right-6 sm:top-6"
            aria-label="Close zoomed image"
          >
            ×
          </button>
          <div
            className="relative h-[80vh] w-full max-w-6xl animate-[zoomIn_260ms_ease-out]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={zoomedImage.src}
              alt={zoomedImage.alt}
              fill
              quality={82}
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      ) : null}

      <style jsx global>{`
        @keyframes galleryFocus {
          0% {
            transform: scale(0.965);
            filter: saturate(0.9) contrast(0.94);
          }
          100% {
            transform: scale(1);
            filter: saturate(1) contrast(1);
          }
        }
        @keyframes zoomIn {
          0% {
            opacity: 0;
            transform: scale(0.96);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}

