import { motion } from "framer-motion";
import { useEffect } from "react";

export function PersonModal({
  onClose,
  presidium,
}: {
  onClose: () => void;
  presidium: any;
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
        layoutId={presidium.id}
        className="relative bg-background-secondary rounded-2xl w-min"
      >
        <div className="h-[60vh] relative rounded-t-2xl aspect-square overflow-hidden cursor-pointer">
          <img
            src={presidium.image}
            alt={presidium.name}
            className="absolute object-cover"
          />

          <div className="absolute inset-0 rounded-2xl p-4 flex flex-col gap-1 justify-start text-text-primary">
            <h3>{presidium.name}</h3>
            <p className="leading-3.5">{presidium.short_description}</p>
          </div>
        </div>
        <div className="px-5 py-2.5 text-text-secondary">
          <p>{presidium?.description}</p>
        </div>
      </motion.div>
    </div>
  );
}
