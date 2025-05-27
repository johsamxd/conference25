import { motion } from "framer-motion";

export function PresidiumModal({
  onClose,
  presidium,
}: {
  onClose: () => void;
  presidium: any;
}) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black"
      onClick={onClose}
    >
      <motion.div
        layoutId={presidium.id}
        className="bg-background-secondary rounded-2xl w-min"
      >
        <div>
          <div className="h-[60vh] relative rounded-t-2xl aspect-square overflow-hidden group cursor-pointer">
            <img
              src={presidium.image}
              alt={presidium.name}
              className="absolute inset-0 object-cover transition-opacity duration-500"
            />

            <div className="absolute inset-0 rounded-2xl p-4 flex flex-col justify-end text-white">
              <h3>{presidium.name}</h3>
              <p>{presidium.short_description}</p>
            </div>
          </div>
          <div className="px-5 py-2.5">
            <p>{presidium?.description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
