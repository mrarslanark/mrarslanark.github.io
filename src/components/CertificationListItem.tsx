import { BiLinkExternal } from "react-icons/bi";
import { ICertifications } from "@/types/certifications";

const CertificationListItem: React.FC<ICertifications> = ({
  url,
  platform,
  title,
}) => {
  return (
    <div className="flex flex-col flex-1 my-4">
      <p className="font-semibold">{title}</p>
      <a href={url} className="text-sm flex items-center gap-1 underline">
        {platform}
        <BiLinkExternal className="text-gray-400" />
      </a>
    </div>
  );
};

export default CertificationListItem;
