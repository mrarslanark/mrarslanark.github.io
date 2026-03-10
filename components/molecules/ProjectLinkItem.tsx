import { ProjectURL } from "@/lib/types/project";
import { AppleIcon, ExternalLink, GithubIcon, Globe, Play } from "lucide-react";
import Link from "next/link";
import React from "react";

export const ProjectLinkItem: React.FC<ProjectURL> = ({ url, title, type }) => {
  const Icon = () => {
    switch (type) {
      case "web":
        return <Globe size={18} className="text-accent" />;
      case "ios":
        return <AppleIcon size={18} className="text-accent" />;
      case "android":
        return <Play size={18} className="text-accent" />;
      case "github":
        return <GithubIcon size={18} className="text-accent" />;
      default:
        return null;
    }
  };

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-between gap-2 text-text font-medium hover:underline"
    >
      <div className="inline-flex items-center gap-2">
        <Icon />
        {title}
      </div>
      <ExternalLink size={14} className="text-muted ml-1" />
    </Link>
  );
};
