import { motion } from "framer-motion";

export function PersonCard({
  person,
  onOpen,
}: {
  person: any;
  onOpen: () => void;
}) {
  return (
    <motion.div
      layoutId={person.id}
      className="relative rounded-2xl aspect-[3/4] overflow-hidden group cursor-pointer shadow-white"
      onClick={onOpen}
    >
      <img
        src={person?.image}
        alt={person.name}
        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
      />

      <div className="absolute inset-0 rounded-2xl p-4 flex flex-col gap-1 justify-end text-text-primary ">
        <h3 className="">{person.name}</h3>
        <p className="typo-small-text">{person.short_description}</p>
      </div>
    </motion.div>
  );
}
