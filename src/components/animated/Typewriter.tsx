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
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
};

interface Props {
  text: string;
}

export const Typewriter = ({ text }: Props) => {
  const [animateState, setAnimateState] = useState("visible");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimateState("erased");
      setTimeout(() => {
        setAnimateState("visible");
      }, 500);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

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
