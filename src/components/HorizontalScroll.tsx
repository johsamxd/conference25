import { useScroll, useTransform } from "motion/react";
import { motion } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function HorizontalScroll({ children }: { children: ReactNode }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <div ref={targetRef} className="h-[250vh]">
      <div className="h-[100vh] sticky top-20 flex items-start justify-start overflow-hidden">
        <motion.div style={{ x }} className="flex gap-2.5">
          {children}
        </motion.div>
      </div>
    </div>
  );
}
