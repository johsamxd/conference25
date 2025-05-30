import DateContent from "@/components/animated/DateContent";
import SplitText from "@/components/animated/SplitText";
import { Typewriter } from "@/components/animated/Typewriter";
import { CountdownCalendar } from "@/components/CountdownCalendar";
import { Button } from "@/components/ui/button";

export function HomeCore() {
  return (
    <div className="flex flex-col  w-full gap-10 text-text-primary lg:flex-row">
      <div className="flex flex-col gap-5 lg:w-[50vw] lg:mb-20">
        <div className="flex items-center justify-center">
          <div className="size-50 animate-rotate">
            <img src="/images/logo.png" />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <Typewriter
            homeTitle
            delay={12000}
            text="VII Республиканская конференция «Закупки Якутии-2025»"
          />
          <SplitText
            text="Данное мероприятие является одной из ключевых площадок для конструктивного диалога, обмена опытом и выработки стратегий развития системы закупок в Республике Саха (Якутия). Ежегодно конференция объединяет государственных заказчиков, представителей бизнессообщества и экспертов в сфере закупок для обсуждения современных вызовов и возможностей, а также поиска эффективных решений для повышения прозрачности, результативности и цифровизации в области закупочной деятельности."
            type="p"
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 lg:w-[50vw] lg:items-center">
        <div className="flex flex-col gap-4">
          <CountdownCalendar targetDate={new Date(2025, 5, 27, 9, 0, 0)} />
          <div className="flex flex-col gap-2.5">
            <h3>Дата:</h3>
            <div className="flex gap-2.5">
              <DateContent /> <SplitText text="июня 2025 года" type="h2" />
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <h3>Место проведения:</h3>
            <div className="flex gap-2.5">
              <SplitText text="*место проведения*" type="h2" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <a
              href="mailto:cz@goszakazyakutia.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full rounded-2xl">Написать</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
