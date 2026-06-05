"use client";

import { motion } from "framer-motion";
import { Search, LineChart, Paintbrush, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description: "Research & Analysis",
    details: "Deep dive into your brand, audience, and competitors using AI-powered analytics tools.",
  },
  {
    icon: LineChart,
    number: "02",
    title: "Strategize",
    description: "Build data-driven marketing plan",
    details: "Create a tailored strategy based on insights, with clear KPIs and growth roadmaps.",
  },
  {
    icon: Paintbrush,
    number: "03",
    title: "Create",
    description: "Design & write compelling content",
    details: "Produce stunning visuals and persuasive copy that resonates with your target audience.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Optimize",
    description: "Monitor, test, and improve",
    details: "Continuously refine campaigns using AI insights to maximize ROI and performance.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-32 bg-card-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">
            My Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mt-4">
            4-Step Framework for{" "}
            <span className="text-gold">Success</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="bg-card-dark border border-white/5 rounded-2xl p-6 hover:border-gold/20 transition-all duration-500 h-full group-hover:-translate-y-2">
                {/* Step Number */}
                <div className="text-4xl font-bold text-gold/20 font-[family-name:var(--font-poppins)] mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <step.icon size={24} className="text-gold" />
                </div>

                <h3 className="text-xl font-bold font-[family-name:var(--font-poppins)] mb-1">
                  {step.title}
                </h3>
                <p className="text-light-gray text-sm mb-4">{step.description}</p>

                {/* Hidden details on hover */}
                <p className="text-light-gray/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {step.details}
                </p>
              </div>

              {/* Connector dot */}
              <div className="hidden lg:block absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-navy z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
