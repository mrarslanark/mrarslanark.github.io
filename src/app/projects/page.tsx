import DataList from "@/components/DataList";
import ProjectItem from "@/components/ProjectItem";
import Data from "@/data";

export default function PersonalProjectsPage() {
  return (
    <main>
      <DataList
        data={Data.Projects}
        header={Data.Headers.projects}
        listItem={ProjectItem}
        showHome
      />
    </main>
  );
}
