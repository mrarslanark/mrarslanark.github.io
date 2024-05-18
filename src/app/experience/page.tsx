import DataList from "@/components/DataList";
import ExperienceListItem from "@/components/ExperienceListItem";
import Data from "@/data";
import { Metadata } from "next";

const title = "Professional Experience | Arslan Mushtaq";
const description = "My total years of experience till date";

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
