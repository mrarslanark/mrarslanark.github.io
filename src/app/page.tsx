import Link from "next/link";
import {
  FaSquareFacebook,
  FaXTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-4 h-dvh justify-center items-center ">
      <p className="text-4xl">Arslan Mushtaq</p>
      <p className="text-base">
        Welcome to my Portfolio. I am currently busy upgrading it
      </p>
      <p>Do connect with me for latest updates</p>
      <div className="flex flex-row gap-x-6">
        <Link href="https://linkedin.com/in/mrarslanark" target="_blank">
          <FaLinkedin size={24} />
        </Link>
        <Link href="https://github.com/mrarslanark" target="_blank">
          <FaGithub size={24} />
        </Link>
        <Link href="https://twitter.com/mrarslanark" target="_blank">
          <FaXTwitter size={24} />
        </Link>
        <Link href="https://facebook.com/devmrark" target="_blank">
          <FaSquareFacebook size={24} />
        </Link>
      </div>
    </main>
  );
}
