import DataList from "@/components/DataList";
import SkillListItem from "@/components/SkillListItem";
import Data from "@/data";

export default function SkillsPage() {
  return (
    <main>
      <DataList
        data={Data.Skills}
        header={Data.Headers.skills}
        listItem={SkillListItem}
        showHome
      />
    </main>
  );
}
