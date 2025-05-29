import { Icon } from "@/components/ui/icon";

export function Contacts() {
  return (
    <div className="bg-background-primary/50 border-1 border-element-primary items-center m-5 p-5 rounded-3xl flex flex-col sm:flex-row gap-5 justify-between">
      <div className="flex flex-col gap-2.5 md:flex-row md:gap-5">
        <span>ГКУ РС(Я) «Центр закупок РС(Я)» </span>
        <span>г. Якутск, проспект Ленина, д. 22</span>
        <span>+7 (4112) 507-151</span>
        <span>cz@goszakazyakutia.ru</span>
      </div>

      <div className="flex gap-5">
        <a href="https://vk.com/centrzakupok14" target="_blank">
          <Icon type="vk" size="md" color="white" />
        </a>
        <a href="https://t.me/centerzakupok" target="_blank">
          <Icon type="send" size="md" color="white" />
        </a>
      </div>
    </div>
  );
}
