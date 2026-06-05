"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const skills = [
  "SEO",
  "Meta Ads",
  "Google Ads",
  "Canva",
  "Photoshop",
  "Copywriting",
  "Brand Strategy",
  "Email Marketing",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Image */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 mx-auto rounded-2xl overflow-hidden border-2 border-gold/20 z-10">
                <Image
                  src="/portfolio-2.jpg"
                  alt="Himel Roy at work"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlapping decorative elements */}
              <div className="absolute -top-4 -right-4 w-48 h-48 bg-gold/10 rounded-2xl -z-0" />
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-card-dark border border-gold/20 rounded-2xl -z-0" />

              {/* Rotating text */}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2">
                <motion.div
                  className="text-xs text-gold/60 font-semibold tracking-widest whitespace-nowrap"
                  style={{ writingMode: "vertical-rl" }}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  MARKETING • DESIGN • COPYWRITING • STRATEGY •
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">About Me</span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mt-4 mb-6">
              Transforming Brands with{" "}
              <span className="text-gold">Creative Marketing</span>{" "}
              Solutions
            </h2>

            <p className="text-light-gray text-lg mb-6">
              I'm Himel Roy, a results-driven digital marketing professional
              specializing in AI-powered marketing strategies, creative design,
              and conversion-focused copywriting. With 3+ years of experience,
              I've helped 50+ businesses across Bangladesh grow their online
              presence and increase revenue.
            </p>

            <p className="text-light-gray mb-2">My approach combines:</p>
            <ul className="space-y-2 mb-8">
              {[
                "Data-driven decision making with AI analytics tools",
                "Visually stunning designs that capture attention",
                "Persuasive copy that turns visitors into customers",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-light-gray">
                  <span className="text-gold mt-1">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-card-dark border border-gold/20 rounded-full text-sm text-light-gray hover:border-gold hover:text-gold transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy font-semibold rounded-full hover:bg-gold-light transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
            >
              Let's Talk
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
