"use client";

import { motion } from "framer-motion";

const toolCategories = [
  {
    name: "Marketing",
    color: "#3B82F6",
    tools: ["Meta Ads", "Google Ads", "LinkedIn Ads", "Mailchimp", "Buffer"],
  },
  {
    name: "Design",
    color: "#8B5CF6",
    tools: ["Canva", "Photoshop", "Illustrator", "Figma", "InDesign"],
  },
  {
    name: "Copywriting",
    color: "#10B981",
    tools: ["ChatGPT", "Jasper AI", "Copy.ai", "Grammarly", "Surfer SEO"],
  },
  {
    name: "AI/Analytics",
    color: "#F5A623",
    tools: ["Google Analytics 4", "Google Tag Manager", "Looker Studio", "SEMrush", "Ahrefs"],
  },
];

export default function ToolsSection() {
  return (
    <section className="py-20 lg:py-32">
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
            My Toolkit
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mt-4">
            AI-Powered <span className="text-gold">Tools I Use</span>
          </h2>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {toolCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3
                className="text-lg font-bold mb-4 text-center"
                style={{ color: category.color }}
              >
                {category.name}
              </h3>
              <div className="space-y-3">
                {category.tools.map((tool, i) => (
                  <motion.div
                    key={tool}
                    className="group flex items-center gap-3 px-4 py-3 bg-card-dark rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300 cursor-default"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      {tool.charAt(0)}
                    </div>
                    <span className="text-light-gray group-hover:text-white transition-colors text-sm">
                      {tool}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
