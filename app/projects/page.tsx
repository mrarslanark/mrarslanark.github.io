"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import projects from "@/lib/data/projects.json";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "@/components/molecules/ProjectItem";
import { Project } from "@/lib/types/project";
import { PersonalProjectCard } from "@/components/molecules/PersonalProjectItem";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<Project["type"]>("personal");

  return (
    <div className="min-h-screen bg-bg">
      <div className="container mx-auto px-6 py-24 md:py-32 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted hover:text-accent font-medium mb-10 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold font-jetbrains text-text mb-6 text-accent">
            Products <span className="text-accent">&amp;</span> Ventures
          </h1>
          <p className="text-muted-light text-lg md:text-xl max-w-2xl leading-relaxed">
            A showcase of my <span className="text-accent">personal</span> and{" "}
            <span className="text-accent">professional</span> work in the
            industry and personal side projects built to solve problems and
            explore new technologies.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-12 border-b border-border">
          <button
            onClick={() => setActiveTab("personal")}
            className={`px-6 py-3 font-jetbrains font-medium transition-all relative ${
              activeTab === "personal"
                ? "text-accent"
                : "text-muted hover:text-text"
            }`}
          >
            Work Lab
            {activeTab === "personal" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab("professional")}
            className={`px-6 py-3 font-jetbrains font-medium transition-all relative ${
              activeTab === "professional"
                ? "text-accent"
                : "text-muted hover:text-text"
            }`}
          >
            Shipped Systems
            {activeTab === "professional" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        </div>

        {/* Content */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`grid grid-cols-1 gap-5 lg:grid-cols-2`}
            >
              {projects
                .filter((p) => p.type === activeTab)
                .map((project, i) =>
                  project.type === "professional" ? (
                    <ProjectCard
                      index={i}
                      project={project as Project}
                      key={project.id}
                    />
                  ) : (
                    <PersonalProjectCard
                      index={i}
                      project={project as Project}
                      key={project.id}
                    />
                  ),
                )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
