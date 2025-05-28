import { motion } from "framer-motion";

export function PresidiumCard({
  presidium,
  onOpen,
}: {
  presidium: any;
  onOpen: () => void;
}) {
  return (
    <motion.div
      layoutId={presidium.id}
      className="relative rounded-2xl aspect-[3/4] overflow-hidden group cursor-pointer shadow-white"
      onClick={onOpen}
    >
      <img
        src={presidium.image}
        alt={presidium.name}
        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div className="absolute inset-0 rounded-2xl p-4 flex flex-col justify-end text-text-primary">
        <h3>{presidium.name}</h3>
        <p>{presidium.short_description}</p>
      </div>
    </motion.div>
  );
}
