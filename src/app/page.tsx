import ChipsList from "@/components/ChipsList";
import Section from "@/components/Container";
import Introduction from "@/components/Introduction";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const header = {
  heading: "Personal Projects",
  seeAllLink: "/projects",
  subtitle: "Projects I have work on during my free time.",
};

const skills = ["Next.js", "React", "React Native"];

export default function Home() {
  return (
    <main>
      <Introduction />
      <Section invert header={header}>
        <div>
          <div className="flex items-center gap-x-1">
            <p>Sayaraat</p>
            <BiLinkExternal className="text-gray-400" />
          </div>
          <ChipsList items={skills} />
        </div>
      </Section>
    </main>
  );
}
