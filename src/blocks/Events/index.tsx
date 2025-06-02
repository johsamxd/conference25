import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icon, type IconType } from "@/components/ui/icon";
import { EVENTS } from "./data/events";
import { cn } from "@/lib/utils";

export function Events() {
  return (
    <div className="flex flex-col gap-10 w-full px-5 lg:px-10 pt-5 pb-10 bg-background-primary/90 text-text-secondary">
      <div className="flex flex-col gap-2.5">
        <h2 className="text-center text-main-secondary">Мероприятия</h2>
        <p className="typo-sub-title text-center text-text-tertiary">
          Во время конференции пройдет торжественная церемония награждения по
          следующим мероприятиям
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full bg-background-secondary px-4 rounded-lg"
      >
        {EVENTS.map((e) => (
          <AccordionItem key={e.title} value={e.title}>
            <AccordionTrigger>
              <div className="flex gap-2 items-center">
                <Icon type={e.icon as IconType} size="md" color="main" />
                <span className="text-main-secondary">{e.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <a
                href={e.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "md:flex gap-5 mb-2.5 rounded-md",
                  e.link && "hover:bg-black/10 duration-300"
                )}
              >
                <div className="md:h-[40vh] aspect-[4/3]">
                  <img
                    src={e.image}
                    className={
                      "object-cover h-full rounded-md md:rounded-r-none"
                    }
                  />
                </div>
                <div className="flex flex-col justify-between py-5 pr-5">
                  <div className="flex flex-col gap-2.5">
                    <h3>{e.title}</h3>

                    {e.description?.map((d, i) => (
                      <span key={i}>{d}</span>
                    ))}
                  </div>
                </div>
              </a>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
