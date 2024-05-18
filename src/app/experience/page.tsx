import DataList from "@/components/DataList";
import ExperienceListItem from "@/components/ExperienceListItem";
import Data from "@/data";

export default function ExperiencePage() {
  return (
    <main>
      <DataList
        data={Data.Experience}
        header={Data.Headers.experience}
        listItem={ExperienceListItem}
        showHome
      />
    </main>
  );
}
