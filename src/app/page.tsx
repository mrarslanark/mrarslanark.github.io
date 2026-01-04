import ActivityListItem from "@/components/ActivityListItem";
import BulletListItem from "@/components/BulletListItem";
import CertificationListItem from "@/components/CertificationListItem";
import DataList from "@/components/DataList";
import EducationListItem from "@/components/EducationListItem";
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
    seeAll: { url: "/projects", type: "projects" },
  },
  {
    id: "skills",
    data: Data.Skills,
    listItem: SkillListItem,
    header: Data.Headers.skills,
    limit: 3,
    seeAll: { url: "/skills", type: "skills" },
  },
  {
    id: "architecture-and-leadership",
    data: Data.ArchitectureAndLeadership,
    listItem: BulletListItem,
    header: Data.Headers["architecture-and-leadership"],
    invert: true,
  },
  {
    id: "experience",
    data: Data.Experience,
    listItem: ExperienceListItem,
    header: Data.Headers.experience,
    limit: 2,
    seeAll: { url: "/experience", type: "experience" },
  },
  {
    id: "education",
    data: Data.Education,
    listItem: EducationListItem,
    header: Data.Headers.education,
    invert: true,
  },
  {
    id: "certifications",
    data: Data.Certifications,
    listItem: CertificationListItem,
    header: Data.Headers.certifications,
  },
  {
    id: "volunteering",
    data: Data.Volunteering,
    listItem: ActivityListItem,
    header: Data.Headers.volunteering,
    limit: 2,
    seeAll: { url: "/volunteering", type: "volunteering activities" },
    invert: true,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Introduction />
      {data.map((item) => {
        return <DataList key={item.id} {...item} />;
      })}
    </main>
  );
}
