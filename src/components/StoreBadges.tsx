import { Images } from "@/constants";
import Image from "next/image";

interface StoreBadgesProps {
  google?: string;
  apple?: string;
}

const StoreBadges: React.FC<StoreBadgesProps> = ({ google, apple }) => {
  if (!google && !apple) {
    return null;
  }

  return (
    <div className="flex gap-x-1">
      {apple && (
        <a
          rel="noopener"
          title={"Apple App Store Badge"}
          href={apple}
          target="_blank"
        >
          <Image
            fetchPriority="high"
            alt={"Apple App Store Badge"}
            src={Images.AppleAppStoreBadge}
            width={501 / 4.5}
            height={167 / 4.5}
          />
        </a>
      )}
      {google && (
        <a
          rel="noopener"
          title={"Google Play Store Badge"}
          href={google}
          target="_blank"
        >
          <Image
            fetchPriority="high"
            alt={"Google Play Store Badge"}
            src={Images.GooglePlayStoreBadge}
            width={563 / 4.5}
            height={167 / 4.5}
          />
        </a>
      )}
    </div>
  );
};

export default StoreBadges;
