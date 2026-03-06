import projects from "@/lib/data/projects.json";
import {
  AppleIcon,
  Archive,
  ArrowLeft,
  ExternalLink,
  GithubIcon,
  Globe,
  Play,
  Server,
  Smartphone,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const typeIcon = {
  "Mobile App": <Smartphone size={16} />,
  "Web App": <Globe size={16} />,
  "Backend System": <Server size={16} />,
  Product: <Sparkles size={16} />,
  Archived: <Archive size={16} />,
};

const statusColor: Record<string, string> = {
  Live: "text-accent border-accent/30 bg-accent/5",
  Production: "text-blue-400 border-blue-400/30 bg-blue-400/5",
  Internal: "text-orange border-orange/30 bg-orange/5",
  Development: "text-orange border-orange/30 bg-orange/5",
  Archived: "text-orange border-orange/30 bg-orange/5",
};

type Project = (typeof projects.professional)[number]["urls"][number];

function ProjectLinkItem({ url, title, type }: Project) {
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
      className="inline-flex items-center gap-2 text-text font-medium hover:underline"
    >
      <Icon />
      {title}
      <ExternalLink size={14} className="text-muted ml-1" />
    </Link>
  );
}

export default async function ProjectPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const { id } = params;

  // Find project in both categories
  let project: any = projects.professional.find((p) => p.id === id);
  let isProfessional = true;

  if (!project) {
    project = projects.personal.find((p: any) => p.id === id);
    isProfessional = false;
  }

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg">
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
            <span className="flex items-center gap-1.5 text-sm font-mono text-muted px-3 py-1.5 border border-border rounded-md">
              {typeIcon[project.type as keyof typeof typeIcon]}
              {project.type}
            </span>
            <span
              className={`text-sm font-mono px-3 py-1.5 border rounded-md ${
                statusColor[project.status]
              }`}
            >
              {project.status}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold font-jetbrains text-text mb-4">
            {project.title}
          </h1>

          <h2 className="text-xl md:text-xl text-accent font-medium mb-2">
            {project.subtitle}
          </h2>

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
        </div>

        {/* Content Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
          <div className="md:col-span-2 space-y-10">
            <section>
              <h3 className="text-2xl font-bold font-jetbrains text-text mb-4">
                Product related links
              </h3>
              {/* Links Section */}
              {project.urls && Object.keys(project.urls).length > 0 && (
                <div className="flex flex-col gap-4 ">
                  {project.urls.map((project: Project) => {
                    return <ProjectLinkItem key={project.id} {...project} />;
                  })}
                </div>
              )}
            </section>

            {isProfessional &&
              project.contribution &&
              project.contribution.length > 0 && (
                <section>
                  <h3 className="text-2xl font-bold font-jetbrains text-text mb-6">
                    Key Contributions
                  </h3>
                  <ul className="space-y-4">
                    {project.contribution.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span className="text-muted-light leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
          </div>

          <div className="md:col-span-1">
            <div className="bg-surface border border-border rounded-2xl p-6 sticky top-24">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
