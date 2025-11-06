"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-y border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#e6e6e6]">About</h2>
          <p className="text-lg text-[#e6e6e6] leading-relaxed max-w-2xl mx-auto mb-4">
            Founded by engineers who value precision and progress, Meridian Labs exists to make technology work for people.
          </p>
          <p className="text-lg text-[#999] leading-relaxed max-w-2xl mx-auto">
            Meridian Labs transforms businesses through intelligent software solutions. We combine
            technical expertise with a focus on delivering scalable systems that drive real value.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

