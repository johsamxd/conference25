import { Icon } from "@/components/ui/icon";
import { MODERATORS } from "./data/moderators";

export function Moderators() {
  return (
    <div id="lectors" className="flex flex-col gap-10 min-h-screen px-4 pt-4">
      <h2 className="w-full text-center text-text-primary">Модераторы</h2>
      <div className="p-5 rounded-2xl grid grid-cols-1 sm:grid-cols-2  gap-5 ">
        {MODERATORS.map((m, i) => (
          <div
            key={i}
            className="grid grid-cols-3 bg-background-primary/90 rounded-xl shadow-white"
          >
            <div className="col-span-1">
              <img src={m.image} className="rounded-l-xl" />
            </div>
            <div className="col-span-2 p-4 text-text-secondary flex flex-col gap-2.5">
              <h3>{m.name}</h3>
              <div className="flex gap-1 items-center">
                <Icon type="calendar" size="md" color="dark" />
                {"*текст*"}
              </div>
              <div className="flex gap-1 items-center">
                <Icon type="calendar" size="md" color="dark" />
                {"*ссылка?*"}
              </div>
              <span>{m.short_description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
