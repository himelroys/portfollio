"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = ["All", "Google Ads", "Meta Ads", "Design/Creative"];

const projects = [
  // Google Ads
  {
    title: "GL Hair - Google Ads Campaign",
    category: "Google Ads",
    image: "/google-ads-1.png",
    stats: "250% ROAS | 45K Clicks | 890 Conversions",
    description: "High-performing Google Ads campaign for GL Hair with targeted keywords and AI bid optimization.",
    caseStudyUrl: "/case-study/gl-hair-google-ads",
  },
  {
    title: "Hair Nova - Branch 1 Campaign",
    category: "Google Ads",
    image: "/google-ads-2.png",
    stats: "180% ROAS | 32K Clicks | 650 Conversions",
    description: "Strategic Google Ads launch for Hair Nova's first branch with location-based targeting.",
    caseStudyUrl: "/case-study/hair-nova",
  },
  {
    title: "Hair Nova - Branch 2 Campaign",
    category: "Google Ads",
    image: "/google-ads-3.png",
    stats: "210% ROAS | 38K Clicks | 720 Conversions",
    description: "Scaled Google Ads campaign for Hair Nova's second branch with remarketing strategies.",
    caseStudyUrl: "/case-study/hair-nova",
  },
  {
    title: "Hair Nova - Branch 3 Campaign",
    category: "Google Ads",
    image: "/google-ads-4.png",
    stats: "195% ROAS | 35K Clicks | 680 Conversions",
    description: "Optimized Google Ads for Hair Nova's third branch with competitor keyword targeting.",
    caseStudyUrl: "/case-study/hair-nova",
  },
  // Meta Ads
  {
    title: "GL Hair - Meta Ads Campaign",
    category: "Meta Ads",
    image: "/meta-ads-1.png",
    stats: "300% ROAS | 120K Reach | 2.1K Conversions",
    description: "Viral Meta Ads campaign for GL Hair leveraging AI-powered audience targeting and creative A/B testing.",
    caseStudyUrl: "/case-study/gl-hair-meta-ads",
  },
  {
    title: "Real Estate - Meta Ads Campaign",
    category: "Meta Ads",
    image: "/meta-ads-2.png",
    stats: "220% ROAS | 85K Reach | 450 Leads",
    description: "Lead generation Meta Ads campaign for real estate with lookalike audiences and video creatives.",
    caseStudyUrl: "/case-study/ndl-real-estate",
  },
  // Design/Creative — Service & Business Related FIRST
  {
    title: "Garments ERP Management System",
    category: "Design/Creative",
    image: "/new-design-21.jpg",
    stats: "Garment / ERP",
    description: "Professional ERP dashboard and promotional design for garment factory management system with production analytics.",
    caseStudyUrl: null,
  },
  {
    title: "E-Commerce Business Automation Platform",
    category: "Design/Creative",
    image: "/new-design-23.jpg",
    stats: "E-Commerce / SaaS",
    description: "Modern e-commerce platform promotional design showcasing AI analytics, order management and automation features.",
    caseStudyUrl: null,
  },
  {
    title: "Smart Business Software Dashboard",
    category: "Design/Creative",
    image: "/new-design-20.jpg",
    stats: "SaaS / Dashboard",
    description: "Futuristic business software promotional design with holographic dashboard elements and smart analytics visualization.",
    caseStudyUrl: null,
  },
  {
    title: "AI Automation for Business Growth",
    category: "Design/Creative",
    image: "/new-design-24.jpg",
    stats: "AI / Automation",
    description: "Bold AI automation promotional design highlighting chatbots, lead generation and 24/7 business support solutions.",
    caseStudyUrl: null,
  },
  {
    title: "Digital Health & Hospital ERP System",
    category: "Design/Creative",
    image: "/new-design-22.jpg",
    stats: "HealthTech / ERP",
    description: "Comprehensive hospital management system design featuring patient records, AI diagnostics and pharmacy management.",
    caseStudyUrl: null,
  },
  {
    title: "Digital Agency Innovation Branding",
    category: "Design/Creative",
    image: "/new-design-26.jpg",
    stats: "Agency / Tech",
    description: "Creative digital agency promotional design showcasing innovation, robotics and cutting-edge technology solutions.",
    caseStudyUrl: null,
  },
  // Design/Creative — Real Estate
  {
    title: "Luxury Real Estate Social Media Design",
    category: "Design/Creative",
    image: "/new-design-15.jpg",
    stats: "Real Estate",
    description: "Premium apartment promotional design for Northern Developers featuring modern architecture and contact details.",
    caseStudyUrl: null,
  },
  {
    title: "Real Estate Aerial View Campaign",
    category: "Design/Creative",
    image: "/new-design-16.jpg",
    stats: "Real Estate",
    description: "Stunning aerial view banner design for luxury residential project with greenery and modern building aesthetics.",
    caseStudyUrl: null,
  },
  {
    title: "Premium Property Night View Campaign",
    category: "Design/Creative",
    image: "/new-design-17.jpg",
    stats: "Real Estate",
    description: "Elegant night-view real estate design showcasing premium apartments with dramatic lighting and exclusive offers.",
    caseStudyUrl: null,
  },
  // Design/Creative — Telecom & Festival
  {
    title: "Eid Ul Adha Qurbani Campaign",
    category: "Design/Creative",
    image: "/new-design-14.jpg",
    stats: "Festival / Campaign",
    description: "Heartwarming Eid-ul-Adha campaign design featuring traditional Qurbani haat scenes with warm sunset tones.",
    caseStudyUrl: null,
  },
  {
    title: "Grameenphone Rural Network Campaign",
    category: "Design/Creative",
    image: "/new-design-11.jpg",
    stats: "Telecom / Campaign",
    description: "Grameenphone 4.5G campaign design connecting rural Bangladesh with seamless network coverage imagery.",
    caseStudyUrl: null,
  },
  {
    title: "GP Eid Connectivity Campaign",
    category: "Design/Creative",
    image: "/new-design-12.jpg",
    stats: "Telecom / Eid",
    description: "Festive Eid campaign design for Grameenphone showcasing family connections and joyous celebrations across villages.",
    caseStudyUrl: null,
  },
  {
    title: "GP Video Call Eid Campaign",
    category: "Design/Creative",
    image: "/new-design-13.jpg",
    stats: "Telecom / Eid",
    description: "Emotional Eid video call campaign design highlighting how Grameenphone brings families together during festivities.",
    caseStudyUrl: null,
  },
  {
    title: "Safe Journey Home Eid Campaign",
    category: "Design/Creative",
    image: "/new-design-19.jpg",
    stats: "Travel / Festival",
    description: "Beautiful Eid travel safety campaign design with scenic highway imagery promoting safe journey home during holidays.",
    caseStudyUrl: null,
  },
  // Design/Creative — Sports
  {
    title: "Banglawash Cricket Victory Poster",
    category: "Design/Creative",
    image: "/new-design-18.jpg",
    stats: "Sports / Cricket",
    description: "Explosive Bangladesh cricket victory poster celebrating the Banglawash triumph against Pakistan with fiery tiger imagery.",
    caseStudyUrl: null,
  },
  {
    title: "Bangladesh Won Test Series Design",
    category: "Design/Creative",
    image: "/new-design-27.jpg",
    stats: "Sports / Cricket",
    description: "Epic Bangladesh cricket win design featuring team players and roaring tiger for the historic test series victory.",
    caseStudyUrl: null,
  },
  // Design/Creative — Branding & Marketing
  {
    title: "Social Media Power Branding",
    category: "Design/Creative",
    image: "/new-design-25.jpg",
    stats: "Social Media / Branding",
    description: "Stunning Infinity Gauntlet-inspired social media design showing the power of Facebook, Instagram, LinkedIn and WhatsApp.",
    caseStudyUrl: null,
  },
  {
    title: "Marketing Value Creation Design",
    category: "Design/Creative",
    image: "/new-design-08.jpg",
    stats: "Marketing / Creative",
    description: "Creative marketing design showcasing how marketing creates value, drives trust and brings growth for businesses.",
    caseStudyUrl: null,
  },
  {
    title: "Digital Marketing Success Creative",
    category: "Design/Creative",
    image: "/new-design-07.jpg",
    stats: "Digital Marketing",
    description: "Inspirational digital marketing design featuring mountain climber reaching success with marketing service highlights.",
    caseStudyUrl: null,
  },
  {
    title: "Brand Visibility Creative Design",
    category: "Design/Creative",
    image: "/new-design-01.jpg",
    stats: "Branding / Creative",
    description: "Striking brand visibility design with spotlight effect showcasing how creative vision becomes visible to the world.",
    caseStudyUrl: null,
  },
  {
    title: "Stand Out Branding Concept",
    category: "Design/Creative",
    image: "/new-design-03.jpg",
    stats: "Branding / Concept",
    description: "Bold branding concept design with golden hat standing out from the crowd, symbolizing leadership and uniqueness.",
    caseStudyUrl: null,
  },
  {
    title: "Business Growth Strategy Visual",
    category: "Design/Creative",
    image: "/new-design-05.jpg",
    stats: "Business / Strategy",
    description: "Powerful business growth design featuring rocket launch and hourglass symbolizing smart timing and endless growth.",
    caseStudyUrl: null,
  },
  {
    title: "Build Trust Branding Design",
    category: "Design/Creative",
    image: "/new-design-06.jpg",
    stats: "Branding / Trust",
    description: "Elegant trust-building design with professional silhouette walking towards success, emphasizing brand relationships.",
    caseStudyUrl: null,
  },
  {
    title: "Social Media Strategy Creative",
    category: "Design/Creative",
    image: "/new-design-02.jpg",
    stats: "Social Media",
    description: "Creative social media strategy design with pencil tic-tac-toe showcasing Facebook, Instagram, YouTube and LinkedIn.",
    caseStudyUrl: null,
  },
  {
    title: "Website Design Agency Promo",
    category: "Design/Creative",
    image: "/new-design-04.jpg",
    stats: "Web Design / Agency",
    description: "Sleek web design agency promotional material highlighting strong design, smart code and real results for clients.",
    caseStudyUrl: null,
  },
  {
    title: "Achievement & Focus Motivational",
    category: "Design/Creative",
    image: "/new-design-10.jpg",
    stats: "Motivational / Branding",
    description: "Inspiring motivational design with businessman walking towards sunrise, symbolizing focus, movement and achievement.",
    caseStudyUrl: null,
  },
  {
    title: "Success Journey Motivational Design",
    category: "Design/Creative",
    image: "/new-design-09.jpg",
    stats: "Motivational / Creative",
    description: "Powerful motivational running track design with progress typography, symbolizing silent work and loud success.",
    caseStudyUrl: null,
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string>("");

  const openModal = (image: string, title: string) => {
    setModalImage(image);
    setModalTitle(title);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalImage(null);
    setModalTitle("");
    document.body.style.overflow = "auto";
  };

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section id="portfolio" className="py-20 lg:py-32 bg-card-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">
              My Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mt-4 mb-8">
              Featured <span className="text-gold">Projects</span>
            </h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-gold text-navy"
                      : "bg-card-dark text-light-gray hover:text-white border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Project Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden bg-card-dark border border-white/5 hover:border-gold/20 transition-all duration-500"
                >
                  {/* Image */}
                  <div
                    className={`relative h-64 overflow-hidden ${
                      !project.caseStudyUrl ? "cursor-pointer" : ""
                    }`}
                    onClick={() =>
                      !project.caseStudyUrl && openModal(project.image, project.title)
                    }
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category Badge */}
                    <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-navy text-xs font-semibold rounded-full">
                      {project.category}
                    </span>

                    {/* Zoom icon for Design/Creative */}
                    {!project.caseStudyUrl && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-14 h-14 bg-gold/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <ZoomIn size={24} className="text-navy" />
                        </div>
                      </div>
                    )}

                    {/* View Case Study for Ads projects */}
                    {project.caseStudyUrl && (
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link
                          href={project.caseStudyUrl}
                          className="flex items-center gap-1 px-4 py-2 bg-gold text-navy text-sm font-semibold rounded-full hover:bg-gold-light transition-colors"
                        >
                          View Case Study
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold font-[family-name:var(--font-poppins)] mb-1 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-gold text-sm font-medium">
                      {project.stats}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-gold rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[75vh]">
                <Image
                  src={modalImage}
                  alt={modalTitle}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </div>
              <p className="text-white text-lg font-semibold mt-4 text-center">
                {modalTitle}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
