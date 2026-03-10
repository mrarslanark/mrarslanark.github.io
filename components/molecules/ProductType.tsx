import React from "react";
import { ProductType, Project } from "@/lib/types/project";
import { Archive, Globe, Server, Smartphone, Sparkles } from "lucide-react";

const productType: Record<
  Project["product_type"],
  { title: string; icon: React.ReactNode }
> = {
  mobile: {
    title: "Mobile",
    icon: <Smartphone size={16} />,
  },
  web: {
    title: "Web",
    icon: <Globe size={16} />,
  },
  backend: {
    title: "Backend",
    icon: <Server size={16} />,
  },
  product: {
    title: "Product",
    icon: <Sparkles size={16} />,
  },
  archived: {
    title: "Archived",
    icon: <Archive size={16} />,
  },
};

export const ProductTypeBox: React.FC<{ product_type: ProductType }> = ({
  product_type,
}) => {
  return (
    <span className="flex items-center gap-1.5 text-xs font-mono text-muted px-2.5 py-1 border border-border rounded-md">
      {productType[product_type].icon}
      {productType[product_type].title}
    </span>
  );
};
