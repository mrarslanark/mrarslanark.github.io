"use client";

import { motion } from "framer-motion";
import { Briefcase, ChevronRight, MapPin, Calendar } from "lucide-react";
import { useState } from "react";
import { experience } from "@/lib/data";

const typeColors: Record<string, string> = {
  Lead: "text-accent border-accent/30 bg-accent/5",
  Senior: "text-blue-400 border-blue-400/30 bg-blue-400/5",
  Associate: "text-purple-400 border-purple-400/30 bg-purple-400/5",
  Engineer: "text-orange border-orange/30 bg-orange/5",
};

export default function Experience() {
  const [expanded, setExpanded] = useState<string | null>(
    experience[0].company,
  );

  return (
    <section id="experience" className="relative py-28 px-6">
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
            <Briefcase size={16} className="text-accent" />
            <span className="section-label">Experience</span>
          </div>
          <h2 className="font-syne text-4xl md:text-7xl font-semibold text-text">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-light mt-3 max-w-xl">
            Over 10 years of engineering leadership across fintech, health-tech,
            and telecom industries.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-4">
            {experience.map((job, index) => {
              const isExpanded = expanded === job.company;
              return (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative md:pl-16"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-6 w-10 h-10 rounded-full border-2 hidden md:flex items-center justify-center z-10 transition-colors duration-300 ${
                      isExpanded
                        ? "border-accent bg-accent/10"
                        : "border-border bg-bg"
                    }`}
                  >
                    <div
                      className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                        isExpanded ? "bg-accent" : "bg-border"
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`bg-surface border rounded-2xl overflow-hidden transition-colors duration-300 cursor-pointer ${
                      isExpanded
                        ? "border-accent/30"
                        : "border-border hover:border-border/80"
                    }`}
                    onClick={() => setExpanded(isExpanded ? null : job.company)}
                  >
                    {/* Header */}
                    <div className="p-5 md:p-6 flex items-start gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span
                            className={`text-xs font-mono px-2.5 py-1 border rounded-md ${typeColors[job.type]}`}
                          >
                            {job.type}
                          </span>
                        </div>
                        <h3 className="font-jetbrains font-bold text-lg text-text">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mt-1.5">
                          <span className="font-semibold text-accent">
                            {job.company}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted font-mono">
                            <MapPin size={11} />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted font-mono">
                            <Calendar size={11} />
                            {job.period}
                          </span>
                        </div>
                      </div>
                      <ChevronRight
                        size={18}
                        className={`text-muted mt-1 flex-shrink-0 transition-transform duration-300 ${
                          isExpanded ? "rotate-90 text-accent" : ""
                        }`}
                      />
                    </div>

                    {/* Expandable content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0,
                      }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-5 md:px-6 pb-6 border-t border-border pt-5">
                        <p className="text-muted-light text-sm leading-relaxed mb-4">
                          {job.description}
                        </p>
                        <ul className="space-y-2.5">
                          {job.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex gap-3 text-sm text-muted-light"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
