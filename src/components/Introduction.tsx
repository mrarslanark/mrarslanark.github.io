import { IoDocumentTextOutline } from "react-icons/io5";

import Section from "./Section";
import SocialLinks from "./SocialLinks";
import { Docs } from "@/constants";
import TextLink from "./TextLink";

const Introduction = () => {
  return (
    <Section>
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex flex-col gap-1">
          <p className="text-md font-semibold md:text-2xl">ARSLAN MUSHTAQ</p>
          <p className="text-xs md:text-base">
            <b>Principle Software Engineer</b> - Web, Mobile, &amp; Backend
          </p>
        </div>
        <SocialLinks />
      </div>
    </Section>
  );
};

export default Introduction;
