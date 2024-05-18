import DataList from "@/components/DataList";
import ProjectItem from "@/components/ProjectItem";
import Data from "@/data";
import { Metadata } from "next";

const title = "Personal Projects | Arslan Mushtaq";
const description = "Things I love to work on in my free time.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
  },
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
