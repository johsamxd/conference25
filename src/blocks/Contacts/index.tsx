import { CopyButton } from "@/components/CopyButton";
import { Icon } from "@/components/ui/icon";

export function Contacts() {
  return (
    <div className="bg-background-primary/50 border-1 border-element-primary items-center my-10 mx-8 p-5 rounded-3xl flex flex-col sm:flex-row gap-5 justify-between">
      <div className="flex flex-col gap-2.5 md:flex-row md:gap-5">
        <div className="flex gap-2.5 items-center">
          <span>ГКУ РС(Я) «Центр закупок РС(Я)»</span>
          <CopyButton value={"ГКУ РС(Я) «Центр закупок РС(Я)»"} />
        </div>

        <div className="flex gap-2.5 items-center">
          <a
            href="https://2gis.ru/yakutsk/inside/7037510072941119"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-alternative duration-200"
          >
            г. Якутск, улица Пояркова, 4
          </a>
          <CopyButton value={"г. Якутск, улица Пояркова, 4"} />
        </div>
        <div className="flex gap-2.5 items-center">
          <a
            href="tel:+74112507151"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-alternative duration-200"
          >
            <span>+7 (4112) 507-151</span>
          </a>
          <CopyButton value={"+74112507151"} />
        </div>
        <div className="flex gap-2.5 items-center">
          <a
            href="mailto:cz@goszakazyakutia.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-alternative duration-200"
          >
            <span>cz@goszakazyakutia.ru</span>
          </a>
          <CopyButton value={"cz@goszakazyakutia.ru"} />
        </div>
      </div>

      <div className="flex gap-5">
        <a
          href="https://vk.com/centrzakupok14"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon type="vk" size="md" color="white" />
        </a>
        <a
          href="https://t.me/centerzakupok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon type="send" size="md" color="white" />
        </a>
      </div>
    </div>
  );
}
