import { useState, useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Img = string;

interface GallerySliderProps {
  images: Img[];
  alt: string;
}

const GallerySlider = ({ images, alt }: GallerySliderProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const autoplayPlugin = useCallback(
    () => Autoplay({ delay: 4000, stopOnInteraction: false }),
    []
  );

  return (
    <>
      <Carousel
        plugins={[autoplayPlugin()]}
        opts={{ align: "start", loop: true }}
        className="mt-10"
      >
        <CarouselContent>
          {images.map((img, i) => (
            <CarouselItem key={i} className="basis-full">
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="block aspect-[3/2] w-full overflow-hidden rounded-lg bg-muted"
              >
                <img
                  src={img}
                  alt={`${alt}, photo ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <DialogPrimitive.Root open={lightboxIndex !== null} onOpenChange={(open) => !open && setLightboxIndex(null)}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-lightbox/90" />
          <DialogPrimitive.Content className="fixed inset-0 z-50 flex items-center justify-center p-4 focus:outline-none md:p-16">
            <DialogPrimitive.Title className="sr-only">{alt}</DialogPrimitive.Title>
            {lightboxIndex !== null && (
              <div className="relative w-full max-w-6xl">
                <img src={images[lightboxIndex]} alt={`${alt}, photo ${lightboxIndex + 1} of ${images.length}`} className="mx-auto max-h-[85vh] w-auto rounded-md object-contain" />
                {images.length > 1 && <>
                  <button type="button" aria-label="Previous photo" onClick={() => setLightboxIndex((lightboxIndex - 1 + images.length) % images.length)} className="absolute left-0 top-1/2 -translate-y-1/2 rounded-md bg-lightbox/60 p-3 text-lightbox-foreground hover:bg-lightbox md:-left-14"><ChevronLeft /></button>
                  <button type="button" aria-label="Next photo" onClick={() => setLightboxIndex((lightboxIndex + 1) % images.length)} className="absolute right-0 top-1/2 -translate-y-1/2 rounded-md bg-lightbox/60 p-3 text-lightbox-foreground hover:bg-lightbox md:-right-14"><ChevronRight /></button>
                </>}
              </div>
            )}
            <DialogPrimitive.Close aria-label="Close photo" className="fixed right-4 top-4 rounded-md p-3 text-lightbox-foreground hover:bg-lightbox"><X /></DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
};

export default GallerySlider;
