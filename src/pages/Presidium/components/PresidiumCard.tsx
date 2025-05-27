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
      className="relative rounded-2xl aspect-square overflow-hidden group cursor-pointer"
      onClick={onOpen}
    >
      <img
        src={presidium.image}
        alt={presidium.name}
        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div className="absolute inset-0 rounded-2xl p-4 flex flex-col justify-end text-white">
        <h3>{presidium.name}</h3>
        <p>{presidium.short_description}</p>
      </div>
    </motion.div>
  );
}
