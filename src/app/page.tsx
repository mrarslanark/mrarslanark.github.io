import DataList from "@/components/DataList";
import Introduction from "@/components/Introduction";
import ProjectItem from "@/components/ProjectItem";
import SkillListItem from "@/components/SkillListItem";

import headers from "@/data/headers.json";
import projects from "@/data/projects.json";
import skills from "@/data/skills.json";

const data = [
  {
    id: "personal-projects",
    data: projects,
    listItem: ProjectItem,
    header: headers.projects,
    limit: 2,
    invert: true,
  },
  {
    id: "skills",
    data: skills,
    listItem: SkillListItem,
    header: headers.skills,
    limit: 3,
  },
];

export default function Home() {
  return (
    <main>
      <Introduction />
      {data.map((item) => {
        return <DataList key={item.id} {...item} />;
      })}
    </main>
  );
}
