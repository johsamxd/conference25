import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

export default function DateContent() {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, 27, { duration: 5 });
    return () => controls.stop();
  }, []);

  return (
    <motion.pre className="text-text-alternative font-sans typo-small-title">
      {rounded}
    </motion.pre>
  );
}
