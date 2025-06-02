import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const PARTNERS = [
  {
    image: "/images/partners/etp_gpb.png",
  },
  {
    image: "/images/partners/fabrikant.png",
  },
  {
    image: "/images/partners/roseltorg.jpg",
  },
  {
    image: "/images/partners/rts_tender.svg",
  },
  {
    image: "/images/partners/tek_torg.svg",
  },
];

export function Partners() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="flex justify-between items-center mt-10">
        {PARTNERS?.map((p, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
            <div className="flex justify-center h-[10vh]">
              <img src={p.image} className="h-full" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
