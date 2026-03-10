import { ProjectStatus } from "@/lib/types/project";
import React from "react";

const properties: Record<string, { title: string; className: string }> = {
  live: {
    title: "Live",
    className: "text-accent border-accent/30 bg-accent/5",
  },
  internal: {
    title: "Internal",
    className: "text-fuchsia-300 border-fuchsia-800/30 bg-fuchsia-800/20",
  },
  development: {
    title: "Development",
    className: "text-orange border-orange/30 bg-orange/5",
  },
  archived: {
    title: "Archived",
    className: "text-orange border-orange/30 bg-orange/5",
  },
  suspended: {
    title: "Suspended",
    className: "text-violet-400 border-violet-700/30 bg-violet-700/5",
  },
};

export const ProductStatusBox: React.FC<{ status: ProjectStatus }> = ({
  status,
}) => {
  return (
    <span
      className={`text-xs font-mono px-2.5 py-1 border rounded-md ${
        properties[status]["className"]
      }`}
    >
      {properties[status]["title"]}
    </span>
  );
};
