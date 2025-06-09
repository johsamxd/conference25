import DateContent from "@/components/animated/DateContent";
import SplitText from "@/components/animated/SplitText";
import { CountdownCalendar } from "@/components/CountdownCalendar";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

export function Registration() {
  return (
    <div className="flex w-full">
      <div className="border-2 border-white rounded-2xl flex flex-col">
        <h2 className="bg-white w-full p-5 rounded-t-xl text-main-secondary text-center">
          Регистрация на конференцию
        </h2>
        <div className="flex flex-col  md:flex-row">
          <div className="flex flex-col gap-5 py-2 px-4 border-r-2 border-white justify-center">
            <CountdownCalendar targetDate={new Date(2025, 5, 27, 9, 0, 0)} />
            <div className="flex flex-col gap-2.5 items-center text-center">
              <p className="typo-sub-title text-text-alternative">
                Участие в конференции бесплатное
              </p>
              <p className="typo-sub-title">Места ограничены!</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-2 px-4">
            <div className="flex flex-col gap-2.5 w-full">
              <h3 className="typo-sub-title">Дата:</h3>
              <div className="flex gap-2.5">
                <DateContent />
                <SplitText
                  text="июня 2025 года"
                  type="p"
                  className="typo-small-title"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2.5 w-full">
              <h3 className="typo-sub-title">Место проведения:</h3>
              <a
                href="https://2gis.ru/yakutsk/inside/7037510072941119"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group hover:pl-2 duration-300"
              >
                <SplitText
                  text="Дом дружбы народов им. А.Е. Кулаковского"
                  type="p"
                  className="typo-small-title"
                />
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300">
                  <Icon type="arrow-right" size="lg" color="white" />
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-2.5 w-full">
              <h3 className="typo-sub-title">Адрес:</h3>
              <a
                href="https://2gis.ru/yakutsk/inside/7037510072941119"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group hover:pl-2 duration-300"
              >
                <SplitText
                  text="г. Якутск, улица Пояркова, 4"
                  type="p"
                  className="typo-small-title"
                />
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300">
                  <Icon type="arrow-right" size="lg" color="white" />
                </div>
              </a>
            </div>

            <a href="#" id="timepad_twf_register_3404754" className="w-full">
              <Button className="rounded-lg w-full mb-2.5 bg-white border-transparent">
                Пройти регистрацию
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
