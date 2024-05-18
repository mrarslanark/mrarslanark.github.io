import DataList from "@/components/DataList";
import SkillListItem from "@/components/SkillListItem";
import Data from "@/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Arslan Mushtaq",
  description: "My skillset which helps me during development.",
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
