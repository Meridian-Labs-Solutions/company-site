"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          We build intelligent systems that scale.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-[#999] mb-8 leading-relaxed"
        >
          Engineering efficient, reliable software — designed to perform from day one.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <Button href="#contact" variant="primary">
            Book Consultation
          </Button>
          <p className="text-sm text-[#666] mt-4">
            Book a free consultation to discuss your system goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

