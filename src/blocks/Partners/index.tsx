import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";

const PARTNERS = [
  {
    image: "/images/partners/fabrikant.png",
    link: "https://fabrikant.ru/",
  },
  {
    image: "/images/partners/roseltorg.svg",
    link: "https://roseltorg.ru/",
  },
  {
    image: "/images/partners/rts_tender.svg",
    link: "https://rts-tender.ru/",
  },
  {
    image: "/images/partners/tek_torg.svg",
    link: "https://tektorg.ru/",
  },
  {
    image: "/images/partners/fabrikant.png",
    link: "https://fabrikant.ru/",
  },
  {
    image: "/images/partners/roseltorg.svg",
    link: "https://roseltorg.ru/",
  },
  {
    image: "/images/partners/rts_tender.svg",
    link: "https://rts-tender.ru/",
  },
  {
    image: "/images/partners/tek_torg.svg",
    link: "https://tektorg.ru/",
  },
];

export function Partners() {
  const plugin = useRef(AutoScroll({ speed: 1, stopOnInteraction: false }));

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="flex justify-between items-center mt-10">
        {PARTNERS?.map((p, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center h-[10vh]"
            >
              <img src={p.image} className="h-full" />
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
