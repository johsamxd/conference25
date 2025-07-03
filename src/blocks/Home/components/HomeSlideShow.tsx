import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const PICTURES = [
  "/images/home/1.png",
  "/images/home/2.png",
  "/images/home/3.png",
  "/images/home/4.png",
  "/images/home/5.png",
  "/images/home/6.png",
  "/images/home/7.png",
  "/images/home/8.png",
];

export function HomeSlideShow() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      orientation="vertical"
      className="w-full"
    >
      <CarouselContent className="-mt-1 h-[60vh] w-full">
        {PICTURES.map((p, i) => (
          <CarouselItem key={i} className="pt-1">
            <div className="flex justify-center items-center h-full">
              <img
                src={p}
                className="rounded-lg max-w-full max-h-[70vh] object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
