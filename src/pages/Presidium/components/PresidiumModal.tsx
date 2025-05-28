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
      className="fixed inset-0 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <motion.div
        layoutId={presidium.id}
        className="relative bg-background-secondary rounded-2xl w-min"
      >
        <div className="modal-content">
          <div className="h-[60vh] relative rounded-t-2xl aspect-square overflow-hidden cursor-pointer">
            <img
              src={presidium.image}
              alt={presidium.name}
              className="absolute object-cover"
            />

            <div className="absolute inset-0 rounded-2xl p-4 flex flex-col justify-start text-text-primary">
              <h3>{presidium.name}</h3>
              <p>{presidium.short_description}</p>
            </div>
          </div>
          <div className="px-5 py-2.5 text-text-secondary">
            <p>{presidium?.description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
