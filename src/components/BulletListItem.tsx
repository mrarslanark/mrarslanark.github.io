import { IList } from "@/types/list";
import { FaCircle } from "react-icons/fa";

const BulletListItem: React.FC<IList> = ({ item }) => {
  return (
    <div className="flex gap-2 my-1">
      <div className="mt-2">
        <FaCircle size={6} className=" text-black" />
      </div>
      <p>{item}</p>
    </div>
  );
};

export default BulletListItem;
