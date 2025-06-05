import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function PersonCard({
  person,
  onOpen,
  presidium,
}: {
  person: any;
  onOpen?: () => void;
  presidium?: boolean;
}) {
  return (
    <motion.div
      layoutId={person.id}
      className={cn(
        "relative rounded-2xl aspect-[3/4] overflow-hidden group cursor-pointer shadow-white",
        presidium && "cursor-default"
      )}
      onClick={onOpen}
    >
      <img
        src={person?.image}
        alt={person.name}
        className={cn(
          "absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300",
          presidium && "opacity-100"
        )}
      />

      <div className="absolute inset-0 rounded-2xl p-4 flex flex-col gap-1 justify-end text-text-primary ">
        <h3 className="">{person.name}</h3>
        <p className="typo-small-text">{person.short_description}</p>
      </div>
    </motion.div>
  );
}
