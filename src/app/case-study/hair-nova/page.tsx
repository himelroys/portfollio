"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MousePointer, Phone, TrendingUp, MapPin, DollarSign, ShoppingCart } from "lucide-react";

const overallMetrics = [
  { icon: MousePointer, label: "Total Clicks", value: "20,146+", color: "#3B82F6" },
  { icon: ShoppingCart, label: "Conversions", value: "17,592+", color: "#F5A623" },
  { icon: DollarSign, label: "Avg. CPC", value: "£0.63", color: "#10B981" },
  { icon: Phone, label: "Phone Calls", value: "897+", color: "#8B5CF6" },
];

const branches = [
  {
    name: "Finchley, London",
    period: "Jan – May 2026",
    totalCost: "£4,413.49",
    clicks: "5,057",
    conversions: "1,332",
    cpc: "£0.87",
    phoneCalls: "200+",
    campaigns: "Performance Max + Search",
    insight: "First to launch. Search campaign flagged 'Limited by Budget' — strong demand signal.",
  },
  {
    name: "Angel, London",
    period: "May 2025 – May 2026",
    totalCost: "£7,763.05",
    clicks: "11,800",
    conversions: "2,913",
    cpc: "£0.66",
    phoneCalls: "497",
    campaigns: "Search + PMax + Smart",
    insight: "Most mature account. 594K+ impressions. Blended CPA of ~£9.55 — exceptional for premium salon.",
  },
  {
    name: "Leicester",
    period: "Feb – May 2026",
    totalCost: "£475.91",
    clicks: "1,289",
    conversions: "1,335",
    cpc: "£0.37",
    phoneCalls: "—",
    campaigns: "Performance Max",
    insight: "Newest account with lowest CPC on record. 1M+ impressions in just a few months.",
  },
];

const campaignTypes = [
  {
    title: "Search Campaigns",
    desc: "Captured high-intent prospects actively searching for salon services with keywords like 'hair salon near me', 'hair extensions Finchley', and 'best salon Angel London'.",
  },
  {
    title: "Performance Max",
    desc: "Leveraged Google's machine learning across Search, Display, Maps, and YouTube to maximise reach and conversions at the lowest possible cost.",
  },
  {
    title: "Smart Local Campaigns",
    desc: "Built broad visibility with strong conversion signals like phone calls, direction requests, and store visits for local discovery.",
  },
];

