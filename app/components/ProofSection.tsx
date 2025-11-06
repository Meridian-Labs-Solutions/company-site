"use client";

import { motion } from "framer-motion";
import {
  SiAmazon,
  SiDocker,
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";
import StackIcon from "./StackIcon";

const stackIcons = [
  { name: "AWS", Icon: SiAmazon },
  { name: "Docker", Icon: SiDocker },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
];

export default function ProofSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-[#999] uppercase tracking-wider mb-3">
            Stack Expertise
          </p>
          <p className="text-sm text-[#666] max-w-2xl mx-auto">
            Our preferred toolkit for reliable, modern systems.
          </p>
        </motion.div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {stackIcons.map((tech, index) => (
            <StackIcon
              key={tech.name}
              name={tech.name}
              Icon={tech.Icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
