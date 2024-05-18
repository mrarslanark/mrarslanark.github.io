import DataList from "@/components/DataList";
import ExperienceListItem from "@/components/ExperienceListItem";
import Introduction from "@/components/Introduction";
import ProjectItem from "@/components/ProjectItem";
import SkillListItem from "@/components/SkillListItem";
import Data from "@/data";

const data = [
  {
    id: "personal-projects",
    data: Data.Projects,
    listItem: ProjectItem,
    header: Data.Headers.projects,
    limit: 2,
    invert: true,
  },
  {
    id: "skills",
    data: Data.Skills,
    listItem: SkillListItem,
    header: Data.Headers.skills,
    limit: 3,
  },
  {
    id: "experience",
    data: Data.Experience,
    listItem: ExperienceListItem,
    header: Data.Headers.experience,
    limit: 2,
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
