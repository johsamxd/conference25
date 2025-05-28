import DateContent from "@/components/animated/DateContent";
import SplitText from "@/components/animated/SplitText";
import { Typewriter } from "@/components/animated/Typewriter";

export function HomeCore() {
  return (
    <div className="flex flex-col  w-full gap-10 text-text-primary lg:flex-row">
      <div className="flex flex-col gap-5 lg:w-[50vw]">
        <div className="flex items-center justify-center">
          <div className="size-50">
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
        </div>
      </div>
    </div>
  );
}
