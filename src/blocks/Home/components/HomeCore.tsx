import DateContent from "@/components/animated/DateContent";
import SplitText from "@/components/animated/SplitText";
import { Typewriter } from "@/components/animated/Typewriter";
import { CountdownCalendar } from "@/components/CountdownCalendar";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

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
      <div className="flex flex-col gap-10 lg:w-[50vw] lg:items-center">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-center">
            <CountdownCalendar targetDate={new Date(2025, 5, 27, 9, 0, 0)} />
          </div>

          <div className="flex flex-col gap-2.5 w-full">
            <h3>Дата:</h3>
            <div className="flex gap-2.5">
              <DateContent /> <SplitText text="июня 2025 года" type="h2" />
            </div>
          </div>
          <div className="flex flex-col gap-2.5 w-full">
            <h3>Место проведения:</h3>
            <a
              href="https://2gis.ru/yakutsk/inside/7037510072941119"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group hover:pl-2 duration-300"
            >
              <SplitText
                text="Дом дружбы народов им. А.Е. Кулаковского"
                type="h2"
              />
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300">
                <Icon type="arrow-right" size="lg" color="white" />
              </div>
            </a>
          </div>
          <div className="flex flex-col gap-2.5 w-full">
            <h3>Адрес:</h3>
            <a
              href="https://2gis.ru/yakutsk/inside/7037510072941119"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group hover:pl-2 duration-300"
            >
              <SplitText text="г. Якутск, улица Пояркова, 4" type="h2" />
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300">
                <Icon type="arrow-right" size="lg" color="white" />
              </div>
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a
              href="mailto:cz@goszakazyakutia.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="w-min"
            >
              <Button className="w-min rounded-2xl mt-2.5">Написать</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
