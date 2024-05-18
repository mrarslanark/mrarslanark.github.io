interface ItemHeaderProps {
  topLeftText: string;
  topRightText: string;
  bottomLeftText: string;
  bottomRightText: string;
}

const ItemHeader: React.FC<ItemHeaderProps> = ({
  topLeftText,
  topRightText,
  bottomLeftText,
  bottomRightText,
}) => {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="flex flex-col flex-wrap justify-between">
        <p className="font-semibold text-lg">{topLeftText}</p>
        <p>{bottomLeftText}</p>
      </div>
      <div className="flex flex-col flex-wrap justify-between">
        <p className="text-left sm:text-right">{topRightText}</p>
        <p className="text-left sm:text-right">{bottomRightText}</p>
      </div>
    </div>
  );
};

export default ItemHeader;
