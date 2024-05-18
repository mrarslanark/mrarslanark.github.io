import { IoDocumentTextOutline } from "react-icons/io5";

import Section from "./Container";
import SocialLinks from "./SocialLinks";
import { Docs } from "@/constants";
import TextLink from "./TextLink";

const Introduction = () => {
  return (
    <Section>
      <div className="flex gap-x-2 items-center">
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="text-md font-semibold md:text-2xl">ARSLAN MUSHTAQ</p>
            <p className="text-xs md:text-base">
              Full Stack Developer, Content Creator, Gamer, and Traveler
            </p>
          </div>
          <SocialLinks />
        </div>
        <a
          href={Docs.Resume}
          className="flex flex-col items-center gap-y-2 text-gray-400 hover:text-black cursor-pointer transition-colors hidden sm:flex"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IoDocumentTextOutline size={45} />
          <p className="font-bold">Resume</p>
        </a>
      </div>
      <div className="sm:hidden mt-4">
        <TextLink text="Resume" link={Docs.Resume} />
      </div>
    </Section>
  );
};

export default Introduction;
