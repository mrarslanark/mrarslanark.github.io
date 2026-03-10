"use client";

import projects from "@/lib/data/projects.json";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";
import { useState } from "react";
import { ProjectCard } from "./molecules/ProjectItem";
import { Project } from "@/lib/types/project";
import Link from "next/link";

type ProjectType = Project["type"];

const tabs: { key: Project["type"]; label: string }[] = [
  { key: "personal", label: "Work Lab" },
  { key: "professional", label: "Shipped Systems" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectType>("personal");

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
          <h2 className="font-syne text-4xl md:text-7xl font-semibold text-text">
            <span className="gradient-text">Things</span> I&apos;ve Built
          </h2>
          <p className="text-muted-light mt-3 max-w-xl">
            A selection of personal experiments and professional deliverables
            across mobile, web, and backend.
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
            {projects
              .filter((p) => p.type === activeTab)
              .slice(0, 3)
              .map((project, i) => (
                <ProjectCard
                  index={i}
                  project={project as Project}
                  key={project.id}
                />
              ))}
          </motion.div>
          <Link
            href={"/projects"}
            className="flex justify-end text-accent mt-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-flex items-center space-x-2"
            >
              <p className="font-semibold hover:underline">View All Projects</p>
              <ArrowRight size={14} className="text-accent" />
            </motion.div>
          </Link>
        </AnimatePresence>
      </div>
    </section>
  );
}
