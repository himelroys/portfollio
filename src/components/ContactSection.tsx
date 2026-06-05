"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Send, MessageCircle, Calendar } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 lg:py-32">
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
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mt-4">
            Ready to Grow Your{" "}
            <span className="text-gold">Brand</span>?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-card-dark border border-white/10 rounded-xl focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all text-white placeholder:text-light-gray/50"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-card-dark border border-white/10 rounded-xl focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all text-white placeholder:text-light-gray/50"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-card-dark border border-white/10 rounded-xl focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all text-white placeholder:text-light-gray/50"
                    placeholder="+880 1XXX-XXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Service</label>
                  <select
                    className="w-full px-4 py-3 bg-card-dark border border-white/10 rounded-xl focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all text-white"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="">Select a service</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="creative-design">Creative Design</option>
                    <option value="copywriting">Copywriting</option>
                    <option value="all">All Services</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-card-dark border border-white/10 rounded-xl focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all text-white placeholder:text-light-gray/50 resize-none"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 bg-gold text-navy font-bold rounded-full hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-light-gray">himelroy@email.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-light-gray">+880 1XXX-XXXXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-light-gray">Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                  <Globe size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Website</h4>
                  <p className="text-light-gray">himelroy.com</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-4">
              <a
                href="https://wa.me/8801XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-card-dark rounded-xl border border-white/5 hover:border-gold/30 transition-all hover:-translate-y-1"
              >
                <MessageCircle size={24} className="text-gold" />
                <span className="text-xs text-light-gray">WhatsApp</span>
              </a>
              <a
                href="#"
                className="flex flex-col items-center gap-2 p-4 bg-card-dark rounded-xl border border-white/5 hover:border-gold/30 transition-all hover:-translate-y-1"
              >
                <Calendar size={24} className="text-gold" />
                <span className="text-xs text-light-gray">Schedule</span>
              </a>
              <a
                href="mailto:himelroy@email.com"
                className="flex flex-col items-center gap-2 p-4 bg-card-dark rounded-xl border border-white/5 hover:border-gold/30 transition-all hover:-translate-y-1"
              >
                <Mail size={24} className="text-gold" />
                <span className="text-xs text-light-gray">Email Me</span>
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-48 bg-card-dark rounded-xl border border-white/5 flex items-center justify-center">
              <div className="text-center text-light-gray">
                <MapPin size={32} className="mx-auto mb-2 text-gold" />
                <p className="text-sm">Dhaka, Bangladesh</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
