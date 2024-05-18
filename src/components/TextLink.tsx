import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

interface TextLinkProps {
  link?: string;
  text: string;
}

const TextLink: React.FC<TextLinkProps> = ({ text, link }) => {
  if (link) {
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener"
        className="flex items-center gap-x-1"
      >
        <p className="text-lg underline font-semibold">{text}</p>
        <BiLinkExternal className="text-gray-400" />
      </Link>
    );
  }

  return <p className="font-semibold">{text}</p>;
};

export default TextLink;
