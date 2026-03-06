"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy } from "lucide-react";
import { education, certifications } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap size={16} className="text-accent" />
            <span className="section-label">Education</span>
          </div>
          <h2 className="font-syne text-4xl md:text-5xl font-semibold text-text">
            <span className="gradient-text">Academic</span> Background
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education cards */}
          <div className="lg:col-span-2 space-y-5">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-bg border border-border rounded-2xl p-6 hover:border-accent/20 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={18} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-jetbrains font-bold text-text text-lg">
                      {edu.degree}
                    </h3>
                    <p className="text-accent font-semibold mt-0.5">
                      {edu.institution}
                    </p>
                    <p className="text-muted text-sm font-mono mt-0.5">
                      {edu.location} · {edu.period}
                    </p>

                    {edu.achievements.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {edu.achievements.map((ach, j) => (
                          <div
                            key={j}
                            className="flex gap-2.5 text-sm text-muted-light"
                          >
                            <Trophy
                              size={14}
                              className="text-accent flex-shrink-0 mt-0.5"
                            />
                            {ach}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-bg border border-border rounded-2xl p-6 h-fit"
          >
            <div className="flex items-center gap-2 mb-5">
              <Award size={16} className="text-accent" />
              <h3 className="font-jetbrains font-bold text-text gradient-text">
                Certifications
              </h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-2 pb-3 border-b border-border last:border-0 last:pb-0"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                  <div>
                    <p className="text-sm text-text font-medium">
                      {cert.title}
                    </p>
                    <p className="text-xs text-muted font-mono">
                      {cert.issuer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
