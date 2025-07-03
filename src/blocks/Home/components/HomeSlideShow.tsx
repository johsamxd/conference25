import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const PICTURES = [
  "/images/home/1.PNG",
  "/images/home/2.PNG",
  "/images/home/3.PNG",
  "/images/home/4.PNG",
  "/images/home/5.PNG",
  "/images/home/6.PNG",
  "/images/home/7.PNG",
  "/images/home/8.PNG",
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
