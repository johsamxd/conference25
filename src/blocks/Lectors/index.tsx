import { LECTORS } from "./data/lectors";
import { useState } from "react";
import { PersonCard } from "@/components/PersonCard";
import { PersonModal } from "@/components/PersonModal";

export function Lectors() {
  const [isOpen, setIsOpen] = useState<any>(null);
  const [lector, setLector] = useState<any>(null);

  const handleOpen = (l: any) => {
    setLector(l);
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setLector(null);
    setIsOpen(false);
  };

  return (
    <div id="lectors" className="flex flex-col gap-10 px-2 lg:px-10">
      <h2 className="w-full text-center text-text-primary">Лекторы</h2>
      <div className="rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5">
        {LECTORS.map((l, i) => (
          <PersonCard key={i} person={l} onOpen={() => handleOpen(l)} />
        ))}
      </div>
      {lector && <PersonModal onClose={handleClose} person={lector} />}
    </div>
  );
}
