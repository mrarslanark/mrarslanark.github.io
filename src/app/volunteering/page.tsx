import ActivityListItem from "@/components/ActivityListItem";
import DataList from "@/components/DataList";
import Data from "@/data";
import { Metadata } from "next";

const title = "Volunteering Activities | Arslan Mushtaq";
const description = "Things I loved to do and might keep on doing.";

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
        data={Data.Volunteering}
        header={Data.Headers.volunteering}
        listItem={ActivityListItem}
        showHome
      />
    </main>
  );
}
