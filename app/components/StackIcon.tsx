"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface StackIconProps {
  name: string;
  Icon: IconType;
  index: number;
}

export default function StackIcon({ name, Icon, index }: StackIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex flex-col items-center gap-2 group"
    >
      <div className="text-4xl md:text-5xl mb-2 group-hover:scale-110 transition-transform duration-300 text-[#e6e6e6]">
        <Icon />
      </div>
      <span className="text-sm text-[#999] font-medium">{name}</span>
    </motion.div>
  );
}

