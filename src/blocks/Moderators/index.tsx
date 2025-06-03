import { Icon } from "@/components/ui/icon";
import { MODERATORS } from "./data/moderators";
import { CopyButton } from "@/components/CopyButton";

export function Moderators() {
  return (
    <div id="moderators" className="flex flex-col gap-10  px-4 pt-4">
      <h2 className="w-full text-center text-text-primary">Модераторы</h2>
      <div className="p-5 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-5">
        {MODERATORS.map((m, i) => (
          <div
            key={i}
            className="flex flex-col md:grid md:grid-cols-3 bg-background-primary/90 rounded-xl shadow-white"
          >
            <div className="relative col-span-1 h-[46vh]">
              <img
                src={m.image}
                className="w-full rounded-t-xl md:rounded-tr-none md:rounded-l-xl object-cover h-full"
              />
              <div className="absolute top-2 left-2 bg-main-secondary/70 text-white rounded-md px-2 py-1 text-sm font-medium">
                {m.tag}
              </div>
            </div>
            <div className="col-span-2 p-4 text-text-secondary flex flex-col gap-2.5">
              <h3>{m.name}</h3>
              <a
                href={"mailto:" + m.phone_copy}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center text-text-tertiary"
              >
                <Icon type="phone" size="sm" color="dark" />
                {m.phone}
                <CopyButton value={m.phone_copy} color="dark" />
              </a>
              <a
                href={"mailto:" + m.mail}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2.5 items-center text-text-tertiary"
              >
                <Icon type="mail" size="sm" color="dark" />
                {m.mail}
                <CopyButton value={m.mail} color="dark" />
              </a>
              <span>{m.short_description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
