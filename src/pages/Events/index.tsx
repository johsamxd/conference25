import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icon } from "@/components/ui/icon";

export function Events() {
  return (
    <div className="flex flex-col gap-10 w-full px-5 lg:px-10 py-7 bg-background-primary text-text-secondary">
      <div className="flex flex-col gap-2.5">
        <h2 className="text-center text-main-secondary">Мероприятия</h2>
        <p className="typo-sub-title text-center text-text-tertiary">
          Во время конференции пройдет торжественная церемония награждения по
          следующим мероприятиям
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <Icon type="charts" size="md" color="dark" />
              <span>Ежегодный рейтинг «Лучший Заказчик»</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <Icon type="trophy" size="md" color="dark" />
              <span>
                II Республиканский конкурс «Лучший специалист в сфере закупок
                Республики Саха (Якутия)»
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <Icon type="books" size="md" color="dark" />
              <span>
                Образовательный проект «Контрактный управляющий. Дорогу молодым»
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
