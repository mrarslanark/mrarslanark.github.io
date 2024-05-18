export interface IProject {
  id: string;
  title: string;
  skills: string[];
  description: string;
  google?: string;
  apple?: string;
  web?: string;
  isLastItem: boolean;
}
