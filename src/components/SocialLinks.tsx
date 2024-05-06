import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-x-2">
      <Link href="https://linkedin.com/in/mrarslanark" target="_blank">
        <FaLinkedin
          size={24}
          className="text-gray-400 hover:text-[#2767B2] transition-colors cursor-pointer"
        />
      </Link>
      <Link href="https://github.com/mrarslanark" target="_blank">
        <FaGithub
          size={24}
          className="text-gray-400 hover:text-[#24292E] transition-colors cursor-pointer"
        />
      </Link>
      <Link href="https://twitter.com/mrarslanark" target="_blank">
        <FaTwitter
          size={24}
          className="text-gray-400 hover:text-[#2767B2] transition-colors cursor-pointer"
        />
      </Link>
      <Link href="https://facebook.com/devmrark" target="_blank">
        <FaFacebook
          size={24}
          className="text-gray-400 hover:text-black transition-colors cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default SocialLinks;
