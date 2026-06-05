"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Briefcase } from "lucide-react";
import Image from "next/image";

const roles = ["Digital Marketer", "Creative Designer", "Copywriter"];

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tag */}
            <motion.span
              className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/30 text-gold text-sm rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              AI-Powered Digital Marketing Expert
            </motion.span>

            {/* Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-poppins)] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm{" "}
              <span className="text-gold">Himel Roy</span>
            </motion.h1>

            {/* Animated Typewriter */}
            <motion.div
              className="text-2xl sm:text-3xl text-light-gray mb-6 h-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Typewriter roles={roles} />
            </motion.div>

            {/* Subheadline */}
            <motion.p
              className="text-lg text-light-gray max-w-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              I help brands grow with data-driven marketing strategies,
              eye-catching designs, and persuasive copy that converts.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#portfolio"
                className="px-6 py-3 bg-gold text-navy font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Briefcase size={18} />
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold/10 transition-all duration-300 flex items-center gap-2"
              >
                Hire Me
                <ArrowRight size={18} />
              </a>
              <a
                href="#"
                className="px-6 py-3 text-light-gray hover:text-gold font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              className="flex flex-wrap gap-6 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { value: "50+", label: "Clients" },
                { value: "100+", label: "Projects" },
                { value: "3+", label: "Years" },
                { value: "95%", label: "Success Rate" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-gold font-bold text-lg">{stat.value}</span>
                  <span className="text-light-gray">{stat.label}</span>
                  {i < 3 && <span className="text-light-gray/50">•</span>}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow border */}
              <div className="absolute inset-0 bg-gold/20 rounded-3xl blur-2xl animate-pulse-glow" />

              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-gold/30">
                <Image
                  src="/portfolio-1.jpg"
                  alt="Himel Roy"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 bg-card-dark border border-gold/30 rounded-xl shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-sm font-semibold text-gold">Meta Ads Certified</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-card-dark border border-gold/30 rounded-xl shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-sm font-semibold text-gold">Google Ads Pro</span>
              </motion.div>

              <motion.div
                className="absolute top-1/4 -left-8 px-3 py-1.5 bg-card-dark border border-gold/30 rounded-lg shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                <span className="text-xs font-semibold text-gold">Top Rated</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Typewriter({ roles }: { roles: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(
          isDeleting
            ? currentRole.slice(0, currentText.length - 1)
            : currentRole.slice(0, currentText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, roles]);

  return (
    <span className="text-gold font-semibold">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
