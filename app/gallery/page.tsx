import Image from "next/image";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { galleryImages } from "@/lib/site-data";

export default function GalleryPage() {
  return (
    <Container className="py-20">
      <SectionHeading eyebrow="Gallery" title="An official image archive documenting office, ceremony, leadership, and public presence." />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {galleryImages.map((image, index) => (
          <figure key={image.src} className={`group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft ${index === 0 ? "sm:col-span-2 xl:row-span-2" : ""}`}>
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy/70 via-navy/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={900}
              quality={72}
              sizes={index === 0 ? "(max-width: 640px) 92vw, (max-width: 1280px) 92vw, 62vw" : "(max-width: 640px) 92vw, (max-width: 1280px) 46vw, 31vw"}
              className={`w-full object-cover transition duration-700 group-hover:scale-105 group-hover:rotate-[0.35deg] ${index === 0 ? "h-[32rem]" : "h-80"}`}
            />
            <figcaption className="absolute inset-x-0 bottom-0 z-20 translate-y-6 p-5 text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-xs uppercase tracking-[0.22em] text-white/70">Official Archive</p>
              <p className="mt-2 text-lg" style={{ fontFamily: "var(--font-serif)" }}>
                {image.alt}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Container>
  );
}
