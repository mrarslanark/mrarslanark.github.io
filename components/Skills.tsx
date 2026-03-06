"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { skills } from "@/lib/data";

const categoryIcons: Record<string, string> = {
  Mobile: "📱",
  "CI/CD & Release": "🚀",
  "Quality & Observability": "🔍",
  "CMS / Analytics": "📊",
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 bg-surface/30">
      {/* Background decorative element */}
      <div
        className="glow-orb"
        style={{
          width: 500,
          height: 500,
          background: "rgba(0, 229, 160, 0.06)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Code2 size={16} className="text-accent" />
            <span className="section-label">Technical Skills</span>
          </div>
          <h2 className="font-syne text-4xl md:text-5xl font-extrabold text-text">
            My Tech Stack
          </h2>
          <p className="text-muted-light mt-3 max-w-xl">
            Tools and technologies I rely on daily to architect, build, and ship
            production-grade mobile platforms.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: catIndex * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="p-6 bg-bg border border-border rounded-2xl hover:border-accent/20 transition-colors duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xl">
                  {categoryIcons[category] || "⚡"}
                </span>
                <h3 className="font-syne font-bold text-text">{category}</h3>
                <span className="ml-auto text-xs font-mono text-muted px-2 py-0.5 bg-surface rounded border border-border">
                  {items.length} skills
                </span>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.05 + skillIndex * 0.03,
                    }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center text-sm text-muted font-mono"
        >
          // And always learning more...
        </motion.p>
      </div>
    </section>
  );
}
