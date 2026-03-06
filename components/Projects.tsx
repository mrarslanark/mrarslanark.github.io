"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Smartphone,
  Globe,
  Server,
  ArrowUpRight,
  Layers,
} from "lucide-react";
import { projects } from "@/lib/data";

type TabKey = "personal" | "professional";

const tabs: { key: TabKey; label: string }[] = [
  { key: "personal", label: "Personal Projects" },
  { key: "professional", label: "Professional Work" },
];

const typeIcon = {
  "Mobile App": <Smartphone size={14} />,
  "Web App": <Globe size={14} />,
  "Backend System": <Server size={14} />,
};

const statusColor: Record<string, string> = {
  Live: "text-accent border-accent/30 bg-accent/5",
  Production: "text-blue-400 border-blue-400/30 bg-blue-400/5",
  Internal: "text-orange border-orange/30 bg-orange/5",
};

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects.personal)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col bg-surface border border-border rounded-2xl p-6 card-hover overflow-hidden"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 text-xs font-mono text-muted px-2.5 py-1 border border-border rounded-md">
            {typeIcon[project.type as keyof typeof typeIcon]}
            {project.type}
          </span>
          <span
            className={`text-xs font-mono px-2.5 py-1 border rounded-md ${
              statusColor[project.status]
            }`}
          >
            {project.status}
          </span>
        </div>
        {project.url !== "#" && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors duration-200 opacity-0 group-hover:opacity-100"
          >
            <ArrowUpRight size={18} />
          </a>
        )}
      </div>

      {/* Title */}
      <h3 className="font-syne font-bold text-xl text-text mb-3 group-hover:text-accent transition-colors duration-300">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-muted-light text-sm leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono text-muted px-2 py-0.5 bg-bg rounded border border-border"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.url !== "#" && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
        >
          View Project <ExternalLink size={14} />
        </a>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<TabKey>("personal");

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Layers size={16} className="text-accent" />
            <span className="section-label">Projects</span>
          </div>
          <h2 className="font-syne text-4xl md:text-5xl font-extrabold text-text">
            Things I&apos;ve Built
          </h2>
          <p className="text-muted-light mt-3 max-w-xl">
            A selection of personal experiments and professional deliverables across mobile, web, and backend.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-10 p-1 bg-surface border border-border rounded-xl w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-300 ${
                activeTab === tab.key
                  ? "text-bg"
                  : "text-muted-light hover:text-text"
              }`}
            >
              {activeTab === tab.key && (
                <motion.span
                  layoutId="tab-bg"
                  className="absolute inset-0 bg-accent rounded-lg"
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {projects[activeTab].map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
