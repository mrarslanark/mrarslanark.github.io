import { ProjectInfo } from "@/lib/types/project";
import { InfoIcon, TriangleAlert } from "lucide-react";
import React, { useCallback, useMemo } from "react";

const Icon: React.FC<{ type: ProjectInfo["type"] }> = ({ type }) => {
  switch (type) {
    case "warning":
      return <TriangleAlert size={18} className={`text-yellow-400`} />;
    case "info":
      return <InfoIcon size={18} className={`text-sky-400`} />;
    default:
      break;
  }
};

export const InfoBox: React.FC<ProjectInfo> = ({ type, description }) => {
  const color = useMemo(() => {
    switch (type) {
      case "warning":
        return "yellow";
      case "info":
        return "sky";
    }
  }, []);

  return (
    <div
      className={`inline-flex gap-4 mt-4 p-4 rounded-xl border bg-${color}-400/20 border-${color}-400`}
    >
      <div>
        <Icon type={type} />
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
};
