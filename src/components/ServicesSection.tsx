"use client";

import { motion } from "framer-motion";
import { Target, Palette, PenTool, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Digital Marketing",
    subtitle: "AI-Enhanced Strategies",
    features: [
      "SEO & SEM Optimization (AI keyword research)",
      "Meta & Google Ads Management (AI bid optimization)",
      "Social Media Marketing (AI content scheduling)",
      "Email Marketing Automation (AI personalization)",
      "Analytics & Performance Tracking",
    ],
  },
  {
    icon: Palette,
    title: "Creative Design",
    subtitle: "Visuals That Captivate",
    features: [
      "Brand Identity & Logo Design",
      "Social Media Graphics & Posts",
      "Marketing Collateral (Brochures, Flyers)",
      "UI/UX Design for Websites & Apps",
      "AI-Assisted Design Workflows",
    ],
  },
  {
    icon: PenTool,
    title: "Copywriting",
    subtitle: "Words That Convert",
    features: [
      "Ad Copy & Landing Page Content",
      "Email Sequences & Newsletters",
      "Blog Posts & SEO Content",
      "Product Descriptions",
      "AI-Assisted Content Strategy",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32">
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
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mt-4 mb-4">
            Services That <span className="text-gold">Drive Results</span>
          </h2>
          <p className="text-light-gray max-w-2xl mx-auto">
            Leveraging AI tools for smarter, faster, better marketing
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-card-dark border border-white/5 rounded-2xl p-8 hover:border-gold/30 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <service.icon size={28} className="text-gold" />
                </div>

                <h3 className="text-xl font-bold font-[family-name:var(--font-poppins)] mb-1">
                  {service.title}
                </h3>
                <p className="text-gold text-sm mb-6">{service.subtitle}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-light-gray text-sm"
                    >
                      <span className="text-gold mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  className="mt-6 flex items-center gap-2 text-gold text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
