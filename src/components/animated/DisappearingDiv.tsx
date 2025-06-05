import { useScroll, useTransform } from "motion/react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DisappearingDivProps {
  children: ReactNode;
  start?: number;
  end?: number;
  className?: string;
}

export function DisappearingDiv({
  children,
  start = 0,
  end = 700,
  className,
}: DisappearingDivProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [start, end], [1, 0]);
  return (
    <motion.div style={{ opacity }} className={cn(className)}>
      {children}
    </motion.div>
  );
}
