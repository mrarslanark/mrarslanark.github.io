"use client";

import ScreenshotGallery from "@/components/ScreenshotGallery";
import { InfoBox } from "@/components/molecules/InfoBox";
import { ProductStatusBox } from "@/components/molecules/ProductStatusBox";
import { ProductTypeBox } from "@/components/molecules/ProductType";
import { ProjectLinkItem } from "@/components/molecules/ProjectLinkItem";
import projects from "@/lib/data/projects.json";
import { Project, ProjectURL } from "@/lib/types/project";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

export default function ProjectPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = use(props.params);
  const { id } = params;

  const project = projects.find((p) => p.id === id) as Project | undefined;

  if (!project) {
    notFound();
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-bg"
    >
      <div className="container mx-auto px-6 py-24 md:py-32 max-w-4xl">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-muted hover:text-accent font-medium mb-10 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        {/* Header Section */}
        <div className="pb-8 border-b-[1px] border-gray-800">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <ProductTypeBox product_type={project.product_type} />
            <ProductStatusBox status={project.status} />
          </div>

          <div className="inline-flex mb-4 gap-4 items-center">
            {project.logo && (
              <div className="rounded-xl overflow-hidden border border-gray-700">
                <img
                  src={project.logo}
                  className="aspect-square w-[90px] h-[90px]"
                />
              </div>
            )}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold font-jetbrains text-text">
                {project.title}
              </h1>

              <h2 className="text-xl md:text-xl text-accent font-medium">
                {project.subtitle}
              </h2>
            </div>
          </div>

          <p className="text-lg text-muted mb-2 flex items-center gap-2">
            {project.build_at ? (
              <span>
                Built at{" "}
                <span className="text-text font-semibold">
                  {project.build_at}
                </span>
              </span>
            ) : (
              <span>Personal Project</span>
            )}
          </p>

          <p className="text-muted-light text-lg leading-relaxed whitespace-pre-wrap">
            {project.description}
          </p>

          {project.info && <InfoBox {...project.info} />}
        </div>

        {/* Content Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-8">
          <div className="md:col-span-2 space-y-10">
            {project.contribution && project.contribution.length > 0 && (
              <section>
                <h3 className="text-2xl font-bold font-jetbrains text-text mb-6">
                  Key Contributions
                </h3>
                <ul className="space-y-4">
                  {project.contribution.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="text-muted-light leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <div className="md:col-span-1 space-y-10">
            {project.urls && (
              <section>
                <h3 className="text-2xl font-bold font-jetbrains text-text mb-4">
                  Product related links
                </h3>
                {/* Links Section */}
                {Object.keys(project.urls).length > 0 && (
                  <motion.div className="flex flex-col gap-4 ">
                    {project.urls.map((project: ProjectURL) => (
                      <ProjectLinkItem key={project.id} {...project} />
                    ))}
                  </motion.div>
                )}
              </section>
            )}

            <section className="bg-surface border border-border rounded-2xl p-6">
              <h3 className="text-lg font-bold font-jetbrains text-text mb-4">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-sm font-mono text-muted px-2.5 py-1.5 bg-bg rounded-md border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>

        <ScreenshotGallery
          screenshots={project.screenshots as Project["screenshots"]}
        />
      </div>
    </motion.div>
  );
}
