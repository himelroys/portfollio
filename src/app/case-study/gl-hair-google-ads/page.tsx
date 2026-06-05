"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TrendingUp, Target, DollarSign, MousePointer, ShoppingCart } from "lucide-react";

const metrics = [
  { icon: MousePointer, label: "Total Clicks", value: "7,930", color: "#3B82F6" },
  { icon: DollarSign, label: "Avg. CPC", value: "£0.41", color: "#10B981" },
  { icon: ShoppingCart, label: "Conversions", value: "1,390", color: "#F5A623" },
  { icon: TrendingUp, label: "ROAS", value: "7.82x", color: "#8B5CF6" },
];

const keywords = [
  "hair extensions near me",
  "buy human hair extensions UK",
  "affordable hair extensions London",
  "premium hair extensions",
  "best hair extensions UK",
];

export default function GLHairGoogleAdsCaseStudy() {
  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/30 text-gold text-sm rounded-full mb-6">
          Google Ads Case Study
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-4">
          GL Hair Extensions
        </h1>
        <p className="text-xl text-light-gray max-w-2xl mx-auto">
          Scaling a UK Premium Hair Brand with High-Intent Search Campaigns
        </p>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-gold/20 mb-16"
      >
        <Image
          src="/google-ads-1.png"
          alt="GL Hair Google Ads Campaign"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-gold text-navy text-xs font-bold rounded-full">Google Search Ads</span>
            <span className="px-3 py-1 bg-white/10 backdrop-blur text-white text-xs font-bold rounded-full">UK Market</span>
            <span className="px-3 py-1 bg-white/10 backdrop-blur text-white text-xs font-bold rounded-full">E-Commerce</span>
          </div>
        </div>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-card-dark border border-white/5 rounded-xl p-6 text-center hover:border-gold/20 transition-all"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
              style={{ backgroundColor: `${metric.color}20` }}
            >
              <metric.icon size={24} style={{ color: metric.color }} />
            </div>
            <div className="text-2xl font-bold font-[family-name:var(--font-poppins)]" style={{ color: metric.color }}>
              {metric.value}
            </div>
            <div className="text-light-gray text-sm mt-1">{metric.label}</div>
          </motion.div>
        ))}
      </div>

      {/* About the Client */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold text-sm">01</span>
          About the Client
        </h2>
        <div className="bg-card-dark border border-white/5 rounded-2xl p-8">
          <p className="text-light-gray leading-relaxed mb-4">
            GL Hair Extensions is a UK-based premium hair extension brand offering high-quality human hair
            extensions priced between <strong className="text-white">£150 and £350 per unit</strong>. When they first
            approached us, they had a beautiful product but their digital presence was practically invisible —
            relying almost entirely on word-of-mouth and organic social posts.
          </p>
          <p className="text-light-gray leading-relaxed">
            Our challenge was clear: build a paid advertising system that could generate consistent, qualified
            leads and direct sales without burning through budget in a highly competitive UK market.
          </p>
        </div>
      </motion.section>

      {/* The Challenge */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold text-sm">02</span>
          The Challenge
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Invisible Digital Presence",
              desc: "Nearly zero paid advertising history. All growth came from organic social and word-of-mouth.",
            },
            {
              title: "High Competition",
              desc: "UK hair extension market is saturated with established brands spending heavily on ads.",
            },
            {
              title: "Premium Price Point",
              desc: "£150–£350 per unit requires targeting high-intent buyers, not casual browsers.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card-dark border border-white/5 rounded-xl p-6 hover:border-gold/20 transition-all"
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-light-gray text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Strategy */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold text-sm">03</span>
          Strategy & Execution
        </h2>
        <div className="bg-card-dark border border-white/5 rounded-2xl p-8 space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gold">Targeted Search Campaigns</h3>
            <p className="text-light-gray leading-relaxed mb-4">
              We launched targeted Google Search campaigns focused on high-converting keywords that capture
              bottom-of-funnel demand. The strategy was to reach buyers actively searching for hair extensions,
              not just browsing.
            </p>
            <div className="flex flex-wrap gap-2">
              {keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-light-gray"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-white/5 pt-8">
            <h3 className="text-lg font-semibold mb-3 text-gold">Campaign Structure</h3>
            <ul className="space-y-3">
              {[
                "Search campaigns capturing high-intent queries in the UK market",
                "Location targeting focused on major UK cities with highest demand",
                "Ad copy emphasizing premium quality, human hair, and UK delivery",
                "Negative keyword lists to filter out low-intent traffic",
                "Conversion tracking setup for purchases, add-to-cart, and enquiries",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-light-gray">
                  <span className="text-gold mt-1">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Results */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold text-sm">04</span>
          Results & Impact
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Campaign Images */}
          <div className="space-y-4">
            <div className="relative h-56 rounded-xl overflow-hidden border border-white/5">
              <Image
                src="/google-ads-2.png"
                alt="GL Hair Google Ads Dashboard"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-56 rounded-xl overflow-hidden border border-white/5">
              <Image
                src="/google-ads-3.png"
                alt="GL Hair Campaign Performance"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Detailed Results */}
          <div className="space-y-6">
            <div className="bg-card-dark border border-white/5 rounded-xl p-6">
              <div className="text-sm text-light-gray mb-1">Total Ad Spend</div>
              <div className="text-3xl font-bold text-gold font-[family-name:var(--font-poppins)]">£3,230</div>
              <div className="text-sm text-success mt-1">Well-controlled budget over 23 months</div>
            </div>

            <div className="bg-card-dark border border-white/5 rounded-xl p-6">
              <div className="text-sm text-light-gray mb-1">Cost Per Conversion</div>
              <div className="text-3xl font-bold text-success font-[family-name:var(--font-poppins)]">£2.86</div>
              <div className="text-sm text-light-gray mt-1">
                vs. industry average of £10–£20 —{" "}
                <span className="text-success font-semibold">73% below average</span>
              </div>
            </div>

            <div className="bg-card-dark border border-white/5 rounded-xl p-6">
              <div className="text-sm text-light-gray mb-1">Return on Ad Spend</div>
              <div className="text-3xl font-bold text-gold font-[family-name:var(--font-poppins)]">7.82x</div>
              <div className="text-sm text-light-gray mt-1">
                Every £1 spent returned <span className="text-gold font-semibold">£7.82</span> in revenue
              </div>
            </div>

            <div className="bg-card-dark border border-white/5 rounded-xl p-6">
              <div className="text-sm text-light-gray mb-1">Average CPC</div>
              <div className="text-3xl font-bold text-success font-[family-name:var(--font-poppins)]">£0.41</div>
              <div className="text-sm text-light-gray mt-1">
                vs. industry average of £1.50+ —{" "}
                <span className="text-success font-semibold">Exceptional efficiency</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Key Takeaways */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold text-sm">05</span>
          Key Takeaways
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Search Intent is Gold",
              desc: "Google Search Ads capture buyers at the exact moment they're ready to purchase, delivering the highest conversion quality.",
            },
            {
              title: "Precision Targeting Wins",
              desc: "Hyper-focused keyword selection and negative keyword management kept CPC at £0.41 vs. £1.50+ industry average.",
            },
            {
              title: "Budget Discipline Matters",
              desc: "£3,230 spend over 23 months with consistent optimization delivered 1,390 conversions without budget bloat.",
            },
            {
              title: "High-Value Products Need High-Intent Channels",
              desc: "For £150–£350 products, Google Search outperforms social by reaching buyers already in decision mode.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card-dark border border-white/5 rounded-xl p-6 hover:border-gold/20 transition-all"
            >
              <h3 className="font-semibold mb-2 text-gold">{item.title}</h3>
              <p className="text-light-gray text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Client Quote */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="bg-gold/5 border border-gold/20 rounded-2xl p-8 text-center">
          <blockquote className="text-xl text-white italic mb-4">
            "We went from spending nothing on ads to having a predictable system that brings in
            enquiries every single day. The leads are real, the buyers are ready, and the ROI is
            something we never thought possible."
          </blockquote>
          <cite className="text-light-gray not-italic">
            — GL Hair Extensions, Client
          </cite>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center pb-12"
      >
        <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4">
          Want Similar Results?
        </h2>
        <p className="text-light-gray mb-8 max-w-xl mx-auto">
          I specialise in building high-ROI Google Ads campaigns for e-commerce and service businesses.
          Let's talk about how we can grow your brand.
        </p>
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-bold rounded-full hover:bg-gold-light transition-all"
        >
          Let's Talk
        </a>
      </motion.section>
    </article>
  );
}
