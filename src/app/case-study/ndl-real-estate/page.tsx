"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Home, DollarSign, Users, Clock, TrendingUp, MessageCircle } from "lucide-react";

const metrics = [
  { icon: Home, label: "Units Sold", value: "18/18", color: "#F5A623" },
  { icon: DollarSign, label: "Ad Spend", value: "<$450", color: "#10B981" },
  { icon: Users, label: "Qualified Leads", value: "800-950", color: "#3B82F6" },
  { icon: Clock, label: "Campaign Duration", value: "3 Months", color: "#8B5CF6" },
];

export default function NDLRealEstateCaseStudy() {
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
          Northern Developers Limited
        </h1>
        <p className="text-xl text-light-gray max-w-2xl mx-auto">
          Selling 18 Luxury Apartments in 3 Months with Facebook + WhatsApp Marketing
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
          src="/meta-ads-2.png"
          alt="NDL Northern Heights Campaign"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-gold text-navy text-xs font-bold rounded-full">Facebook Ads</span>
            <span className="px-3 py-1 bg-white/10 backdrop-blur text-white text-xs font-bold rounded-full">WhatsApp Funnel</span>
            <span className="px-3 py-1 bg-white/10 backdrop-blur text-white text-xs font-bold rounded-full">Real Estate</span>
          </div>
        </div>
      </motion.div>

      {/* Key Achievement Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gold/10 border border-gold/30 rounded-2xl p-8 text-center mb-16"
      >
        <div className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">Key Achievement</div>
        <div className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-poppins)] text-white mb-4">
          18/18 Units Sold in Just 3 Months
        </div>
        <div className="text-light-gray">
          Target was 6 months. Delivered in <span className="text-gold font-bold">HALF</span> the time. Under <span className="text-gold font-bold">$450</span> ad spend.
        </div>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
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

      {/* About Project */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold text-sm">01</span>
          Project Overview
        </h2>
        <div className="bg-card-dark border border-white/5 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gold mb-4">Client Details</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span className="text-light-gray">Client</span><span className="font-medium">Northern Developers Limited (NDL)</span></li>
                <li className="flex justify-between"><span className="text-light-gray">Project</span><span className="font-medium">Northern Heights</span></li>
                <li className="flex justify-between"><span className="text-light-gray">Location</span><span className="font-medium">Block-N, Bashundhara R/A, Dhaka</span></li>
                <li className="flex justify-between"><span className="text-light-gray">Category</span><span className="font-medium">Residential Luxury Apartments</span></li>
                <li className="flex justify-between"><span className="text-light-gray">Building</span><span className="font-medium">G+9 (10-Storied) | 5 Katha Land</span></li>
                <li className="flex justify-between"><span className="text-light-gray">Units</span><span className="font-medium">18 Apartments</span></li>
                <li className="flex justify-between"><span className="text-light-gray">Size</span><span className="font-medium">≈2480 & 1300 SFT each</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gold mb-4">Amenities & USP</h3>
              <ul className="space-y-2 text-sm text-light-gray">
                <li className="flex items-start gap-2"><span className="text-gold">✓</span> 5 Bedrooms</li>
                <li className="flex items-start gap-2"><span className="text-gold">✓</span> 6 Bathrooms</li>
                <li className="flex items-start gap-2"><span className="text-gold">✓</span> 6 Balconies</li>
                <li className="flex items-start gap-2"><span className="text-gold">✓</span> Private Garden</li>
                <li className="flex items-start gap-2"><span className="text-gold">✓</span> Lift & Car Parking</li>
              </ul>
              <div className="mt-4 p-3 bg-gold/10 border border-gold/20 rounded-lg">
                <span className="text-gold font-semibold text-sm">USP: Bashundhara apartment at 40% less cost</span>
              </div>
            </div>
          </div>
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
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Long Sales Cycle",
              desc: "Luxury apartments in Dhaka require high trust and long decision cycles. Converting cold audiences into buyers demands a well-structured nurturing funnel.",
            },
            {
              title: "Budget Constraint",
              desc: "The total ad budget was under $450 — a tight ceiling for a real estate campaign targeting high-value buyers in a competitive market.",
            },
            {
              title: "Competitive Market",
              desc: "Bashundhara R/A is surrounded by established developers. NDL, as a newer entrant, needed strong brand storytelling to build credibility fast.",
            },
            {
              title: "Multi-Stakeholder Decisions",
              desc: "Real estate decisions involve multiple stakeholders. The funnel had to nurture leads across awareness, consideration, and decision stages.",
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

      {/* 4-Stage Funnel */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold text-sm">03</span>
          4-Stage Marketing Funnel
        </h2>
        <div className="space-y-4">
          {[
            {
              stage: "Stage 1 — Awareness",
              icon: TrendingUp,
              title: "Facebook Image Ads",
              desc: "High-quality image ads showcasing the Northern Heights building render, apartment features (5 beds, 6 baths, balconies, garden), and the 40% cost advantage. Targeted to business owners and investors in Dhaka.",
            },
            {
              stage: "Stage 2 — WhatsApp Engagement",
              icon: MessageCircle,
              title: "Low-Cost Engagement Campaign",
              desc: "A Facebook WhatsApp engagement campaign layered on top of image ads to reduce overall cost-per-lead. Interested users were funnelled directly into a WhatsApp conversation, enabling real-time personal communication.",
            },
            {
              stage: "Stage 3 — Lead Nurturing",
              icon: Users,
              title: "Organic Posts + Follow-Up",
              desc: "Organic Facebook posts kept the brand visible between paid ad cycles. Interested leads received personalized WhatsApp follow-ups with floor plans, location maps, pricing details, and construction material specs.",
            },
            {
              stage: "Stage 4 — Close",
              icon: Home,
              title: "Sales Conversion",
              desc: "Warm leads were handed to the NDL sales team with detailed context. The combination of pre-educated, high-intent leads and the NDL team's follow-through resulted in all 18 units being booked.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.stage}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 bg-card-dark border border-white/5 rounded-xl p-6 hover:border-gold/20 transition-all"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                <item.icon size={22} className="text-gold" />
              </div>
              <div>
                <span className="text-gold text-xs font-semibold uppercase tracking-wider">{item.stage}</span>
                <h3 className="font-semibold mt-1 mb-2">{item.title}</h3>
                <p className="text-light-gray text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Targeting Details */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold text-sm">04</span>
          Ad Formats & Targeting
        </h2>
        <div className="bg-card-dark border border-white/5 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gold mb-4">Targeting Parameters</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3 text-light-gray"><span className="text-gold">✓</span> Geographic: Dhaka City Only (precise targeting)</li>
                <li className="flex items-start gap-3 text-light-gray"><span className="text-gold">✓</span> Audience: Business owners, investors, high-income earners aged 30–55</li>
                <li className="flex items-start gap-3 text-light-gray"><span className="text-gold">✓</span> Interests: Real estate, investment, Bashundhara, luxury lifestyle, business</li>
                <li className="flex items-start gap-3 text-light-gray"><span className="text-gold">✓</span> Ad Format: Facebook Image Ads + WhatsApp Engagement</li>
                <li className="flex items-start gap-3 text-light-gray"><span className="text-gold">✓</span> Objective: Lead Generation (WhatsApp) + Brand Awareness</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gold mb-4">Budget Strategy</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3 text-light-gray"><span className="text-gold">✓</span> Total Ad Spend: Under $450</li>
                <li className="flex items-start gap-3 text-light-gray"><span className="text-gold">✓</span> Strategy: Low-cost WhatsApp engagement to reduce CPL below market rate</li>
                <li className="flex items-start gap-3 text-light-gray"><span className="text-gold">✓</span> Organic Support: Regular Facebook Page posts for retargeting & brand recall</li>
                <li className="flex items-start gap-3 text-light-gray"><span className="text-gold">✓</span> Funnel Entry: Facebook Feed → WhatsApp Chat → Sales Team</li>
              </ul>
            </div>
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
          <span className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold text-sm">05</span>
          Campaign Results & Impact
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { label: "Units Sold", value: "18/18", sub: "100% sell-through rate", color: "text-gold" },
            { label: "Timeline", value: "3 Months", sub: "50% ahead of 6-month target", color: "text-success" },
            { label: "Qualified Leads", value: "800-950", sub: "From Dhaka-based business owners & investors", color: "text-gold" },
            { label: "Ad Spend", value: "Under $450", sub: "Exceptional ROI for real estate", color: "text-success" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card-dark border border-white/5 rounded-xl p-6 text-center hover:border-gold/20 transition-all"
            >
              <div className="text-sm text-light-gray mb-2">{item.label}</div>
              <div className={`text-3xl font-bold font-[family-name:var(--font-poppins)] ${item.color}`}>{item.value}</div>
              <div className="text-sm text-light-gray mt-2">{item.sub}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Key Learnings */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold text-sm">06</span>
          Key Learnings & Insights
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Visual Storytelling Converts",
              desc: "High-quality building renders and floor plan visuals were critical to conversion. Buyers needed to visualise their future home — compelling imagery drove click-through and WhatsApp initiations.",
            },
            {
              title: "WhatsApp as a Lead Funnel",
              desc: "Combining Facebook Image Ads with a WhatsApp engagement campaign proved highly effective. It created an instant, personal communication channel that reduced friction and cost while increasing lead quality.",
            },
            {
              title: "Hyper-Local Targeting Wins",
              desc: "Focusing exclusively on Dhaka city allowed budget concentration on the most relevant audience. Diluting reach across all of Bangladesh would have reduced ad efficiency for this location-specific product.",
            },
            {
              title: "USP-Driven Messaging",
              desc: "The '40% less cost' angle was the single most powerful message. A clear, quantified value proposition immediately differentiated NDL from competitors and attracted serious investors.",
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
          Ready to Sell Out Your Project?
        </h2>
        <p className="text-light-gray mb-8 max-w-xl mx-auto">
          I specialise in high-performance Facebook marketing campaigns for real estate, e-commerce, and service businesses. Let's discuss how we can achieve similar results for your brand.
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
