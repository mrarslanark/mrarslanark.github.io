import DataList from "@/components/DataList";
import SkillListItem from "@/components/SkillListItem";
import Data from "@/data";
import { Metadata } from "next";

const title = "Skills | Arslan Mushtaq";
const description = "My skillset which helps me during development.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title,
    description,
  },
};

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
