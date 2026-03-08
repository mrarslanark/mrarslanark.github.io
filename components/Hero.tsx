"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="about"
      className=" relative min-h-screen flex items-center overflow-hidden pt-20 px-6 "
    >
      {/* Background glow orbs */}
      <div
        className="glow-orb animate-glow"
        style={{
          width: 600,
          height: 600,
          background: "rgba(0, 229, 160, 0.12)",
          top: "10%",
          right: "-10%",
        }}
      />
      <div
        className="glow-orb animate-glow"
        style={{
          width: 400,
          height: 400,
          background: "rgba(255, 87, 51, 0.08)",
          bottom: "10%",
          left: "-5%",
          animationDelay: "2s",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-mono">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Open to Senior / Lead React Native Roles
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="font-syne text-3xl sm:text-6xl md:text-7xl lg:text-7xl font-semibold leading-[0.9] tracking-tight mb-6"
          >
            <span className="text-text">Arslan </span>
            <span className="gradient-text">Mushtaq</span>
          </motion.h1>

          {/* Title */}
          <motion.div variants={itemVariants} className="mb-6">
            <p className="text-muted-light text-xl md:text-2xl font-manrope font-light">
              Senior / Lead{" "}
              <span className="text-text font-semibold">
                React Native Engineer
              </span>{" "}
              · 10+ Years · Pakistan
            </p>
          </motion.div>

          {/* Summary */}
          <motion.p
            variants={itemVariants}
            className="text-muted-light text-base md:text-lg font-manrope leading-relaxed max-w-2xl mb-10"
          >
            {personalInfo.summary}
          </motion.p>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
          >
            {personalInfo.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl border border-border bg-surface/50 text-center group hover:border-accent/30 transition-colors duration-300 space-y-2"
              >
                <div className="font-jetbrains text-2xl font-bold text-accent group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xs text-muted font-mono mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-semibold rounded-xl hover:bg-accent-dim transition-all duration-300 hover:gap-3"
            >
              View My Work
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="mailto:m.arslanmushtaqahmed@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text font-semibold rounded-xl hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
            >
              <Mail size={18} />
              Get In Touch
            </a>
          </motion.div>

          {/* Social links + location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6"
          >
            <a
              href="https://linkedin.com/in/mrarslanark"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:m.arslanmushtaqahmed@gmail.com"
              className="text-muted hover:text-accent transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
            <span className="w-px h-5 bg-border" />
            <span className="flex items-center gap-1.5 text-muted text-sm font-mono">
              <MapPin size={14} />
              {personalInfo.location}
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-muted text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
}
