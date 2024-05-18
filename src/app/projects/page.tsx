import DataList from "@/components/DataList";
import ProjectItem from "@/components/ProjectItem";
import headers from "@/data/headers.json";
import projects from "@/data/projects.json";

export default function PersonalProjectsPage() {
  return (
    <main>
      <DataList
        data={projects}
        header={headers.projects}
        listItem={ProjectItem}
        showHome
      />
    </main>
  );
}
