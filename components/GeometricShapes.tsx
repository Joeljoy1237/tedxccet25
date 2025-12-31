import { motion } from "framer-motion";

interface TriangleProps {
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  size?: "sm" | "md" | "lg" | "xl";
  delay?: number;
}

export const Triangle = ({ 
  className = "", 
  direction = "right", 
  size = "md",
  delay = 0 
}: TriangleProps) => {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-48 h-48",
    lg: "w-72 h-72",
    xl: "w-96 h-96",
  };

  const rotations = {
    up: "rotate-[-90deg]",
    down: "rotate-90",
    left: "rotate-180",
    right: "rotate-0",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className={`${sizeClasses[size]} ${rotations[direction]} ${className}`}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polygon 
          points="0,50 100,0 100,100" 
          className="fill-tedx-red"
        />
      </svg>
    </motion.div>
  );
};

interface DiagonalSliceProps {
  className?: string;
  variant?: "solid" | "gradient" | "outline";
  delay?: number;
}

export const DiagonalSlice = ({ 
  className = "", 
  variant = "solid",
  delay = 0 
}: DiagonalSliceProps) => {
  const variantStyles = {
    solid: "bg-tedx-red",
    gradient: "gradient-red-diagonal",
    outline: "border-2 border-tedx-red bg-transparent",
  };

  return (
    <motion.div
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.3 }}
      className={`clip-slash ${variantStyles[variant]} ${className}`}
    />
  );
};

interface RedLineProps {
  orientation?: "horizontal" | "vertical" | "diagonal";
  length?: string;
  thickness?: number;
  delay?: number;
  className?: string;
}

export const RedLine = ({ 
  orientation = "horizontal", 
  length = "100%",
  thickness = 2,
  delay = 0,
  className = ""
}: RedLineProps) => {
  const isHorizontal = orientation === "horizontal";
  const isDiagonal = orientation === "diagonal";

  return (
    <motion.div
      initial={{ scaleX: isHorizontal ? 0 : 1, scaleY: isHorizontal ? 1 : 0, opacity: 0 }}
      whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.5 }}
      style={{
        width: isHorizontal ? length : `${thickness}px`,
        height: isHorizontal ? `${thickness}px` : length,
        transform: isDiagonal ? "rotate(-45deg)" : undefined,
        transformOrigin: "left center",
      }}
      className={`bg-tedx-red ${className}`}
    />
  );
};

interface BrokenFrameProps {
  className?: string;
  children?: React.ReactNode;
}

export const BrokenFrame = ({ className = "", children }: BrokenFrameProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Top-left corner */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-16 h-16"
      >
        <div className="absolute top-0 left-0 w-full h-[3px] bg-tedx-red" />
        <div className="absolute top-0 left-0 w-[3px] h-full bg-tedx-red" />
      </motion.div>

      {/* Bottom-right corner - intentionally incomplete (DAUNT∅) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute bottom-0 right-0 w-12 h-12"
      >
        <div className="absolute bottom-0 right-0 w-3/4 h-[3px] bg-tedx-red" />
        <div className="absolute bottom-0 right-0 w-[3px] h-3/4 bg-tedx-red" />
      </motion.div>

      {children}
    </div>
  );
};

interface GeometricAccentProps {
  variant: 1 | 2 | 3 | 4;
  className?: string;
}

export const GeometricAccent = ({ variant, className = "" }: GeometricAccentProps) => {
  switch (variant) {
    case 1:
      return (
        <div className={`absolute ${className}`}>
          <Triangle direction="right" size="xl" delay={0.3} />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute top-1/2 -right-12 h-1 bg-tedx-red"
          />
        </div>
      );
    case 2:
      return (
        <div className={`absolute ${className}`}>
          <Triangle direction="left" size="lg" delay={0.2} />
          <Triangle direction="down" size="md" className="absolute -top-12 left-24" delay={0.4} />
        </div>
      );
    case 3:
      return (
        <div className={`absolute ${className}`}>
          <DiagonalSlice className="w-64 h-32" delay={0.3} />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -bottom-20 left-8 w-1 h-40 bg-tedx-red origin-top"
          />
        </div>
      );
    case 4:
      return (
        <div className={`absolute ${className}`}>
          <motion.div
            initial={{ opacity: 0, rotate: -15 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-48 h-48 border-4 border-tedx-red rotate-45"
          />
          <Triangle direction="up" size="sm" className="absolute top-20 -left-8" delay={0.5} />
        </div>
      );
    default:
      return null;
  }
};
