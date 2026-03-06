"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Phone,
  MapPin,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import { personalInfo, volunteering } from "@/lib/data";

export default function Contact() {
  return (
    <>
      {/* Volunteering */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart size={16} className="text-accent" />
              <span className="section-label">Giving Back</span>
            </div>
            <h2 className="font-syne text-4xl md:text-5xl font-semibold text-text">
              Volunteering
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {volunteering.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-surface border border-border rounded-2xl hover:border-accent/20 transition-colors duration-300"
              >
                <h3 className="font-jetbrains font-bold text-text mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-light text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-28 px-6 overflow-hidden">
        {/* Background glow */}
        <div
          className="glow-orb animate-glow"
          style={{
            width: 600,
            height: 600,
            background: "rgba(0, 229, 160, 0.1)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label mb-4 block">Get In Touch</span>
            <h2 className="font-syne text-5xl md:text-6xl lg:text-7xl font-semibold text-text mb-6 leading-tight">
              Let&apos;s Build
              <br />
              <span className="gradient-text">Something Great</span>
            </h2>
            <p className="text-muted-light text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              I&apos;m currently open to Senior and Lead React Native
              opportunities. If you have a project or role that could use
              someone who cares deeply about architecture, quality, and shipping
              — let&apos;s talk.
            </p>

            {/* Contact links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-accent text-bg font-bold rounded-xl hover:bg-accent-dim transition-all duration-300 text-lg"
              >
                <Mail size={20} />
                {personalInfo.email}
                <ArrowUpRight
                  size={18}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-border text-text font-bold rounded-xl hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 text-lg"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center">
              <span className="text-bg font-bold text-xs font-syne">AM</span>
            </div>
            <span className="text-muted text-sm font-mono">Arslan Mushtaq</span>
          </div>
          <p className="text-muted text-sm font-mono">
            © {new Date().getFullYear()} · Built with Next.js & Framer Motion
          </p>
          <div className="flex gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-muted hover:text-accent transition-colors"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
