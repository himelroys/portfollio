"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Eye, DollarSign, MessageSquare, TrendingUp } from "lucide-react";

const metrics = [
  { icon: Eye, label: "Total Reach", value: "49,705", color: "#3B82F6" },
  { icon: Users, label: "Impressions", value: "116,851", color: "#8B5CF6" },
  { icon: MessageSquare, label: "Total Leads", value: "241+", color: "#F5A623" },
  { icon: DollarSign, label: "Cost Per Lead", value: "£4.47", color: "#10B981" },
  { icon: TrendingUp, label: "Total Spend", value: "£1,096", color: "#EF4444" },
];

const campaigns = [
  {
    name: "HN Lead 01",
    status: "Completed",
    budget: "£20/day",
    reach: "28,957",
    impressions: "76,552",
    leads: "192+",
    cpl: "£4.47",
  },
  {
    name: "Retargeting HN Chat",
    status: "Active",
    budget: "£10/day",
    reach: "21,301",
    impressions: "37,864",
    leads: "—",
    cpl: "—",
  },
  {
    name: "New HN Lead 01",
    status: "Active",
    budget: "£20/day",
    reach: "—",
    impressions: "—",
    leads: "49+",
    cpl: "£4.48",
  },
];

export default function GLHairMetaAdsCaseStudy() {
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
          Meta Ads Case Study
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-4">
          GL Hair Extensions
        </h1>
        <p className="text-xl text-light-gray max-w-2xl mx-auto">
          Meta Lead Generation Funnel for UK Premium Hair Brand
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
          src="/meta-ads-1.png"
          alt="GL Hair Meta Ads Campaign"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-gold text-navy text-xs font-bold rounded-full">Facebook & Instagram Ads</span>
            <span className="px-3 py-1 bg-white/10 backdrop-blur text-white text-xs font-bold rounded-full">UK Market</span>
            <span className="px-3 py-1 bg-white/10 backdrop-blur text-white text-xs font-bold rounded-full">Lead Generation</span>
          </div>
        </div>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-card-dark border border-white/5 rounded-xl p-5 text-center hover:border-gold/20 transition-all"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2"
              style={{ backgroundColor: `${metric.color}20` }}
            >
              <metric.icon size={20} style={{ color: metric.color }} />
            </div>
            <div className="text-xl font-bold font-[family-name:var(--font-poppins)]" style={{ color: metric.color }}>
              {metric.value}
            </div>
            <div className="text-light-gray text-xs mt-1">{metric.label}</div>
          </motion.div>
        ))}
      </div>

      {/* About */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold text-sm">01</span>
          About the Project
        </h2>
        <div className="bg-card-dark border border-white/5 rounded-2xl p-8">
          <p className="text-light-gray leading-relaxed mb-4">
            GL Hair Extensions is a <strong className="text-white">UK-based premium hair extension brand</strong> offering
            high-quality human hair extensions priced between <strong className="text-white">£150 and £350 per unit</strong>.
            Operating in one of the most competitive beauty markets in Europe, they needed a consistent
            pipeline of qualified leads without relying solely on organic reach.
          </p>
          <p className="text-light-gray leading-relaxed">
            The Meta strategy was designed as the <strong className="text-white">top-of-funnel engine</strong> — generating
            awareness, capturing interest, and funnelling warm leads toward purchase. This complemented
            the Google Search strategy by feeding the retargeting pool and building brand recognition
            before buyers entered search mode.
          </p>
        </div>
      </motion.section>

      {/* Funnel Strategy */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold text-sm">02</span>
          3-Stage Funnel Strategy
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              stage: "Stage 1",
              title: "Cold Audience Lead Gen",
              desc: "Targeted UK women interested in hair care, beauty, and fashion. Highest volume bid strategy with image and carousel ads showcasing product quality and transformations.",
            },
            {
              stage: "Stage 2",
              title: "Retargeting & Re-engagement",
              desc: "Re-engaged website visitors and social engagers with softer messaging, testimonials, and direct call-to-action. Built trust before asking for the sale.",
            },
            {
              stage: "Stage 3",
              title: "Ongoing Lead Optimisation",
              desc: "Continuously optimised for low-cost enquiries using 7-day click attribution. A/B tested creatives, audiences, and ad copy to drive CPL down.",
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
              <span className="text-gold text-xs font-semibold uppercase tracking-wider">{item.stage}</span>
              <h3 className="font-semibold mt-2 mb-3">{item.title}</h3>
              <p className="text-light-gray text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Campaign Breakdown */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold text-sm">03</span>
          Campaign Breakdown
        </h2>
        <div className="bg-card-dark border border-white/5 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left p-4 text-light-gray font-medium">Campaign</th>
                  <th className="text-left p-4 text-light-gray font-medium">Status</th>
                  <th className="text-left p-4 text-light-gray font-medium">Budget/Day</th>
                  <th className="text-left p-4 text-light-gray font-medium">Reach</th>
                  <th className="text-left p-4 text-light-gray font-medium">Impressions</th>
                  <th className="text-left p-4 text-light-gray font-medium">Leads</th>
                  <th className="text-left p-4 text-light-gray font-medium">CPL</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((camp, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                    <td className="p-4 font-semibold">{camp.name}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        camp.status === "Active" ? "bg-success/20 text-success" : "bg-light-gray/20 text-light-gray"
                      }`}>
                        {camp.status}
                      </span>
                    </td>
                    <td className="p-4 text-light-gray">{camp.budget}</td>
                    <td className="p-4 text-light-gray">{camp.reach}</td>
                    <td className="p-4 text-light-gray">{camp.impressions}</td>
                    <td className="p-4 text-gold font-semibold">{camp.leads}</td>
                    <td className="p-4 text-success font-semibold">{camp.cpl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* Combined Performance */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold text-sm">04</span>
          Combined Performance with Google Ads
        </h2>
        <div className="bg-card-dark border border-white/5 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gold">Meta Ads Performance</h3>
              <ul className="space-y-3">
                <li className="flex justify-between text-sm">
                  <span className="text-light-gray">Total Spend</span>
                  <span className="font-semibold">£1,095.96</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-light-gray">Total Leads</span>
                  <span className="font-semibold text-gold">241+</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-light-gray">Avg. CPL</span>
                  <span className="font-semibold text-success">£4.47</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-light-gray">Total Reach</span>
                  <span className="font-semibold">49,705</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-light-gray">Impressions</span>
                  <span className="font-semibold">116,851</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gold">Blended Results (Meta + Google)</h3>
              <ul className="space-y-3">
                <li className="flex justify-between text-sm">
                  <span className="text-light-gray">Combined Spend</span>
                  <span className="font-semibold">£4,325.96</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-light-gray">Total Actions</span>
                  <span className="font-semibold text-gold">1,600+</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-light-gray">Blended ROAS</span>
                  <span className="font-semibold text-success">7.82x</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-light-gray">Active Period</span>
                  <span className="font-semibold">23+ months</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-light-gray">Platforms</span>
                  <span className="font-semibold">Meta + Google</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Key Insights */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold text-sm">05</span>
          Key Insights
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Dual-Platform Synergy",
              desc: "Meta Ads built awareness and generated leads at £4.47 CPL, while Google Ads captured high-intent buyers. Together they created a full-funnel growth engine.",
            },
            {
              title: "Retargeting is Essential",
              desc: "The retargeting campaign re-engaged warm audiences who had already interacted with the brand, dramatically improving conversion rates at lower cost.",
            },
            {
              title: "Highest Volume Bid Strategy",
              desc: "Using Meta's Highest Volume bid strategy with 7-day click attribution maximised lead volume while keeping costs predictable.",
            },
            {
              title: "Creative Quality Drives CPL",
              desc: "High-quality product imagery and transformation-focused creatives consistently outperformed generic lifestyle shots, directly impacting cost per lead.",
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

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center pb-12"
      >
        <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4">
          Ready to Generate Leads at Scale?
        </h2>
        <p className="text-light-gray mb-8 max-w-xl mx-auto">
          I build Meta Ads funnels that deliver qualified leads consistently. Let's discuss how we can
          create a predictable lead generation system for your business.
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
