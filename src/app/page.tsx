import Introduction from "@/components/Introduction";
import PersonalProjects from "@/components/PersonalProjects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Introduction />
      <PersonalProjects limit={2} />
      <Skills limit={3} />
    </main>
  );
}
