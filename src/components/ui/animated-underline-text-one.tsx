import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils"; // Assuming a utility for class names like tailwind-merge

interface AnimatedTextProps {
  text: string;
  textClassName?: string;
  underlinePath?: string;
  underlineHoverPath?: string;
  underlineDuration?: number;
}

const defaultUnderlinePath = "M0 5 C50 15 100 0 150 5"; // Example path
const defaultUnderlineHoverPath = "M0 5 C50 0 100 15 150 5"; // Example hover path

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  textClassName,
  underlinePath = defaultUnderlinePath,
  underlineHoverPath = defaultUnderlineHoverPath,
  underlineDuration = 0.5,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-block"
    >
      <motion.p className={cn("relative z-10", textClassName)}>
        {text}
      </motion.p>
      <motion.svg
        className="absolute bottom-0 left-0 w-full h-2"
        viewBox="0 0 150 10" // Adjust viewBox based on your actual path dimensions
        preserveAspectRatio="none"
      >
        <motion.path
          d={isHovered ? underlineHoverPath : underlinePath}
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: underlineDuration }}
        />
      </motion.svg>
    </div>
  );
};
