export type ProjectURL = {
  id: string;
  type: string;
  url: string;
  title: string;
};

export type ProjectType = "personal" | "professional";

export type ProductType = "mobile" | "web" | "backend" | "product" | "archived";

export type ProjectStatus = "live" | "internal" | "development" | "archived";

export type ProjectInfo = {
  type: "warning" | "info";
  description?: string;
};

export type Project = {
  id: string;
  title: string;
  type: ProjectType;
  subtitle: string;
  build_at?: string;
  description: string;
  logo?: string;
  info?: ProjectInfo;
  status: ProjectStatus;
  product_type: ProductType;
  tags: string[];
  urls?: ProjectURL[];
  screenshots?: Record<string, string[]>;
  contribution?: string[];
};
