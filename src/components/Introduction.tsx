import { IoDocumentTextOutline } from "react-icons/io5";

import Section from "./Container";
import SocialLinks from "./SocialLinks";

const Introduction = () => {
  return (
    <Section>
      <div className="flex gap-x-2 items-center">
        <div className="flex flex-1 flex-col gap-y-2">
          <p className="text-4xl font-semibold">Arslan Mushtaq</p>
          <p>Full Stack Developer, Gamer, and Traveler</p>
          <SocialLinks />
        </div>
        <div className="flex flex-col items-center gap-y-2 text-gray-400 hover:text-black cursor-pointer transition-colors">
          <IoDocumentTextOutline size={45} />
          <p className="font-bold">Resume</p>
        </div>
      </div>
    </Section>
  );
};

export default Introduction;
