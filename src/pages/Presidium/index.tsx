import { useState } from "react";
import { PresidiumCard } from "./components/PresidiumCard";
import { PRESIDIUMS } from "./data/presidiums";
import { PresidiumModal } from "./components/PresidiumModal";

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
          <PresidiumCard key={i} presidium={p} onOpen={() => handleOpen(p)} />
        ))}
      </div>
      {presidium && (
        <PresidiumModal onClose={handleClose} presidium={presidium} />
      )}
    </div>
  );
}
