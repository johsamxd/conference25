import DateContent from "@/components/animated/DateContent";
import SplitText from "@/components/animated/SplitText";
import { Header } from "./components/Header";
import { Typewriter } from "@/components/animated/Typewriter";

export function Home() {
  return (
    <div className="flex flex-col gap-10 animated-gradient h-screen px-40 ">
      <Header />
      <div className="flex w-full text-background-secondary mt-20">
        <div className="flex flex-col gap-5 w-[50vw]">
          <div className="size-50">
            <img src="/images/logo.png" />
          </div>
          <div className="flex flex-col gap-5">
            <SplitText
              text="VII Республиканская конференция «Закупки Якутии-2025»"
              type="h1"
            />
            <SplitText
              text="Данное мероприятие является одной из ключевых площадок для конструктивного диалога, обмена опытом и выработки стратегий развития системы закупок в Республике Саха (Якутия). Ежегодно конференция объединяет государственных заказчиков, представителей бизнессообщества и экспертов в сфере закупок для обсуждения современных вызовов и возможностей, а также поиска эффективных решений для повышения прозрачности, результативности и цифровизации в области закупочной деятельности."
              type="p"
            />
          </div>
        </div>
        <div className="flex flex-col gap-10 w-[50vw] items-center">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2.5">
              <h3>Дата:</h3>
              <h2 className="flex gap-2.5">
                <DateContent /> <SplitText text="июня 2025 года" type="h2" />
              </h2>
            </div>
            <div className="flex flex-col gap-2.5">
              <h3>Место проведения:</h3>
              <h2 className="flex gap-2.5">
                <Typewriter text="*место проведения*" />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
