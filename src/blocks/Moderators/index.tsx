import { Icon } from "@/components/ui/icon";
import { MODERATORS } from "./data/moderators";
import { CopyButton } from "@/components/CopyButton";

export function Moderators() {
  return (
    <div id="moderators" className="flex flex-col gap-10  px-2 lg:px-10 pt-4">
      <h2 className="w-full text-center text-text-primary">Модераторы</h2>
      <div className="rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-5">
        {MODERATORS.map((m, i) => (
          <div
            key={i}
            className="flex flex-col md:grid md:grid-cols-3 bg-background-primary/90 rounded-xl shadow-white"
          >
            <div className="col-span-1">
              <img
                src={m.image}
                className="w-full rounded-t-xl md:rounded-tr-none md:rounded-l-xl object-cover h-full"
              />
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
