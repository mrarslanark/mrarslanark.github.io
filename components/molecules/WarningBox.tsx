import { TriangleAlert } from "lucide-react";
import React from "react";

type Props = {
  type?: "warning";
  text: string;
};

export const WarningBox: React.FC<Props> = ({ type = "warning", text }) => {
  return (
    <div className="inline-flex  gap-4 mt-4 p-4 bg-yellow-400/20 rounded-xl border border-yellow-400 ">
      <div>
        <TriangleAlert size={24} className="text-yellow-400 mt-2" />
      </div>
      <p className="text-sm">{text}</p>
    </div>
  );
};
