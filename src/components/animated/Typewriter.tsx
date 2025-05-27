import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const sentenceVariants = {
  hidden: {},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  erased: {
    opacity: 0,
    transition: {
      delay: 8,
    },
  },
};

export const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0.1 } } },
};

interface Props {
  text: string;
  homeTitle: boolean;
  delay?: number;
}

export const Typewriter = ({ text, homeTitle, delay }: Props) => {
  const [animateState, setAnimateState] = useState("visible");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimateState("erased");
      setTimeout(() => {
        setAnimateState("visible");
      }, 500);
    }, delay);

    return () => clearInterval(intervalId);
  }, []);

  if (homeTitle)
    return (
      <motion.h1
        key={text}
        variants={sentenceVariants}
        initial="hidden"
        animate={animateState}
      >
        {text.split("").map((char, i) => {
          let color = false;
          if (i < 3) {
            color = true;
          } else if (i >= text.length - 5 && i < text.length - 1) {
            color = true;
          }

          return (
            <motion.span
              key={`${char}-${i}`}
              variants={letterVariants}
              className={cn(color && "text-text-alternative")}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.h1>
    );

  return (
    <motion.h2
      key={text}
      variants={sentenceVariants}
      initial="hidden"
      animate={animateState}
    >
      {text.split("").map((char, i) => (
        <motion.span key={`${char}-${i}`} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.h2>
  );
};
