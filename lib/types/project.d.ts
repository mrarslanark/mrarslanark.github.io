type ProjectURL = {
  id: string;
  type: string;
  url: string;
  title: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  build_at?: string;
  description: string;
  contribution: string[];
  tags: string[];
  urls: ProjectURL[];
  type: string;
  status: string;
  status_reason?: string;
  screenshots?: Record<string, string[]>;
  logo?: string;
};
