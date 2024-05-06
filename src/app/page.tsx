import Introduction from "@/components/Introduction";
import PersonalProjects from "@/components/PersonalProjects";

export default function Home() {
  return (
    <main>
      <Introduction />
      <PersonalProjects limit={2} />
    </main>
  );
}
