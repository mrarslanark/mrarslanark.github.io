import { Project } from "@/lib/types/project";
import React from "react";

export const BuiltAt: React.FC<{ built_at: Project["build_at"] }> = ({
  built_at,
}) => {
  return (
    <span className="flex items-center text-xs font-mono text-muted px-2.5 py-1 border border-border rounded-md">
      {built_at}
    </span>
  );
};
