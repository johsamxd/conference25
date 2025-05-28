import { useState } from "react";
import { PRESIDIUMS } from "./data/presidiums";
import { PersonCard } from "@/components/PersonCard";
import { PersonModal } from "@/components/PersonModal";

export function Presidium() {
  const [isOpen, setIsOpen] = useState<any>(null);
  const [presidium, setPresidium] = useState<any>(null);

  const handleOpen = (p: any) => {
    setPresidium(p);
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setPresidium(null);
    setIsOpen(false);
  };

  return (
    <div id="presidium" className="flex flex-col gap-10 min-h-screen px-4 pt-4">
      <h2 className="w-full text-center text-text-primary">
        Список президиумов
      </h2>

      <div className="p-5 rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {PRESIDIUMS.map((p, i) => (
          <PersonCard key={i} presidium={p} onOpen={() => handleOpen(p)} />
        ))}
      </div>
      {presidium && <PersonModal onClose={handleClose} presidium={presidium} />}
    </div>
  );
}
