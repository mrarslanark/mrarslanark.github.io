import DataList from "@/components/DataList";
import ProjectItem from "@/components/ProjectItem";
import Data from "@/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Projects | Arslan Mushtaq",
  description: "Things I love to work on in my free time.",
};

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
