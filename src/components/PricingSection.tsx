"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "৳5,000",
    period: "/mo",
    description: "Perfect for small businesses starting out",
    features: [
      "Basic social media management",
      "10 graphics/month",
      "Basic reporting",
      "Email support",
      "1 platform management",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "৳15,000",
    period: "/mo",
    description: "Best for growing businesses",
    features: [
      "Full digital marketing suite",
      "30 graphics/month",
      "Advanced analytics + AI insights",
      "Priority support",
      "3 platforms management",
      "Monthly strategy calls",
    ],
    cta: "Most Popular",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale operations",
    features: [
      "Dedicated marketing team",
      "Unlimited designs",
      "White-label solutions",
      "24/7 support",
      "All platforms",
      "Custom integrations",
    ],
    cta: "Contact Me",
    highlighted: false,
  },
];

export default function PricingSection() {
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
            Investment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mt-4">
            Flexible <span className="text-gold">Packages</span>
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-500 ${
                plan.highlighted
                  ? "bg-card-dark border-2 border-gold scale-105 shadow-lg shadow-gold/10"
                  : "bg-card-dark/60 border border-white/5 hover:border-white/10"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-navy text-sm font-bold rounded-full flex items-center gap-1">
                  <Zap size={14} />
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold font-[family-name:var(--font-poppins)] mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold text-gold">{plan.price}</span>
                <span className="text-light-gray">{plan.period}</span>
              </div>
              <p className="text-light-gray text-sm mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-gold mt-0.5 shrink-0" />
                    <span className="text-light-gray">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-full font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gold text-navy hover:bg-gold-light"
                    : "border border-gold text-gold hover:bg-gold/10"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