export default function HairNovaCaseStudy() {
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
          Hair Nova Salon
        </h1>
        <p className="text-xl text-light-gray max-w-2xl mx-auto">
          Scaling a 3-Branch UK Salon Empire with Google Ads
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <span className="px-3 py-1 bg-card-dark border border-white/10 rounded-full text-sm text-light-gray flex items-center gap-1">
            <MapPin size={14} className="text-gold" /> Finchley, London
          </span>
          <span className="px-3 py-1 bg-card-dark border border-white/10 rounded-full text-sm text-light-gray flex items-center gap-1">
            <MapPin size={14} className="text-gold" /> Angel, London
          </span>
          <span className="px-3 py-1 bg-card-dark border border-white/10 rounded-full text-sm text-light-gray flex items-center gap-1">
            <MapPin size={14} className="text-gold" /> Leicester
          </span>
        </div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-gold/20 mb-16"
      >
        <Image
          src="/google-ads-2.png"
          alt="Hair Nova Google Ads Campaign"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-gold text-navy text-xs font-bold rounded-full">Google Ads</span>
            <span className="px-3 py-1 bg-white/10 backdrop-blur text-white text-xs font-bold rounded-full">3 Active Accounts</span>
            <span className="px-3 py-1 bg-white/10 backdrop-blur text-white text-xs font-bold rounded-full">Local Service Business</span>
          </div>
        </div>
      </motion.div>

      {/* Overall Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {overallMetrics.map((metric, index) => (
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

      {/* About */}
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
            Hair Nova Salon isn't just a hair salon. It's a <strong className="text-white">brand built on precision, style, and a genuine passion for making people feel their best.</strong> With three thriving locations across London (Finchley and Angel) and Leicester, the Hair Nova team had something powerful: a loyal client base, talented stylists, and a reputation that kept people coming back.
          </p>
          <p className="text-light-gray leading-relaxed">
            What they didn't have was a <strong className="text-white">reliable digital system to bring in new clients consistently, every single week.</strong> Our challenge was clear: three separate branches, three separate audiences, and a need to make every pound of ad spend work harder than the last.
          </p>
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
          <span className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold text-sm">02</span>
          Multi-Branch Strategy
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {campaignTypes.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card-dark border border-white/5 rounded-xl p-6 hover:border-gold/20 transition-all"
            >
              <h3 className="font-semibold mb-3 text-gold">{item.title}</h3>
              <p className="text-light-gray text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Keyword Strategy */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold text-sm">03</span>
          Keyword & Location Targeting
        </h2>
        <div className="bg-card-dark border border-white/5 rounded-2xl p-8">
          <p className="text-light-gray leading-relaxed mb-6">
            Each branch received a <strong className="text-white">dedicated Google Ads account</strong> with thorough keyword research around local intent queries, paired with location-targeted campaigns set to radiate outward from each salon's postcode.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "hair salon near me",
              "hair extensions Finchley",
              "best salon Angel London",
              "afro hair Leicester",
              "hair colouring London",
              "salon appointment booking",
            ].map((kw) => (
              <span
                key={kw}
                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-light-gray"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Branch Breakdown */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold text-sm">04</span>
          Branch-by-Branch Results
        </h2>
        <div className="space-y-6">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card-dark border border-white/5 rounded-2xl p-8 hover:border-gold/20 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-poppins)]">{branch.name}</h3>
                  <p className="text-light-gray text-sm">{branch.period}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <div className="text-sm text-light-gray">Total Spend</div>
                  <div className="text-2xl font-bold text-gold">{branch.totalCost}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-white">{branch.clicks}</div>
                  <div className="text-xs text-light-gray">Clicks</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-gold">{branch.conversions}</div>
                  <div className="text-xs text-light-gray">Conversions</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-success">{branch.cpc}</div>
                  <div className="text-xs text-light-gray">Avg. CPC</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-white">{branch.phoneCalls}</div>
                  <div className="text-xs text-light-gray">Phone Calls</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-light-gray">{branch.campaigns}</div>
                  <div className="text-xs text-light-gray">Campaigns</div>
                </div>
              </div>

              <div className="bg-gold/5 border border-gold/10 rounded-xl p-4">
                <p className="text-sm text-light-gray">
                  <span className="text-gold font-semibold">Key Insight: </span>
                  {branch.insight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Combined Results */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold text-sm">05</span>
          Combined Performance
        </h2>
        <div className="bg-card-dark border border-white/5 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left p-4 text-light-gray font-medium">Branch</th>
                  <th className="text-left p-4 text-light-gray font-medium">Period</th>
                  <th className="text-left p-4 text-light-gray font-medium">Total Cost</th>
                  <th className="text-left p-4 text-light-gray font-medium">Clicks</th>
                  <th className="text-left p-4 text-light-gray font-medium">Conversions</th>
                  <th className="text-left p-4 text-light-gray font-medium">Avg. CPC</th>
                  <th className="text-left p-4 text-light-gray font-medium">Phone Calls</th>
                </tr>
              </thead>
              <tbody>
                {branches.map((branch, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                    <td className="p-4 font-semibold">{branch.name}</td>
                    <td className="p-4 text-light-gray">{branch.period}</td>
                    <td className="p-4 text-light-gray">{branch.totalCost}</td>
                    <td className="p-4 text-light-gray">{branch.clicks}</td>
                    <td className="p-4 text-gold font-semibold">{branch.conversions}</td>
                    <td className="p-4 text-success font-semibold">{branch.cpc}</td>
                    <td className="p-4 text-light-gray">{branch.phoneCalls}</td>
                  </tr>
                ))}
                <tr className="bg-gold/5 font-bold">
                  <td className="p-4">COMBINED</td>
                  <td className="p-4 text-light-gray">All periods</td>
                  <td className="p-4 text-gold">£12,652.45</td>
                  <td className="p-4 text-white">18,146+</td>
                  <td className="p-4 text-gold">5,580+</td>
                  <td className="p-4 text-success">£0.63 avg</td>
                  <td className="p-4 text-white">697+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* Campaign Images */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold text-sm">06</span>
          Campaign Screenshots
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-64 rounded-xl overflow-hidden border border-white/5">
            <Image src="/google-ads-2.png" alt="Hair Nova Finchley Dashboard" fill className="object-cover" />
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden border border-white/5">
            <Image src="/google-ads-3.png" alt="Hair Nova Angel Dashboard" fill className="object-cover" />
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden border border-white/5">
            <Image src="/google-ads-4.png" alt="Hair Nova Leicester Dashboard" fill className="object-cover" />
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden border border-white/5">
            <Image src="/google-ads-1.png" alt="Hair Nova Campaign Overview" fill className="object-cover" />
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
          <span className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold text-sm">07</span>
          Key Insights
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Leicester: Lowest CPC on Record",
              desc: "Achieved a CPC of just £0.37 — the lowest across all three accounts. This demonstrates precise audience targeting and efficient campaign structure right from launch.",
            },
            {
              title: "Limited by Budget = Opportunity",
              desc: "Both Finchley (Search) and Leicester (PMax) are flagged 'Limited by Budget' by Google. This is an opportunity signal: there is proven demand that additional budget can immediately capitalise on.",
            },
            {
              title: "Angel: The Mature Benchmark",
              desc: "With 12 months of data, Angel is the most established account. Its blended CPA of ~£9.55 for a premium salon service represents exceptional efficiency.",
            },
            {
              title: "Phone Calls = Highest Quality Leads",
              desc: "Collectively 697+ phone calls were generated — arguably the highest-quality lead type for a local salon, indicating customers are ready to book immediately.",
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
            "Before Google Ads, we relied almost entirely on word-of-mouth and Instagram. Now we have clients booking through Google every single day — people who had never heard of us before. It has completely changed how we think about growth."
          </blockquote>
          <cite className="text-light-gray not-italic">
            — Hair Nova Salon Team
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
          Want Similar Results for Your Salon?
        </h2>
        <p className="text-light-gray mb-8 max-w-xl mx-auto">
          I build and manage Google Ads campaigns that drive real bookings, phone calls, and foot traffic — not just clicks. Let's talk about what's possible for your brand.
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
