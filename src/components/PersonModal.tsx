import { motion } from "framer-motion";
import { useEffect } from "react";

export function PersonModal({
  onClose,
  person,
}: {
  onClose: () => void;
  person: any;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[9999]"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black opacity-70" />
      <motion.div
        layoutId={person.id}
        className="relative bg-background-secondary rounded-2xl w-min"
      >
        <div className="h-[60vh] relative rounded-t-2xl aspect-square overflow-hidden cursor-pointer">
          <img
            src={person.image}
            alt={person.name}
            className="absolute object-cover"
          />

          <div className="absolute inset-0 rounded-2xl p-4 flex flex-col gap-1 justify-start text-text-primary">
            <h3>{person.name}</h3>
            <p className="typo-small-text">{person.short_description}</p>
          </div>
        </div>
        <div className="px-5 py-2.5 flex flex-col gap-2.5 text-text-secondary">
          <p>{person?.description}</p>

          {person?.program?.length > 0 && <h3>Выступления:</h3>}

          {person?.program?.map((p: any, i: number) => (
            <div key={i} className="flex gap-2.5">
              <p>{p.time}</p>
              <p>{p.subject}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
