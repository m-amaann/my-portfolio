"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8, // Longer duration for smoother entry
          ease: [0.42, 0, 0.58, 1], // Smooth easing curve
        }}
        exit={{
          opacity: 0,
          y: -20,
          scale: 0.9,
          position: "absolute",
          transition: {
            duration: 0.6, // Duration for exit transition
            ease: [0.42, 0, 0.58, 1], // Smooth easing curve
          },
        }}
        className={cn(
          "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 xl:pl-[0.6rem] lg:pl- md:pl-0 sm:pl-0 pl-[0.3rem] flex-row",
          className
        )}
        key={currentWord}
      >
        {currentWord.split(" ").map((word, wordIndex) => (
          <React.Fragment key={wordIndex}>
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={letterIndex}
                initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: letterIndex * 0.04, // Reduced delay for a more cohesive effect
                  duration: 0.6, // Duration for letter animation
                  ease: [0.42, 0, 0.58, 1], // Smooth easing curve
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            {wordIndex < currentWord.split(" ").length - 1 && (
              <motion.span
                key={`space-${wordIndex}`}
                className="inline-block"
              >
                &nbsp;
              </motion.span>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
