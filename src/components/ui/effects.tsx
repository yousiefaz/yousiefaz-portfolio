"use client";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

const effectVariants = cva("absolute -z-50", {
  variants: {
    variant: {
      default:
        "rounded-full blur-xl bg-gradient-to-tr from-primary/60 via-primary/30 to-transparent",
      square: "border-2 border-muted-foreground z-10",
      ball: "rounded-full bg-gradient-to-tr from-primary/80 to-transparent",
    },
    size: {
      default: "w-12 h-12",
      lg: "w-64 h-64 md:w-96 md:h-96",
      sm: "w-5 h-5",
    },
  },
  defaultVariants: { variant: "default", size: "lg" },
});

export interface EffectsProps
  extends HTMLMotionProps<"figure">,
    VariantProps<typeof effectVariants> {
  animateIn?: boolean;
  opacity?: number; 
}

const Effect = React.forwardRef<HTMLDivElement, EffectsProps>(
  (
    { className, variant, size, animateIn = true, opacity = 0.4, ...props },
    ref
  ) => (
    <motion.figure
      className={cn(effectVariants({ variant, size, className }))}
      ref={ref}
      style={{ opacity }} 
      initial={animateIn ? { scale: 0, opacity: 0 } : { scale: 1, opacity }}
      animate={{ scale: 1, opacity }}
      transition={animateIn ? { duration: 1.7, ease: "easeOut" } : undefined}
      {...props}
    />
  )
);

Effect.displayName = "Effect";
export { Effect, effectVariants };
