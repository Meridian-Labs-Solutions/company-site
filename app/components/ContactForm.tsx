"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
        console.error("Form submission error:", data.error);
      }
    } catch (error) {
      setFormStatus("error");
      console.error("Form submission error:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#e6e6e6]">
            Get In Touch
          </h2>
          <p className="text-[#999] mb-6">
            Let&apos;s discuss your project needs.
          </p>
          <p className="text-sm text-[#666] max-w-xl mx-auto mb-4">
            Tell us what you&apos;re building. We&apos;ll respond personally
            within 24 hours.
          </p>
          <p className="text-sm text-[#999]">
            Or email us directly:{" "}
            <a
              href="mailto:contact@meridianlabs.tech"
              className="text-accent-cyan hover:underline font-medium"
            >
              contact@meridianlabs.tech
            </a>
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#e6e6e6] placeholder-[#666] focus:outline-none focus:border-accent-cyan transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#e6e6e6] placeholder-[#666] focus:outline-none focus:border-accent-cyan transition-colors"
            />
          </div>
          <div>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#e6e6e6] placeholder-[#666] focus:outline-none focus:border-accent-cyan transition-colors resize-none"
            />
          </div>
          <Button
            type="submit"
            variant="primary"
            disabled={formStatus === "sending"}
            className="w-full"
          >
            {formStatus === "sending" ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : formStatus === "success" ? (
              "Message Sent!"
            ) : (
              "Send Message"
            )}
          </Button>
          {formStatus === "error" && (
            <p className="text-red-400 text-sm text-center">
              There was an error. Please try again or{" "}
              <a
                href="mailto:contact@meridianlabs.tech"
                className="text-accent-cyan hover:underline"
              >
                email us directly
              </a>
              .
            </p>
          )}
          {formStatus === "success" && (
            <p className="text-accent-cyan text-sm text-center">
              Thank you! We&apos;ll get back to you soon.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
