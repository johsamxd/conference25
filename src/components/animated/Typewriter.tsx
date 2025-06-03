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
  }, [delay]);

  const highlightWords = {
    НАЦИОНАЛЬНО: "text-main-tertiary",
    ОТВЕТСТВЕННО: "text-main-tertiary",
    ЭФФЕКТИВНО: "text-[#ff6b6b]",
  };
  const getColoredCharacters = () => {
    const result: { char: string; className?: string; key: string }[] = [];

    let currentIndex = 0;

    const words = text.split(/(\s+|,|!|:)/);

    for (const word of words) {
      const colorClass =
        word in highlightWords
          ? highlightWords[word as keyof typeof highlightWords]
          : undefined;

      for (let i = 0; i < word.length; i++) {
        result.push({
          char: word[i],
          className: colorClass,
          key: `${word[i]}-${currentIndex}`,
        });
        currentIndex++;
      }
    }

    return result;
  };

  const characters = getColoredCharacters();

  if (homeTitle)
    return (
      <motion.h1
        key={text}
        variants={sentenceVariants}
        initial="hidden"
        animate={animateState}
      >
        {characters.map(({ char, className, key }) => (
          <motion.span
            key={key}
            variants={letterVariants}
            className={cn(className)}
          >
            {char}
          </motion.span>
        ))}
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
