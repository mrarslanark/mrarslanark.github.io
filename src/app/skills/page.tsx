import DataList from "@/components/DataList";
import skills from "@/data/skills.json";
import headers from "@/data/headers.json";
import SkillListItem from "@/components/SkillListItem";

export default function SkillsPage() {
  return (
    <main>
      <DataList
        data={skills}
        header={headers.skills}
        listItem={SkillListItem}
        showHome
      />
    </main>
  );
}
