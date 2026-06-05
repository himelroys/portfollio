"use client";

import { motion } from "framer-motion";
import { Globe, Users, MessageSquare, AtSign, Heart } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const services = [
  { name: "Marketing", href: "#services" },
  { name: "Design", href: "#services" },
  { name: "Copywriting", href: "#services" },
  { name: "Pricing", href: "#pricing" },
];

const socials = [
  { name: "LinkedIn", icon: Globe, href: "#" },
  { name: "Instagram", icon: Users, href: "#" },
  { name: "Facebook", icon: MessageSquare, href: "#" },
  { name: "Twitter", icon: AtSign, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-card-dark/80 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)] text-gold mb-2">
              Himel Roy
            </h3>
            <p className="text-light-gray text-sm">
              Digital Marketer
              <br />
              & Creative Designer
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-light-gray hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-light-gray hover:text-gold transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Social</h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-light-gray text-sm">
            © 2026 Himel Roy. All rights reserved.
          </p>
          <p className="text-light-gray text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-gold fill-gold" /> in Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
