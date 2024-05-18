import ActivityListItem from "@/components/ActivityListItem";
import DataList from "@/components/DataList";
import Data from "@/data";

export default function SkillsPage() {
  return (
    <main>
      <DataList
        data={Data.Volunteering}
        header={Data.Headers.volunteering}
        listItem={ActivityListItem}
        showHome
      />
    </main>
  );
}
