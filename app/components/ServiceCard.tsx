"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  tagline?: string;
  icon: ReactNode;
  accentColor: "cyan" | "violet";
  delay?: number;
}

export default function ServiceCard({
  title,
  description,
  tagline,
  icon,
  accentColor,
  delay = 0,
}: ServiceCardProps) {
  const accentClasses = {
    cyan: {
      border: "hover:border-accent-cyan/50",
      iconBg: "bg-accent-cyan/10 border-accent-cyan/30 group-hover:bg-accent-cyan/20",
      iconColor: "text-accent-cyan",
    },
    violet: {
      border: "hover:border-accent-violet/50",
      iconBg: "bg-accent-violet/10 border-accent-violet/30 group-hover:bg-accent-violet/20",
      iconColor: "text-accent-violet",
    },
  };

  const classes = accentClasses[accentColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`border border-[#1a1a1a] rounded-lg p-8 ${classes.border} group transition-[border-color]`}
    >
      <div className={`w-12 h-12 rounded-lg ${classes.iconBg} border flex items-center justify-center mb-6 transition-colors`}>
        <div className={`w-6 h-6 ${classes.iconColor}`}>{icon}</div>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-[#e6e6e6]">{title}</h3>
      {tagline && (
        <p className="text-[#e6e6e6] text-sm mb-3 font-medium">{tagline}</p>
      )}
      <p className="text-[#999] leading-relaxed">{description}</p>
    </motion.div>
  );
}

