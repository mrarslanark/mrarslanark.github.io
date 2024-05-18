import { Images } from "@/constants";
import Image from "next/image";
import { BiGlobe } from "react-icons/bi";
import { BsAndroid, BsApple } from "react-icons/bs";

interface StoreBadgesProps {
  google?: string;
  apple?: string;
  web?: string;
}

const StoreBadges: React.FC<StoreBadgesProps> = ({ google, apple, web }) => {
  if (!google && !apple && !web) {
    return null;
  }

  return (
    <div className="flex gap-x-1">
      {google && (
        <a
          rel="noopener"
          title={"Google Play Store Badge"}
          href={google}
          target="_blank"
        >
          <div className="p-3 bg-white rounded-md border-2 border-white hover:border-gray-200 transition-colors">
            <BsAndroid size={18} color="green" />
          </div>
        </a>
      )}
      {apple && (
        <a
          rel="noopener"
          title={"Apple App Store Badge"}
          href={apple}
          target="_blank"
        >
          <div className="p-3 bg-white rounded-md border-2 border-white hover:border-gray-200 transition-colors">
            <BsApple size={18} color="#DADADA" />
          </div>
        </a>
      )}
      {web && (
        <a
          rel="noopener"
          title={"Web Link to Project"}
          href={web}
          target="_blank"
        >
          <div className="p-3 bg-white rounded-md border-2 border-white hover:border-gray-200 transition-colors">
            <BiGlobe size={18} color="#0070E0" />
          </div>
        </a>
      )}
    </div>
  );
};

export default StoreBadges;
