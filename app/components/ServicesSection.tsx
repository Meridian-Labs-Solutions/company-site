"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Custom Software Development",
    tagline: "We build clean, maintainable apps tailored to your goals.",
    description:
      "Custom software solutions built with modern frameworks and best practices for scalability and performance.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    accentColor: "cyan" as const,
    delay: 0,
  },
  {
    title: "Process & Workflow Automation",
    tagline: "Automate repetitive tasks so your team can focus on growth.",
    description:
      "Streamline operations with intelligent automation, CI/CD pipelines, and workflow optimization.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    accentColor: "violet" as const,
    delay: 0.1,
  },
  {
    title: "Cloud Architecture & Scaling",
    tagline: "Design infrastructure that scales with zero downtime.",
    description:
      "Scalable, secure cloud architectures designed for reliability and cost efficiency.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
    accentColor: "cyan" as const,
    delay: 0.2,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              tagline={service.tagline}
              description={service.description}
              icon={service.icon}
              accentColor={service.accentColor}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

