import { useScroll, useTransform } from "motion/react";
import { motion } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function HorizontalScroll({
  children,
  title,
  range,
}: {
  children: ReactNode;
  title: string;
  range: string[];
}) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], range);

  return (
    <div ref={targetRef} className="h-[250vh]">
      <div className="h-[80vh] sticky top-0 flex flex-col gap-10 items-start justify-start  overflow-hidden">
        <h2 className="w-full text-center text-background-secondary pt-5">
          {title}
        </h2>
        <motion.div style={{ x }} className="flex gap-5">
          {children}
        </motion.div>
      </div>
    </div>
  );
}
