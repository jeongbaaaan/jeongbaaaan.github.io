import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  noPadding?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  noPadding = false,
}: Props) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 shadow-lg backdrop-blur-xl ${noPadding ? "" : "p-6"} ${className}`}
    >
      {children}
    </motion.div>
  );
}
