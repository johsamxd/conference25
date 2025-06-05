import { Registration } from "@/blocks/Registration";
import SplitText from "@/components/animated/SplitText";
import { Typewriter } from "@/components/animated/Typewriter";

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
          <h1>
            <span className="text-text-alternative">VII</span>
            <span>{" " + "Республиканская конференция «Закупки Якутии-"}</span>
            <span className="text-text-alternative">2025</span>
            <span>:</span>
          </h1>
          <Typewriter
            homeTitle
            delay={12000}
            text="«ГОСЗАКУПКИ: НАЦИОНАЛЬНО, ОТВЕТСТВЕННО, ЭФФЕКТИВНО!»"
          />
          <SplitText
            text="Данное мероприятие является одной из ключевых площадок для конструктивного диалога, обмена опытом и выработки стратегий развития системы закупок в Республике Саха (Якутия). Ежегодно конференция объединяет государственных заказчиков, представителей бизнессообщества и экспертов в сфере закупок для обсуждения современных вызовов и возможностей, а также поиска эффективных решений для повышения прозрачности, результативности и цифровизации в области закупочной деятельности."
            type="p"
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 lg:w-[50vw] lg:items-center justify-center">
        <Registration />
      </div>
    </div>
  );
}
