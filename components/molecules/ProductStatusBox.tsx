import { ProjectStatus } from "@/lib/types/project";
import React from "react";

const properties: Record<string, { title: string; className: string }> = {
  live: {
    title: "Live",
    className: "text-accent border-accent/30 bg-accent/5",
  },
  internal: {
    title: "Internal",
    className: "text-orange border-orange/30 bg-orange/5",
  },
  development: {
    title: "Development",
    className: "text-orange border-orange/30 bg-orange/5",
  },
  archived: {
    title: "Archived",
    className: "text-orange border-orange/30 bg-orange/5",
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
