import ActivityListItem from "@/components/ActivityListItem";
import DataList from "@/components/DataList";
import Data from "@/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteering Activities | Arslan Mushtaq",
  description: "Things I loved to do and might keep on doing.",
};

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
