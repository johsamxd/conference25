import { useScroll, useTransform } from "motion/react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface DisappearingDivProps {
  children: ReactNode;
  start?: number;
  end?: number;
}

export function DisappearingDiv({
  children,
  start = 0,
  end = 700,
}: DisappearingDivProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [start, end], [1, 0]);
  return <motion.div style={{ opacity }}>{children}</motion.div>;
}
