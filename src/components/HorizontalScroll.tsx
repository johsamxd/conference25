import { useScroll, useTransform } from "motion/react";
import { motion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { Icon } from "./ui/icon";
import { DisappearingDiv } from "./animated/DisappearingDiv";

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
      <div className="min-h-[60vh] sticky top-0 flex flex-col gap-10 items-start justify-start overflow-hidden">
        <h2 className="w-full text-center text-text-primary pt-5">{title}</h2>
        <motion.div style={{ x }} className="flex gap-5">
          {children}
        </motion.div>
        <DisappearingDiv
          start={2000}
          end={3600}
          className="w-full h-full flex flex-col items-center justify-end gap-5 mt-96"
        >
          <span className="typo-sub-title text-text-button">
            Прокрутите вниз
          </span>
          <div className="animate-bounce">
            <Icon type="expand" size="xl" color="white" />
          </div>
        </DisappearingDiv>
      </div>
    </div>
  );
}
