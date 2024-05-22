import ActivityListItem from "@/components/ActivityListItem";
import CertificationListItem from "@/components/CertificationListItem";
import DataList from "@/components/DataList";
import ExperienceListItem from "@/components/ExperienceListItem";
import EducationListItem from "@/components/EducationListItem";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import ProjectItem from "@/components/ProjectItem";
import SkillListItem from "@/components/SkillListItem";
import Data from "@/data";
import DevDenSection from "@/components/DevDenSection";

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
    id: "experience",
    data: Data.Experience,
    listItem: ExperienceListItem,
    header: Data.Headers.experience,
    limit: 2,
    invert: true,
    seeAll: { url: "/experience", type: "experience" },
  },
  {
    id: "education",
    data: Data.Education,
    listItem: EducationListItem,
    header: Data.Headers.education,
  },
  {
    id: "certifications",
    data: Data.Certifications,
    listItem: CertificationListItem,
    header: Data.Headers.certifications,
    invert: true,
  },
  {
    id: "volunteering",
    data: Data.Volunteering,
    listItem: ActivityListItem,
    header: Data.Headers.volunteering,
    limit: 2,
    seeAll: { url: "/volunteering", type: "volunteering activities" },
  },
];

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Introduction />
      <DevDenSection />
      {data.map((item) => {
        return <DataList key={item.id} {...item} />;
      })}
    </main>
  );
}
