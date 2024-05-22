import { IoDocumentTextOutline } from "react-icons/io5";

import Section from "./Section";
import SocialLinks from "./SocialLinks";
import { Docs } from "@/constants";
import TextLink from "./TextLink";
import Link from "next/link";

const DevDenSection = () => {
  return (
    <Section>
      <div className="flex flex-col gap-4">
        <p>I am building my own venture. Come be a part of it</p>
        <Link
          href={"/devden"}
          className="bg-gray-200 w-max px-3 py-2 rounded transition-colors hover:bg-gray-300"
        >
          Register with DevDen
        </Link>
      </div>
    </Section>
  );
};

export default DevDenSection;
