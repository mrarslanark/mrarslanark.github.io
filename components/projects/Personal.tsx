import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Archive,
  ArrowUpRight,
  ExternalLink,
  Globe,
  Server,
  Smartphone,
  Sparkles,
} from "lucide-react";

const typeIcon = {
  "Mobile App": <Smartphone size={14} />,
  "Web App": <Globe size={14} />,
  "Backend System": <Server size={14} />,
  Product: <Sparkles size={14} />,
  Archived: <Archive size={14} />,
};

const statusColor: Record<string, string> = {
  Live: "text-accent border-accent/30 bg-accent/5",
  Production: "text-blue-400 border-blue-400/30 bg-blue-400/5",
  Internal: "text-orange border-orange/30 bg-orange/5",
  Development: "text-orange border-orange/30 bg-orange/5",
  Archived: "text-orange border-orange/30 bg-orange/5",
};

export function PersonalCard({
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
      <h3 className="font-jetbrains font-bold text-xl text-text mb-3 group-hover:text-accent transition-colors duration-300">
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
