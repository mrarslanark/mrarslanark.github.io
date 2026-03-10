import { Project, ProjectURL } from "@/lib/types/project";
import { motion } from "framer-motion";
import { BuiltAt } from "./BuiltAt";
import { ProductStatusBox } from "./ProductStatusBox";
import { ProductTypeBox } from "./ProductType";
import { ProjectLinkItem } from "./ProjectLinkItem";
import { useCallback, useState } from "react";

export function PersonalProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [readMore, setReadMore] = useState(false);

  const onToggleReadMore = useCallback(() => setReadMore((prev) => !prev), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col bg-surface border border-border rounded-2xl p-6 card-hover overflow-hidden"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Header */}
      <div className="flex mb-4 items-center justify-between">
        <div className="flex gap-2">
          <ProductTypeBox product_type={project.product_type} />
          <BuiltAt built_at={project.build_at} />
        </div>
        <ProductStatusBox status={project.status} />
      </div>

      <div className="inline-flex mb-3 gap-3 items-center">
        {project.logo && (
          <div className="rounded-xl overflow-hidden border border-gray-700">
            <img src={project.logo} className="w-[50px] h-[50px]" />
          </div>
        )}
        <div>
          {/* Title */}
          <div>
            <h3 className="font-jetbrains font-bold text-xl text-text group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
          </div>

          {/* Subtitle */}
          <p className="ont-jetbrains text-sm group-hover:text-accent transition-colors duration-300 line-clamp-1">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="mb-5 space-y-2">
        <p
          className={`text-muted-light text-sm leading-relaxed  ${readMore ? "" : "line-clamp-3"}`}
        >
          {project.description}
        </p>
        <p
          onClick={onToggleReadMore}
          role="button"
          className="text-sm text-accent hover:underline"
        >
          Read More
        </p>
      </div>

      {/* Tags */}
      <div className="flex-1">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string, index: number) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.03,
              }}
              className="skill-badge"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      {/* URLs */}
      {project.urls && Object.keys(project.urls).length > 0 && (
        <div className="flex flex-wrap gap-6 mt-6 border-t border-neutral-100/10 pt-6">
          {project.urls.map((project: ProjectURL) => (
            <ProjectLinkItem key={project.id} {...project} isTextSmall />
          ))}
        </div>
      )}
    </motion.div>
  );
}
