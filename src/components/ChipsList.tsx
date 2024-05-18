import Chip from "./Chip";

interface ChipsListProps {
  items: string[];
}

const ChipsList: React.FC<ChipsListProps> = ({ items = [] }) => {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((skill) => {
        return <Chip key={skill} text={skill} />;
      })}
    </div>
  );
};

export default ChipsList;
