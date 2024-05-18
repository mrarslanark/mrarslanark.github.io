import DataList from "@/components/DataList";
import ExperienceListItem from "@/components/ExperienceListItem";
import Data from "@/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Experience | Arslan Mushtaq",
  description: "My total years of experience till date",
};

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
