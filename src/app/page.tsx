import Section from "@/components/Container";
import Introduction from "@/components/Introduction";
import PersonalProjects from "@/components/PersonalProjects";
import { SectionHeadingProps } from "@/components/SectionHeading";

const header: SectionHeadingProps = {
  heading: "Skills",
  seeAllLink: "/skills",
  subtitle: "Skills I use frequently during my development.",
  showSeeAll: true,
};

export default function Home() {
  return (
    <main>
      <Introduction />
      <PersonalProjects limit={2} />
      <Section header={header}></Section>
    </main>
  );
}
