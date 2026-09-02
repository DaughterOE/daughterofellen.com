import { useState, useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type Img = { url: string };

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
                  src={img.url}
                  alt={`${alt} — photo ${i + 1}`}
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

      <Dialog
        open={lightboxIndex !== null}
        onOpenChange={(open) => !open && setLightboxIndex(null)}
      >
        <DialogContent className="max-w-5xl border-none bg-transparent p-0 shadow-none">
          {lightboxIndex !== null && (
            <Carousel
              plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
              opts={{ startIndex: lightboxIndex, loop: true }}
              className="w-full"
            >
              <CarouselContent>
                {images.map((img, i) => (
                  <CarouselItem key={i}>
                    <img
                      src={img.url}
                      alt={`${alt} — photo ${i + 1}`}
                      className="mx-auto max-h-[85vh] w-auto rounded-lg object-contain"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GallerySlider;
